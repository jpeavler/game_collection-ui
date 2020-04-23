import React from 'react';

class DeleteBoardGame extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            _id: this.props._id,
            canDelete: false
        }
        this.deleteBoardGame = this.deleteBoardGame.bind(this);
    }
    deleteBoardGame(event){
        event.preventDefault();
        let result = window.confirm("Are you sure you want to delete this game");
        console.log(result);
        this.setState({canDelete: result}, () => {
            if (this.state.canDelete){
                fetch(`${process.env.REACT_APP_API_URL}/api/board_games/${this.state._id}`, {
                    method: "DELETE"
                }).then(this.props.getBoardGames)
            }
        });
    }
    render(){
        return(
            <button onClick={this.deleteBoardGame}>Delete</button>
        )
    }
}

export default DeleteBoardGame;