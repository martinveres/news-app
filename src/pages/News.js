import React, { Component } from 'react'
import {newsData} from '../data/newsData'
import NewsList from '../components/NewsList'
export default class News extends Component {
    render() {
        this.state = {
            news: newsData
        }
        return (
            <>
                <NewsList news={this.state.news}></NewsList>
            </>
        )
    }
}
