import React from 'react';
import './Modal.css';
import { connect } from 'react-redux';
import { closeModal, modalSubmit, toggleOptions } from '../actions';

const Modal = props => {
    const handleCloseModal = () => {
        props.closeModal();
    }
    const handleSubmit = () => {
        props.modalSubmit();
        props.toggleOptions();
        props.startNewGame();
        props.closeModal();
        //close options
        //start new game (num of cards)
        //close modal
    }
    const renderModalAlert = () => {
        return (
        <div className="modal-container">
            <div className="modal shadow-5">
                <div className="modal-title">
                    Beep Boop <span onClick={handleCloseModal} className="exit-button grow shadow-5">X</span>
                </div>
                <div className="modal-body">
                    {props.body}
                    <button onClick={handleCloseModal} className="grow shadow-5 right">Got it</button>
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
                    {props.body}
                    <button onClick={handleSubmit} className="grow shadow-5 right">Confirm</button>
                    <button onClick={handleCloseModal} className="grow shadow-5 left">Cancel</button>
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
        modal: state.modalReducer.modal,
        submit: state.modalReducer.submit
    }
}
export default connect(mapStateToProps, { closeModal, modalSubmit, toggleOptions })(Modal);

//confirm new game - OK CANCEL
//not enough cards - OK
//finish current turn - OK

//no scroll on modal when open (set class on body)