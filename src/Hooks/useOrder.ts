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
    const guardarOrden = (order: OrderItem[]) =>{
        if (order.length === 0) {
            console.warn("No hay productos en la orden");
            return;
          }
        
          console.log("Guardando orden en localStorage...");
        
          try {
            const ordenString = JSON.stringify(order);
            localStorage.setItem("ordenActual", ordenString);
        
            console.log("✅ Orden guardada en localStorage");
        
            // Limpiar el estado
            setOrden([]);
            setTip(0);
          } catch (error) {
            console.error("❌ Error al guardar en localStorage:", error);
          }

    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removerItem,
        guardarOrden

    }
}