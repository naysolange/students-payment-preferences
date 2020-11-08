import React, {Component} from 'react';
import Students from './components/students';

class App extends Component {
    
   render() {
        return (
            <Students students={this.state.students} />
        )
    }

    state = {
        students: []
    };

    componentDidMount() {
        fetch('http://localhost:8080/students')
            .then(res => res.json())
            .then((data) => {
                this.setState({ students: data })
            })
            .catch(console.log)
    }
}

export default App;