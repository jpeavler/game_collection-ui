import React from 'react';
import {Link} from 'react-router-dom';
import AddBoardGames from './AddBoardGames';
import DeleteBoardGame from './DeleteBoardGame';
import UpdateBoardGame from './UpdateBoardGame'

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
        fetch(`${process.env.REACT_APP_API_URL}/api/board_games`)
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
            <h3>{boardGame.name}</h3> <DeleteBoardGame _id={boardGame._id} getBoardGames={this.getBoardGames}/>
                <ul>
                    <li class="GameItem">Id: {boardGame._id}</li>
                    <li class="GameItem">Players: {boardGame.num_players_min}-{boardGame.num_players_max}</li>
                    <li class="GameItem">Description: {boardGame.desc}</li>
                </ul>
            </li>})
        return (
            <>
                <h1>Board Games</h1>
                <h2>Add Board Game</h2>
                <AddBoardGames getBoardGames={this.getBoardGames}/>
                <h2>Update Board Game</h2>
                <UpdateBoardGame getBoardGames={this.getBoardGames}/>
                <h2>List of Board Games</h2>
                <button onClick={this.getBoardGames}>Refresh Board Games</button>
                <ul>
                    {BoardGameComponents}
                </ul>
                <Link to='/'>Back to Home</Link>
            </>
        )
    }
}

export default BoardGames;