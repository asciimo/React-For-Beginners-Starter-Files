import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {

  state = {
    vegs: {},
    order: {}
  };

  addVeg = (veg) => {
    console.log('Adding a veg.');
  };

  render() {
	  return (
      <div className="veg-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Vegetable Market" />
        </div>
        <Order />
        <Inventory addVeg={this.addVeg} />
      </div>
    )
  }

}

export default App;
