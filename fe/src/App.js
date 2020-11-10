import React, {Component} from 'react';
import  StudentForm  from './components/student.form'
import Home from './components/home'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header';

class App extends Component {
    
   render() {    
        return (
            <div>
                <Header/>
                <BrowserRouter>
                    <Route path='/' exact component={Home}/>
                    <Route path='/create' exact component={StudentForm}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;