import React from "react";

class EditVegForm extends React.Component {
  handleChange = event => {
    const updatedVeg = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateVeg(this.props.index, updatedVeg);
  };

  render() {
    return (
      <div className="veg-edit">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.props.veg.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={this.props.veg.price}
          onChange={this.handleChange}
        />
        <select
          value={this.props.veg.status}
          name="status"
          onChange={this.handleChange}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable"> Sold Out!</option>
        </select>
        <textarea
          name="desc"
          placeholder="description"
          onChange={this.handleChange}
        >
          {this.props.veg.desc}
        </textarea>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={this.props.veg.image}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default EditVegForm;
