import React,{Component} from 'react';
import Toheader from '../Toheader/toheader';
import List from '../List/list';
import Tofooter from '../Tofooter/tofooter';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr:[
                {name:"呵呵0",id:0,checked:true,editing:false},
                {name:"呵呵1",id:1,checked:false,editing:false}
            ],
            status:'all'
        };
    }

    //添加数据
    add = (obj)=>{
    let {arr} = this.state;
arr.push(obj);
this.setState({arr});
}

//点击勾选
changeCheck = (id)=>{
    let {arr} = this.state;
    arr.forEach(e=>{
        if(e.id===id){
        e.checked = !e.checked;
    }
})
    this.setState({arr});
}

//点击未完成
showNoCheck = (aa)=>{
    let {status} = this.state;
    status = aa;
    this.setState({status});
}

render(){
    let {arr,status} = this.state;
    let newArr2;

    if(status==='all'){
        newArr2 = arr;
    }else if(status==='noCheck'){
        newArr2 = arr.filter(e=>!e.checked)
    }else if(status==='checked'){
        newArr2 = arr.filter(e=>e.checked)
    }

    let newArr = newArr2.map((e,i)=>{
        let obj = {
            name:e.name,
            key:i,
            id:e.id,
            checked:e.checked,
            editing:e.editing,
            changeCheck:this.changeCheck
        }
        return <List {...obj}/>
})
    return (
        <section className="todoapp">
        <div>
        <Toheader {...{arr,add:this.add}} />
    <section className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
        {newArr}
        </ul>
        </section>
        <Tofooter {...{showNoCheck:this.showNoCheck}}/>
    </div>
    </section>
)
}
}

export default App;