import Image from "next/image"
import './Header.scss'

export function Header() {
  return (
    <div className="header">
        
        
        <div>
            <h1>Olá, Sou Luciene! 👋</h1>
            <h2>Desenvolvedora Front-end</h2>
          </div>
          <Image
            src="/perfil.png"
            alt="Vercel Logo"
            width={325}
            height={310}
            priority
          />
          </div>
  )
}

