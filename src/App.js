import React, { Component } from 'react';
import Arbre from './Components/Arbre';
import Cloud from './Components/Cloud';
import TourEiffel from './Components/TourEiffel';
import Louvre from './Components/Louvre';
import ArcTriomphe from './Components/ArcTriomphe';
import Personnage from './Components/Personnage';
import Fusee from './Components/Fusee';
import './App.css';

class App extends Component {
    componentDidMount() {
        let arbre = document.getElementById("arbre");
        let cloud = document.getElementById("cloud");
        let tourEiffel = document.getElementById("tourEiffel");
        let louvreContainer = document.getElementById("louvreContainer");
        let arcTriompheContainer = document.getElementById("arcTriompheContainer");
        let fusee = document.getElementById("fuseeContainer");

        let objets = {
            cloud: {
                element: cloud,
                posX: 128,
                posY: 42,
                parallaxFactor: 0.05
            },
            arbre: {
                element: arbre,
                posX: 312,
                posY: 25,
                parallaxFactor: 0.50
            },
            tourEiffel: {
                element: tourEiffel,
                posX: 800,
                posY: 129,
                parallaxFactor: 0.50
            },
            louvre: {
                element: louvreContainer,
                posX: 1100,
                posY: 129,
                parallaxFactor: 0.50
            },
            arcTriomphe: {
                element: arcTriompheContainer,
                posX: 1700,
                posY: 129,
                parallaxFactor: 0.50
            },
            fusee: {
                element: fusee,
                posX: 2100,
                posY: 129,
                parallaxFactor: 0.50
            }
        };

        window.addEventListener('scroll', function(e) {
            for (let objet in objets) {
                let yourDivPositionX = objets[objet].parallaxFactor * (0.5 * window.innerWidth - window.scrollY) + objets[objet].posX;
                objets[objet].element.style.left = yourDivPositionX + "px";
            }
        });
    }
  render() {
    return (
      <div className="App">
          <div id="container">
              <Personnage />
              <div className={'layer'} id="layer-1">
                  <Cloud
                      id={'cloud'}
                      positionX={128}
                      positionY={390}
                  />
              </div>
              <div className={'layer'} id="layer-2">
                  <Arbre
                      id={'arbre'}
                      positionX={312}
                      positionY={122}
                  />
                  <TourEiffel
                      id={'tourEiffel'}
                      positionX={800}
                      positionY={129}
                  />
                  <Louvre
                      id={'louvreContainer'}
                      positionX={900}
                      positionY={129}
                  />
                  <ArcTriomphe
                      id={'arcTriompheContainer'}
                      positionX={1000}
                      positionY={129}
                  />
                  <Fusee
                      id={'fuseeContainer'}
                      positionX={1100}
                      positionY={0}
                  />
              </div>
              <div id="sol">
                  <div className={'terre'}></div>
                  <div className={'herbe'}></div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
