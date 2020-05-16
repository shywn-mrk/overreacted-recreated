import React from 'react'
import { Link } from 'react-router-dom'

import Time from '../layout/Time'

const Post = (props) => {
    const { title, summary, reading_time, date, id } = props.post

    return (
        <article style={styles.container}>
            <header>
                <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
                    <h3 style={styles.title}>{ title }</h3>
                </Link>
                <Time date={date} reading_time={reading_time} />
            </header>
            <p style={styles.text}>{summary}</p>
        </article>
    )
}

const styles = {
    container: {
        marginTop: 50,
    },
    title: {
        color: '#ffa7c4',
        fontSize: 28,
        fontWeight: 900,
        fontFamily: 'Montserrat'
    },
    text: {
        color: 'rgba(255, 255, 255, 0.88)',
        marginTop: 10
    }
}
 
export default Post