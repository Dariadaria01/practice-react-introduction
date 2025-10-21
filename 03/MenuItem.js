import React from 'react';

class MenuItem extends React.Component {
  render() {
    const { text, url } = this.props;
    return (
      <li>
        <a href={url} style={{ textDecoration: 'none', color: 'black' }}>
          {text}
        </a>
      </li>
    );
  }
}
export default MenuItem;
