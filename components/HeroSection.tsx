
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center animate-slow-pan"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20professional%20recruitment%20office%20environment%20with%20diverse%20business%20people%20collaborating%2C%20bright%20natural%20lighting%2C%20contemporary%20workspace%20design%2C%20people%20discussing%20career%20opportunities%2C%20clean%20minimalist%20office%20interior%2C%20professional%20atmosphere%2C%20wide%20panoramic%20view%2C%20business%20meeting%20scene%20with%20consultants%20and%20clients&width=1920&height=1080&seq=hero-bg-recruitment&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          あなたの未来を<br />
          私たちと一緒に築きましょう
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-white/90 leading-relaxed">
          専門性の高いコンサルタントが<br />
          最適なキャリアパスをご提案します
        </p>
        
        <Link 
          href="/services" 
          className="border-2 border-white text-white px-8 py-4 lg:px-12 lg:py-6 rounded-lg text-lg lg:text-xl font-semibold hover:bg-white hover:text-gray-900 transition-all text-center whitespace-nowrap cursor-pointer inline-block"
        >
          サービス詳細
        </Link>
      </div>
      
      <style jsx>{`
        @keyframes slow-pan {
          0% {
            transform: translateX(-2%);
          }
          50% {
            transform: translateX(2%);
          }
          100% {
            transform: translateX(-2%);
          }
        }
        
        .animate-slow-pan {
          animation: slow-pan 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
