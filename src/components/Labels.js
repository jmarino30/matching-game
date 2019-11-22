import React from 'react';
import { connect } from 'react-redux';
import { setDeckSet } from '../actions';
import './Hamburgers.css';
import './Fireworks.css';

class Labels extends React.Component {
    state = {
        numOfCardsInput: 20,
        optionsMenu: null
    }
    handleKeyPress = e => {
        if (this.props.previousCard.pending && this.props.previousCard.id !== null) {
            alert("Please finish current selection before starting a new game!");
        } else if (e.key === 'Enter') { 
                this.handleSubmit();
            }
    }
    handleSubmit = () => {
        if (this.props.previousCard.pending  || this.props.previousCard.id !== null) {
            alert("Please finish current selection before starting a new game!");
        } else if (this.state.numOfCardsInput < 2 || this.state.numOfCardsInput === '') {
                alert("Every robot needs a friend. Please enter a number 2 or greater.")
        } else {
            const r = window.confirm("This will obliterate all current robots and start a new game. Do you still wish to continue?"); 
                if (r === true) { 
                    this.props.startNewGame(this.state.numOfCardsInput);
                    this.setState({ optionsMenu : false });
                }
        }
    }
    handleChange = e => {
        if (e.target.value === '') {
            this.setState({ numOfCardsInput: '' });
        } else if (e.target.value >= 0 && e.target.value < 99) {
            this.setState({ numOfCardsInput: parseInt(e.target.value) });
        } else {
            this.setState({ numOfCardsInput: '' });
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
                { window.innerWidth > 1020 ? //options on main screen
                    <h2 style={{lineHeight:"50px"}}>
                        <div className="dib ph4 fl">
                            {matchesFound === totalMatches ? <button className="grow ph2 mh3" onClick={this.handleSubmit}>Start New Game</button> : `Matches Found: ${matchesFound} / ${totalMatches}`}
                        </div>
                        <div className="dib ph3 fl">
                            Deck Set:
                            <select value={this.state.deckSet} onChange={this.handleSelect} className="grow pointer shadow-5" name="deck" id="deck-select">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className="dib ph3 fl">
                            # Of Cards:
                            <input step="2" onKeyPress={this.handleKeyPress} onChange={this.handleChange} className="shadow-5 grow" type="number" value={this.state.numOfCardsInput} />
                        </div>
                        <div className="dib ph4 fr">
                            <button className="grow" onClick={this.handleSubmit}>RESET</button>
                        </div>
                    </h2>
                :
                window.innerWidth > 600 ? //desktop version
                    <h2>
                        <div className="container">
                            <div className={this.state.optionsMenu === null ? null : this.state.optionsMenu ? "slideOut" : "slideIn"}>
                                <span className="matches fl">
                                    {matchesFound === totalMatches ? <button className="grow" onClick={this.handleSubmit}>New Game</button> : `Matches Found: ${matchesFound} / ${totalMatches}`}
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
                                        <select value={this.state.deckSet} onChange={this.handleSelect} className="grow pointer shadow-5" name="deck" id="deck-select">
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
                            <span className="tc dib pl4">
                                {matchesFound === totalMatches ? <button className="grow" onClick={this.handleSubmit}>New Game</button> : `Matches Found: ${matchesFound} / ${totalMatches}`}
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
                            <div className="w-34 dib tl pl1">
                                Deck Set:
                                <select className="shadow-5" value={this.state.deckSet} onChange={this.handleSelect} name="deck" id="deck-select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div className="w-40 dib tl pr1">
                                # Of Cards:
                                <input inputMode="numeric" pattern="[0-9]*" step="2" onKeyPress={this.handleKeyPress} onChange={this.handleChange} className="shadow-5" type="number" value={this.state.numOfCardsInput} />
                            </div>
                            <div className="dib tr p1">
                                <button className="grow" onClick={this.handleSubmit}>DONE</button>
                            </div>
                        </div>
                    </div>
                    }
                {matchesFound === totalMatches ? <div className="pyro"><div className="before"></div><div className="after"></div></div> : null }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isMatched: state.handleMatchesReducer.isMatched,
        deckSet: state.deckSetReducer.deckSet,
        previousCard: state.handleActiveCardsReducer.previousCard,
    }
}
export default connect(mapStateToProps, { setDeckSet } )(Labels);

