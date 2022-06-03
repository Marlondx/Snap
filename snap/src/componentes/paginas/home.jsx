import Login from "../elementos/login"
import mobile from "../../images/image-hero-mobile.png"
import style from "./home.css"
import fto from "../../images/image-hero-desktop.png"
import Button from "../elementos/butao"


function Home(params) {

  return (
    <div className={style}>
      <div className="mudar">
        <h1></h1>
      </div>
      <nav className="naveLogin">

        <Login to='./login' text='Entrar' />
        <Login to='./cadastro' texto='Cria uma Conta' />

        <br />
      </nav>

      <article>
        <section className="corpo">
          <h1>
            Faça um trabalho  <br /> remoto
          </h1>

          <p>Sincronize sua equipe, independentemente de sua  <br />
            localização, agilize os processos crie rituais de <br />
            equipe e veja a produtividade dispara</p>

          <Button />
        </section>

        <aside className="dir">
          <img id="desktop"src={fto} alt="desctope"/>"
          <img id="mobile" src={mobile} alt="mobile" />
       
          {/* <img src="../../../src/images/image-hero-mobile.png" alt="" sizes="(max-width:375px) 667px " srcset="" /> */}
        </aside>
      </article>

    </div>
  )
}

export default Home