import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Details from "./Details";
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Banner/>}/>
          <Route exact path="/details/:name" element={<Details/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
