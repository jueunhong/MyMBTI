import React from "react";
import styled  from "styled-components";

const Progress= ({num}) => {

    return(
        <Container>
            <ProgressBar width={Math.round(num/11*100) + "%"} />
        </Container>
    )
}

export default Progress;


const Container = styled.div`
    background-color: rgb(255, 242, 248);
    width: 70%;
    height: 20px;
    border-radius: 10px;
    position: fixed;
    top: 11%;
`

const ProgressBar = styled.div`
    background-color: #ff7eb6;
    width: ${props => props.width};
    height: 100%;
    transition: width 1s;
    top: 11%;
    border-radius: 10px;
    display: inline-flex;
    text-align: left;

`