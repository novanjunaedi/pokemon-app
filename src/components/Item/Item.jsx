const Item = ({ name, thumbnail }) => {
    return (
        <article className="bg-white p-5 m-3 rounded-lg shadow-md w-[calc(20%-1rem)] min-w-[200px] max-w-full hover:shadow-lg hover:border border-blue-500 cursor-pointer transition transform hover:scale-105 duration-300 ease-in-out">
            <div className="bg-slate-100 w-full h-[150px] mb-3 rounded-lg overflow-hidden">
                <img className="w-full h-full object-contain p-3" src={thumbnail} alt={name} />
            </div>
            <div className="text-center">
                <h5 className="font-bold capitalize">{name}</h5>
            </div>
        </article>
    )
}

export default Item