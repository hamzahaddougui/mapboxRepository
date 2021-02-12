import {Button} from '@material-ui/core'
import Drawer from '../src/components/Drawer' 
import {useState} from 'react'

const test = () => {
    
    const [open, setopen] = useState(true)

    return (
        <div style={{height: "100vh", display: "flex", justifyContent:"center", alignItems:"center", backgroundColor:"purple"}}>
        <Button onClick={() => {setopen(!open)}}>Click me!</Button>
        <Drawer open={open} setOpen={setopen}/>
        </div>
    )
}

export default test
