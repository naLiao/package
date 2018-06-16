import React from 'react';
import {Route} from 'react-router-dom';

function renderComponent(routers){
    return routers.map((e,i)=>{
        return (
            <Route 
                path={e.path} 
                component={e.component} 
                key={i}
                exact={e.exact}
                render={e.render}
                strict={e.strict}
                children={e.child}
            />
        )
    });
}

export {renderComponent};