import React, { Component } from 'react'

import Post from './Post'
import Footer from '../layout/Footer'
import Info from '../layout/Info'

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('/api/posts/')
            .then(res => res.json())
            .then(data => {
                this.setState({ posts: data })
            })
    }
    
    render() { 
        const { posts } = this.state

        return (
            <>
                <Info />
                <main>
                    {
                        posts.map(post => (
                            <Post post={post} key={post.id} />
                        ))
                    }
                </main>
                <Footer />
            </>
        )
    }
}

export default Posts