import React from "react";
import './List.css';
import photo1 from '../../assets/Anti-Wrinkle.jpg'; 
import photo2 from '../../assets/2209c238aec6aa9d73c21f3f627aa4f7.jpg'; 
import photo3 from '../../assets/rf-tech.png'; 
import photo4 from '../../assets/AdobeStock_192759680-1-1024x714.jpg'; 
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
const List = () =>{
    const number ="02077959063";
    return(
        <div>
        <div className="container">
        <ul className="list">
          <Link className="link" to="/cc">
          <li>
            
            <img className="list-photo" src={photo1} alt="Photo 1" />
            <span>Anti Wrinkle Treatment</span>
            <span className="list-arrow">&#62;</span>
           
          </li>
          </Link>
          <Link className="link" to="/cc2">
          <li>
            <img className="list-photo" src={photo2} alt="Photo 2" />
            <span>Dermal Fillers</span>
            <span className="list-arrow">&#62;</span>
          </li>
          </Link>
          <Link className="link" to="/cc3">
          <li>
            <img className="list-photo" src={photo3} alt="Photo 3" />
            <span>Secret RF</span>
            <span className="list-arrow">&#62;</span>
          </li>
          </Link>
          <Link className="link" to="/cc4">
          <li>
            <img className="list-photo" src={photo4} alt="Photo 4" />
            <span>Facials</span>
            <span className="list-arrow">&#62;</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="container2">
        <p>Not sure about consultation type?Please,call <p className="number">{number}</p></p>
      </div>
      </div>

    )
}

export default List;