import "./NavBar.css";

const NavBar = ({ setSection }) => {
    const onHandleclick = (sectionName) => setSection(sectionName)
    return (
        <div className="NavBar">

            <div className="NavBar__Home" onClick={() => onHandleclick("home")}>
                🏠
            </div>
            <div className="NavBar__Search" onClick={() => onHandleclick("search")}>
                🔎
            </div>
            <div className="NavBar__Add" onClick={() => onHandleclick("camera")}>
                ➕
            </div>
            <div className="NavBar__TV" onClick={() => onHandleclick("reels")}>
                🎞️
            </div>
            <div className="NavBar__Profile">
                <img src="https://scontent.ffco2-1.fna.fbcdn.net/v/t1.6435-9/190278643_10221994131255287_8205362781781791629_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gyBWbBufQiEAX_a86fQ&_nc_ht=scontent.ffco2-1.fna&oh=00_AfDlUa1tTf8El7RprfKYlQ6mMYkbrWTJwfUKCoFMHu9EVA&oe=64B7FAA0" />
            </div>

        </div>
    );
};

export default NavBar;