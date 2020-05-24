import React from 'react';
import Topbar from "./components/Topbar"
import Filters from "./components/Filters"
import Contacts from "./components/Contacts"
import './App.scss';
import { queryAllByAttribute } from '@testing-library/react';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: [],
      allData: []
    }
  }
  componentDidMount(){
    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then(response => response.json())
      .then(response => this.setState({contacts: response, allData: response}));
  }
  applyFilter(type, isAsc){
    this.setState({
      contacts: this.state.contacts.sort((x, y) => {
        if (x[type].toLowerCase() < y[type].toLowerCase()) return isAsc ? 1 : -1
        if (x[type].toLowerCase() > y[type].toLowerCase()) return isAsc ? -1 : 1
        return 0;
      })
    })
  }
  performSearch(searchName){
    if (searchName === ""){
      this.setState({contacts: this.state.allData})
    } else {
      const search = this.state.allData.filter((contact) => contact.name.includes(searchName))
      this.setState({contacts: [...search], changed: true})
    }
  }
  render() {
    return (
      <div className="app" data-testid="app">
        <Topbar />
        <Filters filter={this.applyFilter.bind(this)} performSearch={this.performSearch.bind(this)}/>
        <Contacts contacts={this.state.contacts}/>
      </div>
    )
  }
} 
export default App;