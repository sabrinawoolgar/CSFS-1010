import React from 'react'
//tried multiple ways to add images, this was the only one that seemed to work but i can't help but feel theres a better way...//
import Clover from '../images/Clover.jpeg'
import Film1 from '../images/Film1.jpeg'
import Film2 from '../images/Film2.jpg'
import Film3 from '../images/Film3.jpg'
import Film4 from '../images/Film4.jpg'
import Film5 from '../images/Film5.jpg'
import Film6 from '../images/Film6.jpg'
import Film7 from '../images/Film7.jpg'
import Film8 from '../images/Film8.jpg'
import Film9 from '../images/Film9.jpg'
import Film10 from '../images/Film10.jpg'
import painting1 from '../images/painting1.jpeg'
import painting2 from '../images/painting2.jpeg'
import painting3 from '../images/painting3.jpeg'
import Photog1 from '../images/Photog1.jpg'
import Photog2 from '../images/Photog2.jpeg'
import Photog3 from '../images/Photog3.jpeg'
import Photog4 from '../images/Photog4.jpeg'
import Photog5 from '../images/Photog5.jpeg'
import Photog6 from '../images/Photog6.jpeg'
import photog8 from '../images/photog8.jpeg'
import polaroid3 from '../images/polaroid3.jpg'
import polaroid4 from '../images/polaroid4.jpg'
import polaroid5 from '../images/polaroid5.jpg'
import ProductImage1 from '../images/ProductImage1.jpg'
import ProductImage2 from '../images/ProductImage2.jpg'
import ProductImage3 from '../images/ProductImage3.jpg'
import TwitchBanners from '../images/TwitchBanners.jpg'
import twitchEmotes from '../images/twitchEmotes.jpg'
import woolCreditCard from '../images/woolCreditCard.jpg'
import woolSale from '../images/woolSale.jpg'
import woolvintageLogo from '../images/woolvintageLogo.jpg'

