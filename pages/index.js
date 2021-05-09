import React from "react";
import TitleHeader from "../components/titleheader";
import styles from "../styles/index.module.css"
import BlinkObj from "../components/BlinkObj";
class Index extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <>
        <TitleHeader />
        <div className={styles.cardout}>
          <BlinkObj intervalkun="800">
            <div className={styles.bigstrtitle}>About</div>
          </BlinkObj>
          <div className={styles.cardobjkun}>
            一般情報班男子高校生です。<br /><br />
            楽しいことが好き。<br /><br />
            つまらないことは嫌いです。<br /><br />
          </div>
        </div>
        <div className={styles.cardout}>
          <BlinkObj intervalkun="800">
            <div className={styles.bigstrtitle}>My Tools</div>
          </BlinkObj>
          <div className={styles.cardobjkun}>
            <ul>
              <li><a href="/chmod_tools" >chmod tool</a></li>
            </ul>
          </div>
        </div>

      </>
    )
  }
}
export default Index
