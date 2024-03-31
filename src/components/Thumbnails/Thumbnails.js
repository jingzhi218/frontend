import React from 'react'
import classes from './Thumbnails.module.css'
import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import Price from '../Price/Price';

export default function Thumbnails({foods}) {
  return (
    <ul className={classes.list}>
        {        
            foods.map(food => (
            <li key={food.id}>
                <Link to={`/food/${food.id}`}>
                    <img
                    className={classes.image}
                    src={`${food.imageUrl}`}
                    alt={food.name}></img>
                
                <div className={classes.content}>
                  <div className={classes.name}>{food.name}</div>
                  <span className={`${classes.favorite} ${food.favorite ? '' : classes.not}`}>
                  ❤
                  </span>
                  <div className={classes.stars}>
                    <StarRating stars={food.stars}/>
                  </div>
                  <div className={classes.product_item_footer}>
                    <div className={classes.origins}>
                      {food.origins.map(origin => (
                        <span key={origin}>{origin}</span>
                      ))}
                    </div>
                    <div className={classes.wait_time}>
                      <span>🕒</span>
                      {food.waitTime}
                    </div>
                  </div>
                  <div className={classes.price}>
                    <Price price={food.price}/>
                  </div>
                </div>
                </Link>
            </li>
        ))}
    </ul>
  );
}
