
import style from "./nave.css"
import { AiOutlineDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import menu from '../../images/icon-menu.svg'



/* aqui e a nossa nave menu superior e o submenus também lnk para outra pagina */
function Nave(params) {

    function enviar() {
        const env = document.getElementsByClassName("menu")
        const res =document.getElementById("res")

        res.style.color = 'red'

    }

    return (
        <div className={style}>  
           
            <div id="text"> <h1> <Link to='/'> Snap </Link></h1></div>
            {/* <span> <img className="menuico" src={menu} alt="Snap" srcset=""  style={{margin:"0 0 0 90%"}} /></span> */}
            

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
            {/* para  Mobile */}
            <div id="res">res  
            <button onClick={enviar}> click aqui </button></div>
        </div>
    )
}

export default Nave