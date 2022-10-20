import React, { useState } from "react";
import styled from "styled-components";
import styles from "./HomeForm.module.css";
import { useNavigate } from "react-router-dom";





const BottomSheet = ({closeBottom, getGender}) => {
  
  const onClick = () => {
    closeBottom();
  }

  const onClickLi = (event) => {
    closeBottom();
    getGender(event.target.innerText);
  }

  

return(
    <>
     <StyledModalBackground />
      <StyledBottomSheet>
        <StyledBottomSheetHeader>
          <div>
            <p>성별을 선택해주세요.</p>
          </div>
          <span onClick={onClick}>X</span>
        </StyledBottomSheetHeader>
        <form>
          <ul>
            <li onClick={onClickLi}>여자</li>
            <li onClick={onClickLi}>남자</li>
            <li onClick={onClickLi}>관계없음</li>
          </ul>
        </form>
      </StyledBottomSheet>
    </>
)
}


const HomeForm = () => {
    const [isBottomOpen, setIsBottomOpen] = useState(false);
    const onClick = () => setIsBottomOpen(prev => !prev);
    const closeBottom = () => setIsBottomOpen(prev => !prev);
    const [gender, setGender] = useState("");
    const getGender = (event) => setGender(prev=> event);
    const navigate = useNavigate();
    const goToTest = () => navigate("/Test");
 
    

    return(
        <div className={styles.Container}>
            <h3>성별을 선택해주세요.</h3>
            <input 
              type="text"
              placeholder="성별"
              value={gender}
              onClick={onClick}></input>
            {isBottomOpen && <BottomSheet closeBottom={closeBottom} getGender={getGender}/>}
            {gender !== "" ? <button  onClick={goToTest}><span>다음</span></button> : null}
        </div>
        
    )
}


export default HomeForm;



const StyledModalBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;;
  opacity: 0.5;
  background-color: black;
  z-index:1;
`;

const StyledBottomSheet = styled.div`
  z-index: 2;
  position: fixed;
  top: 30.1rem;
  width: 100%;
  height: 100%;
  bottom: 0;
  border-radius: 1rem 1rem 0 0;
  background-color: white;
  animation-duration: 2s;
  animation-name: slidein;
  & > form> ul {
    list-style: none;
  }
  & > form > ul > li {
    cursor: pointer;
  }
`;

const StyledBottomSheetHeader = styled.div`
  height: 4.4rem;
  padding: 1.1rem 2.2rem 0.9rem 2.2rem;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem;
  & > div {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.7rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  & > span {
    font-weight: 600;
    position: absolute;
    right: 10%;
    top: 5%;
    cursor: pointer;

  }
`;