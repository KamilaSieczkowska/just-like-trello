import React from 'react';
import Icon from '@material-ui/core/Icon';
import './actionButtonComponent.scss';

class ActionButtonComponent extends React.Component {
    
    renderAddButton = () => {
        const { list } = this.props;
        const buttonText = list ? 'list' : 'card';

        return (
            <div className="action__button">
                <Icon>add</Icon>
                <span>Add another { buttonText }</span>
            </div>
        )
    };
    
    
    render() {
      return this.renderAddButton();
    }
}

export default ActionButtonComponent;