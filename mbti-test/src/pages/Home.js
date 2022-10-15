import React from 'react';
import styles from './Home.module.css';
import MainImage from '../assets/img/main.png'

const Home = () => {
    return (
    <div className={styles.Container}>
        <h2>십이간지로 알아보는 연애유형</h2>
        <img src={MainImage} width={390} height={350} alt="" />
        <button className={styles.startBtn}>시작하기</button>
    </div>)
}

export default Home;
