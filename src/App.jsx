import './App.css'
import LineChart from './COMPONENTS/LineChart/LineChart'
import Navbar from './COMPONENTS/Navbar/Navbar'
import Phones from './COMPONENTS/Phones/Phones'
import PriceOptions from './COMPONENTS/PriceOptions/PriceOptions'
// import DaisyNav from './COMPONENTS/DaisyNav/DaisyNav'

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
