
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <>
    <Router>
    
      <Home/>

        <hr />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/screenshot" element={<Dashboard />}></Route>
        </Routes>
      
    </Router>
    </>
  );
}

export default App;
