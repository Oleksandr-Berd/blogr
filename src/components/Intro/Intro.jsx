import * as SC from "./IntroStyled"

const Intro = () => {
  return (
    <SC.IntroCustom>
      <h3>A modern publishing platform</h3>
      <p>Grow your audience and build your online brand</p>
      <SC.ButtonCon>
        <button type="button">Start for Free</button>
        <button type="button">Lear More</button>
      </SC.ButtonCon>
    </SC.IntroCustom>
  );
};

export default Intro;
