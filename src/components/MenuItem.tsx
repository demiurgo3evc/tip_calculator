import type { menuItem} from "../types"

type menuProps = {
    menu: menuItem;
    addItem:(item:menuItem)=>void;
}

export default function MenuItem({ menu,addItem }: menuProps) {
    return (
        <button onClick={()=>addItem(menu)}  className="flex w-full border-2 hover:bg-teal-200 border-teal-400 justify-between cursor-pointer py-1 px-2 rounded-lg">
            <p>{menu.name}</p>
            <p className="font-black">{menu.price}</p>
        </button>

    )
}
