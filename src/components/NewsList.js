import React, { Component } from 'react'
import News from './News'

export default class NewsList extends Component {

    render() {
        const {news} = this.props;
        return (
          <>
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <h1>Welcome to our site!</h1>
                        <h1>Be informed... </h1>
                    </div>
                </div>
                <div className="row">
                    {news.map(item=> (<News key={item.news_id} news={item}></News>))}

                </div>
            </div>
          </>
        )
    }
}
