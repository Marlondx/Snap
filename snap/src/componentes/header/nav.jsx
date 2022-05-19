
import style from "./nave.css"
import Loguin from "./login"
import { AiOutlineDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Home from "../paginas/home"
import Container from "../elementos/container"

/* aqui e a nossa nave menu superior e o submenus também lnk para outra pagina */
function Nave(params) {
    return (
        <div className={style}>

            <Link to='/'>   <img src="../src/images/logo.svg" alt="" style={{
                width: '6%', margin: '25px 0 0 -58%', position: 'absolute', color: "black"
            }} /></Link>
            <nav className="menu" >
                <ul>
                    <li>

                        <Link to="#"> Recursos  <AiOutlineDown className="ma" /> </Link>

                        <ul>
                            <li><Link to="#"> <img src="../src/images/icon-todo.svg" alt="" /> Lista de afazeres</Link></li>
                            <li><Link to="#"><img src="../src/images/icon-calendar.svg" alt="" /> Calendário</Link> </li>
                            <li><Link to="#"><img src="../src/images/icon-reminders.svg" alt="" /> Lembretes</Link> </li>
                            <li><Link to="#"><img src="../src/images/icon-planning.svg" alt="" /> Planejamento</Link> </li>

                        </ul>
                    </li>

                    <nav className="segundoMenu">

                        <ul>
                            <li >
                                <a href="">Companhia <AiOutlineDown className="ma" /> </a>
                                <ul >
                                    <li><Link to="#"> Históricos </Link></li>
                                    <li><Link to="#">Nossa equipe</Link> </li>
                                    <li><Link to="#">Blog</Link> </li>

                                </ul>
                            </li>
                        </ul>


                    </nav>

                    <li>
                        <a href="">Carreiras</a>

                    </li>
                    <li>
                        <a href="">Sobre</a>

                    </li>
                </ul>


            </nav>

        </div>
    )
}

export default Nave