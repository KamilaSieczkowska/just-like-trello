import React from 'react';
import './cardComponent.scss';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Draggable } from 'react-beautiful-dnd';

const CardComponent = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Card className="cardContainer">
            <CardContent>
              <Typography gutterBottom>{text}</Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  )
}

export default CardComponent;