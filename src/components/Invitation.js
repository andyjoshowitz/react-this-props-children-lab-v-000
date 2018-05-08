// Code Invitation Component Here
import React from 'react';

class Invitation extends React.Component {
  render() {
    const textChildren = React.Children.map(this.props.children, child => {
      return (
        <p>{child}</p>
      );
    });
    return(
      <div className="invitation">
        <h1>You've been invited!</h1>
        {textChildren}
      </div>
    );
  }
}

export default Invitation;
