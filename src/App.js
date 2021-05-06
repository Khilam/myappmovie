
import './App.css';
import Home from './components/home';
import { BrowserRouter, Route , Router} from 'react-router-dom';
import Favoris from './components/Favoris';
import search from './components/search'








function App() {
  return (
    <div>
       
    <BrowserRouter>
    
      
  <Route exact path='/'  component={Home}/>
   <Route  path='/Favoris' component={Favoris}/>
  
   <Route  path='/search' component={search}/>
   </BrowserRouter>
  
  </div>
  )
}

export default App;
