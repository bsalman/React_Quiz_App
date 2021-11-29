// importing dependencies from package.json
import React from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Register from './Register';

class Router extends  React.Component{
    render(){
        return(
            <BrowserRouter>
                
                <Switch>
                  <Route path ='/register'exact component={Register}/>   
                </Switch>
                
           
               

            </BrowserRouter>
        )
    }
}
export default Router