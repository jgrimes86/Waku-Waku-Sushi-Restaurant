import WakuWaku from "../data/WakuWaku.png"

function Header() {
    return (
        <div id="header">
            <img id="header-image" src={WakuWaku} alt="Waku Waku Sushi Restaurant" />
        </div>
        
    )
}

export default Header;