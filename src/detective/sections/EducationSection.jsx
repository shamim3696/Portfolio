import React from 'react'

const RECORDS = [
  {
    code:     'REC-01',
    tag:      'MASTERS',
    degree:   'M.Sc',
    field:    'Computer Science and Engineering',
    institute:'Jahangirnagar University',
    location: 'Savar, Dhaka',
    period:   'Dec 2025',
    status:   'COMPLETE',
    color:    '#a78bfa',
  },
  {
    code:     'REC-02',
    tag:      'GRADUATION',
    degree:   'Bachelor Degree',
    field:    'Computer Science and Engineering',
    institute:'Daffodil International University',
    location: 'DSC, Ashulia, Savar, Dhaka',
    period:   '2020 – 2024',
    status:   'COMPLETE',
    color:    '#ffb347',
  },
  {
    code:     'REC-03',
    tag:      'INTERMEDIATE',
    degree:   'HSC',
    field:    'Science Group',
    institute:'Sristy College of Tangail',
    location: 'Biswas Betka, Tangail',
    period:   '2016 – 2018',
    status:   'COMPLETE',
    color:    '#4d9fff',
  },
  {
    code:     'REC-04',
    tag:      'SECONDARY',
    degree:   'SSC',
    field:    'Science Group',
    institute:'Sakhipur P.M. Pilot High School',
    location: 'Sakhipur, Tangail',
    period:   '2011 – 2016',
    status:   'COMPLETE',
    color:    '#00ff88',
  },
]

export default function EducationSection() {
  return (
    <div className="det-section">
      <div className="det-file-header" style={{ borderColor: '#a78bfa' }}>
        <span className="det-stamp" style={{ color: '#a78bfa', borderColor: '#a78bfa' }}>ACADEMIC INTEL</span>
        <span className="det-file-num">FILE-04 · TRAINING RECORDS</span>
      </div>

      <h2 className="det-section-title">TRAINING DOSSIER</h2>
      <p className="det-body-text" style={{ marginBottom: '18px' }}>
        Classified academic background of the subject. All credentials verified.
      </p>

      <div className="det-edu-grid">
        {RECORDS.map((r, i) => (
          <div key={i} className="det-edu-card" style={{ borderTopColor: r.color }}>

            {/* Top row */}
            <div className="det-edu-top">
              <span className="det-edu-tag" style={{ color: r.color, borderColor: r.color + '40' }}>
                {r.tag}
              </span>
              <span className="det-edu-period">{r.period}</span>
            </div>

            {/* Degree badge */}
            <div className="det-edu-badge">{r.degree}</div>

            {/* Field */}
            <div className="det-edu-field">{r.field}</div>

            <div className="det-divider" style={{ marginBlock: '10px' }} />

            {/* Institute & location */}
            <div className="det-edu-meta">
              <div className="det-edu-row">
                <span className="det-edu-icon">⬡</span>
                <span className="det-edu-institute">{r.institute}</span>
              </div>
              <div className="det-edu-row">
                <span className="det-edu-icon">◎</span>
                <span className="det-edu-location">{r.location}</span>
              </div>
            </div>

            {/* Status */}
            <div style={{ marginTop: '10px' }}>
              <span
                className="det-mission-status"
                style={
                  r.status === 'ACTIVE'
                    ? { color: '#00ff88', borderColor: 'rgba(0,255,136,0.3)', background: 'rgba(0,255,136,0.06)' }
                    : { color: 'rgba(220,210,195,0.4)', borderColor: 'rgba(220,210,195,0.12)' }
                }
              >
                {r.status}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
