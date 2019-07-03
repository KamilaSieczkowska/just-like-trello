import React, { Component } from 'react';
import './cardComponent.scss';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CardComponent = ({ text }) => {
  return (

    <Card className="cardContainer">
      <CardContent>
        <Typography gutterBottom>{ text }</Typography>
      </CardContent>
    </Card>
  )
}

export default CardComponent;