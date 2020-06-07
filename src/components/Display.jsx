import React, { Component } from 'react'

export class Display extends Component {
   constructor(props) {
       super(props);

       this.state = {
        display: '0',
    }
   }
   
   

    render() {
        console.log(this.value)
        return (
            <div className='display' style={styles.box} >
                {this.state.display}
            </div>
        )
    }
}

const styles = {
    box: {
        width: '100%',
        height: '50px',
        background: 'grey',
        textAlign: 'right',
        fontSize: '1.5rem',
        padding: '.5rem',
        color: '#fff'
    }
}

export default Display
