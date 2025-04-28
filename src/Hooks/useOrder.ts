import { useState } from "react"
import { MenuItem, OrderItem } from "../types"


export function useOrder() {

    const [order, setOrden] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);
    const addItem = (item: MenuItem) => {

        const itemExist = order.find(orderItem => orderItem.id === item.id);
        if (itemExist) {
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
            setOrden(updateOrder);
        }
        else {
            const newItem = { ...item, quantity: 1 }
            setOrden([...order, newItem]);

        }

    }

    const removerItem = (id: MenuItem['id']) => {
        setOrden(order.filter(item => item.id !== id))
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removerItem,

    }
}