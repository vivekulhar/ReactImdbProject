
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Movies />
    </>
    // {<React.Fragment>
    //   <NavBar />
    //   <Banner />
    // </React.Fragment>}
    
  );
}

export default App;
