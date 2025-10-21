import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const HeaderFn = (props) => {
  return (
    <header
      style={{
        backgroundColor: 'yellow',
        color: 'red',
        textAlign: 'center',
        padding: '20px',
        fontSize: '24px',
        borderRadius: '50px',
      }}
    >
      {props.text}
    </header>
  );
};

class HeaderCl extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <header
        style={{
          backgroundColor: 'pink',
          color: 'orange',
          textAlign: 'right',
          padding: '50px',
          fontSize: '34px',
          borderRadius: '8px',
        }}
      >
        {text}
      </header>
    );
  }
}

const App = () => (
  <>
    <HeaderFn text='Moja pierwsza strona w React' />
    <HeaderCl text='Moja pierwsza strona w React' />
  </>
);

root.render(<App />);
