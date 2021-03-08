import react,{Component} from 'react'
import './item.css'
class Item extends Component{
    state = {onHover:false}

    onChecked=(e)=>{
        let {info,onChecked} = this.props
        onChecked(info,e.target.checked)
    }

    onHover=(flag)=>{
       return (e)=>{
           this.setState({onHover:flag})
       }
    }

    handleDel=(item)=>{
        let {onDelete} = this.props
        return ()=>{
            onDelete(item)
        }
    }

    render(){
        let {info} = this.props
        let {onHover} = this.state

        return (
            <div className={`item ${onHover?'on-hover':''}`} onMouseEnter={this.onHover(true)} onMouseLeave={this.onHover(false)}>
                <input className="item-checkbox" type="checkbox" checked={info.isDone} onChange={this.onChecked}/>
                <div className="item-body" style={{textDecoration:info.isDone?'line-through':''}}><span>{info.name}</span></div>
                <button className={`item-del ${onHover?'':'hidden'}`} onClick={this.handleDel(info)}>删除</button>
            </div>
        )
    }
}

export default Item