import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ClothesContextProvider from './contexts/ClothesContext';
import AddItem from './pages/AddItem'
import Home from './pages/Home'
import Registration from './components/Registration';
import Login from './pages/login';
import LoggedIn from './pages/logged_in';
import Header from './components/Header';
import HeaderLoggedIn from './components/Header_LoggedIn';
import Weather from './components/Weather';
import TorontoWeather from './components/TorontoWeather';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">

        <ClothesContextProvider>
            <Route exact path="/">
            <Header />
        {/* <Navbar /> */}
              <Home />
            </Route>

            <Route exact path="/add">
            <HeaderLoggedIn />
              <AddItem />
            </Route>

            <Route exact path="/registration">
              <Registration />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/logged_in">
              <HeaderLoggedIn />
              <LoggedIn />
            </Route>

            <Route exact path="/weather">
              <HeaderLoggedIn/>
              <Weather/>
            </Route>

            <Route exact path="/weather1">
              <HeaderLoggedIn/>
              <TorontoWeather/>
            </Route>
        </ClothesContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;