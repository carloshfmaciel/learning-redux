
import React, {Component} from 'react'
import { connect } from 'react-redux'

class Contador extends Component {
    render() {
        const {decrement,increment,count} = this.props
        return(
        <div>
            <h2>Counter</h2>
            <div>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => ({ count: state.contadorReducer.count })

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Contador)