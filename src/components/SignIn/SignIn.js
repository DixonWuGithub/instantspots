

import "./SignIn.scss"
function SignIn({ setName, setShowSignIn }) {

    function handleSubmit(e) {
        e.preventDefault()
        setName(e.target.yourName.value)
        setShowSignIn(false)
    }


    return (
        <div className="signinmodal">
            <h1>InstantSpots</h1>
            <form className="signinmodal__form" onSubmit={handleSubmit}>
                <label className="signinmodal__element" htmlFor="yourName">What should we call you?</label>
                <input className="signinmodal__element" type="text" name="yourName" placeholder="Your name" />
                <button className="signinmodal__element" >Enter</button>
            </form>
        </div>
    )
}

export default SignIn