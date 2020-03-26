import React, {Component} from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor()
  {
    super();

    this.state = {
      monster: [],
      searchField: ''
    };
  }
  componentWillMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then(users => this.setState({monster: users}));
  }
  handelChange =(e) =>{
    this.setState({searchField: e.target.value})
  } 
  render(){
    const {monster , searchField} = this.state;
    const filterMethod = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
  return (
   
    <div className="App">
      <h1>Monster Roledex</h1>
      <SearchBox
       placeholder= 'search Monster'
       handelChange = {this.handelChange} 
      />
       <CardList  monster= {filterMethod}/>
       
      
    </div>
  )
      }
  
  }


export default App;
