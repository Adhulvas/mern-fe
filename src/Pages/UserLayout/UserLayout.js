import { Outlet } from 'react-router-dom'
import './UserLayout.css'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function UserLayout() {

  return (
    <div>
      <Header/>
      <main>
      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default UserLayout