import { useMemo, type Dispatch } from "react";
import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types";
import type { CalculatorAction } from "../reducer/calculatorReducer";

type Props = {
    order: OrderItem[];
    tip: number,
   dispatch:Dispatch<CalculatorAction>

}
export default function OrderTotals({ order, tip,dispatch}: Props) {
    
    const subtotalAmount = useMemo(() =>
        order.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        , [order])

    const tipAmount=useMemo(()=>subtotalAmount*tip ,[tip,order]);
    
    const totalAmount=useMemo(()=>subtotalAmount+tipAmount ,[tip,order]);

    

    return (
        <>
            <div className='space-y-3'>
                <h2 className='font-black text-2xl'>Totales y Propinas</h2>
                <p>Subtotal a pagar:{' '}
                    <span className='font-bold'>{formatCurrency(subtotalAmount)}</span>
                </p>
                <p>Propina:{' '}
                    <span className='font-bold'>{formatCurrency(tipAmount)}</span>
                </p>
                <p>Total a Pagar:{' '}
                    <span className='font-bold'>{formatCurrency((totalAmount))}</span>
                </p>
            </div>
            <button
            onClick={()=>dispatch({type:"remove-all"})} 
            disabled={totalAmount==0}
             className="w-full bg-black p-3 text-white font-bold mt-10 disabled:opacity-10">
                Guardar Ordern
            </button>
        </>
    )
}
