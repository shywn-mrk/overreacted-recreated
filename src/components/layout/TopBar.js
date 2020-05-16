import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
        <header style={styles.container}>
            <Link to="/" style={{ textDecoration: 'none' }}><h3 style={styles.title}>Overreacted</h3></Link>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </header>
    )
}
 
const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 40
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 900,
        fontFamily: 'Montserrat'
    },
}

export default TopBar