import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
}

render() {
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>SIgn in with your email and password</span>

            <form>
                <input name="email" type="email" value={this.state.email} required />
                <label>Email</label>
                <input name="password" type="password" value={this.state.password} required />
                <label>Password</label> 

                <input type="submit" value="Submit Form" />     
            </form>
        </div>
    )
}

export default SignIn;