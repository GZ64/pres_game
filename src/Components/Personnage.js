import React, { Component } from 'react';
import '../css/Personnage.css';

class Personnage extends Component {
    componentDidMount() {
        let personnage = document.getElementById('personnage');
        let lastScrollTop = 0;
        let lastScrollTop2 = 0;
        const debounce = (callback, delay) => {
            let timer = null;
            return () => {
                let context = this;
                let args = arguments;
                clearTimeout(timer);
                timer = setTimeout(() => {
                    callback.apply(context, args);
                }, delay);
            }
        };
        const throttle = (callback, delay) => {
            let last = 0;
            return () => {
                let now = +new Date();
                let context = this;
                let args = arguments;
                if (now > last + delay) {
                    callback.apply(context, args);
                    last = now;
                }
            }
        };
        window.addEventListener('scroll', debounce(() => {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop){
                // downscroll code
                console.log('down');
                personnage.classList.remove("personnage-gauche-repos");
                personnage.classList.remove("personnage-gauche-marche1");
                personnage.classList.remove("personnage-gauche-marche2");
                personnage.classList.remove("personnage-droite-marche1");
                personnage.classList.remove("personnage-droite-marche2");
                personnage.classList.add("personnage-droite-repos");
            } else {
                console.log('up');
                personnage.classList.remove("personnage-droite-repos");
                personnage.classList.remove("personnage-droite-marche1");
                personnage.classList.remove("personnage-droite-marche2");
                personnage.classList.remove("personnage-gauche-marche1");
                personnage.classList.remove("personnage-gauche-marche2");
                personnage.classList.add("personnage-gauche-repos");
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }, 400));
        let temoin = true;
        window.addEventListener('scroll', throttle(() => {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            personnage.classList.remove("personnage-droite-repos");
            personnage.classList.remove("personnage-gauche-repos");
            if (st > lastScrollTop2){
                // downscroll code
                console.log('down');
                if (temoin) {
                    personnage.classList.remove("personnage-gauche-marche1");
                    personnage.classList.remove("personnage-gauche-marche2");
                    personnage.classList.remove("personnage-droite-marche2");
                    personnage.classList.add("personnage-droite-marche1");
                    temoin = false;
                } else {
                    personnage.classList.remove("personnage-droite-marche1");
                    personnage.classList.add("personnage-droite-marche2");
                    temoin = true;
                }
            } else {
                console.log('up');
                if (temoin) {
                    personnage.classList.remove("personnage-droite-marche2");
                    personnage.classList.remove("personnage-droite-marche1");
                    personnage.classList.remove("personnage-gauche-marche2");
                    personnage.classList.add("personnage-gauche-marche1");
                    temoin = false;
                } else {
                    personnage.classList.remove("personnage-gauche-marche1");
                    personnage.classList.add("personnage-gauche-marche2");
                    temoin = true;
                }
            }
            lastScrollTop2 = st <= 0 ? 0 : st;
        }, 300));
    }
    render() {
        return (
            <div id={'personnage'} className={''}>

            </div>
        );
    }
}

export default Personnage;
