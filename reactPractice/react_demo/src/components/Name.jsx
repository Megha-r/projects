import React, { Component } from 'react';

//import Text from '../../Inputs/Text'
//import Checkbox from '../../Inputs/Checkbox'

class Setting extends Component {

    render() {
        let { limit, onLimitChange, dispHeader, onHeaderChange } = this.props
        return (
            <div>
                Limit: <Text value={limit} onChange={onLimitChange} />
                Header: <Checkbox checked={dispHeader} onChange={onHeaderChange} />
            </div>
        )
    }
}

export default Setting;