//implement useEffect here to render once  a time 
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function brandLogos() {
    const nextIcon = '<img class="px-3" src="images/arrow-left.svg" alt="right icon">'
    const prevIcon = '<img src="images/arrow-right.svg" alt="right icon">'
    const options = {
        center: true,
        margin: 10,
        dots: false,
        responsiveClass: true,
        navText: [
            nextIcon,
            prevIcon
        ],
        responsive: {
            0: {
                items: 2,
                nav: true,
                startPosition: 1,
            },
            600: {
                items: 3,
                nav: true,
                startPosition: 1,
            },
            992: {
                items: 6,
                responsive: false,
                center: false
            }
        }
    }
    return (
        <OwlCarousel className='owl-theme container' {...options}>
            <div className="item">
                <img src="./images/team logo/logo 01.png" alt="logo-01" />
            </div>

            <div className="item">
                <img src="./images/team logo/logo 04.png" alt="logo-04" />
            </div>

            <div className="item">
                <img src="./images/team logo/logo 05.png" alt="logo-05" />
            </div>

            <div className="item">
                <img src="./images/team logo/logo 02.png" alt="logo-02" />
            </div>

            <div className="item">
                <img src="./images/team logo/logo 03.png" alt="logo-03" />
            </div>

            <div className="item">
                <img src="./images/team logo/logo 06.png" alt="logo-06" />
            </div>
        </OwlCarousel>


    );

}
export default brandLogos;