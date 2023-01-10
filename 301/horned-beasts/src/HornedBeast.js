import React from 'react';


class HornedBeast extends React.Component{
  render(){
    return (
      <>
        <h2>{this.props.title}</h2>
        <img alt={this.props.description}>
        {this.props.imageURL}
        {this.props.title}
        </img>
      </>
    )
  }
}

export default HornedBeast;