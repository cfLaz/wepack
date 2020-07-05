import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import Users from './containers/Users';
//import Pizza from './containers/Pizza';
import asyncComp from './hoc/asyncComp';

const AsyncPizza = asyncComp(()=> {
    return import('./containers/Pizza')
})

class App extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Users</Link>  
                <Link to='pizza'>Pizza</Link>
                <div>
                  <Route path ='/' exact component={Users}/>
                  <Route path ='/pizza' exact component={AsyncPizza}/>
                </div>
            </div>
        );
    }
}