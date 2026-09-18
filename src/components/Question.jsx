export default function Question({ question, onSelectAnswer }) {
  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <ul className="answers">
        {question.answers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => onSelectAnswer(answer)}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}