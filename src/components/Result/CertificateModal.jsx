import React, { useRef } from 'react';
import './CertificateModal.css';

export default function CertificateModal({ score, totalQuestions, date, onClose }) {
  const certRef = useRef();

  function handlePrint() {
    window.print();
  }

  return (
    <div className="cert-modal-backdrop" onClick={onClose}>
      <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="cert-actions-bar no-print">
          <button type="button" onClick={handlePrint} className="primary-btn">
            🖨️ Print or Save as PDF
          </button>
          <button type="button" onClick={onClose} className="ghost-btn">
            ✕ Close
          </button>
        </div>

        {/* Official Printable Luxury Certificate */}
        <div className="luxury-cert-card" ref={certRef}>
          <div className="cert-outer-border">
            <div className="cert-inner-border">
              {/* Seal Header */}
              <div className="cert-header">
                <div className="cert-emblem">✦</div>
                <div className="cert-board-name">NCLEX CLINICAL READINESS COMMISSION</div>
                <div className="cert-subtitle">CERTIFICATE OF CLINICAL EXCELLENCE</div>
              </div>

              <div className="cert-body">
                <p className="cert-text-lead">This credential officially certifies that</p>
                <div className="cert-candidate-name">Registered Nurse Candidate</div>
                <p className="cert-text-statement">
                  has demonstrated exemplary clinical judgment, prioritization competence, and diagnostic readiness on the
                </p>
                <div className="cert-exam-title">Comprehensive NCLEX-RN / NMCN Licensure Simulation</div>
              </div>

              {/* Metrics Row */}
              <div className="cert-metrics-row">
                <div className="cert-metric-item">
                  <span className="cert-m-val">{score}%</span>
                  <span className="cert-m-lbl">Overall Accuracy</span>
                </div>
                <div className="cert-metric-item">
                  <span className="cert-m-val">{totalQuestions}</span>
                  <span className="cert-m-lbl">Examination Items</span>
                </div>
                <div className="cert-metric-item">
                  <span className="cert-m-val">PASSED</span>
                  <span className="cert-m-lbl">Diagnostic Threshold</span>
                </div>
              </div>

              {/* Footer / Signatures */}
              <div className="cert-footer">
                <div className="cert-sig-box">
                  <div className="sig-line">Director of Clinical Education</div>
                  <span className="sig-sub">NCLEX Master Board</span>
                </div>

                <div className="cert-seal-graphic">
                  <div className="seal-circle">
                    <span>OFFICIAL</span>
                    <span>VERIFIED</span>
                  </div>
                </div>

                <div className="cert-sig-box">
                  <div className="sig-line">{date || new Date().toLocaleDateString()}</div>
                  <span className="sig-sub">Date of Examination</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}