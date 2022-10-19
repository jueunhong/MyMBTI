import React, { useState } from 'react';
import styles from './Home.module.css';
import MainImage from '../assets/img/main.png'
import HomeForm from './HomeForm';

const Home = () => {
    const [start, setStart] = useState(false);
    const onClick = () => {
        setStart(pev => !pev);
    }
    
    if(start === false){
        return (<div className={styles.Container}>
                 <h2>십이간지로 알아보는 연애유형</h2>
                 <img src={MainImage} width={390} height={350} alt="" />
                 <button 
                    className={styles.startBtn}
                    onClick={onClick}><span>시작하기</span></button>
                </div>)
        } else{
            return <HomeForm/>}
};

export default Home;
