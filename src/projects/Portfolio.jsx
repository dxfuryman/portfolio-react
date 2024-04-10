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
                       <a href="https://currency-converter-rho-one.vercel.app/" target={"_blank"}><img src={prj4}/></a>
                   <label>Currency Converter</label>
                   </button>
                    <button id={"btn-2"}>
                        <a href={"https://vikhyatsingh123.github.io/Naruto-Shippuden/"} target={"_blank"}>
                            <img src={prj2}/>
                        </a>
                        <label>Anime Fansite</label>

                    </button>
                    <button id={"btn-3"}>
                        <a href={"https://pass-word-generator-eight.vercel.app/"} target={"_blank"}>
                            <img src={prj3}/>
                        </a>
                        <label>Password Generator</label>
                    </button>
                    <button id={"btn-4"}>
                        <a href={"https://dxfuryman.github.io/new-portfolio2/"} target={"_blank"}>
                            <img src={prj1}/>
                        </a>
                        <label>Personal Portfolio (OlD)</label>
                    </button>
                    {/* Add more buttons as needed */}
                </div>
            </div>
        </>
    )
}

