import React from 'react'

class UpdateBoardGame extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            keyToUpdate: "name",
            typeInput: "text",
            _id: "",
            value: ""
        }

        this.handleSelection = this.handleSelection.bind(this);
        this.handleID = this.handleID.bind(this);
        this.handleValue = this.handleValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSelection(event){
        this.setState({keyToUpdate: event.target.value}, () =>{
            if(this.state.keyToUpdate === "name" || this.state.keyToUpdate === "desc"){
                this.setState({typeInput: "text"})
            }else{
                this.setState({typeInput: "number"})
            }
        });
    }
    handleID(event){
        this.setState({_id: event.target.value})
    }
    handleValue(event){
        this.setState({value: event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
    }
    render(){
        const UpdateValue = <input type={this.state.typeInput} placeholder="Update value to" onChange={this.haldleValue} min="1"/>
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Game ID to Update"/>
                <label htmlFor="key">Select value to update: </label>
                <select id="key" onChange={this.handleSelection}>
                    <option value="name">Game Name</option>
                    <option value="num_players_min">Minimun Players</option>
                    <option value="num_players_max">Max Players</option>
                    <option value="desc">Game Description</option>
                </select>
                {UpdateValue}
                <input type="submit" value="Update" />
            </form>
        )
    }
}

export default UpdateBoardGame;