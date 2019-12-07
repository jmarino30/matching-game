import React from 'react';
import { connect } from 'react-redux';
import { setDeckSet, modalAlert, modalPrompt, closeModal, optionsOn, toggleOptions, setNumOfCards } from '../actions';
import './Hamburgers.css';
import './Fireworks.css';

const Labels = props => {
  const handleKeyPress = e => {
    if (props.previousCard.pending && props.previousCard.id !== null) {
      props.modalAlert("Please finish current selection before starting a new game!");
    } else if (e.key === 'Enter') { 
      handleSubmit();
    }
  }
  const handleSubmit = () => {
    if (props.previousCard.pending  || props.previousCard.id !== null) {
      props.modalAlert('Please finish current selection before starting a new game!');
    } else if (props.numOfCardsInput < 2 || props.numOfCardsInput === '') {
      props.modalAlert("Every robot needs a friend. Please enter a number 2 or greater.");
    } else {
      props.modalPrompt("This will obliterate all current robots and start a new game. Do you still wish to continue?");
    }
  }
  const handleChange = e => {
    if (e.target.value === '') {
      props.setNumOfCards('');
    } else if (e.target.value >= 0 && e.target.value < 99) {
      props.setNumOfCards(parseInt(e.target.value));
    } else {
      props.setNumOfCards('');
    }
  }
  const toggleOptionsMenu = e => {
    if (props.optionsMenu === null) {
      props.optionsOn();
    } else {
      props.toggleOptions();
    }
  }
  const handleSelect = e => {
    props.setDeckSet(parseInt(e.target.value));
  }

  //calculate matches to display in label
  let totalMatches = 0;
  let matchesFound = 0;
  props.isMatched.forEach(card => {
      if (card) {matchesFound++;}
  });
  matchesFound /= 2;
  totalMatches = parseInt(props.isMatched.length / 2);

  const renderMediumMenu = () => {
    return (
      <h2 style={{lineHeight:"50px"}}>
        <div className="dib ph4 fl">
          {matchesFound === totalMatches ? <button className="shadow-5 grow ph2 mh3" onClick={handleSubmit}>Start New Game</button> : `Matches Found: ${matchesFound} / ${totalMatches}`}
        </div>
        <div className="dib ph4 fr">
          <button className="shadow-5 grow" onClick={handleSubmit}>RESET</button>
        </div>
        <div className="dib ph3 fr">
          # Of Cards:
          <input step="2" onKeyPress={handleKeyPress} onChange={handleChange} className="shadow-5 grow" type="number" value={props.numOfCardsInput} />
        </div>
        <div className="dib ph3 fr">
          Deck Set:
          <select value={props.deckSet} onChange={handleSelect} className="grow pointer shadow-5" name="deck" id="deck-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </h2>
    );
  };
  const renderLargeMenu = () => {
    return (
      <h2>
        <div className="container">
          <div className={props.optionsMenu === null ? null : props.optionsMenu ? "slideOut" : "slideIn"}>
            <span className="matches fl">
              {matchesFound === totalMatches ? <button className="shadow-5 grow" onClick={handleSubmit}>New Game</button> : `Matches Found: ${matchesFound} / ${totalMatches}`}
            </span>
            <span className="options-button fl">
              <span className="fr grow" onClick={toggleOptionsMenu} style={{cursor:'pointer'}}>
                Options
                <button className={props.optionsMenu ? "hamburger hamburger--arrowturn-r is-active" : "hamburger hamburger--arrowturn-r"} type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button> 
              </span>
            </span>
            <span className="options-menu fl" >
              <div className="w-40 dib">
                Deck Set:
                <select value={props.deckSet} onChange={handleSelect} className="grow pointer shadow-5" name="deck" id="deck-select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="w-40 dib">
                  # Of Cards:
                  <input step="2" onKeyPress={handleKeyPress} onChange={handleChange} className="shadow-5 grow" type="number" value={props.numOfCardsInput} />
              </div>
              <div className="w-20 dib">
                  <button className="shadow-5 grow" onClick={handleSubmit}>DONE</button>
              </div>
            </span> 
          </div>
        </div>
      </h2>
    );
  };
  const renderSmallMenu = () => {
    return (
      <div>
        <h2>
          <span className="tc dib pl4">
            {matchesFound === totalMatches ? <button className="shadow-5 grow" onClick={handleSubmit}>New Game</button> : `Matches Found: ${matchesFound} / ${totalMatches}`}
          </span>
          <span className="fr dib pr2">
            <button onClick={toggleOptionsMenu} className={props.optionsMenu ? "hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse"} type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button> 
          </span>
        </h2>
        <div className={props.optionsMenu === null ? "mobile-options-menu" : props.optionsMenu ? "mobile-options-menu slideDown" : "mobile-options-menu slideUp"} >
          <div className="w-34 dib tl pl1">
            Deck Set:
            <select className="shadow-5" value={props.deckSet} onChange={handleSelect} name="deck" id="deck-select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="w-40 dib tl pr1">
            # Of Cards:
            <input inputMode="numeric" pattern="[0-9]*" step="2" onKeyPress={handleKeyPress} onChange={handleChange} className="shadow-5" type="number" value={props.numOfCardsInput} />
          </div>
          <div className="dib tr p1">
            <button className="shadow-5 grow" onClick={handleSubmit}>DONE</button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      { props.width > 1040 ? renderMediumMenu() 
      : props.width > 600 ? renderLargeMenu() 
      : renderSmallMenu() } 
      {matchesFound === totalMatches ? <div className="pyro"><div className="before"></div><div className="after"></div></div> : null }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isMatched: state.handleMatchesReducer.isMatched,
    deckSet: state.deckSetReducer.deckSet,
    previousCard: state.handleActiveCardsReducer.previousCard,
    optionsMenu: state.optionsReducer.optionsMenu,
    numOfCardsInput: state.numOfCardsReducer.numOfCards,
    width: state.windowWidthReducer.width
  }
}
export default connect(mapStateToProps, { setDeckSet, modalAlert, modalPrompt, closeModal, optionsOn, toggleOptions, setNumOfCards } )(Labels);

