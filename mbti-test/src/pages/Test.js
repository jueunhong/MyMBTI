import React, { useState } from "react";
import styles from "./Test.module.css";
import {qna, info} from "./data";

const Test = () => {
    const [question, setQuestion] = useState(qna[0].q);
    const [num, setNum] = useState(1);
    const onClick = () => {
        setNum(prev => prev+1);
        setQuestion(qna[num].q);
        };
    
 
    return(
        <div className={styles.Container}>
          {qna && <div>{question}</div>}
          <button onClick={onClick}><span>다음</span></button>
        </div>
    )
}

export default Test;