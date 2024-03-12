

const CardInfo = (props) => {
    return (
        <div className="max-w-sm p-6 w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between gap-2 items-center">
                <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                {props.icon}
            </div>
            <p className="font-extrabold text-5xl w-full flex justify-center py-3">{props.info}</p>
            <p className="inline-flex font-medium items-cente hover:underline">
                {props.description}
            </p>
        </div>

    )
}

export default CardInfo