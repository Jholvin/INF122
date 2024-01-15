import React from "react";
import ../styles/Evento.css;
function EventoC({image,title,dateLite})
    return(
        <div className="card-container">

            <img className="card-image" src={require(`../images/${image}.jpeg`)} alt="Foto del Evento"></img>
                
                

            <div className="card-content">
                <h2 className="card-title"{title}></h2>
                <p className="card-date"{dateLiteral}></p>
                <p className="card-place"{placeLiteral}></p>
                {description.map((line, index)
                =>   (<p className="card-description">
                    {line}</p>))}
        </div>
    </div>
    )