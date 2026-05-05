 import { NavLink } from 'react-router';

const MyLink = ({to,children}) => {
    return (
        <NavLink to={to} className={({isActive})=>isActive ? "text-orange-500" :` text-gray-500`}>
{children}
        </NavLink>
    );
};

export default MyLink;