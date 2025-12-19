import { useState } from "react"
import type { OrderItem } from "../types";


export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const addItem = (item: OrderItem) => {

        const itemExist = order.find(ordenItem => item.id === ordenItem.id);

        if (itemExist != undefined) {

            const upateOrder = order.map(itemOrder => itemOrder.id === item.id ?
                { ...itemOrder, quantity: itemOrder.quantity + 1 } : itemOrder
            )

            setOrder(upateOrder)

        } else {

            item.quantity = 1;
            const newOrder = [...order, item];

            setOrder(newOrder)
        }

    }

    function deleteItmOrder(id: OrderItem['id']) {
        const updateOrder = order.filter(item => id != item.id);
        setOrder(updateOrder);
    }

    
    const save=()=>{
        setOrder([])
        setTip(0)

    }
   
    return {
        order,
        addItem,
        deleteItmOrder,
        tip,
        setTip,
        save
    }
}
