import React from 'react';

class Person extends React.Component {
  render(){
    return (
      <>
        <article>
        <p>{this.props.firstName}</p>
        </article>
      </>
    )
  }
}

export default Person;