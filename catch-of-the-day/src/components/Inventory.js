import React from 'react';
import AddVegForm from './AddVegForm';

class Inventory extends React.Component{
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddVegForm addVeg={this.props.addVeg} />
	<button onClick={this.props.loadSampleData}>Load Sample Data</button>
      </div>
    );
  }
}

export default Inventory;
