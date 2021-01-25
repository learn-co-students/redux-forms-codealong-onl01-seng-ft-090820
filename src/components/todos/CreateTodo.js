import React, { Component } from 'react'

  class CreateTodo extends Component {
    constructor() {
      super();
      this.state= {
        text: ""
      }
    }

    handleChange = e => { 
      this.setState({ text: e.target.value })
    }

    handleSubmit = e => { 
        e.preventDefault()
        this.props.addTodo(this.state) 
    }
    
    render() {
      return(
        <div>
          <label>Add Todo:</label>
          <form onSubmit={this.handleSubmit}>
            <input type="text"
                  onChange={this.handleChange}
                  value={this.state.text} />
            <input type="Submit" />
          </form>
        </div>
      )
    }
  }

  const mapDispatchToProps = dispatch => ({
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  })


export default connect(null, mapDispatchToProps)(CreateTodo)
