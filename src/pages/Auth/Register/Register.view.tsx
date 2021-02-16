import React from 'react'

import { RegisterProps }  from './Register.model'

const RegisterView: React.FC<RegisterProps> = props => {    
    return (
        <div>
          <h2>{props.title}</h2>
        </div>
    );
}

export default RegisterView
