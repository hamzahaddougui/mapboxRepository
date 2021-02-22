import styled from "styled-components"
import {useState} from 'react'
import Link from "next/link"

import Filter from './Filter';

const Container = styled.div`
background-color : #9A9895;
background-image: url(/map.svg);
background-size: contain;
height : 100vh;
/* display: flex;
align-items: center;
justify-content: center; */
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
border-radius : 45px;
border : 1px solid #9A9895;
font-weight: 100;
cursor : pointer;
`

const Navigation = styled.span`
color : white ;
text-decoration : none;
cursor : pointer;
padding-left : 20px;
`

const Thunder = styled.div`
/* position: absolute;
//width: 40px;
//height: 67px;
top: 85.2%;
//left: 50%;
z-index: 3;
//margin-left: px; */
display: flex;
align-items: center;
justify-content: center;
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
                   {/* { current === 1 ? (""): (<Navigation onClick={() => {previous()}}>{"<"} Back</Navigation>)} */}
                 { current ===2 ? (<div style={{display: "flex", flexDirection: "column", alignItems: "center", overflow: "hidden"}}><img style={{position: "absolute", top: "-70%", zIndex: "3", width: "36px"}} src='/thunder.svg' alt='thunder'/> <CustomButton>Match me</CustomButton> </div>) :(<Navigation onClick = {() => {next()}}>Next</Navigation>)}
                 
            </div> ) : (<div style={{display: "flex", flexDirection: "column", alignItems: "center", overflow: "hidden"}}><img style={{position: "absolute", top: "-83%", zIndex: "3", width: "42px"}} src='/thunder.svg' alt='thunder'/> <CustomButton onClick={()=>{setOpen(!open); console.log(current)}}>Neighborhood matcher</CustomButton> </div>)
}
            <div>
                <span style={{color: "#FFF", fontSize: "14px", fontWeight: "100", position: "absolute", right: "8%", bottom: "30%"}}>Powered by</span>
                <img style={{position: "absolute", right: "4%", bottom: "30%"}} src='/logo.svg' alt='logo'/>   
            </div>     
            </BottomButton>
                
                                 
        <Filter open={open} setOpen={setOpen} current={current} next={next} previous={previous}/>
        </Container>
         
        </>
    )
}

export default Matcher