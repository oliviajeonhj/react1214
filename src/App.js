import Header from './cpn/Header';
import Topswiper from './cpn/Topswiper';
import Preinterview from './cpn/Preinterview';
import Footer from './cpn/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Topswiper></Topswiper>
      <Preinterview contentid="portfolio" contenttitle="추천서" num="0"></Preinterview>      
      <Preinterview contentid="me" contenttitle="키워드" num="1"></Preinterview>
      <Preinterview contentid="preInterview" contenttitle="연락처" num="2"></Preinterview>
      <Footer></Footer>
    </div>
  );
}

export default App;
