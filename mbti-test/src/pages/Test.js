import React, { useState } from "react";
import styles from "./Test.module.css";
import {qna, info} from "./data";
import { useNavigate } from "react-router-dom";

const Test = () => {
    const [question, setQuestion] = useState(qna[0].q);
    const [answer, setAnswer] = useState([qna[0].a[0].answer, qna[0].a[1].answer, qna[0].a[2].answer]);
    const [num, setNum] = useState(1);
    const navigate = useNavigate();
    const onClick = () => {
        if(num === 12){
            navigate("/Result");
        } else{
            setNum(prev => prev+1);
            setQuestion(qna[num].q);
            setAnswer([qna[num].a[0].answer, qna[num].a[1].answer, qna[num].a[2].answer])
        }
        };

    const answerClick = () => {
        onClick();
    };

    return(
        <div className={styles.Container}>
          {qna &&
          <>
            <h3 className={styles.question}>{question}</h3>
            <div className={styles.answerContainer}>
                <ul className={styles.answerList}>
                    {answer.map(a => <li key={a} onClick={answerClick} className={styles.answer}><span>{a}</span></li>)}
                </ul>
                
            </div>
          </>
          }
          <button onClick={onClick}><span>다음</span></button>
        </div>
    )
}

export default Test;