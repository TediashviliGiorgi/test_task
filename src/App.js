import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Main from './views/main/Main'
import Employees from './views/employees/Employees'
import Feedback from './views/feedback/Feedback'
import SingleEmployee from './views/singleEmployee/SingleEmployee'


function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/employees' component={Employees} />
          <Route path='/feedback' component={Feedback} />
          <Route path='/singleemployee' component={SingleEmployee} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;