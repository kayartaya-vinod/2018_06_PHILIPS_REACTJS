import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

// pure functional component:
const ShowTime = ({city}) =><p>The time in {city} now is {new Date().toDateString()}</p>;

// ES6 class based component
class Hello extends Component {
    render() {
        return (<Fragment>
                <h1>Hello, {this.props.name}!</h1>
                <hr />
                <p>How's weather in {this.props.city}?</p>
                <ShowTime {...this.props}  />
            </Fragment>);
    }
}
// placeholder for our component in public/index.html
const root = document.getElementById('root');
ReactDOM.render(<Hello name='Vinod' city='Bangalore' />, root);