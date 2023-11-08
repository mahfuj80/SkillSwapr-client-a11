import React from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar } from 'react-step-progress-bar';

class MyProgressBar extends React.Component {
  render() {
    return (
      <ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      />
    );
  }
}

export default MyProgressBar;
