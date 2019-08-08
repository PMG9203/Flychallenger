import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import _Le_handicap_ne_peut_pas_etre_un_handicap_ from '../images/_Le_handicap_ne_peut_pas_etre_un_handicap_.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">L'association</h2>
          <span className="image main">
            <img src={pic01} alt="paramoteur bi-place" />
          </span>
          <p>
            Profondément ancrer dans notre région de l'Allier, FLYCHALLENGER est
            créée par philippe Jorgeaguet en 1992 (invention du paramoteur) Ce
            sport jeune obtient ses lettres de noblesse grâce à sa communauté de
            passionés. Aujourd'hui la France est la nation la plus titrée dans
            ce sport avec les champions du monde : Alexandre & Marie MATEOS
            (d'ailleurs on leurs fait coucou ici :{' '}
            <a href="https://www.orleansparamoteur.com/">orleans paramoteur</a>)
          </p>
          <span className="image main">
            <img
              src={_Le_handicap_ne_peut_pas_etre_un_handicap_}
              alt="paramoteur bi-place"
            />
          </span>
          <p>
            Une nouvelle aventure : <br />
            Depuis peu, nous proposons aux personnes en situation de handicap,
            la possibilité d'effectué un vol découverte en paramoteur. C'est
            avec l'aide de l'association AMPHORE 03 et Philippe BADIN
            (Kinésitherapeute) que nous avons travaillé à l'étude des
            comportements, ainsi qu'aux bienfaits de ce genre d'experiences sur
            ce public. Les résultats sont tout simplement fantastique, tant d'un
            point de vue physiologique que physique. Pour les pilotes, il s'agit
            d'une toute autre façon de voler ! Sensations garanties !
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            // action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Nom</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <button type="submit" className="special">
                  send message
                </button>
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>

          <ul className="icons">
            {/* <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li> */}
            <li>
              <a
                href="https://www.facebook.com/remi.paramontor"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            {/* <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li> */}
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
