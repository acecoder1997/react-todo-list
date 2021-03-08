import react,{Component} from 'react'
import './item.css'
class Item extends Component{
    state = {isCheck:false}

    onChecked=(e)=>{
        let {info,onChecked} = this.props
        onChecked(info,e.target.checked)
    }
    render(){
        let {info,onDelete} = this.props
        let {isCheck} = this.state
        isCheck = info.isDone
        return (
            <div className="item">
                <input className="item-checkbox" type="checkbox" defaultChecked={isCheck} onChange={this.onChecked}/>
                <div className="item-body"><span>{info.name}</span></div>
                <button className="item-del" onClick={onDelete}>删除</button>
            </div>
        )
    }
}

export default Item