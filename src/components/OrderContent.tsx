import { useEffect } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderProps = {
    order: OrderItem[];
    deleItemOrden: (id: OrderItem['id']) => void;
}

export default function OrderContent({ order, deleItemOrden }: OrderProps) {


    return (
        <div>
            <h2 className="text-4xl font-black">Consumo</h2>

            <div className="space-y-3 mt-10">


                {order.map((item) => (
                    <div className="flex items-center justify-between border-t border--gray-200 py-5 last-of-type:border-b" key={item.id}>
                        <div>
                            <p>{item.name}-{formatCurrency(item.price)}</p>
                            <p className="font-black">
                                Cantidad: {item?.quantity}-{formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>
                        <button onClick={() => deleItemOrden(item.id)} className="bg-red-600 w-8 h-8 text-white rounded-md">
                            X
                        </button>
                    </div>

                ))
                }


            </div>
        </div>
    )
}
