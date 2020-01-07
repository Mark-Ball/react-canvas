import React, { Component } from 'react';

class PencilWidthSelector extends Component {
    render() {
        const { onPencilWidthChange, pencilWidth } = this.props;

        return (
            <>
                <label>Marker width</label>
                <select onChange={onPencilWidthChange} value={pencilWidth}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            </>
        )
    }

    static defaultProps = {
        pencilWidth: 3
    }
}

export default PencilWidthSelector;