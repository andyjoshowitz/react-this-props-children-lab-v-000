// Code ThemedDecoration Component Here
import React from 'react';

class ThemedDecorations extends React.Component {
  render() {

    const childrenWithClassName = React.Children.map(this.props.children, child => {
      return (
        <p className={this.props.theme}>{child}</p>
      );
    });

    return (
      <div className="themed-decoration">
        {childrenWithClassName}
      </div>
    )
  }
}

export default ThemedDecorations;
