import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Products from './Components/Products';
import Orders from './Components/Order';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/products" component={Products} />
                <Route path="/orders" component={Orders} />
            </Switch>
            
        </Router>
    );
}

export default App;
