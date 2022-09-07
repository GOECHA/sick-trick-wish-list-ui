import { Component } from 'react';
import './App.css';
import { getAllData} from '../../utilities';
import Tricks from '../Tricks/Tricks';
import Header from '../Header/Header';


class App extends Component {
  constructor() {
    super();
    this.state={
     tricks: []
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
        <Header />
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;