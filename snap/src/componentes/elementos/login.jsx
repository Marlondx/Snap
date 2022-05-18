import {Link} from 'react-router-dom'
import style_login from'./logincss.css'
function Login({to,text,texto}) {
    return(
        <div className={style_login}> 
           <span className='login'> <Link  to={to}>{text}</Link></span>
            <span className='cadastro'><Link to={to}>{texto}</Link></span>
        </div>

    )
}

export default Login