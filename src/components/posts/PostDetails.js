import React, { Component } from 'react'

import Time from '../layout/Time'

class PostDetails extends Component {
    state = {
        post: {}
    }

    componentDidMount() {
        const { id } = this.props.match.params

        fetch(`/api/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ post: data })
            })
    }

    render() {
    const { title, reading_time, date, description } = this.state.post

        return (
            <main>
                <article style={styles.container}>
                    <header>
                        <h1 style={styles.title}>{ title }</h1>
                        <Time date={date} reading_time={reading_time} />
                    </header>
                    <p style={styles.text}>{ description }</p>
                </article>
            </main>
        )
    }
}

const styles = {
    container: {
        marginTop: 50,
    },
    title: {
        color: 'white',
        fontSize: 40,
        fontWeight: 900,
        fontFamily: 'Montserrat'
    },
    text: {
        color: 'rgba(255, 255, 255, 0.88)',
        marginTop: 10
    }
}
 
export default PostDetails