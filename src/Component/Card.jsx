function Card({username = "Name", userPhoto}) {
    return (
        <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] mt-3">
            <div>
                <img
                    src={userPhoto}
                    alt="test"
                    className="object-cover object-center rounded-t-xl"
                />
            </div>
            <div className="flex flex-col py-3 px-3 pb-10">
                <div className="flex justify-between ">
                    <h1 className="font-bold ">{username}</h1>
                    <h1>Price</h1>
                </div>
                <div className="flex  justify-between">
                    <p>#345</p>
                    <p>0.01</p>
                </div>
            </div>
        </div>
    )
}

export default Card;