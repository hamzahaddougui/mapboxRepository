import { useSelector } from 'react-redux';

const Test = () => {

    const test = useSelector(state => state.modules.neighborhood.matched)
    console.log(test);

    return (
        <div>
            {/* <h1>Hello</h1> */}
        </div>
    )
}

export default Test
