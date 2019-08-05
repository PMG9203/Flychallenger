import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div>
      {/* <span className="icon fa-diamond"></span> */}

      <img
        style={{ width: 200, height: 200 }}
        src={require('../images/Logo_512x512_150dpi.png')}
        alt="icon Fly-challenger"
      />
    </div>
    <div className="content">
      <div className="inner">
        <h1>L'Allier en Paramoteur</h1>
        <p>
          Une aventure humaine et de partage en PARAMOTEUR.
          <br />
          Tout simplement voler ensemble.{' '}
          {/* <a href="https://html5up.net/license">Creative Commons</a> license. */}
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            L'asso.
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Voler
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Nous
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
