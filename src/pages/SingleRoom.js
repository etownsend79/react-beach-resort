import React, { Component } from 'react';

import Banner from "../components/Banner"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';



class SingleRoom extends Component {

  renderImages = () => {
    return this.props.room.images.map((image, i) => {
      return (
        <div className="room-image" key={i + 1}>
          <img src={image} alt="" />
        </div>
      )
    })
  }

  render() {


    return (
      <>
        <div className="bg-image" style={{ backgroundImage: `url(${this.props.room.images[0]})` }}>
          <Banner title={this.props.room.name}>
            <Link to="/" className="btn-primary">Return Home</Link>
          </Banner>
        </div>
        <div className="room-image-container">
          {this.renderImages()}
        </div>
        <div className="room-info">
          <div className="description">
            <h2>Description</h2>
            <p>{this.props.room.description}</p>
          </div>
          <div className="info">
            <h2>Info</h2>
            <p>Price : ${this.props.room.price}</p>
            <p>Size : {this.props.room.size} SQFT</p>
            <p>Max Capacity : {this.props.room.capacity}</p>
            {this.props.room.pets ? <p>Pets Allowed</p> : <p>No Pets Allowed</p>}
            {this.props.room.breakfast ? <p>Complimentary Breakfast</p> : <p>Breakfast Not Included</p>}
          </div>

        </div>
        <div className="extras">
          <h2>Extras</h2>
          <ul>
            {this.props.room.extras.map((extra, index) => {
              return (
                <li key={index}>- {extra}</li>
              )
            })}
          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { room: state.selectedRoom }
}
export default connect(mapStateToProps)(SingleRoom)

