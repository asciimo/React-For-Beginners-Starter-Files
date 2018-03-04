import React from 'react';
import { getFunName } from '../helpers';
import Router from './Router';

class StorePicker extends React.Component {

  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    const store = this.myInput.value.value;
    this.props.history.push(`/store/${store}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore} >
        <h2>Please enter a store</h2>
        <input
          ref={this.myInput}
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>

    )
  }

}

export default StorePicker;
