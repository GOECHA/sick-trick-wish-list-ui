import { Component } from 'react';
import './App.css';
import { getAllData} from '../../utilities';
import Tricks from '../Tricks/Tricks';
import Header from '../Header/Header';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state={
     tricks: []
    }
  }
  


  componentDidMount = () => {
    console.log(getAllData('/tricks'))
    getAllData('/tricks').then(data=> {
      this.setState({ tricks: [...data[0]]})
    })
  }


  addTrick = (newTrick) => {
    this.setState({ tricks: [...this.state.tricks, newTrick] });
  }
  
  
  
  render=()=> {
    return (
      <div className="App">
        <Header />
        <Form addTrick={this.addTrick} tricks={this.state.tricks}/>
        {!this.state.tricks.length && <h2>No tricks, ready to hit the Park?</h2> }
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;