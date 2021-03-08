import react,{Component} from 'react'
import './header.css'
class TodoListHeader extends Component{
    onChange=(e)=>{
       console.log(e.target.keycode)
    }
    render(){
        return (
            <div className="todo-list-header">
                <input type="text" className="add-input" placeholder="请输入将要做的事情..." onChange={this.onChange}/>
            </div>
        )
    }
}

export default TodoListHeader