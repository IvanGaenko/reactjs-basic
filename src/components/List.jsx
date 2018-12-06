/* eslint-disable indent */
import React from 'react';

class List extends React.Component {
  render() {
    const { options = [] } = this.props;
    const listItems = options.map((element, index) => {
      return <li key={index} className="hero-list">
      {/* <hr /> */}
      <div className="hero-image">{element.image}</div>
      <div className="hero-name">{element.name}</div>
      {/* <hr /> */}
      <br />
      </li>;
    });
  return <ul>{listItems}</ul>;
  }
}

export default List;