import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name,price,features} = option;
    return (
        <div className='bg-blue-500 text-white flex flex-col p-4 rounded-lg'>
            <h2 className='text-center'>
                <span className="text-5xl font-bold">{price}</span>
                <span>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-4'>{name}</h4>
            <div className='flex-grow'>
                {
                    features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='bg-green-600 mt-4 w-full py-2 rounded-lg font-medium hover:bg-green-800'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;