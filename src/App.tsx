import { useEffect, useReducer } from 'react';
import MenuItem from './components/MenuItem'
import OrderContent from './components/OrderContent';
import OrderTotals from './components/OrderTotals';
import TipPercentageForm from './components/TipPercentageForm';
import { calculatorReducer, initState } from './reducer/calculatorReducer';
import './App.css'

function App() {

  const [state, dispatch] = useReducer(calculatorReducer, initState)

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(state.orders))
  }, [state.orders])

  return (
    <>
      <header className='bg-teal-400 py-5'>
        <h1 className='text-center text-4xl font-black'>Calculadodra de  Propinas y consumo</h1>
      </header>

      <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2'>

        <div className='p-5'>

          <h2 className='text-4xl font-black' >Menu</h2>


          <div className="space-y-3 mt-10">
            {state.data.map(item => (
              <MenuItem
                dispatch={dispatch}
                key={item.id}
                menu={item} />
            ))}
          </div>


        </div>

        <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>
          {state.orders.length > 0 ?
            <>
              <OrderContent
                order={state.orders}
                dispatch={dispatch}
              />

              <TipPercentageForm
                tip={state.tip}
                dispatch={dispatch}

              />

              <OrderTotals
                dispatch={dispatch}
                order={state.orders}
                tip={state.tip}
              />
            </>
            :
            <p> La orden esta vacia</p>

          }
        </div>

      </main>
    </>
  )
}

export default App
