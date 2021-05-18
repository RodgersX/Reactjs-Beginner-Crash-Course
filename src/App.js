import React, { Component } from 'react'

import classes from './App.module.css'
import ProductDetails from './ProductDetails/ProductDetails'
import ProductPreview from './ProductPreview/ProductPreview'
import Topbar from './Topbar/Topbar'
import ProductData from './Utils/ProductData'

class App extends Component {
  state = {
    ProductData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0
  }

  onColorOptionCLick = pos => {
    this.setState({currentPreviewImagePos: pos})
  }

  onFeatureItemClick = pos => {
    this.setState({currentSelectedFeature: pos})
  }

  render() {
    return (
      <div className="App">
        <Topbar />

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview 
            currentPreviewImage={this.state.ProductData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
            currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>

          <div className={classes.ProductData}>
            <ProductDetails 
            onFeatureItemClick={this.onFeatureItemClick} 
            currentPreviewImagePos={this.state.currentPreviewImagePos} 
            data={this.state.ProductData} 
            onColorOptionClick={this.onColorOptionCLick}
            currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>

        </div>
      </div>
    ); 
  }
   
}

export default App;
