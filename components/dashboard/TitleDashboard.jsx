

const TitleDashboard = (props) => {
    return (
        <section className="flex flex-col gap-1">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">
                    {props.title}
                </h1>
                
            </div>
        </section>
    )
}

export default TitleDashboard