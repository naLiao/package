import React from 'react';
import {renderComponent} from './fn';
import {Link} from 'react-router-dom';
//所有组件引入
import Index from '../Index/index';

//路由配置
let routes = [
    {
        path:'/',
        component:Index
    },
    // {
    //     path:'/:id',
    //     render:({match})=>{
    //         let id = 'sg';
    //         if(match.params){id = match.params.id}
    //         switch(id){
    //             case 'sg':
    //                 return <SG {...{title:'水果',n:'reducer1'}}/>
    //             case 'dn':
    //                 return <SG {...{title:'电脑',n:'reducer2'}}/>
    //         }
    //     }
    // }
];

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { };
    }
    render(){
        return (
            <div>
                {renderComponent(routes)}
            </div>
        )
    }
}
export default App;