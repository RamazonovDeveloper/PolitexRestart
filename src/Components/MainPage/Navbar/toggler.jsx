import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './toggler.scss'

import menuVector from '../../../assets/icons/menu-vector.svg'
// import menuVectorHover from '../../img/menu-vector-hover.svg'
// import togBack from '../../img/nav-tog-bac.svg'


const Toggler = ({props, isChanged, setIsChanged}) => {
    // console.log("Togglerga kirgan props bu   :   " + props)
    

    const [second, setSecond] = useState('')
    // const [hover, setHover] = useState(false)

// {props ? 'toggle toggle--active' : ''}
    
    return (
            <div className="toggle toggle--active">
                <div className='toggle__text'>
                    <h3>{props.title}</h3>  
                    <p>{props.text}</p>
                </div>
                <ul className='toggle__menu'>
                    {
                        (props.menu).map((item, index) => {
                            return <li onClick={() => {setSecond(JSON.stringify(item));setIsChanged(false)}} key={index}>{item.menu_name}{item.menu_links.length > 0 ?  <img src={menuVector}/> : ''}</li>
                        })
                    }
                </ul>
                <ul className='toggle__menu'>
                    {
                        second && !isChanged ? 
                        (JSON.parse(second).menu_links).map((item, index) => {
                            return <li key={index}>{item.link_name}</li>
                        }) 
                        : ''
                        
                        // (JSON.parse(menuClikked).menu_links).map((item, index) => {
                        //     return <li key={index}>{item.link_name}</li>
                        // })
                    }
                </ul>
            </div>
    );
}

export default Toggler;
