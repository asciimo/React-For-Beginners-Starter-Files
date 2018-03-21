import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component{

  renderOrder = key => {

    const veg = this.props.vegs[key];
    const count = this.props.order[key];
    const isAvailable = veg && veg.status === 'available';
    if (!veg) return null;

    if(!isAvailable) {
      return <li key={key}>Sorry, {veg.name} is no longer available</li>
    } else {
      return <li key={key}>{count} lbs {veg.name} {formatPrice(count * veg.price)}</li>
    }
  }

  render() {

    const orderIds = Object.keys(this.props.order);

    const total = orderIds.reduce((prevTotal, key) => {

      const veg = this.props.vegs[key];
      const count = this.props.order[key];

      const isAvailable = veg && veg.status === 'available';
      if (isAvailable) {
        return prevTotal + (count * veg.price);
      }
      return prevTotal
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
        </ul>
        Total: {formatPrice(total)}
      </div>
    )
  }
}

export default Order;
