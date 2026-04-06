export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative h-screen flex items-center justify-center text-center text-white pt-16"
      style={{
        backgroundImage: "linear-gradient(rgba(10, 29, 55, 0.8), rgba(10, 29, 55, 0.8)), url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <h1 
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Tecnologia e Segurança em Soluções Elétricas
        </h1>
        <p 
          className="text-xl md:text-2xl text-dourado mb-10"
        >
          Conectando sua residência e comércio ao futuro.
        </p>
        <div>
          <a 
            href="https://wa.me/5511994001655" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-dourado text-azul-escuro px-8 py-4 rounded-md font-bold text-lg hover:bg-white transition-colors inline-block"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
