import './App.css'
import Cart from './components/Cart'
import ConfirmOrder from './components/ConfirmOrder'
import Products from './components/Products'

function App() {

  return (
    <>
      <main className='bg-rose-50 min-h-screen font-redhat'>
        <div className='flex flex-col md:flex-row justify-center py-5 px-7 md:px-5'>
          <Products />
          <Cart />
        </div>
      </main>
    </>
  )
}

export default App
