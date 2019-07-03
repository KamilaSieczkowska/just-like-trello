import React, { Component } from 'react';
import './boardComponent.scss';
import CardComponent from '../cards/cardComponent';
import ActionButtonComponent from '../actionButton/actionButtonComponent';

const BoardComponent = ({ title, cards }) => {
  return (
    <div className="board__wrapper">
      <h4>{title}</h4>
      {cards.map(card => (
        <CardComponent text={card.text} key={card.id}/>
      ))}
      <ActionButtonComponent />
    </div>
  )
}

export default BoardComponent;