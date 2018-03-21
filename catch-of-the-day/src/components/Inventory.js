import React from 'react';
import AddVegForm from './AddVegForm';
import EditVegForm from './EditVegForm';

class Inventory extends React.Component{

  renderVegForms(vegs) {
    return Object.keys(vegs).map(key => {
      return <EditVegForm
        key={key}
        index={key}
        veg={vegs[key]}
        updateVeg={this.props.updateVeg}
      />
    })
  }

  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
          {this.renderVegForms(this.props.vegs)}
          <AddVegForm addVeg={this.props.addVeg} />
        	<button onClick={this.props.loadSampleData}>Load Sample Data</button>
        </div>
      );
    }
}

export default Inventory;
