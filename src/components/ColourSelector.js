import React, { Component } from 'react';

class ColourSelector extends Component {
    render() {
        const { hex, onColourSelectorChange } = this.props;

        return (
            <>
                <input type='color' value={hex} onChange={onColourSelectorChange} />
            </>
        );
    }

    static defaultProps = {
        hex: '#ffffff'
    }
}

export default ColourSelector;