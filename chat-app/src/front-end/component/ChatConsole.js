import Profile from "./Profile";
import { useParams } from "react-router-dom";
import {  useSelector } from "react-redux";
import { useState } from "react";
import { useMessageContext } from "../proxy/StompProvider";



const ChatConsole = () => {
       
       const { username } = useParams();
       const messages = useSelector(state => state.messages);
       const [ content, setContent ] = useState('');
       const { publishMessage } = useMessageContext();

   
    const handleContent = (event) => {
        const value = event.target.value;
        setContent(value);
    }
   

    const handleSubmit  = (event) => {
        event.preventDefault();

        var message = {
            user: username, 
            content: content,
            time: ''
          }
          
          publishMessage('/app/sendMessage', message);
        setContent(''); 
     }

    return (
    
<div className="col-8 card">
            
            <Profile/>
             
                <form onSubmit={handleSubmit}>
            
            <div class="flex-grow-0 py-3 border-top">
                   
                   <div class="input-group">
                         <input 
                          type="text"
                          class="form-control"
                          placeholder="Type your message"
                          value={content}
                          onChange={handleContent}
                          />
                         <button type="submit" class="btn btn-primary" >Send</button>
                     </div>
                    
                 </div>

            </form>
                


                
              {
                 messages.map((message) => {
                  if (message.content == null ) {
                return null;
                  }  return (
                                       
                  
                      <div class="pb-2">
                    <div>
                         <div className="avatar">{message.user.charAt(0).toUpperCase()}</div>
                        <div class="text-muted small mt-2">{message.time}</div>
                    </div>

                    <div class="flex-shrink-1 bg-info rounded py-2 px-3">
                    <div class="fw-bold">{message.user}</div>
                    {message.content}
                  </div> 
                 </div>

                                    
              );
            })
          }
                 
  </div>

    


        
    );

}

export default ChatConsole;
