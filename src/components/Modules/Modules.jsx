import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { questions } from '../../data/questions.js';
import './Modules.css';

// Master modules metadata list
const MODULES_DATA = [
  {
    id: 'pharmacology',
    title: 'Pharmacology & Parenteral Therapies',
    icon: '💊',
    tag: 'Licensure High-Yield',
    category: 'pharmacology',
    desc: 'Drug classifications, adverse reactions, therapeutic drug levels, and high-alert parenteral medications.'
  },
  {
    id: 'cardiovascular',
    title: 'Cardiovascular Nursing',
    icon: '🫀',
    tag: 'Clinical Core',
    category: 'cardiovascular',
    desc: 'Hemodynamic instability, dysrhythmias, 12-lead ECG changes, and acute coronary syndrome protocols.'
  },
  {
    id: 'respiratory',
    title: 'Respiratory Care',
    icon: '🫁',
    tag: 'Clinical Core',
    category: 'respiratory',
    desc: 'Mechanical ventilation, PEEP hemodynamics, arterial blood gases, ARDS, and airway emergencies.'
  },
  {
    id: 'emergency',
    title: 'Emergency & Critical Care',
    icon: '🚨',
    tag: 'Priority Specialty',
    category: 'emergency',
    desc: 'ACLS resuscitation algorithms, trauma triage (START), shock hemodynamics, and burn protocols.'
  },
  {
    id: 'maternal',
    title: 'Maternal & Newborn Health',
    icon: '👶',
    tag: 'Licensure High-Yield',
    category: 'maternal',
    desc: 'Fetal monitoring deceleration interpretation, postpartum hemorrhage, preeclampsia, and neonatal care.'
  },
  {
    id: 'pediatrics',
    title: 'Pediatric Nursing',
    icon: '🧸',
    tag: 'Clinical Core',
    category: 'pediatrics',
    desc: 'Developmental milestones, congenital cardiac defects, pediatric emergencies, and fluid resuscitation.'
  },
  {
    id: 'mental-health',
    title: 'Mental Health & Psychiatric Nursing',
    icon: '🧠',
    tag: 'Client Care',
    category: 'mental-health',
    desc: 'Crisis de-escalation, suicide precautions, mood disorders, schizophrenia, and psychopharmacology.'
  },
  {
    id: 'renal',
    title: 'Renal Nursing & Electrolyte Disorders',
    icon: '🧪',
    tag: 'Clinical Core',
    category: 'renal',
    desc: 'Acute kidney injury staging, peritoneal dialysis, hemodialysis peritonitis, and life-threatening hyperkalemia.'
  },
  {
    id: 'fundamentals',
    title: 'Fundamentals of Nursing',
    icon: '📋',
    tag: 'Foundational',
    category: 'fundamentals',
    desc: 'Aseptic sterile technique, wound staging, clinical prioritization frameworks, and medication rights.'
  },
  {
    id: 'leadership',
    title: 'Leadership & Delegation',
    icon: '⚖️',
    tag: 'Management of Care',
    category: 'leadership',
    desc: 'Five Rights of Delegation, RN vs. LPN/LVN vs. UAP assignment scopes, and conflict resolution.'
  },
  {
    id: 'infection-control',
    title: 'Infection Control & Safety',
    icon: '🛡️',
    tag: 'Safety & Quality',
    category: 'infection-control',
    desc: 'Transmission-based precautions (Airborne/Droplet/Contact), HAI prevention bundles, and sterile fields.'
  }
];

export default function Modules() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredModules = useMemo(() => {
    return MODULES_DATA.filter((mod) => {
      const matchesSearch =
        mod.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mod.desc.toLowerCase().includes(searchTerm.toLowerCase());

      if (activeFilter === 'all') return matchesSearch;
      if (activeFilter === 'high-yield') {
        return matchesSearch && mod.tag.toLowerCase().includes('high-yield');
      }
      if (activeFilter === 'core') {
        return matchesSearch && mod.tag.toLowerCase().includes('core');
      }
      return matchesSearch;
    });
  }, [searchTerm, activeFilter]);

  return (
    <div className="modules-catalog-container">
      {/* Header & Meta */}
      <header className="modules-page-header">
        <span className="curriculum-kicker">NCLEX / NMCN EXAMINATION BANK</span>
        <h1 className="curriculum-main-title">Curriculum Modules</h1>
        <p className="curriculum-sub-desc">
          Select a targeted clinical discipline to launch a 50-item exam, study flashcard rationales, or launch a full simulation.
        </p>

        <div className="curriculum-controls">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="module-search-field"
              placeholder="Search specialty, drug, or protocol..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-pills-row">
            <button
              type="button"
              className={`filter-chip ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Specialties ({MODULES_DATA.length})
            </button>
            <button
              type="button"
              className={`filter-chip ${activeFilter === 'high-yield' ? 'active' : ''}`}
              onClick={() => setActiveFilter('high-yield')}
            >
              🔥 High Yield
            </button>
            <button
              type="button"
              className={`filter-chip ${activeFilter === 'core' ? 'active' : ''}`}
              onClick={() => setActiveFilter('core')}
            >
              🏥 Clinical Core
            </button>
          </div>
        </div>
      </header>

      {/* Flagship Exam Banner */}
      <section className="simulation-banner-container">
        <div className="sim-banner-left">
          <div className="sim-tag-pill">⚡ NGN CAT BENCHMARK</div>
          <h2 className="sim-title">Comprehensive Clinical Simulation</h2>
          <p className="sim-desc">
            Standardized 85-item diagnostic trial randomly sampled across all 11 clinical domains under strict NCLEX timing.
          </p>
          <span className="sim-meta-count">85 Questions · 102 Minutes · Drawn from 550 Item Bank</span>
        </div>
        <div className="sim-banner-right">
          <Link to="/quiz" className="sim-start-cta">
            Launch Simulation (85 Qs) →
          </Link>
        </div>
      </section>

      {/* 3-Column Specialty Cards Grid */}
      <section className="specialties-grid">
        {filteredModules.map((item) => (
          <div key={item.id} className="curriculum-card">
            <div className="card-top-content">
              <div className="card-header-line">
                <span className="specialty-symbol">{item.icon}</span>
                <span className="specialty-badge">{item.tag}</span>
              </div>
              <h3 className="specialty-heading">{item.title}</h3>
              <p className="specialty-summary">{item.desc}</p>
            </div>

            <div className="card-bottom-actions">
              <span className="q-count-indicator">50 NCLEX Questions</span>
              <div className="card-btn-cluster">
                <Link to="/flashcards" className="secondary-card-link" title="Study Flashcards">
                  🃏 Cards
                </Link>
                <Link
                  to={`/quiz/${encodeURIComponent(item.id)}`}
                  className="primary-card-link"
                >
                  Start Exam →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}