import React from 'react';
import {Link} from 'react-router-dom';

class BoardGames extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            boardGames: []
        }
        this.getBoardGames = this.getBoardGames.bind(this);
    }
    getBoardGames() {
        console.log('Called getBoardGames');
        fetch('http://localhost:5001/api/board_games')
            .then(response => response.json())
            .then(boardGames => this.setState({boardGames}, () => console.log(this.state.boardGames)))
            .catch(console.log)
    }

     componentDidMount(){
        this.getBoardGames();
     }

    render(){
        const BoardGameComponents = this.state.boardGames.map(boardGame =>{
            return <li>
            {boardGame.name}
                <ul>
                    <li>Id: {boardGame._id}</li>
                    <li>Players: {boardGame.num_players_min}-{boardGame.num_players_max}</li>
                    <li>Description: {boardGame.desc}</li>
                </ul>
            </li>})
        return (
            <>
                <h1>Board Games</h1>
                <button onClick={this.getBoardGames}>Refresh Board Games</button>
                <ul>
                    {BoardGameComponents}
                </ul>
                <Link to='/'>Home</Link>
            </>
        )
    }
}

export default BoardGames;