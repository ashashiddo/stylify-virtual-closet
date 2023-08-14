import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ClothesContextProvider from './contexts/ClothesContext';
import AddItem from './pages/AddItem'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Navbar />
          <ClothesContextProvider>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/add">
              <AddItem />
            </Route>
        </ClothesContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;