import React, { Component } from 'react';

class Food extends Component {
    render() {
        console.log(this.props);
        return (
            <div>Food Component</div>
        );
    }
}

export default Food;