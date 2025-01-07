import { Outlet } from 'react-router-dom'
import './Home.css'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'

function Home() {

  return (
    <div>
      <Navbar/>
      <main>
      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home