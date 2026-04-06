export default function Header() {
  const navItems = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="bg-azul-escuro border-b-3 border-dourado fixed w-full top-0 z-50 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        <a 
          href="#inicio"
          className="flex flex-col items-center"
        >
          <img 
            src="https://drive.google.com/thumbnail?id=1bvEn-NxDoccCBgEjeoNHvuWihM14ar4x&sz=w800" 
            alt="OHMIX Logo" 
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="text-white font-bold text-sm tracking-widest mt-1">OHMIX</span>
        </a>
        <nav>
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li 
                key={item.name}
              >
                <a 
                  href={item.href} 
                  className="text-white hover:text-dourado transition-colors font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
