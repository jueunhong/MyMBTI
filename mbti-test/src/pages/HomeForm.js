import React, { useState } from "react";
import styles from "./Home.module.css";
import styled from "styled-components";





const BottomSheet = () => {
  const [closeBottom, setCloseBottom] = useState(false);
  const onClick = () => {
    setCloseBottom(prev => !prev)
    
  }; 

return(
    <>
     <StyledModalBackground />
      <StyledBottomSheet>
        <StyledBottomSheetHeader>
          <div>
            <input
                type="text"
                placeholder="성을 입력해주세요."/>
            <span onClick={onClick}>x</span>
          </div>
        </StyledBottomSheetHeader>
      </StyledBottomSheet>
    </>
)
}


const HomeForm = () => {
    const [isBottomOpen, setIsBottomOpen] = useState(false);
    const onClick = () => setIsBottomOpen(prev => !prev);
    
    return(
        <div className={styles.Container}>
            <h3>성을 입력해주세요.</h3>
            <button onClick={onClick}></button>
            {isBottomOpen && <BottomSheet/>}
        </div>
    )
}


export default HomeForm;



const StyledModalBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;;
  opacity: 0.5;
  background-color: gray;
  z-index: 1;
`;

const StyledBottomSheet = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: fit-content;
  bottom: 0;
  border-radius: 1rem 1rem 0 0;
  background-color: white;
`;

const StyledBottomSheetHeader = styled.div`
  height: 4.4rem;
  padding: 1.1rem 2.2rem 0.9rem 2.2rem;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem;
  & > div {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;