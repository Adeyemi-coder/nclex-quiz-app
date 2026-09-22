import { GoogleGenAI, Type } from '@google/genai';

// Exhaustive multi-generation cascade across all available Gemini models
const ALL_GEMINI_MODELS = [
  'gemini-2.5-flash',
  'gemini-1.5-flash',
  'gemini-2.5-pro',
  'gemini-1.5-pro',
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function generateClientSideQuestions({
  category = 'Pharmacology',
  count = 5,
  difficulty = 'Moderate',
  format = 'mixed',
  customKey = '',
}) {
  const key =
    (customKey && customKey.trim()) ||
    localStorage.getItem('nclex_gemini_key') ||
    import.meta.env.VITE_GEMINI_API_KEY;

  if (!key) {
    throw new Error('Please configure a valid Gemini API Key.');
  }

  const ai = new GoogleGenAI({ apiKey: key });

  const prompt = `
Generate ${count} original NCLEX-RN / NMCN practice examination questions.
Domain: ${category}.
Difficulty level: ${difficulty}.
Item format: ${format} (options: 'mcq', 'sata', or 'mixed').

Follow the NCSBN Clinical Judgment Measurement Model (NCJMM).
Provide plausible distractors and detailed clinical rationales explaining both why the correct answer is right and why the distractors are wrong.
For SATA questions, provide 5 options and mark 2 to 4 indices as correct.
`;

  const config = {
    systemInstruction:
      'You are an expert psychometrician for the NCSBN and NMCN. Generate strict, clinically accurate nursing examination items adhering directly to the structured JSON schema provided.',
    responseMimeType: 'application/json',
    responseSchema: {
      type: Type.ARRAY,
      description: 'A list of generated NCLEX clinical simulation questions.',
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          type: { type: Type.STRING, enum: ['mcq', 'sata'] },
          category: { type: Type.STRING },
          subCategory: { type: Type.STRING },
          difficulty: { type: Type.STRING },
          question: { type: Type.STRING },
          options: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          correctAnswer: {
            description: 'Single option index (number) for MCQ, or array of indices for SATA.',
            type: Type.STRING,
          },
          rationale: { type: Type.STRING },
        },
        required: ['type', 'category', 'question', 'options', 'correctAnswer', 'rationale'],
      },
    },
  };

  for (const modelName of ALL_GEMINI_MODELS) {
    try {
      const response = await ai.models.generateContent({
        model: modelName,
        contents: prompt,
        config,
      });

      const parsed = JSON.parse(response.text);

      return parsed.map((item, idx) => {
        let normalizedAnswer = item.correctAnswer;
        if (typeof normalizedAnswer === 'string') {
          try {
            normalizedAnswer = JSON.parse(normalizedAnswer);
          } catch {
            normalizedAnswer = Number(normalizedAnswer) || 0;
          }
        }

        return {
          ...item,
          id: item.id || `ai-${Date.now()}-${idx}`,
          category: category,
          correctAnswer: normalizedAnswer,
        };
      });
    } catch (err) {
      console.warn(`Model ${modelName} unavailable or busy:`, err?.message || err);
      await sleep(300);
    }
  }

  throw new Error(
    'All Gemini model tiers are experiencing heavy demand right now. Please wait a few seconds and try again.'
  );
}