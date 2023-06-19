import "./TopBar.css";

//incons
import { LikeIcon, LogoIcon, MessangerIcon } from "../icons";

const TopBar = () => {
    return (
        <div className="TopBar">
            <div className="TopBar__Logo">
                <LogoIcon />
            </div>

            <div className="TopBar__Actions">
                <LikeIcon fill={"#262626"} />
                <MessangerIcon />
            </div>
        </div>
    );
};

export default TopBar;