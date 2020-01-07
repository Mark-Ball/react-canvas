import React, { Component } from 'react';
import ColourSelector from './ColourSelector';

class Canvas extends Component {
    state = { 
        hex: '#ffffff',
        coords: null,
        height: 400,
        width: 400
    };

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.context = null;
    }

    setContext() {
        this.context = this.canvasRef.current.getContext('2d');
        this.context.strokeStyle = this.state.hex;
        this.context.lineJoin = 'round';
        this.context.lineWidth = 3;
    }

    componentDidUpdate() {
        this.setContext();
    }

    componentDidMount() {
        console.log(this.canvasRef);
    }

    onColourSelectorChange = (event) => {
        this.setState({ hex: event.target.value });
    };

    onCanvasMouseDown = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        this.setState({ coords: [x, y] });
    }

    onCanvasMouseUp = (event) => {
        this.setState({ coords: null });
    }

    onCanvasMouseMove = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        let { coords, height, width } = this.state;

        // if (coords === null) {
        //     coords = [x, y];
        // }

        if (x > 0 && x < width && y > 0 && y < height) {
            if (coords) {
                this.context.beginPath();
                this.context.moveTo(coords[0], coords[1]);
                this.context.lineTo(x, y);
                this.context.closePath();
                this.context.stroke();
                this.setState({ coords: [x, y] });
            }
        } else {
            // this.setState({ coords: null });
        }
    }

    render() {
        const { hex, height, width } = this.state;

        return (
            <div>
                <div>
                    <ColourSelector 
                        onColourSelectorChange={this.onColourSelectorChange}
                        hex={hex}
                    />
                </div>
                <canvas
                    width={width}
                    height={height}
                    style={{ border: '6px solid black' }}
                    ref={this.canvasRef}
                    onMouseMove={this.onCanvasMouseMove}
                    onMouseDown={this.onCanvasMouseDown}
                    onMouseUp={this.onCanvasMouseUp}
                />
            </div>
        )
    }
}

export default Canvas;