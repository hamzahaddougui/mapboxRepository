import styled from "styled-components"
import {useState} from 'react'
import Link from "next/link"

import Filter from './Filter';

const Container = styled.div`
background-color : #9A9895;
height : 100vh;

`

const BottomButton = styled.div`
// horizontal offset / vertical offset / blur radius / optional spread radius / color
box-shadow : 0 4px 40px 0px #303339;
z-index : 2;
background-color : #323643;
height : 8%;
width : 100%;
position : absolute;
top : 92%;
display : flex ;
justify-content : center;
align-items : center;
`

const CustomButton = styled.div`
color : #FFFFFF;
background : transparent;
padding : 0.5rem 1.5rem;
border-radius : 16.5px;
border : 1px solid white;
animation: 1s linear infinite;
cursor : pointer;
`

const Navigation = styled.span`
color : white ;
text-decoration : none;
cursor : pointer;
padding-left : 20px;
`


const Matcher = () => {

    const [open, setOpen] = useState(false);
    console.log(open);
    const [current, setCurrent] = useState(1)
    const [content, setContent] = useState(<></>)

    const next = () => {
        setCurrent(current+1)
    }
    const previous = () => {
        setCurrent(current-1)
    }
    
   
    return (
        <>
        <Container>

            <BottomButton>
{
    open ? (<div>
                   { current === 1 ? (""): (<Navigation onClick={() => {previous()}}>{"<"} Back</Navigation>)}
                 { current ===2 ? (<Navigation>Submit {">"}</Navigation>) :(<Navigation onClick = {() => {next()}}>Next {">"}</Navigation>)}
                 
            </div> ) : (<CustomButton onClick={()=>{setOpen(!open)}}>Neighborhood matcher</CustomButton>)
}
                
                 
            </BottomButton>
                
                                 
        <Filter open={open} setOpen={setOpen} current={current} next={next} previous={previous}/>
        </Container>
         
        </>
    )
}

export default Matcher