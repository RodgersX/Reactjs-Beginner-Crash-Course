import React from 'react'

import classes from './Topbar.module.css'

const Topbar = () => {
    return(
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png" alt="Amazon Prime"></img>
        </nav>
      </header>
    )
}

export default Topbar