import Image from "next/image";
import Picker from "emoji-picker-react";

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
          <p>
            Durante quase 2 anos, atuei como desenvolvedora ServiceNow na
            renomada empresa Globo Comunicações. Minhas responsabilidades
            incluíam o desenvolvimento de catálogos de serviços, fluxos de
            trabalho, notificações, scripts e outras soluções para otimizar
            processos internos. Desenvolvia de soluções de front-end utilizando
            TypeScript e Angular, focando em código limpo e eficiente. Criação
            de protótipos interativos no Figma, com ênfase em proporcionar uma
            experiência do usuário intuitiva e agradável. Atualmente, estou
            atuando como desenvolvedora Full Stack, com foco principal em
            projetos utilizando React.
          </p>
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
            <span>🎓</span>
            <span>
              Analise em Desenvolvimento de Sistemas - Faculdade Estácio de Sá
            </span>
          </div>
        </div>
        <div className="buttons">
          <div className="social"></div>
          <button>Contatar-me</button>
        </div>
      </div>
    </main>
  );
}
