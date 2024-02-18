// Import data

// Import components
import './App.css';
import {Gallery} from './gallery';
import {Posting} from './gallery';
import Search from './search';
import Sidebar from './sidebar';

function App(){
  return (
    <div>
      <nav>
        <ul style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h1>craigslist</h1>
          <Search />
        </ul>
      </nav>
      <main style={{display: 'flex'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', width: '15%'}}>
          <Sidebar />
        </div>
        <div className="App" style={{display: 'flex'}}>
          <Gallery />
          <Posting post={title}/>
        </div>
      </main>
    </div>
  );
}

export default App;
