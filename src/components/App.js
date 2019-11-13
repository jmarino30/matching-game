import React from 'react';
import CardList from './CardList';


class App extends React.Component {
    
    render() {
        return (
            <div>
                <h1 className="tc">ROBOFRIENDS</h1>
                <CardList />
            </div>
        );
    }
}

export default App;