import React from 'react'

import { LoginProps }  from './Login.model'

const LoginView: React.FC<LoginProps> = props => {    
    return (
        <div>
          <h2>{props.title}</h2>
        </div>
    );
}

export default LoginView
