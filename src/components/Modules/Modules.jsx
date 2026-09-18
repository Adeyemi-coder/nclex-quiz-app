import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { questions } from '../../data/questions.js';
import './Modules.css';

const COURSE_MODULES = [
  {
    id: 'all',
    title: 'Comprehensive Clinical Simulation',
    description: 'Timed multi-system trial across all 11 NCLEX & NMCN clinical domains under standard test conditions.',
    icon: '⚡',
    difficulty: 'Adaptive Level',
    featured: true
  },
  {
    id: 'Pharmacology',
    title: 'Pharmacology & Parenteral Therapies',
    description: 'Drug classifications, adverse reactions, therapeutic drug levels, and high-alert parenteral calculations.',
    icon: '💊',
    difficulty: 'Licensure High-Yield'
  },
  {
    id: 'Cardiovascular',
    title: 'Cardiovascular Nursing',
    description: 'Hemodynamic instability, dysrhythmias, 12-lead ECG changes, and acute coronary syndrome protocols.',
    icon: '🫀',
    difficulty: 'Clinical Core'
  },
  {
    id: 'Respiratory',
    title: 'Respiratory Care',
    description: 'Mechanical ventilation, PEEP hemodynamics, arterial blood gases, ARDS, and airway emergencies.',
    icon: '🫁',
    difficulty: 'Clinical Core'
  },
  {
    id: 'Emergency Nursing',
    title: 'Emergency & Critical Care',
    description: 'ACLS resuscitation algorithms, trauma triage (START), shock hemodynamics, and toxidromes.',
    icon: '🚨',
    difficulty: 'Priority Specialty'
  },
  {
    id: 'Maternal Nursing',
    title: 'Maternal & Newborn Health',
    description: 'Fetal monitoring deceleration interpretation, postpartum hemorrhage, preeclampsia, and neonatal NRP.',
    icon: '👶',
    difficulty: 'Licensure High-Yield'
  },
  {
    id: 'Pediatrics',
    title: 'Pediatric Nursing',
    description: 'Developmental milestones, congenital cardiac defects, pediatric emergencies, and fluid resuscitation.',
    icon: '🧸',
    difficulty: 'Clinical Core'
  },
  {
    id: 'Mental Health',
    title: 'Mental Health & Psychiatric Nursing',
    description: 'Crisis de-escalation, suicide precautions, mood disorders, schizophrenia, and psychopharmacology.',
    icon: '🧠',
    difficulty: 'Client Care'
  },
  {
    id: 'Renal Nursing',
    title: 'Renal Nursing & Electrolyte Disorders',
    description: 'Acute kidney injury staging, hemodialysis/peritoneal protocols, and life-threatening hyperkalemia.',
    icon: '🧪',
    difficulty: 'Clinical Core'
  },
  {
    id: 'Fundamentals',
    title: 'Fundamentals of Nursing',
    description: 'Aseptic sterile technique, wound staging, clinical prioritization frameworks, and medication rights.',
    icon: '📋',
    difficulty: 'Foundational'
  },
  {
    id: 'Leadership and Delegation',
    title: 'Leadership & Delegation',
    description: 'Five Rights of Delegation, RN vs. LPN/LVN vs. UAP assignment scopes, and conflict resolution.',
    icon: '⚖️',
    difficulty: 'Management of Care'
  },
  {
    id: 'Infection Control',
    title: 'Infection Control & Safety',
    description: 'Transmission-based precautions (Airborne/Droplet/Contact), HAI prevention bundles, and sterile fields.',
    icon: '🛡️',
    difficulty: 'Safety & Quality'
  }
];

export default function Modules() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredModules = useMemo(() => {
    return COURSE_MODULES.filter(mod =>
      mod.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mod.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  function getQuestionCount(catId) {
    if (catId === 'all') return questions.length;
    return questions.filter(
      q => q.category?.toLowerCase() === catId.toLowerCase()
    ).length;
  }

  return (
    <div className="modules-page-container">
      <div className="modules-header">
        <div>
          <span className="modules-eyebrow">NCLEX / NMCN Examination Bank</span>
          <h1 className="modules-title">Curriculum Modules</h1>
          <p className="modules-subtitle">
            Select a targeted clinical discipline to launch a 50-item exam or start a full 550-question simulation.
          </p>
        </div>
        <Link to="/dashboard" className="ghost-btn">
          View My Dashboard →
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="modules-controls">
        <input
          type="text"
          className="modules-search-input"
          placeholder="Search specialty, keyword, or topic..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <span className="modules-count-pill">
          {filteredModules.length} Modules Available
        </span>
      </div>

      {/* Specialty Modules Grid */}
      <div className="modules-catalog-grid">
        {filteredModules.map(module => {
          const count = getQuestionCount(module.id);

          return (
            <div
              key={module.id}
              className={`module-spec-card ${module.featured ? 'featured' : ''}`}
            >
              <div>
                <div className="module-card-header">
                  <div className="module-card-icon">{module.icon}</div>
                  <span className="module-card-badge">{module.difficulty}</span>
                </div>

                <h3 className="module-card-title">{module.title}</h3>
                <p className="module-card-desc">{module.description}</p>
              </div>

              <div className="module-card-footer">
                <span className="module-card-meta">{count} NCLEX Questions</span>
                <Link
                  to={module.id === 'all' ? '/quiz' : `/quiz/${encodeURIComponent(module.id)}`}
                  className="module-launch-btn"
                >
                  Start Exam →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}