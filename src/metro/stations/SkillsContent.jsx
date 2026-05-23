import React from 'react'
import { SiPostman, SiDocker, SiRedis, SiAmazonaws, SiNestjs, SiApachekafka, SiPostgresql, SiMongodb } from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
import { FaGithub, FaNodeJs } from 'react-icons/fa'
import { VscTerminalBash } from 'react-icons/vsc'

const tools = [
  { name: 'Node.js',    icon: <FaNodeJs size={26}/>,        color: '#68A063' },
  { name: 'NestJS',     icon: <SiNestjs size={24}/>,        color: '#E0234E' },
  { name: 'AWS',        icon: <SiAmazonaws size={24}/>,     color: '#FF9900' },
  { name: 'Kafka',      icon: <SiApachekafka size={22}/>,   color: '#aaa'    },
  { name: 'Redis',      icon: <SiRedis size={24}/>,         color: '#DC382D' },
  { name: 'Docker',     icon: <SiDocker size={24}/>,        color: '#2496ED' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={22}/>,    color: '#336791' },
  { name: 'MongoDB',    icon: <SiMongodb size={24}/>,       color: '#4DB33D' },
  { name: 'VS Code',    icon: <TbBrandVscode size={24}/>,   color: '#3498db' },
  { name: 'Postman',    icon: <SiPostman size={22}/>,       color: '#e67e22' },
  { name: 'GitHub',     icon: <FaGithub size={22}/>,        color: '#e7e7e7' },
  { name: 'Terminal',   icon: <VscTerminalBash size={22}/>, color: '#4EC9B0' },
]

export default function SkillsContent() {
  return (
    <div className="station-content">
      <div className="station-section-label">02 · Skills & Tools</div>
      <h2 className="station-section-title">Technology Stack</h2>
      <p className="station-section-desc">Tools and platforms I work with daily.</p>

      <div className="station-tools-grid">
        {tools.map((t, i) => (
          <div
            key={i}
            className="station-tool-card"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <span style={{ color: t.color }}>{t.icon}</span>
            <span className="station-tool-name">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
