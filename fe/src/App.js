import React, {Component} from 'react';
import  StudentForm  from './components/student.form'
import Home from './components/home'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
    
   render() {    
        return (
            <BrowserRouter>
                <Route path='/' exact component={Home}/>
                <Route path='/create' exact component={StudentForm}/>
            </BrowserRouter>
        );
    }
}

export default App;