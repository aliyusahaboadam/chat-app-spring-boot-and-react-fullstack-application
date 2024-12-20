import { useSelector } from "react-redux";

const Users = () => {
const messages = useSelector(state => state.messages);


    return (
        
        <div class="col-4 card">
            <br></br>
            {
                                messages.map((message) => {
                                    
                                    if (message.status === "JOIN" && message.content == null) {
                                      
                                        return  (
                                       
                                            <div class="d-flex align-items-start">
                                              <div className="avatar">{message.user.charAt(0)}</div>
                                              <div class="flex-grow-1 ml-3">
                                              {message.user}
                                              
                                              <div class="small">
                                                  <div class="badge bg-success float-right">{message.status}</div>
                                              </div>
                                          </div>
                                      </div>
                                          
                                          )
                                    }  else if (message.status === "LEFT") {

                                    return    (

                                            <div class="d-flex align-items-start">
                                            <div className="avatar">{message.user.charAt(0)}</div>
                                            <div class="flex-grow-1 ml-3">
                                            {message.user}
                                            
                                            <div class="small">
                                                <div class="badge bg-danger float-right">{message.status}</div>
                                            </div>
                                        </div>
                                    </div>
                                        )
                                    } 
                                })
                              }







         
        

         
         
       </div>
    );
  }
  export default Users;