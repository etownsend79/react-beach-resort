import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from "./Title";
import { Link } from 'react-router-dom';
import { selectRoom } from '../actions'

class RoomList extends Component {

  renderList = () => {
    return this.props.rooms.map((room) => {
      return (
        <Link to={"/rooms/" + room.slug} key={room.id} onClick={() => this.props.selectRoom(room)}>
          <figure className="room-card">
            <div className="prices">
              <p>${room.price}</p>
              <p>per night</p>
            </div>
            <img src={room.images[0]} alt="" />
            <figcaption>{room.name}</figcaption>
          </figure>
        </Link>

      )
    })
  }

  render() {
    return (
      <div>
        <div className="room-container">
          {this.renderList()}

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms
  }
}

export default connect(mapStateToProps, { selectRoom })(RoomList);
