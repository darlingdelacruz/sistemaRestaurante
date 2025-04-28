import React, { useMemo } from 'react'
import { OrderItem } from '../types'
import { formatCurrency } from '../helpers'

type orderTotalsProps = {
    order: OrderItem[]
    tip: number
}

export default function OrderTotals({ order, tip }: orderTotalsProps) {


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
            </div>
        </div>
    )
}

