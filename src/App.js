import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div >
      <Header></Header>
      <Portfolio></Portfolio>
      <About></About>
      <Skill></Skill>
      <Footer></Footer>
    </div>
  );
}

export default App;
