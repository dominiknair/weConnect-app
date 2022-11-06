import "./leftbar.css";
import friends from "../../assets/1.png"
import groups from "../../assets/2.png"
import market from "../../assets/3.png"
import watch from "../../assets/4.png"
import memories from "../../assets/5.png"
import events from "../../assets/6.png"
import gaming from "../../assets/7.png"
import gallery from "../../assets/8.png"
import videos from "../../assets/9.png"
import messages from "../../assets/10.png"
import tutorials from "../../assets/11.png"
import courses from "../../assets/12.png"
import fund from "../../assets/13.png"


function Leftbar() {
    return (
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src="https://images.pexels.com/photos/13408561/pexels-photo-13408561.jpeg?cs=srgb&dl=pexels-andrea-rodr%C3%ADguez-m-13408561.jpg&fm=jpg" alt="profile" />
                        <span>Dominik Nair</span>
                    </div>
                    <div className="item">
                        <img className="item-image" src={friends} alt="Friends" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img className="item-image" src={groups} alt="Groups" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img className="item-image" src={market} alt="Market" />
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img className="item-image" src={watch} alt="Watch" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img className="item-image" src={memories} alt="Memories" />
                        <span>Memories</span>
                    </div>
                    <hr/>
                    <div className="menu">
                        <span>Your short cuts</span>
                        <div className="item">
                            <img className="item-image" src={events} alt="Events" />
                        <span>Events</span>
                        </div>
                        <div className="item">
                            <img className="item-image" src={gaming} alt="Gaming" />
                            <span>Gaming</span>
                        </div>
                        <div className="item">
                            <img className="item-image" src={gallery} alt="Gallery" />
                            <span>Gallery</span>
                        </div>
                        <div className="item">
                            <img className="item-image" src={videos} alt="Videos" />
                            <span>Videos</span>
                        </div>
                        <div className="item">
                            <img className="item-image" src={messages} alt="Memories" />
                            <span>Messages</span>
                        </div>
                    </div>
                    <hr/>
                    <div className="menu">
                        <span>Others</span>
                        <div className="item">
                            <img className="item-image" src={events} alt="Events" />
                            <span>Events</span>
                        </div>
                        <div className="item">
                            <img className="item-image" src={tutorials} alt="Tutorials" />
                            <span>Tutorials</span>
                        </div>
                        <div className="item">
                            <img className="item-image" src={courses} alt="Courses" />
                            <span>Courses</span>
                        </div>
                        <div className="item">
                            <img className="item-image" src={fund} alt="Fund" />
                            <span>Fund</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}  

export default Leftbar;