

import "./SignIn.scss"
function SignIn ({setName, setShowSignIn}) {
    
    function handleSubmit (e){
        e.preventDefault()
        setName(e.target.yourName.value)
        setShowSignIn(false)
    }

     
    return (
        <div className="signinmodal">
        <form onSubmit={handleSubmit}>
            <label htmlFor="yourName">What should we call you?</label>
            <input type="text" name="yourName"  placeholder="please enter your name here"/>
            <button>enter</button>
        </form>
        </div>
    )
}

export default SignIn