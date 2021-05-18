import React from 'react'

import classes from './ProductPreview.module.css'

const ProductPreview = props => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()

    return(
        <div className={classes.ProductPreview}>
          <img src={props.currentPreviewImage} alt="Product Preview"></img>
            { 
              props.currentSelectedFeature === 1 ?
              <section className={classes.HeartBeatSection}>
                <i className="fas fa-heartbeat"></i>
                <p>78</p>
              </section> :
              <section className={classes.TimeSection}>
                <p>{ `${currentHour}:${currentMinute}` }</p>
              </section>
            }
        </div>
    )
}

export default ProductPreview