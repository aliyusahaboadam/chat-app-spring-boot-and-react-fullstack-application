import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMessageContext } from "../proxy/StompProvider";
const JoinChat = () => {
    
    const [state, setState] = useState({
        name: ''
      })

      const navigate = useNavigate();
      const { publishMessage } = useMessageContext();
     
      const handleNameChange = event =>{
        const value = event.target.value;
        setState({ ...state,
           name: value
        });
       }

       const handleSubmit  =  (event) => {
        event.preventDefault();
        publishMessage('/app/sendStatus', {user: state.name, status: 'JOIN'})
        navigate(`/chat-console/${state.name}`)
        setState({
         name: ''
         }) 
 
       
     }

  

    return (
        <div class="container">

            <div class="col-md-6 offset-md-3">

                <div class="card">
                  
                   <div class="card-header">
                    <h4 class="text-center" >Join Chat</h4>
                   </div>

                   <div class="card-body">

                   <form onSubmit={handleSubmit}>
                    <div class="input-group">
                        <input onChange={handleNameChange} type="text" class="form-control" placeholder="Type your username"/>
                        <button type="submit" class="btn btn-primary">Join</button>
                    </div>
                    </form>

                   </div>
                </div>

            </div>
        </div>
    );

}

export default JoinChat;