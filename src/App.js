
import {Route,Routes,Link} from 'react-router-dom'
import Home from "./pages/Home";
import AddMeeting from "./pages/AddMeeting";
import NotFound from './pages/NotFound';
import Navigation from './Components/Navigation/Navigation';
import OldMeetings from "./pages/OldMeetings";


function App() {
  return (
    <div className="App">


    <Navigation/>

    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/add' element={<AddMeeting/>}/>
      <Route exact path='*'  element={<NotFound/>}/>
      <Route exact path='/old'  element={<OldMeetings/>}/>
   

      

    </Routes>
    
    </div>
  );
}

export default App;
