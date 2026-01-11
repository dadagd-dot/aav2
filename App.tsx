
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  MapPin, 
  Activity, 
  ShieldCheck, 
  TrendingUp, 
  Instagram, 
  Youtube, 
  Stethoscope, 
  Brain, 
  FileText, 
  Scale, 
  ArrowRight,
  Menu,
  X,
  Plus
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';
import { COACHES, BRANCHES, PERFORMANCE_DATA, LATEST_NEWS } from './data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-red-600 text-white font-black text-xl px-2 py-0.5 italic tracking-tighter">AAV</div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline">AGENCY</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {['Training', 'Analysis', 'Branding', 'Medical', 'Admin'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors">
            Get in touch
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {['Training', 'Analysis', 'Branding', 'Medical', 'Admin'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-bold" onClick={() => setIsOpen(false)}>
              {item}
            </a>
          ))}
          <button className="bg-red-600 text-white w-full py-4 rounded-xl font-bold">상담 신청하기</button>
        </div>
      )}
    </nav>
  );
};

const SectionHeader: React.FC<{ label: string; title: string; subtitle?: string }> = ({ label, title, subtitle }) => (
  <div className="mb-16">
    <span className="section-label mb-4 block">• {label}</span>
    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter max-w-4xl leading-[1.1]">
      {title}
    </h2>
    {subtitle && <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">{subtitle}</p>}
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-red-600 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          {/* Mock Video Placeholder using Picsum blurred + dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-pulse duration-[3000ms]" 
            alt="Volleyball Motion"
          />
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center">
          <span className="section-label mb-6 block text-zinc-300">ALL ABOUT VOLLEYBALL</span>
          <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tight leading-[0.9]">
            배구에만 <span className="gradient-text">집중하세요.</span><br />
            나머지는 AAV가 합니다.
          </h1>
          <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            훈련, 분석, 의료, 브랜딩부터 커리어 설계까지.<br />
            선수 인생의 모든 순간을 함께하는 국내 유일 배구 전문 에이전시.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-red-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-red-700 transition-all transform hover:scale-105 flex items-center gap-2">
              상담 신청하기 <ArrowRight size={20} />
            </button>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/100/100?random=${i}`} className="w-12 h-12 rounded-full border-2 border-zinc-950" alt="Athlete" />
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-xs font-bold">+120</div>
            </div>
            <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest ml-2">Trusted by Pro Athletes</span>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="container mx-auto px-6 py-32 space-y-48">
        
        {/* Section 2: Training */}
        <section id="training">
          <SectionHeader 
            label="01 Training" 
            title="365일 멈추지 않는 성장" 
            subtitle="언제, 어디서든 접근 가능한 최적의 훈련 환경. 수도권 최대 규모의 배구 전용 네트워크를 경험하세요."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card rounded-3xl p-8 overflow-hidden relative min-h-[500px]">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <MapPin className="text-red-500" /> 전용 체육관 네트워크
                </h3>
                <p className="text-zinc-400">수도권 7개 주요 지점 운영</p>
              </div>
              
              <div className="space-y-4">
                {BRANCHES.map((branch, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group cursor-pointer">
                    <div>
                      <span className="block font-bold group-hover:text-red-400 transition-colors">{branch.name}</span>
                      <span className="text-sm text-zinc-500">{branch.type}</span>
                    </div>
                    <ChevronRight size={18} className="text-zinc-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>

              {/* Mock Map Overlay */}
              <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-black mb-8 italic">PROFESSIONAL COACHING</h3>
                <div className="grid grid-cols-1 gap-6">
                  {COACHES.map(coach => (
                    <div key={coach.id} className="glass-card p-6 rounded-2xl flex gap-6 items-center">
                      <img src={coach.imageUrl} className="w-24 h-24 rounded-xl object-cover grayscale hover:grayscale-0 transition-all" alt={coach.name} />
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xl font-bold">{coach.name}</span>
                          <span className="text-xs bg-red-600/20 text-red-500 px-2 py-0.5 rounded font-bold">{coach.position}</span>
                        </div>
                        <p className="text-sm text-zinc-400 mb-2">{coach.team}</p>
                        <div className="flex flex-wrap gap-2">
                          {coach.experience.map((exp, i) => (
                            <span key={i} className="text-[10px] text-zinc-500 uppercase font-bold tracking-tight">#{exp}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8 rounded-3xl bg-red-600/5 border-red-900/20">
                <h3 className="text-2xl font-bold mb-6">Success Story</h3>
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={PERFORMANCE_DATA}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                      <XAxis dataKey="month" stroke="#71717a" fontSize={12} />
                      <YAxis hide />
                      <Tooltip contentStyle={{backgroundColor: '#18181b', border: 'none', borderRadius: '12px'}} />
                      <Legend />
                      <Line type="monotone" dataKey="standard" name="기존 훈련" stroke="#71717a" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="aav" name="AAV 데이터 기반" stroke="#ef4444" strokeWidth={4} dot={{r: 4, fill: '#ef4444'}} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-4 text-sm text-zinc-500 text-center italic">데이터 기반 교정 후 공격 성공률 평균 28% 상승</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Analysis */}
        <section id="analysis">
          <SectionHeader 
            label="02 Analysis" 
            title="감이 아닌 수치로 증명하는 퍼포먼스" 
            subtitle="대한민국 유일의 3D 모션 분석과 AI 경기 분석 리포트. 당신의 가치는 이제 소수점 단위로 증명됩니다."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-[40px] flex flex-col justify-between hover:border-red-500/50 transition-colors group">
              <div>
                <Activity className="text-red-600 mb-8" size={48} />
                <h3 className="text-3xl font-black mb-4 leading-tight">AI 경기 분석 리포트</h3>
                <p className="text-zinc-400 leading-relaxed">매 경기 실제 영상을 촬영하고, AI가 공격 분포, 수비 범위, 무브먼트 효율성을 리포트로 제공합니다.</p>
              </div>
              <div className="mt-12 bg-white/5 p-4 rounded-2xl border border-white/5 grayscale group-hover:grayscale-0 transition-all">
                <img src="https://picsum.photos/600/400?random=20" className="rounded-lg mb-4" alt="Analysis Sample" />
                <div className="flex justify-between items-center text-xs font-bold text-zinc-500">
                  <span>SAMPLE REPORT v2.1</span>
                  <span className="text-red-500 underline cursor-pointer">View PDF</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 rounded-[40px] flex flex-col justify-between hover:border-red-500/50 transition-colors group">
              <div>
                <TrendingUp className="text-red-600 mb-8" size={48} />
                <h3 className="text-3xl font-black mb-4 leading-tight">SSTC 3D Motion Analysis</h3>
                <p className="text-zinc-400 leading-relaxed">스포츠 사이언스 전문 기관 협업. 3D 모션 캡처를 통한 스파이크 메커니즘 및 점프 밸런스 정밀 분석.</p>
              </div>
              <div className="mt-12 relative overflow-hidden rounded-2xl">
                 <img src="https://picsum.photos/600/400?random=21" className="w-full grayscale brightness-50" alt="3D Capture" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-red-600/50 absolute top-1/2 -translate-y-1/2 animate-pulse" />
                    <div className="text-[10px] font-mono text-white/50 bg-black/50 px-2 py-1">CALIBRATING...</div>
                 </div>
              </div>
            </div>

            <div className="glass-card p-10 rounded-[40px] flex flex-col justify-between bg-zinc-100 text-zinc-950">
              <div>
                <ShieldCheck className="text-red-600 mb-8" size={48} />
                <h3 className="text-3xl font-black mb-4 leading-tight">전략적 계약 지원</h3>
                <p className="text-zinc-700 leading-relaxed font-medium">"기록은 연봉 협상의 가장 강력한 무기입니다." 분석된 데이터를 바탕으로 구단과 유리한 계약을 이끌어냅니다.</p>
              </div>
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4 border-b border-black/10 pb-4">
                   <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">1</div>
                   <span className="font-bold">데이터 수집 및 강점 분석</span>
                </div>
                <div className="flex items-center gap-4 border-b border-black/10 pb-4">
                   <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">2</div>
                   <span className="font-bold">비교 우위 리포트 작성</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">3</div>
                   <span className="font-bold">최종 연봉 협상 테이블</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Branding */}
        <section id="branding">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <SectionHeader 
                  label="03 Branding" 
                  title="코트 안팎에서 빛나는 선수의 가치" 
                />
                <div className="space-y-12">
                   <div className="flex gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                         <Youtube className="text-red-600" />
                      </div>
                      <div>
                         <h4 className="text-xl font-bold mb-2">Owned Media Management</h4>
                         <p className="text-zinc-400">선수별 퍼스널 유튜브 및 인스타그램 채널 전문 관리팀 배정. 누적 조회수 5천만 뷰 돌파.</p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                         <Instagram className="text-red-600" />
                      </div>
                      <div>
                         <h4 className="text-xl font-bold mb-2">Commercial Management</h4>
                         <p className="text-zinc-400">스폰서십 및 광고 대행. 선수의 이미지를 훼손하지 않는 프리미엄 브랜드 협업 중심.</p>
                      </div>
                   </div>
                </div>
                
                <div className="mt-16 p-8 rounded-3xl bg-zinc-900 border border-white/5">
                   <div className="flex justify-between items-center mb-8">
                      <h4 className="font-bold">투명한 수익 구조</h4>
                      <span className="text-xs text-zinc-500 uppercase font-black">Coming Soon</span>
                   </div>
                   <div className="grid grid-cols-2 gap-8">
                      <div>
                         <span className="block text-4xl font-black mb-2 text-zinc-100">5%</span>
                         <span className="text-sm text-zinc-500">선수 직접 컨택 시</span>
                      </div>
                      <div>
                         <span className="block text-4xl font-black mb-2 text-red-600">20%</span>
                         <span className="text-sm text-zinc-500">에이전시 컨택 시</span>
                      </div>
                   </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/800/1000?random=30" className="rounded-3xl w-full h-[600px] object-cover" alt="Branding 1" />
                <div className="flex flex-col gap-4 mt-12">
                   <img src="https://picsum.photos/800/600?random=31" className="rounded-3xl w-full h-[280px] object-cover" alt="Branding 2" />
                   <div className="bg-red-600 rounded-3xl p-8 flex flex-col justify-end h-[280px]">
                      <span className="text-5xl font-black leading-none italic mb-4">BOLD<br />BRAND</span>
                      <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Athlete Identity</p>
                   </div>
                </div>
              </div>
           </div>
        </section>

        {/* Section 5: Medical */}
        <section id="medical" className="py-24 border-y border-white/5">
           <div className="text-center mb-24">
              <span className="section-label mb-6 block">• 04 Health & Care</span>
              <h2 className="text-5xl md:text-8xl font-black mb-8 italic">FIRST: HEALTH</h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">첫째도 건강, 둘째도 건강입니다. 최고의 퍼포먼스는 완벽한 컨디션에서 나옵니다.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="glass-card p-12 rounded-[50px]">
                 <div className="flex items-center gap-4 mb-10">
                    <div className="bg-red-600 p-3 rounded-full"><Stethoscope size={32} /></div>
                    <h3 className="text-3xl font-black tracking-tight">의료 네트워크</h3>
                 </div>
                 <div className="flex gap-8 mb-12 items-center">
                    <img src="https://picsum.photos/200/200?random=40" className="w-32 h-32 rounded-full object-cover grayscale" alt="Doctor" />
                    <div>
                       <h4 className="text-2xl font-bold mb-1">경희의료원 전문의팀</h4>
                       <p className="text-zinc-400 mb-4">족부 명의 및 스포츠 재활 전문가</p>
                       <div className="flex gap-2">
                          <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-zinc-500">부상 방지</span>
                          <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-zinc-500">정밀 재활</span>
                       </div>
                    </div>
                 </div>
                 <p className="text-zinc-500 text-sm leading-relaxed">경희의료원을 포함한 국내 유수 대학병원 네트워크를 통해 부상 시 즉각적인 검진과 수술, 체계적인 재활 프로그램을 지원합니다.</p>
              </div>

              <div className="glass-card p-12 rounded-[50px] bg-white text-zinc-950">
                 <div className="flex items-center gap-4 mb-10">
                    <div className="bg-red-600 p-3 rounded-full text-white"><Brain size={32} /></div>
                    <h3 className="text-3xl font-black tracking-tight italic">스포츠 심리 케어</h3>
                 </div>
                 <div className="mb-12">
                    <h4 className="text-4xl font-black mb-4">"흔들리지 않는 멘탈이 실력입니다"</h4>
                    <p className="text-zinc-600 font-medium">슬럼프 극복, 경기 집중력 향상, 은퇴 후 커리어 심리 상담까지.</p>
                 </div>
                 <div className="flex items-center gap-6 p-6 border border-zinc-200 rounded-3xl bg-zinc-50">
                    <img src="https://picsum.photos/150/150?random=41" className="w-20 h-20 rounded-2xl object-cover" alt="Professor" />
                    <div>
                       <span className="block font-black text-xl text-red-600">김상욱 교수</span>
                       <span className="text-sm font-bold text-zinc-500">AAV 전문 심리 고문</span>
                    </div>
                    <ArrowRight className="ml-auto text-zinc-300" />
                 </div>
              </div>
           </div>
        </section>

        {/* Section 6: Administration */}
        <section id="admin">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <SectionHeader 
                label="05 Administration" 
                title="귀찮고 어려운 일은 전문가에게" 
              />
              <p className="text-zinc-400 max-w-sm mb-16">선수는 오직 운동과 승리에만 집중할 수 있도록 최고의 전문가 그룹이 서포트합니다.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative glass-card p-10 rounded-3xl overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <FileText size={120} />
                 </div>
                 <div className="relative z-10">
                    <span className="text-red-500 font-black mb-4 block tracking-widest uppercase text-xs italic">Tax Specialist</span>
                    <h3 className="text-3xl font-bold mb-6 italic underline underline-offset-8 decoration-red-600">세무 자문: 정수진 세무사</h3>
                    <ul className="space-y-3 text-zinc-400 mb-10">
                       <li className="flex items-center gap-2">• 선수 맞춤형 자산 관리 및 포트폴리오</li>
                       <li className="flex items-center gap-2">• 종합소득세 신고 및 절세 전략</li>
                       <li className="flex items-center gap-2">• 법인 설립 및 사업화 지원</li>
                    </ul>
                    <button className="flex items-center gap-2 font-bold text-white hover:text-red-500 transition-colors">
                       Learn More <Plus size={16} />
                    </button>
                 </div>
              </div>

              <div className="group relative glass-card p-10 rounded-3xl overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Scale size={120} />
                 </div>
                 <div className="relative z-10">
                    <span className="text-red-500 font-black mb-4 block tracking-widest uppercase text-xs italic">Legal Counsel</span>
                    <h3 className="text-3xl font-bold mb-6 italic underline underline-offset-8 decoration-red-600">법률 자문: 김병직 변호사</h3>
                    <ul className="space-y-3 text-zinc-400 mb-10">
                       <li className="flex items-center gap-2">• 연봉 계약 검토 및 권익 보호</li>
                       <li className="flex items-center gap-2">• 계약 위반 대응 및 분쟁 해결</li>
                       <li className="flex items-center gap-2">• 퍼스널 브랜딩 관련 상표권 보호</li>
                    </ul>
                    <button className="flex items-center gap-2 font-bold text-white hover:text-red-500 transition-colors">
                       Learn More <Plus size={16} />
                    </button>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ Section Style Mockup */}
        <section className="py-24 border-t border-white/5">
           <div className="max-w-4xl mx-auto">
              <h3 className="text-5xl font-black mb-16 text-center">Frequently Asked</h3>
              <div className="space-y-6">
                 {[1, 2, 3].map(i => (
                    <div key={i} className="flex justify-between items-center p-8 bg-zinc-900 rounded-2xl cursor-pointer hover:bg-zinc-800 transition-colors border border-white/5">
                       <span className="text-xl font-bold">0{i} AAV의 수수료 정책이 궁금합니다.</span>
                       <Plus />
                    </div>
                 ))}
              </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 py-24 px-6 border-t border-white/5">
        <div className="container mx-auto">
           <div className="flex flex-col md:flex-row justify-between gap-16 mb-24">
              <div className="max-w-md">
                 <div className="bg-red-600 text-white font-black text-4xl px-3 py-1 italic tracking-tighter inline-block mb-8">AAV</div>
                 <p className="text-2xl font-bold mb-8">All About Volleyball.<br />우리는 선수와 함께 꿈을 현실로 만듭니다.</p>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"><Instagram /></div>
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"><Youtube /></div>
                 </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                 <div>
                    <h5 className="font-bold text-zinc-500 uppercase text-xs tracking-widest mb-6">Explore</h5>
                    <ul className="space-y-4 font-bold">
                       <li>Training</li>
                       <li>Analysis</li>
                       <li>Branding</li>
                    </ul>
                 </div>
                 <div>
                    <h5 className="font-bold text-zinc-500 uppercase text-xs tracking-widest mb-6">Care</h5>
                    <ul className="space-y-4 font-bold">
                       <li>Medical</li>
                       <li>Psychology</li>
                       <li>Career</li>
                    </ul>
                 </div>
                 <div className="col-span-2 sm:col-span-1">
                    <h5 className="font-bold text-zinc-500 uppercase text-xs tracking-widest mb-6">Contact</h5>
                    <ul className="space-y-2 text-zinc-400 font-medium">
                       <li>info@aav-agency.co.kr</li>
                       <li>+82 2-123-4567</li>
                       <li>서울특별시 강남구 테헤란로...</li>
                    </ul>
                 </div>
              </div>
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-xs text-zinc-500 font-bold uppercase tracking-widest gap-6">
              <span>© 2024 AAV AGENCY. ALL RIGHTS RESERVED.</span>
              <div className="flex gap-8">
                 <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                 <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              </div>
           </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-10 right-10 z-[60]">
         <button className="bg-white text-black h-16 w-16 md:h-20 md:w-auto md:px-8 rounded-full shadow-2xl shadow-red-600/20 flex items-center justify-center gap-3 font-black text-lg group hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-1">
            <span className="hidden md:inline">상담 신청하기</span>
            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-red-600 transition-colors">
              <Plus />
            </div>
         </button>
      </div>
    </div>
  );
};

export default App;
