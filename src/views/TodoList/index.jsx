import react,{Component} from 'react'
import './todoList.css'
import TodoListHeader from './modules/Header'
import List from './modules/List'
import TodoListFooter from './modules/Footer'
class TodoList extends Component{
    state = {
        list:[
            { id:1, name:'吃饭',isDone:true},
            { id:2, name:'睡觉',isDone:true},
            { id:3, name:'写100个BUG',isDone:false},
            { id:4, name:'学习',isDone:false}
        ]
    }
    onChecked=(item,checked)=>{
        console.log(item,checked)
        let {list} = this.state
        list = list.map(l=>{
            if(l.id===item.id)l.isDone = checked
            return l
        })
        console.log(list)   
        this.setState({list})
    }
    render(){
        let {list} = this.state
        return (
            <div className="todo-list">
                <TodoListHeader/>
                <List dataSource={list} onChecked={this.onChecked}/>
                <TodoListFooter/>
            </div>
        )
    }
}

export default TodoList