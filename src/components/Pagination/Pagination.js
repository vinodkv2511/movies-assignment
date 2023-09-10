import React, { Component } from 'react';
import './Pagination.css'

class Pagination extends Component {

    constructor(props){
        super(props)

        this.getPagesData = this.getPagesData.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }


    getPagesData = () => {
        let activePage = this.props.activePage
        let pageCount = this.props.pageCount

        let showStartElipsis = false
        let showEndElipsis = false

        if (pageCount > 9) {

            if (activePage < 6) {
                showStartElipsis = false
                showEndElipsis = true
            }
            else if (pageCount - activePage < 5) {
                showStartElipsis = true
                showEndElipsis = false
            }
            else {
                showStartElipsis = true
                showEndElipsis = true
            }

            let startPages = [
                <div className={"pagination-page double-back"} onClick={this.handleClick} data-page={"first"} key={"<<"}>{"<<"}</div>,
                <div className={"pagination-page back"} onClick={this.handleClick} data-page={"previous"} key={"<"}>{"<"}</div>,
                <div className={"pagination-page".concat(activePage === 1 ? " active" : "")} onClick={this.handleClick} data-page={1} key={1}>1</div>,
                <div className={"pagination-page".concat(activePage === 2 ? " active" : "")} onClick={this.handleClick} data-page={2} key={2}>2</div>]
            let endPages = [
                <div className={"pagination-page".concat(activePage === pageCount - 1 ? " active" : "")} onClick={this.handleClick} data-page={pageCount - 1} key={pageCount - 1}>{pageCount - 1}</div>,
                <div className={"pagination-page".concat(activePage === pageCount ? " active" : "")} onClick={this.handleClick} data-page={pageCount} key={pageCount} >{pageCount}</div>,
                <div className={"pagination-page double-forward"} onClick={this.handleClick} data-page={"next"} key={">"}>{">"}</div>,
                <div className={"pagination-page forward"} onClick={this.handleClick} data-page={"last"} key={">>"}>{">>"}</div>,
            ]
            let midPages = []
            if (showStartElipsis && showEndElipsis) {
                midPages.push(<div className="pagination-page pagination-elipsis" key="elipsisStart">...</div>)
                for (let i = activePage - 2; i <= activePage + 2; i++) {
                    midPages.push(<div className={"pagination-page".concat(activePage === i ? " active" : "")} onClick={this.handleClick} data-page={i} key={i}>{i}</div>)
                }
                midPages.push(<div className="pagination-page pagination-elipsis" key="elipsisEnd">...</div>)
            }
            else if (showEndElipsis) {
                for (let i = 3; i <= 7; i++) {
                    midPages.push(<div className={"pagination-page".concat(activePage === i ? " active" : "")} onClick={this.handleClick} data-page={i} key={i}>{i}</div>)
                }
                midPages.push(<div className="pagination-page pagination-elipsis" key="elipsisEnd">...</div>)
            }
            else if (showStartElipsis) {
                midPages.push(<div className="pagination-page pagination-elipsis" key="elipsisStart">...</div>)
                for (let i = pageCount - 6; i <= pageCount - 2; i++) {
                    midPages.push(<div className={"pagination-page".concat(activePage === i ? " active" : "")} onClick={this.handleClick} data-page={i} key={i}>{i}</div>)
                }

            }

            return startPages.concat(midPages).concat(endPages)

        }
        else {
            let pages = []
            for (let i = 1; i <= pageCount; i++) {
                pages.push(<div className={"pagination-page".concat(activePage === i ? " active" : "")} onClick={this.handleClick} data-page={i} key={i}>{i}</div>)
            }
            return pages;
        }
    }

    handleClick = (evt) => {
        let activePage = this.props.activePage
        let pageCount = this.props.pageCount

        let pageString = evt.target.dataset["page"]
        let newPage
        let shouldChangePage = false
        switch (pageString) {
            case "next":
                if (activePage !== pageCount) {
                    newPage = activePage + 1
                    shouldChangePage = true;
                }
                break
            case "previous":
                if (activePage !== 1) {
                    newPage = activePage - 1
                    shouldChangePage = true;
                }
                break
            case "first":
                if (activePage !== 1) {
                    newPage = 1
                    shouldChangePage = true;
                }
                break
            case "last":
                if (activePage !== pageCount) {
                    newPage = pageCount
                    shouldChangePage = true;
                }
                break
            default:
            // Expects it to be a number
                if( parseInt(pageString) ){
                    newPage = parseInt(pageString)
                    shouldChangePage = true;
                }
        }
        if(shouldChangePage){
            // Trigger callback
            if(this.props.pageChanged){
                this.props.pageChanged(newPage);
            }
        }
    }


    render() {
        return (
            <div className="pagination-container">
                <div className="pagination-content-container">
                    {this.getPagesData()}
                </div>
            </div>
        );
    }
}

export default Pagination;