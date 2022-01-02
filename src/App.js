import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Setting/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="container py-10 flex justify-between gap-16">
          <Navbar />
          <main className="main w-full">
            <Switch>
              <Route path="/profile/:userId?">
                <ProfileContainer />
              </Route>
              <Route path="/dialogs">
                <DialogsContainer />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
              <Route exact path="/users">
                <UsersContainer />
              </Route>
              <Route exact path="/music">
                <Music />
              </Route>
              <Route exact path="/settings">
                <Settings />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </BrowserRouter>

  )
}



export default App;
