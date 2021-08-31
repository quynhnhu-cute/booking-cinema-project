import logo from './logo.svg';
import './App.css';
import Header from 'components/Header/Header';
import HomePage from 'containers/home-module/HomePage';
import Footer from 'components/Footer/Footer';


function App() {
  return (
    <div className="App">
       <Header />
       <HomePage />
       <Footer />
    </div>
  );
}

export default App;
