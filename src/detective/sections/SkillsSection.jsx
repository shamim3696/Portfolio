import React from 'react'
import { SiPostman, SiDocker, SiRedis, SiAmazonaws, SiNestjs, SiApachekafka, SiPostgresql, SiMongodb } from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
import { FaGithub, FaNodeJs } from 'react-icons/fa'
import { VscTerminalBash } from 'react-icons/vsc'

const TOOLS = [
  { name: 'Node.js',    icon: <FaNodeJs size={22}/>,       color: '#68A063', level: 'EXPERT'  },
  { name: 'NestJS',     icon: <SiNestjs size={20}/>,       color: '#E0234E', level: 'EXPERT'  },
  { name: 'AWS',        icon: <SiAmazonaws size={20}/>,    color: '#FF9900', level: 'ADVANCED'},
  { name: 'Kafka',      icon: <SiApachekafka size={18}/>,  color: '#aaa',    level: 'ADVANCED'},
  { name: 'Redis',      icon: <SiRedis size={20}/>,        color: '#DC382D', level: 'ADVANCED'},
  { name: 'Docker',     icon: <SiDocker size={20}/>,       color: '#2496ED', level: 'ADVANCED'},
  { name: 'PostgreSQL', icon: <SiPostgresql size={18}/>,   color: '#336791', level: 'ADVANCED'},
  { name: 'MongoDB',    icon: <SiMongodb size={20}/>,      color: '#4DB33D', level: 'ADVANCED'},
  { name: 'VS Code',    icon: <TbBrandVscode size={20}/>,  color: '#3498db', level: 'EXPERT'  },
  { name: 'Postman',    icon: <SiPostman size={18}/>,      color: '#e67e22', level: 'EXPERT'  },
  { name: 'GitHub',     icon: <FaGithub size={18}/>,       color: '#e7e7e7', level: 'EXPERT'  },
  { name: 'Terminal',   icon: <VscTerminalBash size={18}/>,color: '#4EC9B0', level: 'EXPERT'  },
]

export default function SkillsSection() {
  return (
    <div className="det-section">
      <div className="det-file-header" style={{ borderColor: '#00ff88' }}>
        <span className="det-stamp" style={{ color: '#00ff88', borderColor: '#00ff88' }}>TECH ARSENAL</span>
        <span className="det-file-num">FILE-02 · CAPABILITY DATABASE</span>
      </div>

      <h2 className="det-section-title">WEAPONS DATABASE</h2>

      <div className="det-terminal-line">
        <span className="det-terminal-prompt">{'root@agency:~$'}</span>
        <span className="det-terminal-cmd"> scan --target=subject --mode=deep</span>
        <span className="det-cursor">_</span>
      </div>
      <div className="det-terminal-output">
        SCAN COMPLETE · {TOOLS.length} TOOLS IDENTIFIED · ALL VERIFIED
      </div>

      <div className="det-tools-grid">
        {TOOLS.map((t, i) => (
          <div key={i} className="det-tool-card" style={{ animationDelay: `${i * 0.04}s` }}>
            <span style={{ color: t.color }}>{t.icon}</span>
            <span className="det-tool-name">{t.name}</span>
            <span className="det-tool-level" style={{ color: t.level === 'EXPERT' ? '#ffb347' : '#00ff88' }}>
              {t.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
