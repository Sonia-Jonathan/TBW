import React, { useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

function UniqueTitles(props) {
    useEffect(() => {
        function initWaveSurfer() {
            const wavesurfer = WaveSurfer.create({
                container: '#waveform',
                backend: 'WebAudio',
                barWidth: 3,
                barHeight: 1,
                barGap: null,
                height: 100,
                progressColor: '#007bff',
                responsive: true,
            });

            wavesurfer.load('../../../asset/Audio/Metro.mp3');

            // Lancer la lecture automatiquement
            wavesurfer.on('ready', function () {
                wavesurfer.play();
            });
        }

        // Appeler la fonction d'initialisation une fois que le DOM est prêt
        document.addEventListener('DOMContentLoaded', initWaveSurfer);
    }, []);

    return (
        <div>
            <div id="waveform"></div>
            {/* Retirer l'élément audio s'il n'est pas nécessaire pour ce test */}
        </div>
    );
}

export default UniqueTitles;
