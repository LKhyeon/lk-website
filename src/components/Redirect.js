import React from 'react';
import { Redirect } from 'react-router';

class RedirectComponent extends React.Component {
    render() {
        return(
            <Redirect push to={{
                pathname: "/main"
            }} />
        );
    }
}

export default RedirectComponent;