import logo from './logo.svg';
import './App.css';
import { Route,Router, Switch } from "react-router-dom";
import HomePage from "./screens/homeScreen";
import KeyPage from "./screens/keyPage";
import DifficultyPage from "./screens/difficultyScreen";
import QuestionPage from "./screens/timeScreen";
import ResultPage from "./screens/resultScreen";
import ReadyPage from "./screens/readyScreen";
import NavigationBar from "./components/navigationbar";
import Footer from "./components/footer";
import GamePage from "./screens/gameScreen";
import DocumentationPage from "./screens/documentationScreen"
import "./stylesheet.css";
import history from "./history";

function App() {
  return (
    <Router history={history}>
    <div className="Board"> 
        <NavigationBar/>
         <Switch>
         <Route path="/" component={HomePage} exact />
         <Route path="/keyPage" component={KeyPage} exact />
         <Route path="/difficultyPage" component={DifficultyPage} exact />
         <Route path="/questionPage" component={QuestionPage} exact />
         <Route path="/resultPage" component={ResultPage} exact />
         <Route path="/readyPage" component={ReadyPage} exact />
         <Route path="/gamePage" component={GamePage} exact />
         <Route path="/documentationPage" component={DocumentationPage} exact />
         
         </Switch>
         <Footer/>
    </div>
    </Router >
  );
}

export default App;
