import react,{Component} from 'react'
import './footer.css'

class TodoListFooter extends Component{
    handleChecked=(e)=>{
        let flag = true
        const {dataSource,onReversed}=this.props
        const length = dataSource.filter(i=>i.isDone).length
        if(length === dataSource.length){
            flag = false
        }else if(length>0||length===0){
            flag = true
        }
        onReversed(flag)
    }

    render(){
        const {dataSource,clearAllDone}=this.props
        const length = dataSource.filter(i=>i.isDone).length

        return (
            <div className="todo-list-footer">
               <input type="checkbox" checked={length === dataSource.length&&dataSource.length} onChange={this.handleChecked}/>
               <span>共 {dataSource.length} 条 / 已完成：{length}</span>
               <button className="clear-btn" onClick={clearAllDone}>清除已完成任务</button>
            </div>
        )
    }
}

export default TodoListFooter