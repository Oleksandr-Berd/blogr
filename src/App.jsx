
import * as SC from "./AppStyled"
import Designed from "./components/Designed/Designed"
import Laptop from "./components/Laptop/Laptop"
import StateCom from "./components/State/StateCom"

import Header from './layout/HeaderLayout'

function App() {

  return (
    <SC.AppCustom>
     <Header/>
     <Designed/>
     <StateCom/>
     <Laptop/>
    </SC.AppCustom>
  )
}

export default App
