import react,{Component} from 'react'
import './list.css'
import Item from './Item'
class List extends Component{

    render(){
        let {dataSource,onChecked,delTodo} = this.props

        return (
            <div className="list">
               {
                   dataSource.map((item,i)=>{
                       return (<Item info={item} key={item.id} onDelete={delTodo} onChecked={onChecked} />)
                   })
               }
            </div>
        )
    }
}

export default List