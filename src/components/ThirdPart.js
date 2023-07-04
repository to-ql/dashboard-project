import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const AlignCenter = css`
    align-items: center;
    display: flex;
    justify-content: center;
`;

const MainContent = styled.div`
    box-sizing: border-box; 
    height: 100%;
    /* padding: 40px; */
    width: 33.3%;
`;

const HorizontalAlign = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    `;

const ClockBox = styled.div`
    /* background-color: black; */
    border-bottom: 1px solid black;
    /* color: white; */
    display: flex;
    font-size: 22px;
    height: 30px;
    justify-content: flex-end;
    width: 100%;
`;


function ThirdPart() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return (() => 
            clearInterval(id) // 불필요한 작업 방지
        ); 
    }, []);

    return (
        <MainContent>
        <ClockBox>
            { time.toLocaleDateString() } { time.toLocaleTimeString()}
            </ClockBox>
        </MainContent> 
    );
};

export default ThirdPart;