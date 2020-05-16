import React from 'react'

const Time = ({ date, reading_time }) => {
    return (
        <small style={styles.text}>{ date } &middot; { reading_time } min read</small>
    )
}

const styles = {
    text: {
        color: 'rgba(255, 255, 255, 0.88)',
        marginTop: 10
    }
}
 
export default Time