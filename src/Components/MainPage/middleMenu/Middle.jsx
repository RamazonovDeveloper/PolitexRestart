import React from 'react';
import logo from '../../../assets/icons/nav-logo.svg';
import uzBay from '../../../assets/icons/uzBay.svg'
import ruBay from '../../../assets/icons/ruBay.svg'
import enBay from '../../../assets/icons/enBay.svg'
// import flag from '../../../img/top-flag.svg'
// import lanVec from '../../../img/lanvec.svg'
// import { Button } from 'bootstrap';
// import Button from 'react-bootstrap/Button';
// import { Dropdown } from 'bootstrap';
// import { Button } from 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Middle.scss';
import { Dropdown } from 'react-bootstrap';

const Middle = () => {
    return (
        <div className='mid'>
            <div className=" mid__nav myContainer">
                <div className='mid__nav__logo'>
                    <img src={logo} alt="" />
                    Islom Karimov nomidagi Toshkent Davlat Texnika Universiteti
                </div>
                <ul className='mid__nav__menu'>
                    <li className='mid__nav__menu__item'>Moliyaviy Faoliyat</li>
                    <li className='mid__nav__menu__item'>Elektron Kutubhona</li>
                    <li className='mid__nav__menu__item'>Tayyorlov kursi</li>
                    <li className='mid__nav__menu__item'>Hemis</li>
                    <li className='mid__nav__menu__item'>
                    
                    <Dropdown className='myDrop'>
                        <Dropdown.Toggle className='mySelected' variant="success" id="dropdown-basic">
                            <img src={uzBay} alt="" /> Uz
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='myList'>
                            <Dropdown.Item className='myItem' href="#/action-1"><img src={uzBay} alt="" /> Uz</Dropdown.Item>
                            <Dropdown.Item className='myItem' href="#/action-2"><img src={ruBay} alt="" /> Ru</Dropdown.Item>
                            <Dropdown.Item className='myItem' href="#/action-3"><img src={enBay} alt="" /> En</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                    </li>
                    {/* <img src={flag} alt="" />UZ <img src={lanVec} alt="" /> */}
                    {/* <div className='lan-toggler'>
                        <ul className='lan-toggler-menus'>
                            <li className='lan-toggler-menus-item'><img src={flag} alt="" />EN</li>
                            <li className='lan-toggler-menus-item'><img src={flag} alt="" />RU</li>
                        </ul>
                    </div> */}
                </ul>
            </div>


            <style type="text/css">
                {`
                .btn-flat {
                background-color: purple;
                color: white;
                }

                .btn-xxl {
                padding: 1rem 1.5rem;
                font-size: 1.5rem;
                }
                `}
            </style>

            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

            <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossorigin></script>

            <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin></script>

            <script>var Alert = ReactBootstrap.Alert;</script>



            {/* <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

            <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossorigin></script>

            <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin></script>

            <script>var Alert = ReactBootstrap.Alert;</script> */}
        </div>
    );
}



export default Middle;
