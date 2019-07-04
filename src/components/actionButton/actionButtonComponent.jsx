import React from 'react';
import Icon from '@material-ui/core/Icon';
import './actionButtonComponent.scss';
import { Card, Button } from '@material-ui/core';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addList, addCard } from '../../actions';

class ActionButtonComponent extends React.Component {
    
    state = {
        isformOpen: false,
        text: ""
    }

    openForm = () => {
        this.setState({
            isformOpen: true
        });
    };

    closeForm = e => {
        this.setState({
            isformOpen: false
        });
    }

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        });
    }

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if(text) {
            this.setState({
                text: ''
            });
            dispatch(addList(text));
        }

        return;
    }

    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if(text) {
            this.setState({
                text: ''
            });
            dispatch(addCard(listID, text));
        }
    }

    renderAddButton = () => {
        const { list } = this.props,
            buttonText = list ? 'list' : 'card',
            buttonStyle = list ? 'list' : 'card';


        return (
            <div onClick = { this.openForm } 
                className = {'action__button' + ' ' + buttonStyle }>
                <Icon>add</Icon>
                <span>Add another { buttonText }</span>
            </div>
        )
    };

    renderForm = () => {

        const { list } = this.props,
            placeholder = list ? 'Enter list title...' : 'Enter a title for this card...',
            buttonTitle = list ? 'Add list' : 'Add card';
        
        return (
            <div className='new__item'>
                <Card >
                    <Textarea 
                        className = 'textarea'
                        placeholder = { placeholder } 
                        autoFocus 
                        onBlur = { this.closeForm } 
                        value = { this.state.text }
                        onChange = { this.handleInputChange }/>
                </Card>
                <div className='buttons__box'>
                    <Button 
                        onMouseDown = { list ? this.handleAddList : this.handleAddCard}
                        className = 'add__button'
                        variant = 'contained' >
                        { buttonTitle }
                    </Button>
                    <Icon className = 'close__button'>close</Icon>
                </div>
            </div>
        );
    };
    
    
    render() {
      return this.state.isformOpen ? this.renderForm() : this.renderAddButton();
    };
};

export default connect()(ActionButtonComponent);