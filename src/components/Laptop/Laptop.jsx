import * as SC from "./LaptopStyled"

import laptopMob from "../../assets/images/illustration-laptop-mobile.svg"
import laptopDesk from "../../assets/images/illustration-laptop-desktop.svg"
import { useScreenSize } from "../../hooks/useScreenSize"
const Laptop = () => {

    const {isDesktop} = useScreenSize()

    return ( 
        <SC.LaptopCustom>
            <SC.Thumb>
            <img src={!isDesktop ? laptopMob : laptopDesk} alt="laptop" />
            </SC.Thumb>
            <SC.ArticleCon>
                <SC.Article>
                    <h3>Free, open, simple</h3>
                    <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                </SC.Article>
                <SC.Article>
                    <h3>Powerful tooling</h3>
                    <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
                </SC.Article>
            </SC.ArticleCon>
        </SC.LaptopCustom>
     );
}
 
export default Laptop;