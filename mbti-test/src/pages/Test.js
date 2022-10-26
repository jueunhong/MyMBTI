import React, { useState } from "react";
import styles from "./Test.module.css";
import {qna, info} from "./data";
import { useNavigate } from "react-router-dom";
import Result from "./Result";


const Test = () => {
    const [question, setQuestion] = useState(qna[0].q);
    const [answer, setAnswer] = useState([qna[0].a[0].answer, qna[0].a[1].answer, qna[0].a[2].answer]);
    const [answerResult, setAnswerResult] = useState([]);    
    const [num, setNum] = useState(1);
    const navigate = useNavigate();
   

    const answerClick = (event) => {
        
        if(num === 12){
            // navigate("/Result");
        } else{
            setNum(prev => prev+1);
            setQuestion(qna[num].q);
            setAnswer([qna[num].a[0].answer, qna[num].a[1].answer, qna[num].a[2].answer]);
            var id = event.target.id;
            setAnswerResult(qna[num]?.a[id].type);
            setAnswerResult(prev => [...prev, ...qna[num].a[id].type]);
        };
        
    };
    


    return(
        <>
        {num === 12 ? <Result totalType={answerResult}/> : 
        (
            <div className={styles.Container}>
            {qna &&
            <>
                <h3 className={styles.question}>{question}</h3>
                <div className={styles.answerContainer}>
                    <ul className={styles.answerList}>
                        {answer.map((a, index) => <li key={a} id={index} onClick={answerClick} className={styles.answer}>{a}</li>)}
                    </ul>
                    
                </div>
            </>
            }
            </div>
        )
        }
        </>
        
        
    )
}

export default Test;