import PropTypes from 'prop-types'
import { AiFillCheckCircle } from 'react-icons/Ai';

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex gap-2 items-center text-center'><AiFillCheckCircle className='text-yellow-200'></AiFillCheckCircle>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;