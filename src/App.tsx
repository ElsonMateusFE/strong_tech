import Home from './Pages/Home'
import Footer from './containers/Footer'
import Header from './containers/Header'
import EstiloGlobal from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
