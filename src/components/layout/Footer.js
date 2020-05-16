import React from 'react'

const Footer = () => {
    return (
        <footer style={styles.container}>
            <div>
                <a href="https://mobile.twitter.com/dan_abramov" rel="noopener noreferrer" target="_blank" className="link">twitter</a> <span style={styles.span}> &middot; </span>
                <a href="https://github.com/gaearon" rel="noopener noreferrer" target="_blank" className="link">github</a> <span style={styles.span}> &middot; </span>
                <a href="https://stackoverflow.com/users/458193/dan-abramov" rel="noopener noreferrer" target="_blank" className="link">stack overflow</a>
            </div>
            <div>
                <a href="google.com" rel="noopener noreferrer" className="link">rss</a>
            </div>
        </footer>
    )
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 80,
        marginBottom: 40
    },
    span: {
        color: 'white'
    }
}
 
export default Footer