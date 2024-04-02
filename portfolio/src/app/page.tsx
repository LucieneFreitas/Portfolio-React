import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="header">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
        <div>
          <h1>Olá, Sou Luciene Freitas</h1>
          <h2>Desenvolvedora Front-end</h2>
        </div>
        <div className="experience">
          <h3>Experiências</h3>
          <p>texto</p>
          <div className="experience-time"></div>
        </div>
        <div className="infos">
          <h3>Linguagens</h3>
          <div className="languages-info">
            <span>Inglês - Avançado</span>
            <span>Português - Nativo</span>
          </div>
          <h3>Escolaridade</h3>
          <div className="educational-info">
            <span></span>
          </div>
          <span></span>
        </div>
      </div>
    </main>
  );
}
