import React, { Component } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import Button from '../../components/Button/Button';
import constants from '../../constants';
import { connect } from 'react-redux';
import { changeTab, getPopularMovies, getTrendingMovies } from '../../actions/homeActions'
import './Home.css'
import Pagination from '../../components/Pagination/Pagination';

class Home extends Component {

    constructor(props){
        super(props)

        this.handlePageChange = this.handlePageChange.bind(this)
    }

    render() {
        return (
            <div>
                <div className="content-header">
                    <div className="content-header-inner-container">
                        <h3>Browse</h3>
                        <Button text="Popular" onClick={() => { this.props.setActiveTab(constants.tabs.POPULAR) }} isActive={constants.tabs.POPULAR == this.props.activeTab} />
                        <Button text="Trending" onClick={() => { this.props.setActiveTab(constants.tabs.TRENDING) }} isActive={constants.tabs.TRENDING == this.props.activeTab} />
                    </div>
                </div>
                <div className="content-container">
                
                    {this.props.activeTab == constants.tabs.POPULAR ? 
                        <MoviesList movies={ this.props.popularMovies} key="popularPagination" /> :
                        <MoviesList movies={ this.props.trendingMovies} key="trendingPagination" /> 
                    }
                    
                    
                </div>
                
                { this.props.activeTab ==  constants.tabs.POPULAR ? 
                    <Pagination activePage = {this.props.popularPage} pageCount = { this.props.popularPageCount } pageChanged={this.handlePageChange}/> : 
                    <Pagination activePage= {this.props.trendingPage} pageCount = { this.props.trendingPageCount } pageChanged={this.handlePageChange} />
                }
                
            </div>
        );
    }

    componentDidMount(){
        this.props.fetchPopularMovies(this.props.popularPage)
        this.props.fetchTrendingMovies(this.props.trendingPage, "day")
    }

    componentDidUpdate(prevProps){
        if(prevProps.activeTab != this.props.activeTab){
            switch(this.props.activeTab){
                case constants.tabs.POPULAR:
                    this.props.fetchPopularMovies(this.props.popularPage)
                    break
                case constants.tabs.TRENDING:
                    this.props.fetchTrendingMovies(this.props.trendingPage, "day")
                    break;
            }
        }
        
    }


    handlePageChange = (newPage) => {
        if(this.props.activeTab == constants.tabs.POPULAR) {
            this.props.fetchPopularMovies(newPage)
        }
        else if (this.props.activeTab == constants.tabs.TRENDING) {
            this.props.fetchTrendingMovies(newPage)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        activeTab : state.home.activeTab,
        popularMovies : state.home.popularMovies,
        popularPage : state.home.popularMoviesCurrentPage,
        popularPageCount : state.home.popularMoviesPageCount,
        trendingMovies : state.home.trendingMovies,
        trendingPage : state.home.trendingMoviesCurrentPage,
        trendingPageCount : state.home.trendingMoviesPageCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveTab: (tabName) => {
            dispatch(changeTab(tabName))
        },
        fetchPopularMovies: (page) => {
            dispatch(getPopularMovies(page))
        },
        fetchTrendingMovies: (page, timeWindow) => {
            dispatch(getTrendingMovies(page, timeWindow))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);