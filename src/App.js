import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard/MovieCard';
import Button from './components/Button/Button';
import { changeTab } from './actions/homeActions'
import { connect } from 'react-redux';
import constants from './constants';
import Home from './containers/Home/Home';

export class App extends Component {

componentDidMount(){
  this.props.setActiveTab(constants.tabs.TRENDING)
}

  render() {
    return (
      <div className="App">
        <div id="site-header">
        <div className="site-header-inner-container">
          <h1>Movies and Chill</h1>
          </div>
        </div>

        <div className="body-container">
            <Home/>
        </div>
        
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    activeTab : state.home.activeTab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveTab: (tabName) => {
      dispatch(changeTab(tabName))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
