import React from "react";

import "./Home.css";
import BlocText from "../../components/blockText/BlocText";

function Home(props) {
    const blocText = [
        {
            title: "Racine 81",
            subtitle: "Vivre le moment présent.",
            link: {
                title: "En savoir plus",
                href: "#"
            }
        },
    ];
    return (
        <div className=" bg-home">
            {blocText && (
                <div className="text-center">
                    {blocText.map((value,i) => (
                        <BlocText key={i} title={value.title} subtitle={value.subtitle} link={value.link} />
                    ))}
                </div>
            )
            }
        </div>
    );
}

export default Home;
