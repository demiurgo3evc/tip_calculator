import type { Dispatch } from "react"
import type { CalculatorAction } from "../reducer/calculatorReducer"

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type Props={
    dispatch:Dispatch<CalculatorAction>
    tip:number
}

export default function TipPercentageForm({dispatch}:Props) {
    return (
        <div className="font-bold text-2xl">
            <h3>Propina: </h3>
            <form action="">
                {tipOptions.map(tipOption => (
                   
                   <div key={tipOption.id} className="flex items-center gap-2">
                        <label className="text-base" htmlFor={tipOption.id}>{tipOption.label}</label>

                        <input
                           onChange={e=>dispatch({type:"tip",payload:{tip:+e.target.value}})}
                            type="radio"
                            name="tip"
                            id={tipOption.id}
                            value={tipOption.value}
                            //checked={tipOption.value==tip}
                        />

                    </div>
                ))}
            </form>
        </div>
    )
}

