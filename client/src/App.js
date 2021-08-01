import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import UpdateUser from "./Components/UpdateUser";
import Signup from "./Components/Signup";
import SignupLogin from "./Components/SignupLogin";
import Login from "./Components/Login";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={SignupLogin} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/update/user/:id" component={UpdateUser} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
