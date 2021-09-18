
import 'antd/dist/antd.css';
import Header from 'components/Header/Header';
import PageNotFound from 'containers/shares/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { adminRoutes, clientRoutes } from 'routes';
import './App.css';


function App() {
  const renderRoutes = routes =>{
    return routes.map(route =>{
      const {path, component, exact} = route;
      return (
        <Route path={path} exact={exact} component={component}/>
      )
    })
  }
  return (
    <div className="App">
      {/* <TopBar className="top-bar"/>
      <SideBar className="side-bar"/> */}
      
      <Router>
        {/* <Header /> */}
        <Switch>
            {renderRoutes(clientRoutes)}
            {renderRoutes(adminRoutes)}
            <Route path="*" component={PageNotFound}/>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
