import { Link } from "react-router-dom";

function Footer(){
    return (
        <div className="footer">
            <p>Les clés du Trégor</p>
            <p> - </p>
            <a href="mailto:ceciliabdev@gmail.com">CeciliaBdev</a>
            <p> - </p>
            <Link to='/mentions'>Mentions légales</Link>
        </div>
    )
}

export default Footer