import "./rightbar.css"

function Rightbar() {
    return (
        <div className="rightbar">
            <div className="container">
                <div className="item">
                    <span style={{marginTop:"10px"}}>Suggestions For You</span>
                    <div className="user">
                        <div className="user-info">
                            <img src="https://images.pexels.com/photos/6038354/pexels-photo-6038354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                            <span>Jane Doe</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img src="https://images.pexels.com/photos/6038354/pexels-photo-6038354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                            <span>Jane Doe</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span style={{marginTop:"10px"}}>Latest Activities</span>
                    <div className="user">
                        <div className="user-info">
                            <img src="https://images.pexels.com/photos/6038354/pexels-photo-6038354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                            <p>
                                <span>Jane Doe</span> Changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img src="https://images.pexels.com/photos/6038354/pexels-photo-6038354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                            <p>
                                <span>Jane Doe</span> Changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <img src="https://images.pexels.com/photos/6038354/pexels-photo-6038354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                            <p>
                                <span>Jane Doe</span> Changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="user-info">
                            <img src="https://images.pexels.com/photos/6038354/pexels-photo-6038354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                            <span>Jane Doe</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Rightbar;