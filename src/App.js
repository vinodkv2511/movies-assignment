import { Component } from 'react';
import { RouterProvider } from "react-router-dom";
import './App.css';
import { changeTab } from './actions/homeActions'
import { connect } from 'react-redux';
import constants from './constants';
import router from './routes';

export class App extends Component {

  componentDidMount() {
    this.props.setActiveTab(constants.tabs.POPULAR)
  }

  render() {
    return (
      <div className="App">
        <div id="site-header">
          <div className="site-header-inner-container">
          <a href="/home"><h1>Movies and Chill</h1></a>
          </div>
        </div>
        <div className="body-container">
          <RouterProvider router={router} />
        </div>
      
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
