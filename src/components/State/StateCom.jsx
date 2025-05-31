import * as SC from "./StateComStyled"

import phoneIconMob from "../../assets/images/illustration-phones.svg"
const StateCom = () => {
    return ( 
        <SC.StateConCustom>
            <img src={phoneIconMob} alt="phone" />
            <SC.ContentCon>
            <h3>State of the Art Infrastructure</h3>
            <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
            </SC.ContentCon>
        </SC.StateConCustom>
     );
}
 
export default StateCom;