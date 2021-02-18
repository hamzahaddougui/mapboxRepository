import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
 background-color: white;
 height: 100vh;
 z-index: 1;
 display : ${props => props.open ? "block" : "none"};
`

const Close = styled.div`
color : darkgray;
font-size : 24px;
cursor : pointer ;
position : absolute;
top : 30px;
right : 30px;
`

const Jumbo = styled.div`
width : 100%;
height : 20%;
margin : 0 auto;
padding : 20px;
`
const Steps = styled.ul`
width : 60%;
margin : 0 auto;
display : flex;
justify-content : space-around;
align-items : center;
text-decoration : none;
list-style : none;
`

const Step = styled.li`
text-decoration : none;
border : 1px solid black;
border-radius : 100%;
padding : 8px;
`

const Line = styled.hr`
    //box-shadow : 0 -8px 6px -5px #686868;
    width : 100%;
    height: 1px;
    background-color: #dcdcdc;
    border: none;
    box-shadow: 0px 2px 20px 0.5px #dcdcdc;
    margin-top: 0px;
`
 

const steps = [
    {
        key : 1,
        title : "step 1",
        icon : "",
        content : (<div style={{height : "70%", display : "flex" , justifyContent: "center", alignItems : "center"}}>This is the page content 1</div>),
        header : {
            title : "Discrover Florida",
            subtitle : (<div>Choose as many tags as you like.<br/>You'll get more options later to fine-tune your Search.</div>)
        }
    },
    {
        key : 2,
        title : "step 2",
        icon : (<Image src="/checked.png" alt="checked" width="32" height="32"/>),
        content : (<div style={{height : "70%", display : "flex" , justifyContent: "center", alignItems : "center"}}>This is the page content 2</div>),
        header : {
            title : "Select your priorities",
            subtitle : "Select your priorities"
        }
    },

]

const Filter = ({open, setOpen, current}) => {

    
    return (
        <>
            <Container open={open}>
                <Close onClick={() => {setOpen(!open)}}>
                X
                </Close>
                <Jumbo>
                    <center>
                    {
                        steps[current-1].icon ? (<div>{steps[current-1].icon}</div>) : ("")
                    }
                    <h2 style={{fontSize : "22px"}} 
                    >{steps[current-1].header.title}</h2>
                    <p style={{fontSize : "14px"}} >{steps[current-1].header.subtitle}</p> 
                    </center>              
                </Jumbo>
                {/* <hr style={{width : "50%" , color: "red", marginTop: "0px"}}/> */}
                <Line></Line>
                <div></div>
                <div style={{overflow : "scroll", marginTop: "20px"}}>{steps[current-1].content}</div>
                
            </Container>
        </>
    )
}

export default Filter
