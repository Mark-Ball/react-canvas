import React, { Component } from 'react';
import Canvas from './Canvas';

class App extends Component {
    state = {
        drawingName: ''
    }

    onChangeDrawingName = (event) => {
        this.setState({ drawingName: event.target.value });
    }

    render() {
        const { drawingName } = this.state;

        return (
            <div>
                <h1>{drawingName === '' ? 'Welcome to the drawing pad' : drawingName}</h1>
                <Canvas />
                <label>Drawing title</label>
                <input onChange={this.onChangeDrawingName} type='text' />
            </div>
        )
    }
}

export default App;