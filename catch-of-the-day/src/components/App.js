import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import SampleData from '../sample-data';

class App extends React.Component {

  state = {
    vegs: {},
    order: {}
  };

  addVeg = (veg) => {
    const vegs = { ...this.state.vegs };
    vegs[`veg${Date.now()}`] = veg;
    this.setState({ vegs });
  };

  loadSampleData = () => {
    this.setState({ ...SampleData });
  }

  render() {
    return (
      <div className="veg-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Vegetable Market" />
        </div>
        <Order />
        <Inventory addVeg={this.addVeg} loadSampleData={this.loadSampleData} />
      </div>
    )
  }

}

export default App;
