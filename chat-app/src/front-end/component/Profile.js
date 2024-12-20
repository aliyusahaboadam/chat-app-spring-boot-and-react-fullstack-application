import { useParams } from "react-router-dom";

const Profile = () => {

    const { username } = useParams();

    return (
                           <div class="d-flex align-items-center py-1">
                                
                                <div class="position-relative">
                                <div className="avatar">{username.charAt(0)}</div>
                                </div>

                                <div class="flex-grow-1 pl-3 ">
                                    <strong>{username}</strong>
                                    <div class="text-muted small"><em>Profile</em></div>
                                </div>
                              
                            </div>
                      

        
    );

}

export default Profile;