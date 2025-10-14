export default function Button ({increase,sellQuantity,decrease}) {
    return(
        <div className="flex items-center gap-2">
            <button className="flex items-center justify-center border-2 border-red-400 rounded-full w-5 h-5" onClick={increase}>+</button>
            {sellQuantity}
            <button className="flex items-center justify-center border-2 border-blue-400 rounded-full w-5 h-5" onClick={decrease}>-</button>
        </div>

    )
}