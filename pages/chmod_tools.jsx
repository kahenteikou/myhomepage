import React from "react";
import styles from "../styles/chmod_tools.module.css";
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
        this.changedCheckSUID=this.changedCheckSUID.bind(this);
        this.changedCheckSticky=this.changedCheckSticky.bind(this);
        this.changedCheckSGID=this.changedCheckSGID.bind(this);
    }
    changedCheckSticky(event){
        let rkun;
        if(event.target.checked){
            rkun=1;
        }else{
            rkun=0;
        }
        this.setState(
            {
                sticky:rkun
            }
        )
        console.log(event.target.checked)
    }
    changedCheckSGID(event){
        let rkun;
        if(event.target.checked){
            rkun=1;
        }else{
            rkun=0;
        }
        this.setState(
            {
                sgid:rkun
            }
        )
        console.log(event.target.checked)
    }
    changedCheckSUID(event){
        let rkun;
        if(event.target.checked){
            rkun=1;
        }else{
            rkun=0;
        }
        this.setState(
            {
                suid:rkun
            }
        )
        console.log(event.target.checked)
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
                <center>
                    <form className={styles.formkun}>
                    <input type="checkbox" className={styles.inputkun} onClick={this.changedCheckBoxRown} /><label className={styles.labelkun}>Read Owner</label>
                    <input type="checkbox" className={styles.inputkun} onClick={this.changedCheckBoxWown} /><label className={styles.labelkun}>Write Owner</label>
                    <input type="checkbox" className={styles.inputkun} onClick={this.changedCheckBoxXown} /><label className={styles.labelkun}>Execute Owner</label>
                    <br/>
                    <input type="checkbox" className={styles.inputkun} onClick={this.changedCheckBoxRgrp} /><label className={styles.labelkun}>Read Group</label>
                    <input type="checkbox" className={styles.inputkun} onClick={this.changedCheckBoxWgrp} /><label className={styles.labelkun}>Write Group</label>
                    <input type="checkbox" className={styles.inputkun} onClick={this.changedCheckBoxXgrp} /><label className={styles.labelkun}>Execute Group</label>
                    <br/>
                    <input type="checkbox" className={styles.inputkun} onClick={this.changedCheckBoxRoth} /><label className={styles.labelkun}>Read Other</label>
                    <input type="checkbox" className={styles.inputkun} onClick={this.changedCheckBoxWoth} /><label className={styles.labelkun}>Write Other</label>
                    <input type="checkbox" className={styles.inputkun} onClick={this.changedCheckBoxXoth} /><label className={styles.labelkun}>Execute Other</label>
                    <br/>
                    <input type="checkbox" className={styles.inputkun} onClick={this.changedCheckSUID} /><label className={styles.labelkun}>SUID</label>
                    <input type="checkbox" className={styles.inputkun} onClick={this.changedCheckSGID} /><label className={styles.labelkun}>SGID</label>
                    <input type="checkbox" className={styles.inputkun} onClick={this.changedCheckSticky} /><label className={styles.labelkun}>Sticky</label>
                    </form>
                <div className={styles.contkun}>
                    {contkun}
                </div>
                </center>
            </div>
        )
    }
}
export default chmod_tools