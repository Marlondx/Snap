import style from "./pglogincs.css"
import React, {useState} from 'react'
import Input from "../compont/input/index"
import Buttoon from "../compont/button/index"
import { Link , useNavigate } from "react-router-dom"
import useAuth from "../../bancodeDados/hooks/userAuth"
import iconeladoes from "../../images/iconeeswuerdo.png"

function PgLogin () {
    const {signin } = useAuth()   
    const [email,setEmal] = useState("")
    const [senha,setSenha]= useState("")
    const [erro, setErro] = useState("")
    const navegar = useNavigate ();

    const handleLogin = () => {
        if (!email | !senha) {
          setErro("Preencha todos os campos");
          return;
        }
    
        const res = signin(email,senha )

        if (res){
            setErro(res);
            return;
        }

        navegar("/pghome")
    }

    return (
 
    <div className={style} >

        <article className="login1">
       
        <section>
              <h1>Sistema de login</h1>
         
            <Input type="email" 
             placeholder="Digita seu E-mail " 
            value={email} 
            onChange = {(e) => [setEmal(e.target.value),setErro("")]}/>
            
            <Input type="password"
            placeholder="digite sua senha "
            value={senha}
            onChange= {(e) => [setSenha(e.target.value),setErro("")]}/>
            <label className="erro">{erro}</label>

       
          <Buttoon Text ="Entrar" onClick={handleLogin} />

         <label htmlFor="">Não tem conta? <Link to="/cadastro"> &nbsp; Registra-se </Link></label>

       </section>
     
            
          
          
      
        </article>
    </div>
    
    )
}

export default PgLogin 

