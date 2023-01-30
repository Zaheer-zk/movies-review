import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import './App.css';
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="cards">
        {
          data.map((ele, i) => {
            return <Card Title={ele.Title} key={ele.imdbID} Year={ele.Year} Poster={ele.Poster} />
          })
        }
      </div>
      <Footer/>
    </div>
  );
}

export default App;
