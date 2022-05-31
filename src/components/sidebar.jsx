import styled from "styled-components"

export const Sidebar=styled.div`
    display: grid;
    grid-template-rows: repeat(3,minmax(0px,1fr));
    grid-gap: 20px;
    position: fixed;
    bottom: 20px;
    left:20px;
    z-index: 1;
    
    &>a{
        text-decoration: none;
        color: inherit;
        display: inline-block;
    }

    &>a:hover{
        color:red;
        transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
        position: relative;
    }
`