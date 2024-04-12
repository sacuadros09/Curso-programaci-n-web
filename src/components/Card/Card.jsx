import { useState,useEffect } from "react"
import { fetchFact } from "../Data/getCats";
import { imgCats } from "../Utils/imgCats";
import { Button } from "../Button/Button";
import "./Card.css"

export const Card =  () =>   {

    const [loading, setLoading] = useState(false);
    const [catFact, setCatFact] = useState("");
    const [catImage, setCatImage] = useState(null);


    const dataCard = async () => {
        try {
            const dataFact = await fetchFact()
            setCatFact(dataFact.fact)

            const imgFact = await imgCats(dataFact.fact)
            setCatImage(imgFact)
        } catch (error) {
            console.error("No Miaumiu")
        }
    }

    useEffect(() => {
        dataCard();
    }, []);


    const anotherFact = () => {
        dataCard(); 
    };
    return (
        <div className="card">
            <section>
                <section className="mid-card">
                <h2 className="text">{catFact}</h2>
                </section>
            <img src={catImage} className="image" alt="" />
            </section>
            <Button onClick={anotherFact} tittle={"More Miaufact"} />
        </div>
    );
}



