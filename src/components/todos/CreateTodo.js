import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  state = {
    text: '',
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handlSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
  }


  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo </label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
        {/* ^^ this isn't neccessary but just to visually confirm that we are properly changing the state  */}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (formData) => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);