import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
 background-color: white;
 height: 100vh;
 z-index: 1;
 display : ${props => props.open ? "block" : "none"};
`

const Jumbo = styled.div`
//background: url(/map.svg);
background: linear-gradient(rgba(50,54,67,0.8), rgba(50,54,67,0.8)), url(/map.svg);
box-shadow : 0 0 8px 0 #303339;
width : 100%;
height : 22%;
margin : 0 auto;
padding : 20px;
`
const Steps = styled.ul`
width : 60%;
margin : 10 auto;
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

const Back = styled.img(props => ({
    src: props.src,
    alt: props.alt,
    width: '30px',
    height: '30px',
    cursor: 'pointer',
  }));
 

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
            subtitle : "Make your result more accurate"
        }
    },

]

const Filter = ({open, setOpen, current, previous}) => {

    
    return (
        <>
            <Container open={open}>
                <Jumbo>
                    <center>
                    {
                        // steps[current-1].icon ? (<div>{steps[current-1].icon}</div>) : ("")
                        <Back src="/back.svg" alt="backButton" onClick={()=>{
                            if(current === 1){setOpen(!open)}
                            else if(current === 2){console.log(previous())}
                            }}>
                        </Back>
                    }
                    <h2 style={{fontSize : "22px", color: "#FFF"}} 
                    >{steps[current-1].header.title}</h2>
                    <p style={{fontSize : "14px", color: "#FFF"}} >{steps[current-1].header.subtitle}</p> 
                    </center>              
                </Jumbo>
                {/* <Line></Line> */}
                {/* <div></div> */}
                <div style={{overflow : "scroll", marginTop: "20px"}}>{steps[current-1].content}</div>
                
            </Container>
        </>
    )
}

export default Filter
