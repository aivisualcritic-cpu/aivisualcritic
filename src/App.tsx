/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Youtube, 
  Instagram, 
  Video, 
  Globe, 
  ArrowRight, 
  Mail, 
  ChevronDown,
  Play
} from "lucide-react";
import { useRef } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "AI 영화 프로젝트 (AI 장보고)",
    description: "역사적 서사와 AI 기술의 결합, 바다의 지배자를 재해석하다.",
    image: "https://picsum.photos/seed/jangbogo/800/1000",
    category: "Cinema"
  },
  {
    id: 2,
    title: "AI 영화 프로젝트 (행복한 왕자)",
    description: "오스카 와일드의 고전, AI의 시선으로 본 희생과 아름다움.",
    image: "https://picsum.photos/seed/prince/800/1000",
    category: "Cinema"
  },
  {
    id: 3,
    title: "Visual Critic 시리즈",
    description: "텍스트를 넘어 이미지로 수행하는 현대 영상 비평의 정수.",
    image: "https://picsum.photos/seed/critic/800/1000",
    category: "Criticism"
  },
  {
    id: 4,
    title: "심문섭 전시 영상 프로젝트",
    description: "조각의 물성과 AI 영상의 유동성이 만나는 지점.",
    image: "https://picsum.photos/seed/exhibition/800/1000",
    category: "Art Collaboration"
  },
  {
    id: 5,
    title: "베니스 비엔날레 연계 작업",
    description: "세계 최대 미술 축제에서 선보인 AI 비주얼 퍼포먼스.",
    image: "https://picsum.photos/seed/venice/800/1000",
    category: "Global Project"
  },
  {
    id: 6,
    title: "실험적 숏폼 / 이미지 변환",
    description: "찰나의 순간을 영원으로 바꾸는 AI 이미지 변환 실험.",
    image: "https://picsum.photos/seed/experimental/800/1000",
    category: "Experimental"
  }
];

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="bg-[#050505] text-white selection:bg-gold selection:text-black">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://picsum.photos/seed/cinema-hero/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-gold tracking-[0.3em] uppercase text-xs mb-6 block font-light">
              AI Visual Critic & Director
            </span>
            <h1 className="serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-glow">
              비평은 더 이상 텍스트가 아니다.<br />
              이제, 이미지와 시간으로 경험된다.
            </h1>
            <p className="text-white/60 font-light tracking-widest text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              이미지를 만드는 것이 아니라,<br className="md:hidden" /> 시간과 관계를 설계하는 영상 비평
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 text-white/40 animate-bounce" />
        </motion.div>
      </section>

      {/* Positioning Section */}
      <section className="py-32 px-6 border-y border-white/10 bg-[#080808]">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="serif text-3xl md:text-4xl font-light mb-6">
              AI 시대의 비평을<br />영상으로 만드는 감독
            </h2>
          </div>
          <div className="md:w-1/2 text-white/50 font-light leading-loose text-sm md:text-base">
            <p>
              우리는 이미지 과잉의 시대에 살고 있습니다. 단순히 예쁜 이미지를 생성하는 것을 넘어, 
              그 이미지가 담고 있는 철학적 함의와 시간의 흐름을 설계합니다. 
              AI는 도구가 아닌, 새로운 비평적 시각을 제공하는 렌즈입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-gold tracking-widest text-[10px] uppercase mb-2 block">Selected Works</span>
              <h2 className="serif text-4xl font-light">대표 콘텐츠</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                      <Play className="w-4 h-4 fill-white" />
                    </div>
                  </div>
                </div>
                <span className="text-gold text-[10px] uppercase tracking-widest mb-2 block font-semibold">
                  {project.category}
                </span>
                <h3 className="serif text-xl mb-3 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 font-light text-sm leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://picsum.photos/seed/philosophy/800/1000" 
                alt="Philosophy" 
                className="w-full aspect-[4/5] object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-black/40 tracking-widest text-[10px] uppercase mb-4 block">Philosophy</span>
              <h2 className="serif text-4xl md:text-5xl font-light mb-8 leading-tight">
                이미지는 사유의 결과물이어야 합니다.
              </h2>
              <div className="space-y-6 text-black/70 font-light leading-relaxed">
                <p>
                  AI 기술은 비평가에게 새로운 붓을 쥐어주었습니다. 우리는 단순히 영상을 제작하는 것이 아니라, 
                  작품이 가진 본질을 해체하고 AI의 알고리즘을 통해 재구성합니다.
                </p>
                <p>
                  이 과정에서 발생하는 '디지털 노이즈'와 '우연성'은 비평의 새로운 언어가 됩니다. 
                  우리는 기술의 정점에서 가장 인간적인 질문을 던집니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/cta-bg/1920/1080" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="serif text-4xl md:text-6xl font-light mb-12">
            새로운 세계관의 입구에서<br />당신을 기다립니다.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-gold text-black font-medium text-sm tracking-widest uppercase hover:bg-white transition-colors flex items-center justify-center gap-3">
              프로젝트 협업 문의 <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 glass text-white font-medium text-sm tracking-widest uppercase hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
              AI Visual Critic 소식 받기 <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer / SNS */}
      <footer className="py-20 px-6 border-t border-white/10 bg-[#050505]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <h3 className="serif text-2xl mb-2">AI Visual Critic</h3>
              <p className="text-white/30 text-xs tracking-widest uppercase">Designing Time and Relations</p>
            </div>

            <div className="flex items-center gap-8">
              <a href="#" className="text-white/40 hover:text-gold transition-colors flex flex-col items-center gap-2">
                <Youtube className="w-5 h-5" />
                <span className="text-[10px] uppercase tracking-tighter">YouTube</span>
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors flex flex-col items-center gap-2">
                <Instagram className="w-5 h-5" />
                <span className="text-[10px] uppercase tracking-tighter">Instagram</span>
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors flex flex-col items-center gap-2">
                <Video className="w-5 h-5" />
                <span className="text-[10px] uppercase tracking-tighter">Vimeo</span>
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors flex flex-col items-center gap-2">
                <Globe className="w-5 h-5" />
                <span className="text-[10px] uppercase tracking-tighter">Website</span>
              </a>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 text-center">
            <p className="text-white/20 text-[10px] tracking-widest uppercase">
              © 2026 AI Visual Critic. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
