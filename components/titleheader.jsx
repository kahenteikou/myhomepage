import React from 'react'
import styles from "../styles/titleheader.module.css"
class TitleHeader extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="TitleHeader">
                <div className={styles.LargeHeader}>
                    kokkiemouse's homepage
                </div>
            </div>
        )
    }
}
export default TitleHeader 