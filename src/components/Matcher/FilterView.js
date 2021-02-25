import {useState} from 'react'
import styled from 'styled-components';
import { Button } from '@material-ui/core'

const Champ = styled.div.attrs(props => ({
    // (props.checked) ? "" : "" ;
    checked: props.checked ? "#323643" : "transparent",
    couleur: props.checked ? "white" : "black",
    border: props.checked ? "" : "1.2px solid #B2B3B4",
  }))`
background-color: ${props => props.checked};
border: ${props => props.border};
border-radius: 20px;
padding: 12px 8px;
cursor: pointer;
text-align: center;
color: ${props => props.couleur};
`;

const MatButton = styled(Button)`
color: white;
background-color: blue;
height: 80px;
border: 1px solid black;
`;

const Grid = styled.div`
display: grid;
grid-template-rows: auto;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 5px;
`

const Item = styled.div`
display: flex;
justify-content: center;
padding: .5rem;
`

const FilterView = () => {

    const [checked, setChecked] = useState(false);

    return (
        <div style={{width: "700px", margin: "0 auto"}}>
            <Grid style={{width: "100%", height: "100%"}}>
                <Item style={{backgroundColor: "red"}}>
                    {/* <Champ checked={checked} onClick={() =>{setChecked(!checked)}}>Test Button 1</Champ> */}
                </Item>
                <Item style={{backgroundColor: "blue"}}>
                    {/* <Champ checked={checked} onClick={() =>{setChecked(!checked)}}>Test Button 2</Champ> */}
                </Item>
                <Item style={{backgroundColor: "yellow"}}>
                    {/* <Champ checked={checked} onClick={() =>{setChecked(!checked)}}>Test Button 3</Champ> */}
                </Item>
                <Item style={{backgroundColor: "purple"}}>
                    {/* <Champ checked={checked} onClick={() =>{setChecked(!checked)}}>Test Button 4</Champ> */}
                </Item>
                <Item style={{backgroundColor: "grey"}}>
                    {/* <Champ checked={checked} onClick={() =>{setChecked(!checked)}}>Test Button 5</Champ> */}
                </Item>
                <Item style={{backgroundColor: "green"}}>
                    {/* <Champ checked={checked} onClick={() =>{setChecked(!checked)}}>Test Button 6</Champ> */}
                </Item>
            </Grid>
            {/* <Champ checked={checked} onClick={() =>{setChecked(!checked)}}>Test Button</Champ> */}
            <MatButton>Click me</MatButton>
            <Button style={{backgroundColor: 'red'}}>Click me</Button>

        </div>
    )
}

export default FilterView
