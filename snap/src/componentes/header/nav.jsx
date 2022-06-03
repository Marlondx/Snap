
import style from "./nave.css"
import { AiOutlineDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'


/* aqui e a nossa nave menu superior e o submenus também lnk para outra pagina */
function Nave(params) {
    return (
        <div className={style}>

             <div className="text"> <h1> <Link to='/'> Snap </Link></h1></div>
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