import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type orderItemProps = {
    order: OrderItem[],
    removerItem: (id: MenuItem['id']) => void
}


const OrderContents = ({ order, removerItem }: orderItemProps) => {


    return (
        <div>

            {
                order.length === 0 ? <p className="text-center">No hay ordenes</p> :
                    order.map(item => (
                        <div
                            key={item.id}
                            className="flex justify-between border-b  border-gray-200 py-5 last-of-type:border-t"
                        >
                            <div>

                                <p className="text-lg">
                                    {item.name} - {formatCurrency(item.price)}
                                </p>
                                <p className="font-bold">
                                    cantidad: {item.quantity}
                                </p>
                                <p className="font-black">
                                    Total: {formatCurrency(item.price * item.quantity)}
                                </p>

                            </div>
                            <button
                                className="bg-red-600 h-8 w-8 rounded-b-full text-white font-black"
                                onClick={() => removerItem(item.id)}
                            >X</button>
                        </div>

                    ))
            }

        </div>
    )
}

export default OrderContents