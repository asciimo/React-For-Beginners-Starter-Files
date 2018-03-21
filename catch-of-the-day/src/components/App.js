import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import SampleData from '../sample-data';
import Veg from './Veg';
import base from '../base'
class App extends React.Component {

  state = {
    vegs: {},
    order: {}
  };

  componentDidMount() {
    const storeId = this.props.match.params.storeId;
    const localStorageRef = localStorage.getItem(storeId);

    this.ref = base.syncState(`${storeId}/vegs`, {
      context: this,
      state: 'vegs'
    });

    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef)});
    }

  }
  componentDidUpdate() {
    const storeId = this.props.match.params.storeId;
    console.log(this.state.order);
    localStorage.setItem(storeId, JSON.stringify(this.state.order));

  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

addVeg = (veg) => {
    const vegs = { ...this.state.vegs };
    vegs[`veg${Date.now()}`] = veg;
    this.setState({ vegs });
  };

  loadSampleData = () => {
    this.setState({ vegs: SampleData });
  }

  addToOrder = key => {
    // take a copy of state.
    const order = { ...this.state.order };
    // either add to the order, or update the number in the Order
    order[key] = order[key] + 1 || 1;
    // call setState to update our state object
    this.setState({ order });
};

  render() {
    return (
      <div className="veg-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Vegetable Market" />
          <ul className="vegs">
            {Object.keys(this.state.vegs).map(
              key => <Veg
                key={key}
                details={this.state.vegs[key]}
                index={key}
                addToOrder={this.addToOrder}
              />)
            }
          </ul>
        </div>
        <Order vegs={this.state.vegs} order={this.state.order} />
        <Inventory addVeg={this.addVeg} vegs={this.state.vegs} loadSampleData={this.loadSampleData} />
      </div>
    )
  }

}

export default App;
