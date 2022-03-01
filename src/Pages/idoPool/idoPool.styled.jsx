import styled from "styled-components";

export const ButtonSearchGroup = styled.div`

    display:flex;
    justify-content: space-between;
    background-color: transparent;
    width:1350px;
    margin-top: 250px;
`;
export const GrayButtonGroup = styled.div`
    width:800px;
    display:flex;
    background-color: transparent;
    flex-direction: row;
    justify-content:space-between;
`;
export const GrayButton = styled.button`
   color: white;
    border: 1.5px solid #229503;
    padding: 0px 50px;
    border-radius: 10px;
    background: rgba(100,100,100,0.4);
    font-size: 18px;
`;

export const SearchGroup = styled.div`
display:flex;
border: 1px solid #61ED64;
border-radius: 20px;
align-items: center;
`;
export const SearchInput = styled.input`
width: 100%;
padding: 4px 10px;
margin: 8px 0px 8px 10px;
background-color: transparent;
box-sizing: border-box;
border:none;
outline:none;
color:white;
`;

export const IdoGroup = styled.div`
    padding-top:50px;
    width:100%;
    display:grid;
    grid-template-columns: repeat(3, auto);
    gap:50px;
    padding-bottom:150px;
`;

export const ArrowGroup = styled.div`
  
    width:100%;
    
`;