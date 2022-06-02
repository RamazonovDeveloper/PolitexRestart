import React from 'react';
import './siteMap.scss'
import Top from '../topMenu/Top'
import logo from '../../../assets/icons/siteMapLogo.svg'
import close from '../../../assets/icons/siteMapClose.svg'

const Sitemap = () => {
    return (
        <div className='siteMap'>
            <Top/>
            <div className='siteMap__top container'>
                <div>
                    <img src={logo} alt="" />
                    <h3>Islom Karimov nomidagi Toshkent Davlat Texnika Universiteti</h3>
                </div>
                <p>Universitet shiori</p>
            </div>
            <ul className='siteMap__mid container'>
                <div>
                    <li>Bog’lanish</li>
                    <li>Qabul 2022</li>
                    <li>Elektron Kutubhona</li>
                    <li>Moliyaviy Faoliyat</li>
                    <li>Grand loyihalar</li>
                    <li>Tayyorlov kursi</li>
                    <li>Bog’lanish</li>
                    <li>En</li>
                    <li><img src={close} alt="" /></li>
                </div>
            </ul>
            <div className='siteMap__bot container'>
                <ul>
                    <li>Universitet</li>
                    <li>Universitet</li>
                    <li>Universitet</li>
                    <li>Universitet</li>
                </ul>
                <ul>
                    <li>Tuzilma</li>
                    <li>Universitet</li>
                    <li>Universitet</li>
                    <li>Universitet</li>
                </ul>
                <ul>
                    <li>Faoliyat</li>
                    <li>Universitet</li>
                    <li>Universitet</li>
                    <li>Universitet</li>
                </ul>
                <ul>
                    <li>Talabalar</li>
                    <li>Universitet</li>
                    <li>Universitet</li>
                    <li>Universitet</li>
                </ul>
                <ul>
                    <li>Ilmiy Faoliyat</li>
                    <li>Universitet</li>
                    <li>Universitet</li>
                    <li>Universitet</li>
                </ul>
                <ul>
                    <li>Abituriyent</li>
                    <li>Universitet</li>
                    <li>Universitet</li>
                    <li>Universitet</li>
                </ul>
                <ul>
                    <li>Korrupsiyasiz soha</li>
                    <li>Universitet</li>
                    <li>Universitet</li>
                    <li>Universitet</li>
                </ul>
                <ul>
                    <li>Yangiliklar</li>
                    <li>Universitet</li>
                    <li>Universitet</li>
                    <li>Universitet</li>
                </ul>
            </div>
        </div>

    );
}

export default Sitemap;
