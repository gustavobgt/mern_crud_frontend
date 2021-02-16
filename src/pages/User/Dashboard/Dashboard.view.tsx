import React from 'react'

import { DashboardProps }  from './Dashboard.model'

const DashboardView: React.FC<DashboardProps> = props => {    
    return (
        <div>
          <h2>{props.title}</h2>
        </div>
    );
}

export default DashboardView
