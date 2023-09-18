import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className='hover:bg-gray-300 px-2 text-center  cursor-pointer'>
            <a href={route.path}></a>
            {route.name}
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.obj
}

export default Link;