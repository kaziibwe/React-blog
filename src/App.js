import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {

  return (

    <Router>
      <div className="App">
        <Navbar />
        <div className="component">
        <Switch>
            <Route exact path="/"> <Home/> </Route>
            <Route path="/create"> <Create/> </Route>
            <Route path="/blogs/:id"> <BlogDetails/> </Route>
            {/* it shoud be at the buttom never up at top  catch all route*/}
            <Route path="*"> <NotFound/> </Route>


          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
