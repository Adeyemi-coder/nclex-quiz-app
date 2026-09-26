// src/data/coursesIndex.js

import * as APModule from './courses/anatomyPhysiology.js';
import * as PolModule from './courses/politicsInNursing.js';
import * as PHCModule from './courses/primaryHealthCare.js';
import * as FondModule from './courses/fundamentals.js';
import * as CardioModule from './courses/cardiovascular.js';
import * as EmergModule from './courses/emergency.js';
import * as MedSurgModule from './courses/medicalSurgical.js';
import * as MentalModule from './courses/mentalHealth.js';
import * as PedModule from './courses/pediatrics.js';
import * as PharmModule from './courses/pharmacology.js';
import * as RenalModule from './courses/renal.js';
import * as RespModule from './courses/respiratory.js';
import * as InfectModule from './courses/infectionControl.js';
import * as LeadModule from './courses/leadership.js';
import * as MatModule from './courses/maternal.js';
import * as EthicsModule from './courses/nursingEthics.js';
import { questions as defaultBank } from './questions.js';

// Helper that extracts the array from any export style (named or default)
function extractArray(mod) {
  if (!mod) return [];
  if (Array.isArray(mod)) return mod;
  if (Array.isArray(mod.default)) return mod.default;
  for (const key of Object.keys(mod)) {
    if (Array.isArray(mod[key]) && mod[key].length > 0) {
      return mod[key];
    }
  }
  return [];
}

export const COURSE_REGISTRY = {
  anatomyPhysiology: {
    id: 'anatomyPhysiology',
    name: 'Anatomy & Physiology',
    questions: extractArray(APModule)
  },
  politicsInNursing: {
    id: 'politicsInNursing',
    name: 'Politics & Policy in Nursing',
    questions: extractArray(PolModule)
  },
  primaryHealthCare: {
    id: 'primaryHealthCare',
    name: 'Primary Health Care (PHC)',
    questions: extractArray(PHCModule)
  },
  fundamentals: {
    id: 'fundamentals',
    name: 'Fundamentals of Nursing (FON)',
    questions: extractArray(FondModule)
  },
  cardiovascular: {
    id: 'cardiovascular',
    name: 'Cardiovascular Nursing',
    questions: extractArray(CardioModule)
  },
  emergency: {
    id: 'emergency',
    name: 'Emergency & Critical Care',
    questions: extractArray(EmergModule)
  },
  medicalSurgical: {
    id: 'medicalSurgical',
    name: 'Medical-Surgical Nursing',
    questions: extractArray(MedSurgModule)
  },
  mentalHealth: {
    id: 'mentalHealth',
    name: 'Mental Health & Psychiatric Nursing',
    questions: extractArray(MentalModule)
  },
  pediatrics: {
    id: 'pediatrics',
    name: 'Pediatric & Child Health',
    questions: extractArray(PedModule)
  },
  pharmacology: {
    id: 'pharmacology',
    name: 'Pharmacology & Calculations',
    questions: extractArray(PharmModule)
  },
  renal: {
    id: 'renal',
    name: 'Renal & Electrolyte Disorders',
    questions: extractArray(RenalModule)
  },
  respiratory: {
    id: 'respiratory',
    name: 'Respiratory Care & Ventilation',
    questions: extractArray(RespModule)
  },
  infectionControl: {
    id: 'infectionControl',
    name: 'Infection Prevention & Control',
    questions: extractArray(InfectModule)
  },
  leadership: {
    id: 'leadership',
    name: 'Leadership & Delegation',
    questions: extractArray(LeadModule)
  },
  maternal: {
    id: 'maternal',
    name: 'Maternal & Newborn Health (RHN)',
    questions: extractArray(MatModule)
  },
  nursingEthics: {
    id: 'nursingEthics',
    name: 'Nursing Ethics & Jurisprudence',
    questions: extractArray(EthicsModule)
  },
  'nursing-ethics': {
    id: 'nursingEthics',
    name: 'Nursing Ethics & Jurisprudence',
    questions: extractArray(EthicsModule)
  },
  ethics: {
    id: 'nursingEthics',
    name: 'Nursing Ethics & Jurisprudence',
    questions: extractArray(EthicsModule)
  }
};


/**
 * Universal matcher: matches by id, name, or sub-keywords (case and symbol insensitive)
 */
export function getCourseData(query) {
  if (!query) return null;
  const qClean = String(query).toLowerCase().replace(/[^a-z0-9]/g, '');

  for (const key of Object.keys(COURSE_REGISTRY)) {
    const item = COURSE_REGISTRY[key];
    const keyClean = key.toLowerCase().replace(/[^a-z0-9]/g, '');
    const nameClean = item.name.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (
      keyClean === qClean ||
      nameClean === qClean ||
      qClean.includes(keyClean) ||
      keyClean.includes(qClean) ||
      (qClean.includes('ethic') && keyClean.includes('ethic')) ||
      (qClean.includes('emerg') && keyClean.includes('emerg'))
      (qClean.includes('anatomy') && keyClean.includes('anatomy')) ||
      (qClean.includes('politic') && keyClean.includes('politic')) ||
      (qClean.includes('primary') && keyClean.includes('primary')) ||
      (qClean.includes('phc') && keyClean.includes('primary')) ||
      (qClean.includes('fundamental') && keyClean.includes('fundamental'))
    ) {
      return item;
    }
  }
  return null;
}