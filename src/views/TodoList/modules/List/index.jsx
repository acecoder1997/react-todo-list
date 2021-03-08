import react,{Component} from 'react'
import './list.css'
import Item from './Item'
class List extends Component{
    onDelete=(item,index)=>{
        return (item,index)=>{
            console.log(item,index)
        }
    }
    render(){
        let {dataSource,onChecked} = this.props
        return (
            <div className="list">
               {
                   dataSource.map((item,i)=>{
                       return (<Item info={item} key={item.id} onDelete={this.onDelete} onChecked={onChecked} />)
                   })
               }
            </div>
        )
    }
}

export default List