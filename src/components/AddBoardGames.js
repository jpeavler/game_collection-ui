import React from 'react';

class AddBoardGames extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            num_players_max: '',
            num_players_min: '',
            desc: ''
        }

    this.addBoardGame = this.addBoardGame.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleMax = this.handleMax.bind(this);
    this.handleMin = this.handleMin.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    }
    addBoardGame(event) {
        event.preventDefault();
        fetch('http://localhost:5001/api/board_games', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify([this.state])
        }).then(this.props.getBoardGames)
    }
    handleName(event) {
        this.setState({name: event.target.value});
    }
    handleMax(event) {
        this.setState({num_players_max: event.target.value});
    }
    handleMin(event) {
        this.setState({num_players_min: event.target.value});
    }
    handleDesc(event) {
        this.setState({desc: event.target.value});
    }

    render(){
        return(
            <form onSubmit={this.addBoardGame}>
                <input placeholder="Name of Board Game" onChange={this.handleName} required/>
                <input placeholder="Max Players" onChange={this.handleMax} required/>
                <input placeholder="Minimun Players" onChange={this.handleMin} required/>
                <input placeholder="Game Description" onChange={this.handleDesc} required/>
                <input type="submit" value="Add Board Game"/>
            </form>
        )
    }
}

export default AddBoardGames;