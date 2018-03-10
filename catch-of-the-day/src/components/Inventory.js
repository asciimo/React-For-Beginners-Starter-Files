import React from 'react';
import AddVegForm from './AddVegForm';

class Inventory extends React.Component{
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddVegForm />
      </div>
    );
  }
}

export default Inventory;
