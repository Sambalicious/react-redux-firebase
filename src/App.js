import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import DashBoard from './components/dashboard/Dashboard';




function App() {
  return (
    <BrowserRouter>
          <Navbar />
        <Switch>
        <Route path='/project/:id' exact component={ProjectDetail} />
        <Route path='/signIn' component={SignIn} />
        <Route path='/signUp' component={SignUp} />
        <Route path='/create' component={CreateProject} />
        <Route path='/' component={DashBoard} />
         
        </Switch>
    </BrowserRouter>
  );
}

export default App;
