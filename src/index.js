import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props){
        super(props);

// this is the only time we do direct assignment to this.state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setState!!
               this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({errorMessage: err.message});
            }
        );
    }


    componentDidMount() {
        console.log ("my comp was rendered to the screen")
    }

    componentDidUpdate() {
        console.log ("my comp was just updated -it rendered")
    }
    // React says we hate to define render!
    //Conditionally Rendering Content
    render() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Erroe: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));