import { useState,useEffect } from "react"
import { fetchFact } from "../Data/getCats";
import "./Card.css"

export const Card =  () =>   {

    const [loading, setLoading] = useState(false);
    const [catFact, setCatFact] = useState("");
    const [catImage, setCatImage] = useState(null);


    const dataCard = async () => {
        try {
            const dataFact = await fetchFact()
            setCatFact(dataFact.fact)

            const imgFact = await fetchFact(dataFact.fact)
            setCatImage(imgFact)
        } catch (error) {
            console.error("No Miaumiu")
        }
    }

    useEffect(() => {
        dataCard();
    }, []);
    return (
        <div className="card">
            <section>
                <div className="mid-card">
                <h2 className="text">{catFact}</h2>
                </div>
            <img src={catImage} className="image" alt="" />
            </section>
        </div>
    );
}



