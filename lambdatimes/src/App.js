import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import { tabData, cardData } from './data';
class App extends Component{
  constructor(){
    super();
      this.state = {
      cards: [],
      tabs: []
  }
};
componentDidMount(){
  this.setState({cdata: cardData})
  this.setState({tdata: tabData})
}
render(){
  return (
    <div className="App">
    <TopBar />
    <Header />
    <Content />
  </div>
);
}
}

export default App;
