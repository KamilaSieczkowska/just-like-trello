import React from 'react';
import './boardComponent.scss';
import CardComponent from '../cards/cardComponent';
import ActionButtonComponent from '../actionButton/actionButtonComponent';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const BoardComponent = ({ title, cards, listID, index }) => {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <div 
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          className="board__wrapper">
          <Droppable droppableId={String(listID)}>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h4>{title}</h4>
                {cards.map((card, index) => (
                  <CardComponent
                    text={card.text}
                    key={card.id}
                    id={card.id}
                    index={index} />
                ))}
                <ActionButtonComponent listID={listID} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}

export default BoardComponent;