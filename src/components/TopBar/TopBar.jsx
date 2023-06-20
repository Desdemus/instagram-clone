import "./TopBar.css";

//incons
import { LikeIcon, LogoIcon, MessangerIcon } from "../icons";
const TopBar = ({ setSection }) => {
    const onHandleclick = (sectionName) => setSection(sectionName)
    return (
        <div className="TopBar">
            <div className="TopBar__Logo" onClick={() => onHandleclick("home")}>
                <LogoIcon />
            </div>

            <div className="TopBar__Actions">
                <div className="TopBar__Notif">
                    <LikeIcon fill={"#262626"} />
                </div>
                <div className="TopBar__Msg">
                    <MessangerIcon />
                </div>
            </div>
        </div>
    );
};

export default TopBar;