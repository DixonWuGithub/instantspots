import { Link, useNavigate } from "react-router-dom"


function Header() {
    return (
        <>
            <h1>InstantSpots</h1>
            <div className="header-nav">
                <Link className="header-nav__link" to="/"><div>Ask!</div></Link>
                <Link className="header-nav__link" to="/recommendations"><div> Inquiries</div></Link>
            </div>
        </>
    )
}

export default Header