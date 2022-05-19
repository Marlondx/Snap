import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './componentes/elementos/container'
import Home from './componentes/paginas/home'
import Nave from './componentes/header/nav'
import PgLogin from './componentes/paginas/login'
import Cadastro from './componentes/paginas/cadastro'
import Footer from './componentes/footer/fooder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Router>
        <header>
          <Nave />

        </header>
        <article> 
            <Container>
              <Routes>
                <Route path='/' exact='true' element={<Home />}></Route>
                <Route path='/login' element={<PgLogin />}></Route>
                <Route path="/cadastro" element={<Cadastro/>}></Route>
              </Routes>
            </Container>
        </article>

       <footer>
          <Footer/>
        </footer>

      </Router>


    </div>
  )
}

export default App
