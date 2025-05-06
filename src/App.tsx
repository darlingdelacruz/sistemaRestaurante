
import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { useOrder } from "./hooks/useOrder";
function App() {

  const { order, tip, setTip, addItem, removerItem,guardarOrden } = useOrder();
  return (
    <>

      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Sistema de ordenes para Restaurantes</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="mt-10 space-y-3" >
          <h2 className="font-black text-4xl">Menu</h2>
          {menuItems.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}

            />
          ))}
        </div>
        <div className="border border-dashed border-slate-300 p-5 m-4 rounded-lg space-y-10">
          {order.length > 0 ? <div className="mt-10 space-y-3">
            <h2 className="font-black text-4xl ml-5">Consumo</h2>

            <OrderContents
              order={order}
              removerItem={removerItem}
            />
            <TipPercentageForm
              setTip={setTip}
            />
            <OrderTotals
              order={order}
              tip={tip}
              guardarOrden={guardarOrden}
            />
          </div>

            :
            <p className="text-center">No hay ordenes</p>

          }
        </div>
      </main>
    </>
  )
}

export default App