const Portfolio = () => {
  return (
    <div className="portfolioPage">

      <h2>portfolio</h2>
        <div className="BodyContent">

          <h3>graphics</h3>

          <div className="PortfolioContainer">
            <div className="Portfolio">
              <div className="folioItem">
                <a href={woolvintageLogo} target="_blank">
                  <img src={woolvintageLogo} className="folioImage" />
                </a>
                <div className="folioDescription">logo design for wool vintage</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={woolSale} target="_blank">
                  <img src={woolSale} className="folioImage" />
                </a>
                <div className="folioDescription">promotional graphics for wool vintage</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={woolCreditCard} target="_blank">
                  <img src={woolCreditCard} className="folioImage" />
                </a>
                <div className="folioDescription">shop announcement graphics for wool vintage</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={TwitchBanners} target="_blank">
                  <img src={TwitchBanners} className="folioImage" />
                </a>
                <div className="folioDescription">custom pannels for a twitch channel</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={twitchEmotes} target="_blank">
                  <img src={twitchEmotes} className="folioImage" />
                </a>
                <div className="folioDescription">custom emotes for a twitch channel</div>
              </div>
            </div>

          </div>

          <h3>film photography</h3>

          <div className="PortfolioContainer">
            <div className="Portfolio">
              <div className="folioItem">
                <a href={polaroid5} target="_blank">
                  <img src={polaroid5} className="folioImage" />
                </a>
                <div className="folioDescription">polaroid - landcamera</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={Film5} target="_blank">
                  <img src={Film5} className="folioImage" />
                </a>
                <div className="folioDescription">35mm</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={Film1} target="_blank">
                  <img src={Film1} className="folioImage" />
                </a>
                <div className="folioDescription">35mm</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={Film8} target="_blank">
                  <img src={Film8} className="folioImage" />
                </a>
                <div className="folioDescription">35mm</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={polaroid3} target="_blank">
                  <img src={polaroid3} className="folioImage" />
                </a>
                <div className="folioDescription">polaroid - 600</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={Film10} target="_blank">
                  <img src={Film10} className="folioImage" />
                </a>
                <div className="folioDescription">35mm</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={Film2} target="_blank">
                  <img src={Film2} className="folioImage" />
                </a>
                <div className="folioDescription">35mm</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={Film4} target="_blank">
                  <img src={Film4} className="folioImage" />
                </a>
                <div className="folioDescription">35mm</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={polaroid4} target="_blank">
                  <img src={polaroid4} className="folioImage" />
                </a>
                <div className="folioDescription">polaroid - spectra</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={Film6} target="_blank">
                  <img src={Film6} className="folioImage" />
                </a>
                <div className="folioDescription">35mm</div>
              </div>
            </div>
            
            <div className="Portfolio">
              <div className="folioItem">
                <a href={Film7} target="_blank">
                  <img src={Film7} className="folioImage" />
                </a>
                <div className="folioDescription">35mm</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={Film9} target="_blank">
                  <img src={Film9} className="folioImage" />
                </a>
                <div className="folioDescription">35mm</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={Film3} target="_blank">
                  <img src={Film3} className="folioImage" />
                </a>
                <div className="folioDescription">35mm</div>
              </div>
            </div>
          </div>

          <h3>digital photography</h3>

          <div className="PortfolioContainer">
            <div className="Portfolio">
              <div className="folioItem">
                <a href={photog8} target="_blank">
                  <img src={photog8} className="folioImage" />
                </a>
                <div className="folioDescription">twin daisies</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={Clover} target="_blank">
                  <img src={Clover} className="folioImage" />
                </a>
                <div className="folioDescription">clover (rip ❤)</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={Photog6} target="_blank">
                  <img src={Photog6} className="folioImage" />
                </a>
                <div className="folioDescription">look to the sky</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={Photog5} target="_blank">
                  <img src={Photog5} className="folioImage" />
                </a>
                <div className="folioDescription">milan</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={Photog4} target="_blank">
                  <img src={Photog4} className="folioImage" />
                </a>
                <div className="folioDescription">wild flower</div>
              </div>
            </div>
            
            <div className="Portfolio">
              <div className="folioItem">
                <a href={Photog3} target="_blank">
                  <img src={Photog3} className="folioImage" />
                </a>
                <div className="folioDescription">budapest</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={Photog2} target="_blank">
                  <img src={Photog2} className="folioImage" />
                </a>
                <div className="folioDescription">auschwitz-birkenau</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={Photog1} target="_blank">
                  <img src={Photog1} className="folioImage" />
                </a>
                <div className="folioDescription">greenhouse</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={ProductImage2} target="_blank">
                  <img src={ProductImage2} className="folioImage" />
                </a>
                <div className="folioDescription">product photography - wool vintage</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={ProductImage3} target="_blank">
                  <img src={ProductImage3} className="folioImage" />
                </a>
                <div className="folioDescription">product photography - wool vintage</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={ProductImage1} target="_blank">
                  <img src={ProductImage1} className="folioImage" />
                </a>
                <div className="folioDescription">product photography - wool vintage</div>
              </div>
            </div>
          </div>

          <h3>physical mediums</h3>

          <div className="PortfolioContainer">
            <div className="Portfolio">
              <div className="folioItem">
                <a href={painting2} target="_blank">
                  <img src={painting2} className="folioImage" />
                </a>
                <div className="folioDescription">acrylic on canvas</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={painting1} target="_blank">
                  <img src={painting1} className="folioImage" />
                </a>
                <div className="folioDescription">acrylic on canvas</div>
              </div>
            </div>

            <div className="Portfolio">
              <div className="folioItem">
                <a href={painting3} target="_blank">
                  <img src={painting3} className="folioImage" />
                </a>
                <div className="folioDescription">acrylic on canvas</div>
              </div>
            </div>

          </div>
          
        </div>

    </div>
  );
}

export default Portfolio;