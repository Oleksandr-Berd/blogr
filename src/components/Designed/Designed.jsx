import * as SC from "./DesignedStyled"

import editorMob from "../../assets/images/illustration-editor-mobile.svg"
const Designed = () => {
    return ( <SC.DesignCon>
    <h3>Designed for the future</h3>
    <SC.Thumb>
        <img src={editorMob} alt="editor" />
    </SC.Thumb>
    <SC.Article>
        <h4>Introducing an extensible editor</h4>
        <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
    </SC.Article>
    <SC.Article>
        <h4>Robust content management</h4>
        <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
    </SC.Article>
    </SC.DesignCon> );
}
 
export default Designed;