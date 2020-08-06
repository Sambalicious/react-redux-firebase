import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import DashBoard from './components/dashboard/Dashboard';
import ProtectedRoute from './config/ProtectedRoute';
import NotFound from './config/NotFound';





function App() {
  return (
    <BrowserRouter>
          <Navbar />
        <Switch>
              
        
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <ProtectedRoute path="/create" component={CreateProject} />
        <ProtectedRoute exact path="/project/:id" component={ProjectDetail} />
        <ProtectedRoute exact path="/" component={DashBoard} />
         <Route path="*" component={NotFound} /> 
         
        </Switch>
    </BrowserRouter>
  );
}

export default App;
