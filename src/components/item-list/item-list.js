import React, { Component } from 'react';

import Spiner from '../spiner/spiner';

import './item-list.css';

export default class ItemList extends Component {

  state = {
    itemList: null
  }

  componentDidMount () {
    const {getData} = this.props;

    getData().then((itemList) => {
              this.setState({itemList});
      });
  }

  renderItems (arr) {
    return arr.map((item) => {

      const {id} = item;
      const lable = this.props.renderItem(item);
      
      return (
        <li className="list-group-item"
            key={id}
            onClick = {() => this.props.onItemSelected(id)}>
          {lable}
        </li>
      );
    });
  }

  render() {

    const {itemList} = this.state;

    if (!itemList) {
      return <Spiner />;
    }
    
    
    const listItem = this.renderItems (itemList);

    return (
      <ul className="item-list list-group">
        {listItem}
      </ul>
    );
  }
}