import React from 'react'
import styles from "../styles/titleheader.module.css"
class TitleHeader extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="TitleHeader">
                <marquee behavior="scroll" scrolldelay="10" > 
                    <div className={styles.LargeHeader}>
                        kokkiemouse's homepage
                    </div>
                </marquee>
            </div>
        )
    }
}
export default TitleHeader 