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
            { id:4, name:'学习',isDone:false},
            { id:5, name:'吃100000个肉松饼！',isDone:false},
            { id:6, name:'11点准时上床睡觉！',isDone:false},
        ]
    }
    onChecked=(item,checked)=>{
        let {list} = this.state
        list = list.map(l=>{
            if(l.id===item.id)l.isDone = checked
            return l
        })

        this.setState({list})
    }

    addTodo=(item)=>{
        let {list} = this.state
        list.unshift(item)
        this.setState({list})
    }

    delTodo=(item)=>{
        let {list} = this.state
        let newList = list.filter(i=>i.id!==item.id)
        this.setState({list:newList})
    }

    onReversed=(status)=>{
        let {list} = this.state
        list = list.map(l=>{
            l.isDone = status
            return l
        })
        this.setState({list})
    }

    clearAllDone=()=>{
        let {list} = this.state
        let newList = list.filter(i=>!i.isDone)
        this.setState({list:newList})
    }

    render(){
        let {list} = this.state
        return (
            <div className="todo-list">
                <TodoListHeader addTodo={this.addTodo}/>
                <List dataSource={list} onChecked={this.onChecked} delTodo={this.delTodo}/>
                <TodoListFooter dataSource={list} onReversed={this.onReversed} clearAllDone={this.clearAllDone}/>
            </div>
        )
    }
}

export default TodoList