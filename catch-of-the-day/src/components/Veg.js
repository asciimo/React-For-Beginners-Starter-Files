import React from 'react';
import { formatPrice } from '../helpers'


class Veg extends React.Component{

  handleClick = () => {
    this.props.addToOrder(this.props.index);
  }

  render() {
    const {image, name, desc, price, status} = this.props.details;
    const isAvailable = status === "available";

    return (
      <li className="menu-veg">
      <img src={image} alt={name} />
      <h3 className="veg-name">
        {name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button disabled={!isAvailable} onClick={this.handleClick}>
      {isAvailable ? 'Add to order' : 'Sold out'}</button>
      </li>
    )
  }
}

export default Veg;
