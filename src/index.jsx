import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import BoardContainer from './components/boards/boardContainer';

class App extends React.Component {
    render() {
      return (
        <BoardContainer/>
      );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);