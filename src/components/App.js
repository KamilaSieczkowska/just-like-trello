import React from 'react';
import BoardComponent from './boards/boardComponent';
import { connect } from 'react-redux';

import './App.scss';

class App extends React.Component {
    render() {

      const { lists } = this.props;
      return (
        <div className="app__container">
          <h2 className="app__title">Just like Trello... almost</h2>
          <div className="boards__container">
            {lists.map(list => (
              <BoardComponent title={list.title} cards={list.cards} key={list.id}/>
            ))}
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);