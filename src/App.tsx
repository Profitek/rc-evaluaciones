import ProductTable from './components/ProductTable'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="sidebar">
          {/* Contenido del sidebar */}
        </div>
        <div className="main-content">
          <ProductTable />
        </div>
      </div>
    </div>
  )
}

export default App
