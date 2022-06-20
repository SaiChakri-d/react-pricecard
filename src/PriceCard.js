import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

function PriceCard({ data }){ //Object destructuring concept
    return(
        <>
       <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {data.title}
            </h5>
            <h6 className="card-price text-center">
              ${data.price}
              <span className="period">/month</span>
            </h6>
            <hr/>
            <ul className="fa-ul">
            {data.features.map((list)=>{
                    return (
                    <li className={list.isEnabled ? '' : 'text-muted'}>
                            <span>
                            {list.isEnabled ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faTimes}/>}
                            &nbsp;&nbsp;{list.name}
                            </span>
                    </li>  
                   );
              })}
            </ul>
        <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
        </div>
        </div>
        </div>
      </div>
      </>
    );
}

export default PriceCard;