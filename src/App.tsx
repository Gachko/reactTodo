import React from 'react';
import './App.css';
import {LoginPage} from "./pages/Login/Login.page";
import {TodoPage} from "./pages/Todo/Todo.page";
import {Header} from "./common/components/Header/Header.component";
import {useSelector} from "react-redux";
import {RootState} from "./store/reducer";
import {
    Switch,
    Route,
    Redirect,
    useHistory
} from 'react-router-dom'

function App() {

    const history = useHistory()

  const user = useSelector((state: RootState) => state.LoginReducer.user)

    if(!user) {
        history.push('/login')
    }


  return (
    <>
        <Switch>
            <Route exact path="/" component={TodoPage} />
            <Route exact path="/login" component={LoginPage} />
        </Switch>
    </>
  );
}

export default App;
