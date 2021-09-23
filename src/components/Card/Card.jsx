import React, {useEffect, useState} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Heart from '../../assets/icons/heart.svg';
import FullHeart from '../../assets/icons/full.svg';
import '../../reset/reset.css';
import '../../css/style.css';

const Card = (props) => {
  const [heart, setHeart] = useState(Heart);
  useEffect(() => {
    Aos.init({
      duration:1000,
      delay: 500
    });
  }, [])

  return (
    <section className="card-container">
      <div data-aos="fade-right" className="card-container card">
        <div className="card__info-top">
          <span className="card__data">{props.data}</span>
          <img onMouseEnter={()=>{setHeart(FullHeart)}} 
            onMouseOut={()=>{setHeart(Heart)}}
          alt=""
          className="card__heart-logo" 
          src={heart}/>
        </div>
        <h1 className="card__titulo">{props.titulo}</h1>
        <p className="card__texto">{props.texto}</p>
      </div>
    </section>
  )
}
export default Card
