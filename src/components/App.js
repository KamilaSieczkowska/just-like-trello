import React from 'react';
import BoardComponent from './boards/boardComponent';
import { connect } from 'react-redux';

import './App.scss';
import ActionButtonComponent from './actionButton/actionButtonComponent';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';

class App extends React.Component {

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  }

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="app__container">
          <h2 className="app__title">Just like Trello... almost</h2>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
              <div className="boards__container" {...provided.droppableProps} ref = {provided.innerRef}>
                {lists.map((list, index) => (
                  <BoardComponent
                    listID={list.id}
                    title={list.title}
                    cards={list.cards}
                    key={list.id}
                    index={index} />
                ))}
                {provided.placeholder}
                <ActionButtonComponent list />
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);