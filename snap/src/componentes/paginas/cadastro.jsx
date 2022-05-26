import style from'./cadastro.css'
import React,{ useState } from 'react'
import Input from '../compont/input'
import Buttoon from '../compont/button'
import { Link,useNavigate } from 'react-router-dom'
import useAuth from '../../bancodeDados/hooks/userAuth'



function Cadastro(params) {
    const [emailConf,setemailconf]= useState("")
    const [email,setEmal] = useState("")
    const [senha,setSenha]= useState("")
    const [erro, setErro] = useState("")
    const {signup} = useAuth()
    const navigate = useNavigate()

    const handcadastro = () =>{
        if (!email | !emailConf | !senha){
            setErro("Preencha todos os campos")
            return;
        } else if(email !== emailConf){
            setErro("os email nao sao iguais")
            return;
        }
        const res = signup(email,senha )

        if (res){
            setErro(res);
            return;
        }
        alert("Usuario cadastro com sucesso! ")
        navigate("/login")
    }


    return(
        <div className={style}>
           <article className='cadastro1'>
               <h1> Sistema de cadastro </h1>
               <Input type="email"
             placeholder="Digita seu E-mail " 
            value={email} 
            onChange = {(e) => [setEmal(e.target.value),setErro("")]}></Input>
              <Input type="email"
             placeholder="Confirma seu email  " 
            value={emailConf} 
            onChange = {(e) => [setemailconf(e.target.value),setErro("")]}></Input>
             <Input type="password"
            placeholder="digite sua senha "
            value={senha}
            onChange= {(e) => [setSenha(e.target.value),setErro("")]}></Input>
            <label htmlFor="">{erro}</label>
           
            <Buttoon Text="Inscrever-se" onClick={handcadastro} />

            <label htmlFor="">ja tem uma conta? <Link to="/login"> &nbsp; Entrar </Link></label>
           </article>
        </div>
    )
}

export default Cadastro


