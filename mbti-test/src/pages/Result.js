import React, { useEffect, useState } from "react";
import styles from "./Result.module.css";
import {info} from "./data";





const Result = () => {
    const animalResult = localStorage.getItem('animal');
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    
    useEffect(()=>{
        for(let i = 0; i < info.length; i++){
                if(info[i].animal === animalResult){
                    setName(info[i].name);
                    setDesc(info[i].desc);
                    setImg(`../assets/img/image-${i}.png`);
                }
                
            }
    }, [animalResult]);
    
    

    return(
        <div className={styles.Container}>
            <h2 className={styles.Title}>당신의 연애 유형 동물은?</h2>
            <h4 className={styles.name}>{name}</h4>
            <img src={img} alt="" width={200} height={200}/>
            <p className={styles.desc}>{desc}</p>
        </div>
    )
}

export default Result;