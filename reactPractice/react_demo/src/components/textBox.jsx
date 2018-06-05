import React, { Component } from 'react';

class Text extends Component {

    render() {
       
        return (
            <input type="text" value={value} onChange={onChange} />
        );
    }
}

export default Text;