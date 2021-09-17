import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HeartLogo from '../../assets/icons/heart.svg';
import '../../reset/reset.css';
import '../../css/style.css';


const Card = (props) => {
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
          <img 
          onMouseOver={e =>(e.currentTarget.src="/static/media/heart_full.e0e2f892.svg")}
          onMouseOut={e =>(e.currentTarget.src="/static/media/heart.5efc8d5a.svg")}
          className="card__heart-logo" 
          src={HeartLogo}/>
        </div>
        <h1 className="card__titulo">{props.titulo}</h1>
        <p className="card__texto">{props.texto}</p>
      </div>
    </section>
  )
}
export default Card
