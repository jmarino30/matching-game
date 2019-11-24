import React from 'react';
import './Modal.css';
import { connect } from 'react-redux';
import { closeModal, toggleOptions } from '../actions';

const Modal = props => {
    const handleCloseModal = () => {
        props.closeModal();
    }
    const handleSubmit = () => {
        props.startNewGame(props.numOfCards);
        props.toggleOptions();
        props.closeModal();
    }
    const renderModalAlert = () => {
        return (
        <div className="modal-container">
            <div className="modal shadow-5">
                <div className="modal-title">
                    Beep Boop <span onClick={handleCloseModal} className="exit-button grow shadow-5">X</span>
                </div>
                <div className="modal-body">
                    <p>{props.body}</p>
                    <button onClick={handleCloseModal} className="grow shadow-5 fr ma3">Got it</button>
                </div>
            </div>
        </div>
        );
    }
    const renderModalPrompt = () => {
        return (
        <div className="modal-container">
            <div className="modal shadow-5">
                <div className="modal-title">
                    Beep Boop <span onClick={handleCloseModal} className="exit-button grow shadow-5">X</span>
                </div>
                <div className="modal-body">
                    <p>{props.body}</p>
                    <button onClick={handleSubmit} className="grow shadow-5 fr ma3">Confirm</button>
                    <button onClick={handleCloseModal} className="grow shadow-5 fl ma3">Cancel</button>
                </div>
            </div>
        </div>
        );
    }
        return (
           <div>{ props.type === 'alert' ? renderModalAlert() : renderModalPrompt() }</div>
          );
    
}
const mapStateToProps = state => {
    return {
        numOfCards: state.numOfCardsReducer.numOfCards
    }
}
export default connect(mapStateToProps, { closeModal, toggleOptions })(Modal);