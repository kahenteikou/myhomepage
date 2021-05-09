import React from "react";
class chmod_tools extends React.Component{
    constructor(props){
        super(props)
        this.state={
            suid:0,
            sgid:0,
            sticky:0,
            r_own:0,
            w_own:0,
            x_own:0,
            r_grp:0,
            w_grp:0,
            x_grp:0,
            r_oth:0,
            w_oth:0,
            x_oth:0
        }
        this.changedCheckBoxRown=this.changedCheckBoxRown.bind(this);
        this.changedCheckBoxRgrp=this.changedCheckBoxRgrp.bind(this);
        this.changedCheckBoxRoth=this.changedCheckBoxRoth.bind(this);
        this.changedCheckBoxWown=this.changedCheckBoxWown.bind(this);
        this.changedCheckBoxWgrp=this.changedCheckBoxWgrp.bind(this);
        this.changedCheckBoxWoth=this.changedCheckBoxWoth.bind(this);
        this.changedCheckBoxXown=this.changedCheckBoxXown.bind(this);
        this.changedCheckBoxXgrp=this.changedCheckBoxXgrp.bind(this);
        this.changedCheckBoxXoth=this.changedCheckBoxXoth.bind(this);
    }
    changedCheckBoxWown(event){
        let rkun;
        if(event.target.checked){
            rkun=1;
        }else{
            rkun=0;
        }
        this.setState(
            {
                w_own:rkun
            }
        )
        console.log(event.target.checked)
    }
    changedCheckBoxWgrp(event){
        let rkun;
        if(event.target.checked){
            rkun=1;
        }else{
            rkun=0;
        }
        this.setState(
            {
                w_grp:rkun
            }
        )
        console.log(event.target.checked)
    }
    changedCheckBoxWoth(event){
        let rkun;
        if(event.target.checked){
            rkun=1;
        }else{
            rkun=0;
        }
        this.setState(
            {
                w_oth:rkun
            }
        )
        console.log(event.target.checked)
    }    
    changedCheckBoxRown(event){
        let rkun;
        if(event.target.checked){
            rkun=1;
        }else{
            rkun=0;
        }
        this.setState(
            {
                r_own:rkun
            }
        )
        console.log(event.target.checked)
    }
    changedCheckBoxRgrp(event){
        let rkun;
        if(event.target.checked){
            rkun=1;
        }else{
            rkun=0;
        }
        this.setState(
            {
                r_grp:rkun
            }
        )
        console.log(event.target.checked)
    }
    changedCheckBoxRoth(event){
        let rkun;
        if(event.target.checked){
            rkun=1;
        }else{
            rkun=0;
        }
        this.setState(
            {
                r_oth:rkun
            }
        )
        console.log(event.target.checked)
    }    
    changedCheckBoxXown(event){
        let rkun;
        if(event.target.checked){
            rkun=1;
        }else{
            rkun=0;
        }
        this.setState(
            {
                x_own:rkun
            }
        )
        console.log(event.target.checked)
    }
    changedCheckBoxXgrp(event){
        let rkun;
        if(event.target.checked){
            rkun=1;
        }else{
            rkun=0;
        }
        this.setState(
            {
                x_grp:rkun
            }
        )
        console.log(event.target.checked)
    }
    changedCheckBoxXoth(event){
        let rkun;
        if(event.target.checked){
            rkun=1;
        }else{
            rkun=0;
        }
        this.setState(
            {
                x_oth:rkun
            }
        )
        console.log(event.target.checked)
    }
    render(){
                    
        let contkun;
        contkun=(4000*this.state.suid + 
            2000*this.state.sgid+ 
            1000*this.state.sticky + 
            400*this.state.r_own + 
            200*this.state.w_own + 
            100*this.state.x_own + 
            40 * this.state.r_grp + 
            20 * this.state.w_grp + 
            10 * this.state.x_grp +
            4 * this.state.r_oth + 
            2 * this.state.w_oth + 
            1 * this.state.x_oth
            )
        return(
            <div>
                <form>
                    <input type="checkbox" onClick={this.changedCheckBoxRown} />Read Owner
                    <input type="checkbox" onClick={this.changedCheckBoxRgrp} />Read Group
                    <input type="checkbox" onClick={this.changedCheckBoxRoth} />Read Other
                    <input type="checkbox" onClick={this.changedCheckBoxWown} />Write Owner
                    <input type="checkbox" onClick={this.changedCheckBoxWgrp} />Write Group
                    <input type="checkbox" onClick={this.changedCheckBoxWoth} />Write Other
                    <input type="checkbox" onClick={this.changedCheckBoxXown} />Execute Owner
                    <input type="checkbox" onClick={this.changedCheckBoxXgrp} />Execute Group
                    <input type="checkbox" onClick={this.changedCheckBoxXoth} />Execute Other
                </form>
                <div>
                    {contkun}
                </div>
            </div>
        )
    }
}
export default chmod_tools