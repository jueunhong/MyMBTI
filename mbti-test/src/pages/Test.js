import React, { useState } from "react";
import styles from "./Test.module.css";
import {qna} from "./data";
import { useNavigate } from "react-router-dom";


const Test = () => {
    const [question, setQuestion] = useState(qna[0].q);
    const [answer, setAnswer] = useState([qna[0].a[0].answer, qna[0].a[1].answer, qna[0].a[2].answer]);
    const [answerResult, setAnswerResult] = useState([]);
    const [num, setNum] = useState(1);
    const navigate = useNavigate();
    const goToResultPage = () => {
        navigate("/Result")
    }
    

    const answerClick = (event) => {
        
        if(num === 12){
        } else{
            setNum(prev => prev+1);
            setQuestion(qna[num].q);
            setAnswer([qna[num].a[0].answer, qna[num].a[1].answer, qna[num].a[2].answer]);
            let id = event.target.id;
            setAnswerResult(prev => [...prev, ...qna[num].a[id].type]);
            countType();
        };
    };

    const countType = (e) => {
        let animalCount = [{animal: 'mouse', count: 0}, {animal: 'cow', count: 0}, {animal: 'tiger', count: 0},
        {animal: 'rabbit', count: 0},  {animal: 'dragon', count: 0},  {animal: 'snake', count: 0},  {animal: 'horse', count: 0},
        {animal: 'sheep', count: 0},  {animal: 'monkey', count: 0},  {animal: 'chick', count: 0},  {animal: 'dog', count: 0}, {animal: 'pig', count: 0}]
        

        for(let i = 0; i < 12; i++){
            animalCount[i].count = answerResult.filter(type => animalCount[i].animal === type).length;
            
        }
        
        let max = animalCount.reduce(function (prev, current) {
            return(prev.count > current.count) ? prev : current
        });

        localStorage.setItem('animal', max.animal);
    };
    
    


    return(
        
        <>
        {num === 12 ? 
            ( 
                <>
                    <div className={styles.Container}>
                    <h2 className={styles.goToResult}>결과보러 가기!</h2>
                    <button onClick={goToResultPage}><span>확인</span></button>
                    </div> 
                    
                    
                </>

                ) : 
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