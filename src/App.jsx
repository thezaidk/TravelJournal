import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import data from './data.js'

const card= data.map(item => {
  return (
    <Card 
      key= {item.id}
      {...item}
    />
  )
})

function App() {
  return (
    <div>
      <Navbar />
      {card}
    </div>
  )
}

export default App
