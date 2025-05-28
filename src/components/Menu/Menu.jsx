import { NavCon } from "./MenuStyled";

const Menu = ({location}) => {
    return ( 
        <NavCon className={location && location}>
            <div>
                <h4>Product</h4>
                <ul>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Marketplace</li>
                    <li>Features</li>
                    <li>Integrations</li>
                </ul>
            </div>
             <div>
                <h4>Company</h4>
                <ul>
                    <li>About</li>
                    <li>Team</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <h4>Connect</h4>
                <ul>
                    <li>Contact</li>
                    <li>Newsletter</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
        </NavCon>
     );
}
 
export default Menu;
