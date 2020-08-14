import React, { Component } from 'react';
import CountValue from './CountValue';

interface ConterProps {
    initialValue?: number;
}

interface CounterState {
    value: number;
}

export default class Counter extends Component<ConterProps, CounterState> {

    public state = { value: this.props.initialValue || 0 };

    private setValue = (num: number) => {
        this.setState({
            value: this.state.value + num
        })
    }
    render() {
        return (
            <div>
                <CountValue count={this.state.value} />
                <button onClick={() => this.setValue(-1)}>-</button>
                <button onClick={() => this.setValue(1)}>+</button>
            </div>
        )
    }
}