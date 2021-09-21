import { useHistory } from "react-router"

const Header = () => {

    const history = useHistory()

    return (
        <div className="header-container">
            <div>
                <h1 className="title">Conta ZAP</h1>
            </div>
            <div>
                <span onClick={() => history.push("/")}>Dashboard</span>
                <span onClick={() => history.push("/list")}>Mensagens</span>
                <span onClick={() => history.push("/sigIn")}>Logout</span>
            </div>
        </div>)

}

export default Header