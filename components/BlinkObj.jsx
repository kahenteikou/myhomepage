import React from 'react'
class BlinkObj extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visiblekun:"visible",
            intervalkun:this.props.intervalkun
        };
    }
    componentDidMount(){
        setInterval(() => {
            if(this.state.visiblekun == "hidden"){
                this.setState({
                    visiblekun:"visible",
                })
            }else{
                this.setState({
                    visiblekun:"hidden",
                })
            }
        },this.state.intervalkun)
    }
    render(){
        return(
            <div className={this.props.className} style={{
                visibility:this.state.visiblekun
            }}>
                {this.props.children}
            </div>
        )
    }
}
export default BlinkObj