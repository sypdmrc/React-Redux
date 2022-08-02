import Content from "./Content";


const Header = (props) => {
    return (
        <nav style={{border:"1px solid white"}}>
        Header Component
        <Content onClick={props.onClick} userName={props.userName}/>
        </nav>
    )
}

export default Header;