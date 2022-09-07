import { Component } from 'react';
import './App.css';
import { getAllData} from '../../utilities'

class App extends Component {
  constructor() {
    super();
    this.state={
     
    }
  }
  


  componentDidMount = () => {
    console.log(getAllData())
    // getAllData().then(data => {

    // })
  }
  
  
  render=()=> {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
      </div>
    );
  }
}

export default App;