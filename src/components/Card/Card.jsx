import { useState,useEffect } from "react"
import dataCat, { fetchFact } from "../Data/getCats"
import "./Card.css"


export const Card =  () =>   {

    const [loading, setLoading] = useState(false);
    const [catFact, setCatFact] = useState([]);
    const [catImage, setCatImage] = useState(null);


    const dataCard = async () => {
        try {
            const dataFact = await fetchFact()
            setCatFact(dataFact.fact)

            const imgFact = await fetchFact()
            setCatImage(imgFact.fact)
        } catch (error) {
            console.error("No Miaumiu")
        }
    }
    return (
        <div className="card">
            <section>
                <div className="mid-card">
                <p className="text">{catFact}</p>
                </div>
            <img src={catImage} className="image" alt="" />
            </section>
        </div>
    );
}