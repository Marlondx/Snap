// Autor Marlon dos Santos 
// pagina principal do Programa 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './componentes/elementos/container'
import Home from './componentes/paginas/home'
import Nave from './componentes/header/nav'
import PgLogin from './componentes/paginas/login'
import Cadastro from './componentes/paginas/cadastro'
import Footer from './componentes/footer/fooder'
import PgHome from './componentes/paginas/pgHome'
import PgnaoEncontrada from './componentes/paginas/paginanao'
import {AuthProvider} from "./bancodeDados/contexts/auth"
import useAuth from "./bancodeDados/hooks/userAuth"

function App() {
  
  const Private =({Item}) => {
    const {signed} = useAuth();

    return signed > 0 ? <Item/> : <PgLogin/>
  }

  return (
    <div>

      <Router>
        <header>
          <Nave />

        </header>
        <article> 
          <AuthProvider>
            <Container>
              <Routes>
                <Route path='/' exact='true' element={<Home />}></Route>
                <Route path='/login' element={<PgLogin />}></Route>
                <Route exact path="/pghome" element={<Private Item={PgHome}/>}></Route>
                <Route path="/cadastro" element={<Cadastro/>}></Route>
                <Route path= "*" element={<PgnaoEncontrada/>}></Route>
               
              </Routes>
            </Container>
            </AuthProvider>
        </article>

       <footer>
          <Footer/>
        </footer>

      </Router>


    </div>
  )
}

export default App
