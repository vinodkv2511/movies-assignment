import React, { Component } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import Button from '../../components/Button/Button';
import constants from '../../constants';
import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar'
import { changeTab, getPopularMovies, getTrendingMovies, getSearchMovies } from '../../actions/homeActions'
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
                        <Button text="Popular" onClick={() => { this.props.setActiveTab(constants.tabs.POPULAR) }} isActive={constants.tabs.POPULAR === this.props.activeTab} />
                        <Button text="Trending" onClick={() => { this.props.setActiveTab(constants.tabs.TRENDING) }} isActive={constants.tabs.TRENDING === this.props.activeTab} />
                        <Button text="Search" onClick={() => { this.props.setActiveTab(constants.tabs.SEARCH) }} isActive={constants.tabs.SEARCH === this.props.activeTab} />
                        { this.props.activeTab === constants.tabs.SEARCH ?  <SearchBar className="content-header-search-bar" keyword={this.props.searchKeyword} onChange={(event)=>{this.props.fetchSearchMovies(event.target.value, this.props.searchPage)}}/> : null }
                    </div>
                </div>
                <div className="content-container">
                
                    {   this.props.activeTab === constants.tabs.POPULAR ? 
                        <MoviesList movies={ this.props.popularMovies} /> :
                        this.props.activeTab === constants.tabs.TRENDING ?
                        <MoviesList movies={ this.props.trendingMovies} /> :
                        this.props.activeTab === constants.tabs.SEARCH ?
                        <MoviesList movies={ this.props.searchMovies} /> : ""
                    }
                    
                    
                </div>
                
                {   this.props.activeTab ===  constants.tabs.POPULAR ? 
                    <Pagination activePage = {this.props.popularPage} pageCount = { this.props.popularPageCount } pageChanged={this.handlePageChange}/> : 
                    this.props.activeTab ===  constants.tabs.TRENDING ?
                    <Pagination activePage= {this.props.trendingPage} pageCount = { this.props.trendingPageCount } pageChanged={this.handlePageChange} /> :
                    this.props.activeTab ===  constants.tabs.SEARCH ?
                    <Pagination activePage= {this.props.searchPage} pageCount = { this.props.searchPageCount } pageChanged={this.handlePageChange} /> : ""
                }
                
            </div>
        );
    }

    componentDidMount(){
        this.props.fetchPopularMovies(this.props.popularPage)
        this.props.fetchTrendingMovies(this.props.trendingPage, "day")
    }

    componentDidUpdate(prevProps){
        if(prevProps.activeTab !== this.props.activeTab){
            switch(this.props.activeTab){
                case constants.tabs.POPULAR:
                    this.props.fetchPopularMovies(this.props.popularPage)
                    break
                case constants.tabs.TRENDING:
                    this.props.fetchTrendingMovies(this.props.trendingPage, "day")
                    break;
                default:
                    break;
            }
        }
        
    }


    handlePageChange = (newPage) => {
        if(this.props.activeTab === constants.tabs.POPULAR) {
            this.props.fetchPopularMovies(newPage)
        }
        else if (this.props.activeTab === constants.tabs.TRENDING) {
            this.props.fetchTrendingMovies(newPage)
        }
        else if (this.props.activeTab === constants.tabs.SEARCH) {
            this.props.fetchSearchMovies(this.props.searchKeyword, newPage)
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
        trendingPageCount : state.home.trendingMoviesPageCount,
        searchKeyword: state.home.searchKeyword,
        searchMovies : state.home.searchMovies,
        searchPage : state.home.searchMoviesCurrentPage,
        searchPageCount : state.home.searchMoviesPageCount
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
        },
        fetchSearchMovies: (keyword, page) => {
            dispatch(getSearchMovies(keyword, page))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);