import React, { useState } from "react";
import './Body.css'
import { Button } from "./Button/Button";
import { Counter } from "./Counter/Counter";
import MessiImage from "../../Images/Messi.png";
import NeymarImage from "../../Images/Cr7.png";


export const Body = () => {
    const initialPlayers = [
        { id: 1, name: "Messi", count: 0, image: MessiImage },
        { id: 2, name: "Neymar", count: 0, image: NeymarImage },
    ];

    const [players, setPlayers] = useState(initialPlayers);

    const changeCounter = (type, playerId) => {
        setPlayers((prevPlayers) => {
            return prevPlayers.map((player) =>
                player.id === playerId
                    ? {
                          ...player,
                          count:
                              type === "add"
                                  ? player.count + 1
                                  : type === "subtract" && player.count > 0
                                  ? player.count - 1
                                  : player.count,
                      }
                    : player
            );
        });
    };

    return (
        <>
            <section className="players-container">
                {players.map((player) => (
                    <div key={player.id} className="player-wrapper">
                        <Counter countNumber={player.count}></Counter>
                        <div className="player-images">
                            {[...Array(player.count)].map((_, index) => (
                                <img
                                    key={index}
                                    src={player.image}
                                    alt={`${player.name} ${index}`}
                                    className={`player-image ${player.name.toLowerCase()}-image`}
                                />
                            ))}
                        </div>
                        <div className="button-images">
                            <Button
                                title="-"
                                type="subtract"
                                onClick={() => changeCounter("subtract", player.id)}
                            ></Button>
                            <Button
                                title="+"
                                type="add"
                                onClick={() => changeCounter("add", player.id)}
                            ></Button>
                        </div>
                    </div>
                ))}
            </section>
            <Button
                title="Reset"
                type="reset"
                onClick={() => setPlayers(initialPlayers)}
            ></Button>
        </>
    );
};