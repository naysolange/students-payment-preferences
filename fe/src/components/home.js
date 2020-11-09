import React, {Component} from 'react';
import Students from './students';

class Home extends Component {
    
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

export default Home;