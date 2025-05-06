import  { useMemo } from 'react'
import { OrderItem } from '../types'
import { formatCurrency } from '../helpers'

type orderTotalsProps = {
    order: OrderItem[]
    tip: number
    guardarOrden: (order:OrderItem[] )=> void
}

export default function OrderTotals({ order, tip,guardarOrden }: orderTotalsProps) {


    const subTotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    return (
        <div>
            <div className='space-y-3'>
                <h2 className='font-black text-2xl'>Totales y Propina:</h2>
                <p>
                    SubTotal a pagar: {''}
                    <span className='font-bold'>{formatCurrency(subTotal)}</span>
                </p>
                <p>
                    Propina: {''}
                    <span className='font-bold'>{formatCurrency(tip * subTotal)}</span>
                </p>
                <p>
                    Total a pagar: {''}
                    <span className='font-bold'>{formatCurrency((tip*subTotal)+subTotal)}</span>
                </p>
                <button
                    className='w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10'
                    disabled={order.length ===0}
                    onClick={() =>guardarOrden(order)}
                >
                    Guardar Order
                </button>
            </div>
        </div>
    )
}

