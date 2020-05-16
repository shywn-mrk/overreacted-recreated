import React from 'react'

const Info = () => {
    return (
        <aside>
            <div style={styles.container}>
                <img style={styles.image} src={require('../../assets/dan.jpg')} alt="logo" />
                <p style={styles.text}>
                    Personal blog by <a href="https://mobile.twitter.com/dan_abramov" rel="noopener noreferrer" className="link">Dan Abramov</a>.<br/>
                    I explain with words and code.
                </p>
            </div>
        </aside>
    )
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50
    },
    text: {
        color: 'rgba(255, 255, 255, 0.88)',
        marginLeft: 20,
        lineHeight: 1.7
    },
    image: {
        width: '7vh',
        height: '7vh',
        borderRadius: '50%'
    }
}
 
export default Info