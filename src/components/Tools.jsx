import React from 'react'
import { SiPostman, SiDocker, SiRedis, SiAmazonaws, SiNestjs, SiApachekafka, SiPostgresql, SiMongodb } from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
import { FaGithub, FaNodeJs } from 'react-icons/fa'
import { VscTerminalBash } from 'react-icons/vsc'

const tools = [
  { name: 'Node.js',    icon: <FaNodeJs        size={22} />, color: '#68A063' },
  { name: 'NestJS',     icon: <SiNestjs        size={20} />, color: '#E0234E' },
  { name: 'AWS',        icon: <SiAmazonaws     size={20} />, color: '#FF9900' },
  { name: 'Kafka',      icon: <SiApachekafka   size={18} />, color: '#aaa'    },
  { name: 'Redis',      icon: <SiRedis         size={20} />, color: '#DC382D' },
  { name: 'Docker',     icon: <SiDocker        size={20} />, color: '#2496ED' },
  { name: 'PostgreSQL', icon: <SiPostgresql    size={18} />, color: '#336791' },
  { name: 'MongoDB',    icon: <SiMongodb       size={20} />, color: '#4DB33D' },
  { name: 'VS Code',    icon: <TbBrandVscode   size={20} />, color: '#3498db' },
  { name: 'Postman',    icon: <SiPostman       size={18} />, color: '#e67e22' },
  { name: 'GitHub',     icon: <FaGithub        size={18} />, color: '#e7e7e7' },
  { name: 'Terminal',   icon: <VscTerminalBash size={18} />, color: '#4EC9B0' },
]

export default function Tools() {
  return (
    <section
      id="Tools"
      className="section"
      style={{ paddingTop: '60px', paddingBottom: '60px', background: '#0a0a0f' }}
    >
      <div className="max-w-3xl mx-auto">
        <p className="label mb-6">Tools & Platforms</p>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 gap-3">
          {tools.map((t, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 35}
              className="card flex flex-col items-center gap-2 p-3 cursor-default hover-lift"
              style={{ borderRadius: '12px' }}
            >
              <span style={{ color: t.color }}>{t.icon}</span>
              <span
                className="text-center leading-tight"
                style={{ fontSize: '10px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.3 }}
              >
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
