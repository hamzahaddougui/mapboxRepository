import { useSelector } from 'react-redux';

const Neighborhood = () => {

  module.exports.scores= () => {
        const neighborhood = useSelector(state => state.modules.neighborhood.matched)
        console.log(neighborhood);
    }
    
    

    return (
        <div>
            
        </div>
    )
}


export default Neighborhood
