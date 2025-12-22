import { menuItems } from "../data/db";
import type { menuItem, OrderItem } from "../types";

export type CalculatorAction =
    { type: "add-item", payload: { item: menuItem } } |
    { type: "remove-item", payload: { id: menuItem['id'] } } |
    { type: "tip", payload: { tip: number } } |
    { type: "remove-all" }

type CalulatorState = {
    data: menuItem[],
    orders: OrderItem[],
    tip: number
}

const localStorageData = () => {
    const data = localStorage.getItem("orders");
    return data ? JSON.parse(data) : []
}

export const initState: CalulatorState = {
    data: menuItems,
    orders: localStorageData(),
    tip: 0
}

export const calculatorReducer = (
    state: CalulatorState,
    action: CalculatorAction
) => {

    switch (action.type) {

        case "add-item":

            const itemExist = state.orders.find(ordenItem => action.payload.item.id === ordenItem.id);

            let upateOrder: OrderItem[] = []

            if (itemExist) {

                upateOrder = state.orders.map(itemOrder => {

                    if (itemOrder.id === action.payload.item.id && itemExist.quantity < 5) {

                        return { ...itemOrder, quantity: itemOrder.quantity + 1 }
                    } else {
                        return itemOrder
                    }

                })

            } else {


                upateOrder = [...state.orders, { ...action.payload.item, quantity: 1 }];


            }




            return {
                ...state,
                orders: upateOrder
            }
        case "remove-item":

            return {
                ...state,
                orders: state.orders.filter(item => item.id != action.payload.id)
            }

        case "tip":

            return {
                ...state,
                tip:action.payload.tip
            }

        case "remove-all":

            return {
                ...state,
                orders: [],
                tip:0.0
            }

        default:
            break;
    }

    return state
}