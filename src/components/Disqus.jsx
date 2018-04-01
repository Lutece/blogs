import React, { Component } from 'react'
import ReactDisqusComments from 'react-disqus-comments';

export default class Disqus extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ReactDisqusComments
                    shortname="luteceblog"
                    title={`${this.props.title}`}
                    url={`http://blog.lutece.kr/${this.props.path}`}
                    category_id={`${this.props.path}`}
                    identifier={`${this.props.path}`}
            />
        )
    }
}
