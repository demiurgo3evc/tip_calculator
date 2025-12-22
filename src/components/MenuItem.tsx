import type { Dispatch } from "react";
import type { menuItem} from "../types"
import type { CalculatorAction } from "../reducer/calculatorReducer";

type menuProps = {
    menu: menuItem;
    dispatch:Dispatch<CalculatorAction>
}

export default function MenuItem({ menu,dispatch}: menuProps) {
    return (
        <button onClick={()=>dispatch({type:"add-item",payload:{item:menu}})}  className="flex w-full border-2 hover:bg-teal-200 border-teal-400 justify-between cursor-pointer py-1 px-2 rounded-lg">
            <p>{menu.name}</p>
            <p className="font-black">{menu.price}</p>
        </button>

    )
}
