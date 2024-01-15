import React from "react";

function Evento() {
    return (
        <div className="card-container">

            <img className="card-image"
                src={require("../images/miku-icon.jpg")}
                alt="foto del evento" />

            <div className="card-content">
                <h2 className="card-title">Py pizza 03 - PyPuzzle</h2>
                <p className="card-date">09 de Diciembre de 2023 - 13:30 GMT-4</p>
                <p className="card-place">Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa</p>
                <p className="card-description">Hola pythonista dheaaa
                participa en este evento prescencial de la comunidad de python La Paz
                porque puede y quieres y no se que mas esto ya es relleno xD
                </p>

            </div>    
            
                  
        </div>
        

        

        

        
    );
}

export default Evento; 