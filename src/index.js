import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {

    state = {lat: null, errorMessage: ''};


    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState ({errorMessage: err.message})
        );
    }


    renderContnt(){
        if (this.state.errorMessage && !this.state.lat){
            return <div>Erroe: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner  message="Please accept  colation request" />;

    }

    // React says we hate to define render!
    //Conditionally Rendering Content
    render() {
       return <div className="border red">{this.renderContnt()}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));