
import * as SC from "./AppStyled"
import Designed from "./components/Designed/Designed"
import Laptop from "./components/Laptop/Laptop"
import StateCom from "./components/State/StateCom"
import Footer from "./layout/Footer"

import Header from './layout/HeaderLayout'

function App() {

  return (
    <SC.AppCustom>
     <Header/>
     <Designed/>
     <StateCom/>
     <Laptop/>
     <Footer loc="footer"/>
    </SC.AppCustom>
  )
}

export default App
