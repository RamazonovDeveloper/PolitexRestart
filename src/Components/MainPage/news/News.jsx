import React, { useState, useEffect } from 'react';
// import {  } from 'react';
import '../TitleStyle.scss'
import './News.scss'
import photo from '../../../assets/images/newsPhoto.png'
import logo from '../../../assets/icons/newsLogo2.svg'
// import axios from 'axios';


const News = () => {


    const [top, setTop] = useState([])

    // https://politexapi.na4u.ru/api/news\\May2022\\pFCFX9ddX9qs0xGbK2dx.png

    useEffect(() => {
        const myFunc = async() => {
            const topProm = await fetch('https://politexapi.na4u.ru/api/news')
            
            const promJson = await topProm.json()
            console.log(promJson)
    
            console.log('res bu  ',promJson)
    
            setTop(promJson.data)
    
    
            // fetch('https://omdbapi.com/?i=tt3896198&apikey=4b545227&s=iron')
            // .then(res => res.json())
            // .then(res => {console.log('res bu  ',res)})
            // .then(res => {setTop(res)})
            // .catch(err => {console.log(err)})
    
        }

        myFunc()    
    },[])
    
    console.log('top bu  ' ,top)


    // let [state, setState] = useState([])

    // useEffect(return async () => {
    //     const prom = await fetch('https://politexapi.na4u.ru/api/news')
    //     const promJson = await prom.json()

    //     console.log('promJson  b u : : ', promJson);

    //     setState(promJson)
    // })

    // console.log('state bu  :  ', state);

    // axios.get('https://politexapi.na4u.ru/api/news')
    //     .then(res => {
    //         console.log(res)
    //         result = res
    //     })
    //     .then(res => {
    //         setState(res)
    //     })

    // console.log('myData is ::')
    // console.log(myData)
    // console.log('state = = = = ');
    // console.log(state);

        //     result = new Promise(async(resolve, reject) => {
        //         let res  = await fetch('https://politexapi.na4u.ru/api/news')
        //         let last = await res.json()
        //         // resolve('Successfull')
        //         resolve(last)
        //         reject('Something went wrong  !!!')
    
        //         console.log('last is  :  ');
        //         console.log(last);
        //     })




        // console.log('Result is :  ');
        // console.log(result);
        // // console.log(result.json().data);

        // myData = async () => {
        //     return await result.json()
        // }

        // console.log('Result is after func :  ');
        // console.log(myData);

        // console.log('yourData is  ::   ');
        // console.log(yourData);
        
        // let last = result.json()
        // console.log(last.data);
        // myData = last.data

        // myData = result
    


    // console.log('mydata is  :  ');
    // console.log(myData);
    // console.log('result is  :  ');
    // console.log(result);


    // useEffect(() => {
    //     fetch('https://politexapi.na4u.ru/api/news')
    //     .then(res => res.json())
    //     .then(res => {result = res})
    //     .catch(err => {console.log(err)})
    //     console.log(result)
    // },[]);

    // console.log(result)

    return (
        <div className='news'>
            <div className='section__title'>
                <div className="section__title__container myContainer">
                    <h4 className='section__title__container__text'>Yangiliklar va e’lonlar</h4>
                    <button className='section__title__container__link'>
                        Barchasini ko’rish
                        <span></span>
                    </button>
                </div>
            </div>
            <div className="news__box myContainer">
            {/* https://politexapi.na4u.ru/public/storage/news//May2022//rHVHGXqHqzvuHXr2P477.png 
            
            'https://politexapi.na4u.ru/public/storage/'+top[0].image_2
            */}


            {/* {
                top.map((index, element) => {
                    console.log(index);
                    return <div className="news__box__card">
                        <img className='news__box__card__img' src={'https://politexapi.na4u.ru/public/storage/'+index.image_2} alt="" />
                        <div className='news__box__card__logo'>
                            <img src={logo} alt="" />
                            <p>Toshkent Davlat Texnika Universiteti</p>
                        </div>
                        <div className='news__box__card__texts'>
                            <h4>
                                {index.title_uz}
                            </h4>
                            <p dangerouslySetInnerHTML={{__html:index.text_uz}}></p>
                            <div className='news__box__card__texts__bottom'>
                                <p>14:35  12.03.2022</p>
                                <button>
                                    <p>Batafsil</p>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                })
            } */}

            {
                top.map((index, element) => {
                    console.log(index);
                    const time = index.created_at
                    const timeFormat = new Date(time)
                    let myTime = ''
                    myTime += timeFormat.getHours()
                    myTime += ':'
                    myTime += timeFormat.getMinutes()
                    myTime += '     '
                    // myTime += '  '
                    myTime += timeFormat.getDate()
                    myTime += '.'
                    if(timeFormat.getMonth() < 10){
                        myTime += '0'+timeFormat.getMonth()
                    }
                    else{
                        myTime += timeFormat.getMonth()

                    }
                    myTime += '.'
                    myTime += timeFormat.getFullYear()
                    myTime += ''
                    // myTime = myTime,timeFormat.getTime
                    // myTime = myTime,timeFormat.getDate
                    console.log('date is :   ',timeFormat);
                    console.log('myTime is :   ',myTime);
                    return <div className="news__box__card">
                        <img className='news__box__card__img' src={'https://politexapi.na4u.ru/public/storage/'+index.image_2} alt="" />
                        <div className='news__box__card__logo'>
                            <img src={logo} alt="" />
                            <p>Toshkent Davlat Texnika Universiteti</p>
                        </div>
                        <div className='news__box__card__texts'>
                            <h4>
                                {index.title_uz}
                            </h4>
                            <p dangerouslySetInnerHTML={{__html:index.text_uz}}></p>
                            <div className='news__box__card__texts__bottom'>
                                <p>{myTime}</p>
                                <button>
                                    <p>Batafsil</p>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                })
            }

            
{
                top.map((index, element) => {
                    console.log(index);
                    const time = index.created_at
                    const timeFormat = new Date(time)
                    let myTime = ''
                    myTime += timeFormat.getHours()
                    myTime += ':'
                    myTime += timeFormat.getMinutes()
                    myTime += '     '
                    // myTime += '  '
                    myTime += timeFormat.getDate()
                    myTime += '.'
                    if(timeFormat.getMonth() < 10){
                        myTime += '0'+timeFormat.getMonth()
                    }
                    // Salom Azizbek
                    else{
                        myTime += timeFormat.getMonth()

                    }
                    myTime += '.'
                    myTime += timeFormat.getFullYear()
                    myTime += ''
                    // myTime = myTime,timeFormat.getTime
                    // myTime = myTime,timeFormat.getDate
                    // console.log('date is :   ',timeFormat);
                    // console.log('myTime is :   ',myTime);
                    return <div className="news__box__card">
                        <img className='news__box__card__img' src={'https://politexapi.na4u.ru/public/storage/'+index.image_2} alt="" />
                        <div className='news__box__card__logo'>
                            <img src={logo} alt="" />
                            <p>Toshkent Davlat Texnika Universiteti</p>
                        </div>
                        <div className='news__box__card__texts'>
                            <h4>
                                {index.title_uz}
                            </h4>
                            <p dangerouslySetInnerHTML={{__html:index.text_uz}}></p>
                            <div className='news__box__card__texts__bottom'>
                                <p>{myTime}</p>
                                <button>
                                    <p>Batafsil</p>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                })
            }



            {/* <div className="news__box__card">
                    <img className='news__box__card__img' src={'https://politexapi.na4u.ru/public/storage/'+top[0].image_2} alt="" />
                    <div className='news__box__card__logo'>
                        <img src={logo} alt="" />
                        <p>Toshkent Davlat Texnika Universiteti</p>
                    </div>
                    <div className='news__box__card__texts'>
                        <h4>
                            {top[0].title_uz}
                        </h4>
                        <p dangerouslySetInnerHTML={{__html:top[0].text_uz}}></p>
                        <div className='news__box__card__texts__bottom'>
                            <p>14:35  12.03.2022</p>
                            <button>
                                <p>Batafsil</p>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="news__box__card">
                    <img className='news__box__card__img' src={'https://politexapi.na4u.ru/public/storage/news//May2022//rHVHGXqHqzvuHXr2P477.png' }/>
                    <div className='news__box__card__logo'>
                        <img src={logo} alt="" />
                        <p>Toshkent Davlat Texnika Universiteti</p>
                    </div>
                    <div className='news__box__card__texts'>
                        <h4>
                            {top[0].title_uz}
                        </h4>
                        <p dangerouslySetInnerHTML={{__html:top[0].text_uz}}></p>
                        <div className='news__box__card__texts__bottom'>
                            <p>14:35  12.03.2022</p>
                            <button>
                                <p>Batafsil</p>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="news__box__card">
                    <img className='news__box__card__img' src={photo} alt="" />
                    <div className='news__box__card__logo'>
                        <img src={logo} alt="" />
                        <p>Toshkent Davlat Texnika Universiteti</p>
                    </div>
                    <div className='news__box__card__texts'>
                        <h4>
                            salom
                        </h4>
                        <p>
                            alik
                        </p>
                        <div className='news__box__card__texts__bottom'>
                            <p>14:35  12.03.2022</p>
                            <button>
                                <p>Batafsil</p>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div> */}



                {/* <div dangerouslySetInnerHTML={{__html:top[0].text_uz}}></div> */}




                {/* <div className="news__box__card">
                    <img className='news__box__card__img' src={photo} alt="" />
                    <div className='news__box__card__logo'>
                        <img src={logo} alt="" />
                        <p>Toshkent Davlat Texnika Universiteti</p>
                    </div>
                    <div className='news__box__card__texts'>
                        <h4>
                            TDTU va hamkor OTMlar rahbariyati hamda o'qishlarini ikkinchi bosqichini Minsk shahrida davom ettirayotgan talabalar bilan onlayn-uchrashuv o'tkazildi!
                        </h4>
                        <p></p>
                        <div className='news__box__card__texts__bottom'>
                            <p>14:35  12.03.2022</p>
                            <button>
                                <p>Batafsil</p>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="news__box__card">
                    <img className='news__box__card__img' src={photo} alt="" />
                    <div className='news__box__card__logo'>
                        <img src={logo} alt="" />
                        <p>Toshkent Davlat Texnika Universiteti</p>
                    </div>
                    <div className='news__box__card__texts'>
                        <h4>
                            TDTU va hamkor OTMlar rahbariyati hamda o'qishlarini ikkinchi bosqichini Minsk shahrida davom ettirayotgan talabalar bilan onlayn-uchrashuv o'tkazildi!
                        </h4>
                        <p></p>
                        <div className='news__box__card__texts__bottom'>
                            <p>14:35  12.03.2022</p>
                            <button>
                                <p>Batafsil</p>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="news__box__card">
                    <img className='news__box__card__img' src={photo} alt="" />
                    <div className='news__box__card__logo'>
                        <img src={logo} alt="" />
                        <p>Toshkent Davlat Texnika Universiteti</p>
                    </div>
                    <div className='news__box__card__texts'>
                        <h4>
                            TDTU va hamkor OTMlar rahbariyati hamda o'qishlarini ikkinchi bosqichini Minsk shahrida davom ettirayotgan talabalar bilan onlayn-uchrashuv o'tkazildi!
                        </h4>
                        <p></p>
                        <div className='news__box__card__texts__bottom'>
                            <p>14:35  12.03.2022</p>
                            <button>
                                <p>Batafsil</p>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div> */}








                {/* <div className="news__box__card">
                    <img src={photo} alt="" />
                    <div className='news__box__card__logo'>
                        <img src={logo} alt="" />
                        <p>Toshkent Davlat Texnika Universiteti</p>
                    </div>
                    <div className='news__box__card__texts'>
                        <h4>
                            TDTU va hamkor OTMlar rahbariyati hamda o'qishlarini ikkinchi bosqichini Minsk shahrida davom ettirayotgan talabalar bilan onlayn-uchrashuv o'tkazildi!
                        </h4>
                        <p></p>
                        <div className='news__box__card__texts__bottom'>
                            <p>14:35  12.03.2022</p>
                            <button>
                                <p>Batafsil</p>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default News;
