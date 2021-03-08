import react,{Component} from 'react'
import './header.css'
class TodoListHeader extends Component{
    handleKeyUp=(e)=>{
        let value = e.target.value
       
        if(e.keyCode===13){
            if(!e.target.value){
                alert('名字不能为空！')
                return
            }
            const {addTodo} = this.props
            addTodo({id:`${Math.random*1000}${+new Date}`,name:value,isDone:false})
            e.target.value = ""
        }
    }
    render(){
        return (
            <div className="todo-list-header">
                <input type="text" className="add-input" placeholder="请输入将要做的事情，按回车确认" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}

export default TodoListHeader