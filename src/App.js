import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import './App.css';
import { changeTab } from './actions/homeActions'
import { connect } from 'react-redux';
import constants from './constants';
import Home from './containers/Home/Home';
import MovieDetails from './containers/MovieDetails/MovieDetails';

export class App extends Component {

  componentDidMount() {
    this.props.setActiveTab(constants.tabs.TRENDING)
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div id="site-header">
            <div className="site-header-inner-container">
              <Link to="/home"><h1>Movies and Chill</h1></Link>
            </div>
          </div>

          <div className="body-container">

            <Route path="/" exact render={() => <Redirect to="/home" />} />
            <Route path="/home" exact component={Home} />
            <Route path="/movie/:movie_id" exact component={MovieDetails} />
            {/* <Route path="/cast/:id" exact component={CastDetails}/> */}

          </div>
        </Router>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    activeTab: state.home.activeTab
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
