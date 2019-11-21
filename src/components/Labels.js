import React from 'react';
import { connect } from 'react-redux';
import { setDeckSet } from '../actions';
import './Labels.css';

class Labels extends React.Component {
    state = {
        numOfCardsInput: 20,
        optionsMenu: null
    }
    handleKeyPress = e => {
        if (e.key === 'Enter') {
            const r = window.confirm("This will obliterate all current robots and start a new game. Do you still wish to continue?"); 
            if(r === true){ 
                this.props.startNewGame(this.state.numOfCardsInput);
            }
        }
    }
    handleSubmit = () => {
        const r = window.confirm("This will obliterate all current robots and start a new game. Do you still wish to continue?"); 
        if(r === true){ 
            this.props.startNewGame(this.state.numOfCardsInput);
        }
    }
    handleChange = e => {
        if (e.target.value > 1 && e.target.value < 99) {
            this.setState({ numOfCardsInput: parseInt(e.target.value) })
        }
    }
    toggleOptionsMenu = e => {
        if (this.state.optionsMenu === null) {
            this.setState({ optionsMenu: true });
        } else {
            this.setState({ optionsMenu: !this.state.optionsMenu });
        }
    }
    handleSelect = e => {
        this.props.setDeckSet(parseInt(e.target.value));
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
            <div>
                    {window.innerWidth > 600 ? //desktop version
                <h2>
                    <div className="container">
                        <div className={this.state.optionsMenu === null ? null : this.state.optionsMenu ? "slideOut" : "slideIn"}>
                            <span className="matches fl">
                                {matchesFound === totalMatches ? `CONGRATULATIONS!` : `Matches Found: ${matchesFound} / ${totalMatches}`}
                            </span>
                            <span className="options-button fl">
                                <span className="fr grow" onClick={this.toggleOptionsMenu} style={{cursor:'pointer'}}>
                                    Options
                                    <button className={this.state.optionsMenu ? "hamburger hamburger--arrowturn-r is-active" : "hamburger hamburger--arrowturn-r"} type="button">
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner"></span>
                                        </span>
                                    </button> 
                                </span>
                            </span>
                            <span className="options-menu fl" >
                                <div className="w-40 dib">
                                Deck Set:
                                <select value={this.state.deckSet} onChange={this.handleSelect} className="grow pointer" name="deck" id="deck-select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                </div>
                                <div className="w-40 dib">
                                # Of Cards:
                                <input step="2" onKeyPress={this.handleKeyPress} onChange={this.handleChange} className="shadow-5 grow" type="number" value={this.state.numOfCardsInput} />
                                </div>
                                <div className="w-20 dib">
                                    <button className="grow" onClick={this.handleSubmit}>DONE</button>
                                </div>
                            </span> 
                        </div>
                        </div>
                        </h2>
                    : //mobile version!
                    <div>
                        <h2>
                            <span className="fl dib pl2">
                                {matchesFound === totalMatches ? `CONGRATULATIONS!` : `Matches Found: ${matchesFound} / ${totalMatches}`}
                            </span>
                            <span className="fr dib pr2">
                                <button onClick={this.toggleOptionsMenu} className={this.state.optionsMenu ? "hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse"} type="button">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button> 
                            </span>
                        </h2>
                            <div className={this.state.optionsMenu === null ? "mobile-options-menu" : this.state.optionsMenu ? "mobile-options-menu slideDown" : "mobile-options-menu slideUp"} >
                                <div className="w-40 dib">
                                    Deck Set:
                                    <select value={this.state.deckSet} onChange={this.handleSelect} className="grow pointer" name="deck" id="deck-select">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <div className="w-40 dib tl">
                                # Of Cards:
                                <input step="2" onKeyPress={this.handleKeyPress} onChange={this.handleChange} className="shadow-5 grow" type="number" value={this.state.numOfCardsInput} />
                                </div>
                                <div className="w-20 dib">
                                    <button className="grow" onClick={this.handleSubmit}>DONE</button>
                                </div>
                            </div>
                            </div>
                    }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isMatched: state.handleMatchesReducer.isMatched,
        deckSet: state.deckSetReducer.deckSet
    }
}
export default connect(mapStateToProps, { setDeckSet } )(Labels);

//add game won celebration (all cards rotate?) (big overlay text?)

//add options menu if screen is large enough to fit it (remove options button)