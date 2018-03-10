import React from 'react';

class AddVegForm extends React.Component{

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createVeg = (event) => {
    event.preventDefault();
    const veg = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };
    this.props.addVeg(veg);
    // Reset form
    event.currentTarget.reset();

  };

  render() {
    return (
      <form className="veg-edit" onSubmit={this.createVeg}>
        <input type="text" ref={this.nameRef} name="name" placeholder="Name" />
        <input type="text" ref={this.priceRef} name="price" placeholder="Price" />
        <select ref={this.statusRef} name="status">
          <option>Fresh</option>
          <option>Sold Out</option>
        </select>
        <input type="textarea" ref={this.descRef} name="desc" placeholder="Description" />
        <input type="text" ref={this.imageRef} name="image" placeholder="Image" />
        <button type="submit">+ Add Veg</button>
      </form>
    );
  }
}

export default AddVegForm;
