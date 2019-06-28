import React from 'react';
import './boardContainer.scss';

class BoardContainer extends React.Component {

    

    render() {
      return (
        <div className="board__creator">
            <p className="creating__board__name">Tworzenie nowej tablicy</p>
            <input type="text" placeholder="Jak nazwiesz to cudo?"/>
            <div className="buttons__box">
                <button className="cancel">Usuń</button>
                <button className="create" onClick={() => console.log('click') }>Stwórz</button>
            </div>
        </div>
      );
    }
}

export default BoardContainer;