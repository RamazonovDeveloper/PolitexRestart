import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import search from '../../../assets/images/navSearch.png'
import tog from '../../../assets/images/navTog.png'
import { navbarData } from '../../../Data/utils';
import Sitemap from './siteMap';
import './style.scss'
import Toggler from './toggler';

const Navbar = ({open, setopen}) => {

    const navigate = useNavigate()

    useEffect(()=>{
        console.log('Appp state nav is changed !!!')
        if(!open){
            setSingleMenu('')
        }
    },[open])

    // const [props, setSingleMenu] = useState('')
    const [singleMenu, setSingleMenu] = useState('')
    const [navLinkChanged, setNavLinkChanged] = useState(true)

    const navLinkOnclick = (link) => {
        console.log("Link bu   :   "+link)
        console.log(navbarData[link])

        setSingleMenu(navbarData[link])
        setopen(navbarData[link])
        // console.log('single menu bosildi' + singleMenu)
    }

    // const navigate = useNavigate()
    
    return (
        <div className='myNavbar'>
            <div className='myNav'>
                <div className='myNav__search'>
                    <img onClick={() => {setSingleMenu('')}} src={search} alt="" />
                </div>
                <ul className='myNav__menu'>
                    {/* <li onClick={() => {navLinkOnclick('tuzilma'); navigate('/tuzilma')}}>Tuzilma Fake</li> */}
                    <li onClick={() => {navLinkOnclick('universitet')
                    setNavLinkChanged(true)}} className='myNav__menu__item'><Link to={'/universitet'}>Universitet</Link></li>
                    <li onClick={() => {navLinkOnclick('tuzilma')
                    setNavLinkChanged(true)}} className='myNav__menu__item'><Link to={'/tuzilma'}>Tuzilma</Link></li>
                    <li onClick={() => {
                        navLinkOnclick('faoliyat') 
                        setNavLinkChanged(true)}
                        } 
                        className='myNav__menu__item'><NavLink to={'/faoliyat'}>Faoliyat</NavLink></li>
                    
                    <li onClick={() => {setSingleMenu('')}}  className='myNav__menu__item'><Link to={'/talabalar'}>Talabalar</Link></li>
                    <li className='myNav__menu__item'><Link to={'/ilmiy'}>Ilmiy Faoliyat</Link></li>
                    <li onClick={() => {navLinkOnclick('abituriyent')
                    setNavLinkChanged(true)}}  className='myNav__menu__item'><Link to={'/abituriyent'}>Abituriyent</Link></li>
                    <li  onClick={() => {navLinkOnclick('korrupsiya')
                    setNavLinkChanged(true)}} className='myNav__menu__item'><Link to={'/korrupsiya'}>Korrupsiyasiz soha</Link></li>
                    <li onClick={() => {navLinkOnclick('yangiliklar')
                    setNavLinkChanged(true)}} className='myNav__menu__item'><Link to={'/yangiliklar'}>Yangiliklar</Link></li>


                    {/* <li onClick={() => {
                        navLinkOnclick('faoliyat') 
                        setNavLinkChanged(true)}
                        } 
                        className={(isActive) => {return(isActive ? 'myNav__menu__item active' : 'myNav__menu__item')}}><NavLink to={'/faoliyat'}>Faoliyat</NavLink></li>  */}


                    {/* onClick={() => {navLinkOnclick('tuzilma')}} */}
                    {/* <li className='myNav__menu__item'><Link onClick={navLinkOnclick} to={'/tuzilma'}>Tuzilma</Link></li>
                    <li className='myNav__menu__item'><Link to={'/universitet'}>Universitet</Link></li>
                    <li className='myNav__menu__item'><Link to={'/talablar'}>Talabalar</Link></li>
                    <li className='myNav__menu__item'><Link to={'/ilmiy'}>Ilmiy Faoliyat</Link></li>
                    <li className='myNav__menu__item'><Link to={'/abituriyent'}>Abituriyent</Link></li>
                    <li className='myNav__menu__item'><Link to={'/korrupsiya'}>Korrupsiyasiz soha</Link></li>
                    <li className='myNav__menu__item'><Link to={'/yangiliklar'}>Yangiliklar</Link></li> */}
                </ul>
                <div className='myNav__toggle' onClick={()=>{navigate('/siteMap')}}>
                    <img src={tog} alt="" />
                </div>
            </div>
            <div>
                {
                    singleMenu ? <Toggler isChanged={navLinkChanged} setIsChanged={setNavLinkChanged} props={singleMenu}/> : ''
                }
            </div>
        </div>

    );
}

const Modal = () => {
    return <div>
        <Sitemap/>
    </div>
}


export default Navbar;
