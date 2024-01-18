import React from 'react';
import './FlipCard.css';  // Assurez-vous d'ajuster le chemin selon votre structure de projet


const FlipCard = () => {
    return (
       <div className=" mt-5 py-4 col-lg-6 m-auto row">
            <div className=" m-auto flip-container">
            <div className="flipper">
                <div className="front">
                {/* Contenu avant (image) */}
                <img style={{borderRadius:'50px'}} src="https://images.hdqwalls.com/wallpapers/gabrielle-bernstein-motivational-speaker-nh.jpg" alt="Image avant" />
                </div>
                <div style={{borderRadius:'50px'}} className="back">
                <p>Contenu arrière</p>
                </div>
            </div>
            </div>
            <div className=" m-auto flip-container">
            <div className="flipper">
                <div className="front">
                {/* Contenu avant (image) */}
                <img style={{borderRadius:'50px'}} src="https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwd2l0aCUyMG1vbmV5fGVufDB8fDB8fHww" alt="Image avant" />
                </div>
                <div style={{borderRadius:'50px'}} className="back">
                <p>Contenu arrière</p>
                </div>
            </div>
            </div>
            <div className=" m-auto flip-container">
            <div className="flipper">
                <div  className="front">
                {/* Contenu avant (image) */}
                <img style={{borderRadius:'50px'}} src="https://cdn.create.vista.com/api/media/small/377222876/stock-photo-selective-focus-man-reading-book-couch-home" alt="Image avant" />
                </div>
                <div style={{borderRadius:'50px'}} className="back">
                <p>Contenu arrière</p>
                </div>
            </div>
            </div>
        </div>
      );
}

export default FlipCard;
