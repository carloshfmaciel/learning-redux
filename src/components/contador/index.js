
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

class Contador extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
        <div>
            <h2>Counter</h2>
            <div>
                <button onClick={this.props.decrement}>-</button>
                <span>{this.props.count}</span>
                <button onClick={this.props.increment}>+</button>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => ({ count: state.count })

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Contador)