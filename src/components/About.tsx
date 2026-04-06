export default function About() {
  return (
    <section id="sobre" className="py-24 bg-azul-escuro text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-dourado/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-dourado/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div 
            className="flex-1"
          >
            <div className="inline-block px-4 py-1 bg-dourado/20 text-dourado rounded-full text-sm font-bold mb-6">
              Compromisso com a Excelência
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Kelvin Deoldoto</h2>
            <p className="text-xl text-dourado font-medium mb-8">Eletrotécnico Responsável</p>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Na <span className="text-white font-bold">OHMIX</span>, acreditamos que a eletricidade deve ser sinônimo de segurança absoluta e eficiência energética. Com uma trajetória pautada pelo rigor técnico, transformamos a forma como você interage com a energia.
              </p>
              <p>
                Nossa missão é oferecer soluções completas e inteligentes, desde manutenções preventivas essenciais até os mais sofisticados projetos de automação residencial e energia solar fotovoltaica.
              </p>
            </div>
          </div>

          <div 
            className="flex-1 relative"
          >
            <div className="relative z-10 aspect-square max-w-md mx-auto flex flex-col items-center justify-center p-4">
              <img 
                src="https://drive.google.com/thumbnail?id=1bvEn-NxDoccCBgEjeoNHvuWihM14ar4x&sz=w1000" 
                alt="OHMIX Logo" 
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105 drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <span className="text-white font-bold text-4xl tracking-[0.3em] mt-8 drop-shadow-lg">OHMIX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
