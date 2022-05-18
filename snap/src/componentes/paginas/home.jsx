import Login from "../elementos/login"
import style from "./home.css"


function Home(params) {
    return(
        <div className={style}>
             <div className="corpo">
               
              <Login  to = './login' text='Entrar'/>
              <Login to='./cadastro' texto='Cria uma Conta' />

           <br/>


             <h1>
              Oi seja bem  vindo a paginina iniciaol 
            </h1>
            <p>oi</p>
             </div>
        
        </div>
    )
}

export default Home