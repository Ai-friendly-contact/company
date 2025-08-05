
'use client';

export default function JobseekersHero() {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Professional%20Japanese%20businessperson%20in%20modern%20office%20environment%20looking%20confident%20and%20successful%2C%20clean%20corporate%20background%20with%20soft%20natural%20lighting%2C%20minimalist%20design%20with%20business%20success%20theme%2C%20high%20quality%20photography&width=1920&height=1080&seq=jobseeker-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            理想のキャリアを<br />
            一緒に見つけましょう
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            専門コンサルタントがあなたのキャリアプランに合わせて<br />
            最適な転職先をご紹介いたします
          </p>
        </div>
      </div>
    </section>
  );
}