import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      trick: '',
      tutorial: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  submitTrick = event => {
    event.preventDefault(); 
    const newTrick = {
      id: Date.now(),
      ...this.state
    }
    this.props.addIdea(newTrick); 
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ title: '', description: '' });
  }


  render() {
    return (
      <form>
        <select className ="stance" id="stance" name="stance" >
            <option value="" disabled selected>Stance</option>
            <option value="regular">Regular</option>
            <option value="goofy">Goofy</option>
        </select>

        <input
          type='text'
          placeholder='Name of Trick'
          name='trick'
          value={this.state.trick}
          onChange={event => this.handleChange(event)}
        />
        
        <select className ="obstacle" id="obstacle" name="obstacle" >
            <option value="" disabled selected>Obstacle</option>
            <option value="flatground"></option>
            <option value="ledge">Ledge</option>
            <option value="rail">Rail</option>
            <option value="stairs">Stairs</option>
            <option value="pool">Pool</option>
        </select>

        <input
          type='text'
          placeholder='Link to Tutorial'
          name='tutorial'
          value={this.state.tutorial}
          onChange={event => this.handleChange(event)}
        />

        <button className="send-it-btn" onClick={event => this.submitIdea(event)}>Send It!</button>
      </form>
    )
  }
}

export default Form;