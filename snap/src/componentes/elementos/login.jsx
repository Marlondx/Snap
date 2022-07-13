import {Link} from 'react-router-dom'
import style_login from'./logincss.css'
function Login({to,text}) {
    return(
        <div className={style_login}>
            <header className='navermenu1'>
            <nav>
               <span className='loginA'> <Link  to={to}>{text}</Link></span>
            </nav>
            </header>
        </div>

    )
}

export default Login