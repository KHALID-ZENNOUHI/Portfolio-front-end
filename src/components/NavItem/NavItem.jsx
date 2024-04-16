const NavItem = ({classes,children}) => {
    return(
        <li className={`${classes ?? ''}`}>{children}</li>
    ) 
};
export default NavItem;