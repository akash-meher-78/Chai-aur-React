import Card from "./Component/card";

function TailwindProps() {
    let user = {
        name: "John",
        age: 20,
    }

    return (
        <>
            <div className="text-2xl text-center mt-3 bg-green-400 text-black rounded-3xl">Tailwind Props</div>
            <div className="flex  gap-3.5 ml-2.5">
                <Card username = "John"  userPhoto= "https://wallpapercg.com/media/ts_2x/31519.webp"/>
                <Card  username= "John2"  userPhoto = "https://wallpapercave.com/wp/wp5639865.jpg"/>
            </div>
        </>
    )
}

export default TailwindProps;