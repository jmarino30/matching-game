import React from 'react';
import { connect } from 'react-redux';
import { setNumberOfCards } from '../actions';

class Labels extends React.Component {
    state = {
        numOfCardsInput: 20
    }

    handleKeyPress = e => {
        if (e.key === 'Enter') {
            const r = window.confirm("This will obliterate all current robots and start a new game. Do you still wish to continue?"); 
            if(r == true){ 
                this.props.startNewGame(this.state.numOfCardsInput);
            }
        }
    }
    handleSubmit = () => {
        const r = window.confirm("This will obliterate all current robots and start a new game. Do you still wish to continue?"); 
        if(r == true){ 
            this.props.startNewGame(this.state.numOfCardsInput);
        }
    }
    handleChange = e => {
        if (e.target.value > 1 && e.target.value < 99) {
            this.setState({ numOfCardsInput: parseInt(e.target.value) })
        }
    }
    render() {
        let totalMatches = 0;
        let matchesFound = 0;
        this.props.isMatched.forEach(card => {
            if (card) {matchesFound++;}
        });
        matchesFound /= 2;
        totalMatches = parseInt(this.props.isMatched.length / 2);
        return (
            <div className="tc">
                <h2>
                    <div className="labels">
                        {matchesFound === totalMatches ? `CONGRATULATIONS!` : `Matches Found: ${matchesFound} / ${totalMatches}`}
                    </div>
                    <div className="labels">
                        Number Of Cards:
                        <input step="2" onKeyPress={this.handleKeyPress} onChange={this.handleChange} className="shadow-5 grow" type="number" value={this.state.numOfCardsInput} />
                        {window.innerWidth > 600 ? <button className="grow" onClick={this.handleSubmit}>GO</button> : ''}
                    </div>
                </h2>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isMatched: state.handleMatchesReducer.isMatched,
        numOfCards: state.handleNumberOfCards.numOfCards
    }
}
export default connect(mapStateToProps, {setNumberOfCards} )(Labels);