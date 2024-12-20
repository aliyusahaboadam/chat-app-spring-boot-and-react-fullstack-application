import './App.css';
import Users from './component/Users';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ChatConsole from './component/ChatConsole';
import JoinChat from './component/JoinChat';
import { StompProvider } from './proxy/StompProvider';



  
  

function App() {
  return (
         

    <div class="container mt-4">
       <h4 class="text-center" >Chat Application</h4>
          
          <StompProvider>
              <Router>
                  <Routes>
                    <Route path="/"  element={<JoinChat/>}/> 
                    <Route path="/chat-console/:username"  element={ 
                      <div className='row'>
                           <Users/>
                           <ChatConsole/>
                      </div>
                      
                      }/> 
                  </Routes>
              </Router>
              </StompProvider>
           
            </div>
    
  );
}

export default App;
