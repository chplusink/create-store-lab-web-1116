import React, { Component } from 'react'

class UserInput extends Component {

  constructor(props){
    super(props)
    this.state = {
      userName: '',
      hometown: ''
    }
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_USER', payload: this.state})
  }

  userNameChange(event){
    this.setState({userName: event.target.value})
  }

  hometownChange(event){
    this.setState({hometown: event.target.value})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.userName} onChange={this.userNameChange.bind(this)}/>
          <input type="text" value={this.state.hometown} onChange={this.hometownChange.bind(this)}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }

}



export default UserInput;
