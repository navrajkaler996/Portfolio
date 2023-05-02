import React from 'react'
import SassLogo from "../assets/sass.png";
import ReactLogo from "../assets/physics.png";
import CSSLogo from "../assets/css-3.png";
import HTMLLogo from "../assets/html-5.png";
import JavaScriptLogo from "../assets/js.png";
import PHPLogo from "../assets/php.png";
import MongoDB from "../assets/mongodb.png";
import ReduxLogo from "../assets/redux.png";
import NodeLogo from "../assets/node.png";
import TSLogo from "../assets/typescript.png";
import WebpackLogo from "../assets/webpack.png";
import ViteLogo from "../assets/vite.png"
;
const CardSkillsContent = () => {
  return (
    <div className="card__content">
          <div className="card__image-holder">
            <img src={ReactLogo} />
            <span>React</span>
          </div>
          <div className="card__image-holder">
            <img src={JavaScriptLogo} />
            <span>JavaScript</span>
          </div>
          <div className="card__image-holder">
            <img src={HTMLLogo} />
            <span>HTML5</span>
          </div>
          <div className="card__image-holder">
            <img src={CSSLogo} />
            <span>CSS3</span>
          </div>
          <div className="card__image-holder">
            <img src={SassLogo} />
            <span>Sass</span>
          </div>
          <div className="card__image-holder">
            <img src={PHPLogo} />
            <span>PHP</span>
          </div>
          <div className="card__image-holder">
            <img src={MongoDB} />
            <span>MongoDB</span>
          </div>
          <div className="card__image-holder">
            <img src={ReduxLogo} />
            <span>Redux</span>
          </div>
          <div className="card__image-holder">
            <img src={NodeLogo} />
            <span>Node.js</span>
          </div>
          <div className="card__image-holder">
            <img src={TSLogo} />
            <span>TypeScript</span>
          </div>
          <div className="card__image-holder">
            <img src={WebpackLogo} />
            <span>Webpack</span>
          </div>
          <div className="card__image-holder">
            <img src={ViteLogo} />
            <span>Vite</span>
          </div>
        </div>
  )
}

export default CardSkillsContent