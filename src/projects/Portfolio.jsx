import React from "react";
import prj1 from "./ProjectSnapshots/img_1.png"
import prj2 from "./ProjectSnapshots/img_2.png"
import prj3 from "./ProjectSnapshots/img_3.png"
import prj4 from "./ProjectSnapshots/img_4.png"

export const Portfolio = () => {
    return (
        <>
            <div className="main">
                <h1 id="ttl">My Projects</h1>
                <div className="pj-wrap">
                   <button id={"btn-1"}>
                       <img src={prj4}/>
                   <label>Currency Converter</label>
                   </button>
                    <button id={"btn-2"}>
                        <img src={prj2}/>
                        <label>Anime Fansite</label>
                        <a href={"https://currency-converter-rho-one.vercel.app/"}></a>
                    </button>
                    <button id={"btn-3"}>
                        <img src={prj3}/>
                        <label>Password Generator</label>
                    </button>
                    <button id={"btn-4"}>
                        <img src={prj1}/>
                        <label>Personal Portfolio (OlD)</label>
                    </button>
                    {/* Add more buttons as needed */}
                </div>
            </div>
        </>
    )
}
