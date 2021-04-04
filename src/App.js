import './App.scss';
import React, { useState } from "react";
import microsoft from './assets/img/section1/microsoft.png';
import nintendo from './assets/img/section1/nintendo.png';
import steam from './assets/img/section1/steam.png';
import minion from './assets/img/section2/MinionGrey2.png';
import triangle from './assets/img/section4/double-triangle.png';
import facebook from './assets/img/section5/facebook.png';
import linkedin from './assets/img/section5/linkedin.png';
import twitter from './assets/img/section5/twitter.png';
import youtube from './assets/img/section5/youtube.png';
import ReactFullpage from '@fullpage/react-fullpage';
import Circle from "./components/ProcessRing";
import Slider from "react-slick";

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    customPaging: function (i) {
      return (
        <div >
          <svg
            height={50}
            width={50}
          >
            <circle
              stroke-width="4"
              stroke="white"
              fill="transparent"
              r="18"
              cx="25"
              cy="25"
            />
          </svg>
          <Circle key={activeSlide} />0{i + 1}
        </div>
      );
    },
    dots: true,
    arrows: false,
    infinite: true,
    pauseOnHover: false,
    variableWidth: true,
    beforeChange: current => setActiveSlide(current),
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000} /* Options here */
      responsiveWidth={900}

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className='section'>
              <div className="header">
                <div className="logo">
                  <img src='./gameloft-logo.png' alt='gameloft' />
                </div>
                <div className='hamberger'>
                  <span className='berger'></span>
                </div>
              </div>
              <div className='hotspot-banner'>
                <div className='container'>
                  <div className='game-container'>
                    <div className='title game-title'>
                      Gameloft Game
                  </div>
                    <div className='rating'>
                      <p>Racing / Action</p>
                    |
                    <div className='rating-stars'>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    </div>
                    <div className='game-detail'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea
                     commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit...</p>
                    </div>
                  </div>
                </div>
                <div className='social-icons'>
                  <div>
                    <i class="fas fa-share-alt"></i>
                  </div>
                  <div>
                    <i class="far fa-envelope"></i>
                  </div>
                  <div>
                    <i class="fas fa-headphones"></i>
                  </div>
                </div>
              </div>
              <div className='store-buttons'>
                <div className='container'>
                  <div className='s1-footer'>
                    <h3 className='h3-text'>Download latest version</h3>
                    <div>
                      <img src={nintendo} alt='nintendo' />
                      <img src={microsoft} alt='microsoft' />
                      <img src={steam} alt='steam' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section" style={{ backgroundColor: "#68B8FC" }}>
              <div className='section2-container flex space-around'>
                <div className='minions'>
                  <img src={minion} alt='minion' />
                </div>
                <div className='form-group'>
                  <h2 className='subtitle'>Stay in the Know!</h2>
                  <p>Don't get left behind! <br /> Subscribe to our newsletters today!</p>
                  <div>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Email' />
                    <select name="country" id="country" form="myForm">
                      <option selected="selected">Country</option>
                      <option value="vietnam">Viet Nam</option>
                      <option value="america">America</option>
                      <option value="eng">England</option>
                      <option value="china">China</option>
                    </select>
                    <select name="platform" id="platform" form="myForm">
                      <option selected="selected">Platform</option>
                      <option value="js">JS</option>
                      <option value="python">Python</option>
                    </select>
                    <div className='FAQ'>
                      <input type='checkbox' />
                      <label>By signing up, I confirm that I am 13 years old or older.
                  I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy.</label>
                    </div>
                    <div className='FAQ'>
                      <input type='checkbox' />
                      <label>I agree to receive promotional offers relating to all Gameloft games and services.</label>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '7px' }}>
                      <button type='submit' value='Submit'>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section section4">
              <div className='container'>
                <div className='title' style={{ marginBottom: '11px' }}>
                  Special Events & Promotional
                </div>
                <div className='subtitle' style={{ marginBottom: '76px' }}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.
                </div>
              </div>
              <Slider {...settings}>
                <div style={{ width: "454px" }} >
                  <div className='cards'>
                    <div className='card-title'>short title here</div>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam nonumy eirmod tempor invidunt ut labore et dolore </p>
                    <div className='bg-img'>
                      <img src={triangle} alt='triangle' />
                    </div>
                    <div className='share-icon'>
                      <div>
                        <i class="fas fa-share-alt"></i>
                      </div>
                    </div>
                    <div>
                      <button className='readmore' type='button' value='readmore'>read more</button>
                    </div>
                  </div>
                </div>
                <div style={{ width: "454px" }} >
                  <div className='cards'>
                    <div className='card-title'>short title here</div>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam nonumy eirmod tempor invidunt ut labore et dolore </p>
                    <div className='bg-img'>
                      <img src={triangle} alt='triangle' />
                    </div>
                    <div className='share-icon'>
                      <div>
                        <i class="fas fa-share-alt"></i>
                      </div>
                    </div>
                    <div>
                      <button className='readmore' type='button' value='readmore'>read more</button>
                    </div>
                  </div>
                </div>
                <div style={{ width: "454px" }} >
                  <div className='cards'>
                    <div className='card-title'>short title here</div>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam nonumy eirmod tempor invidunt ut labore et dolore </p>
                    <div className='bg-img'>
                      <img src={triangle} alt='triangle' />
                    </div>
                    <div className='share-icon'>
                      <div>
                        <i class="fas fa-share-alt"></i>
                      </div>
                    </div>
                    <div>
                      <button className='readmore' type='button' value='readmore'>read more</button>
                    </div>
                  </div>
                </div>
                <div style={{ width: "454px" }} >
                  <div className='cards'>
                    <div className='card-title'>short title here</div>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam nonumy eirmod tempor invidunt ut labore et dolore </p>
                    <div className='bg-img'>
                      <img src={triangle} alt='triangle' />
                    </div>
                    <div className='share-icon'>
                      <div>
                        <i class="fas fa-share-alt"></i>
                      </div>
                    </div>
                    <div>
                      <button className='readmore' type='button' value='readmore'>read more</button>
                    </div>
                  </div>
                </div>
                <div style={{ width: "454px" }} >
                  <div className='cards'>
                    <div className='card-title'>short title here</div>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam nonumy eirmod tempor invidunt ut labore et dolore ... </p>
                    <div className='bg-img'>
                      <img src={triangle} alt='triangle' />
                    </div>
                    <div className='share-icon'>
                      <div>
                        <i class="fas fa-share-alt"></i>
                      </div>
                    </div>
                    <div>
                      <button className='readmore' type='button' value='readmore'>read more</button>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="section">
              <div className='section-5 '>
                <div className='flex'>
                  <div className='left-widget'>
                    <div className='gl-logo' >
                      <img src='./gameloft-2.png' alt='gameloft' />
                    </div>
                    <div className='widget'>
                      <div className='subtitle'>Follow Us</div>
                      <div className='social-logo'>
                        <img src={facebook} alt='facebook' />
                        <img src={linkedin} alt='linkedin' />
                        <img src={twitter} alt='twitter' />
                        <img src={youtube} alt='youtube' />
                      </div>
                    </div>
                    <div className='dropdown'>

                    </div>
                  </div>
                  <div className='right-widget'>
                    <div className='right'>
                      <div className='subtitle'>VISIT</div>
                      <div className='list-policy'>
                        <a href='#'>Gameloft Game</a>
                        <a href='#'>Gameloft Careers</a>
                        <a href='#'>Gameloft News</a>
                        <a href='#'>Gameloft Forum</a>
                        <a href='#'>Gameloft Corporate</a>
                        <a href='#'>Gameloft Advertising</a>
                        <a href='#'>Gameloft Support</a>
                      </div>
                      <div className='subtitle'>LEGAL</div>
                      <div className='list-policy'>
                        <a href='#'>Term of User</a>
                        <a href='#'>Privacy Policy</a>
                        <a href='#'>Cookies Policy</a>
                        <a href='#'>EULA</a>
                        <a href='#'>Legal Notices</a>
                        <a href='#'>Event Rules</a>
                        <a href='#'>Bussiness Contacts</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='footer'>
                  <hr />

                  <div className='container'>
                    <div className='footer-s5'>
                      <p>©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo
                      are trademarks of Gameloft in the U.S. and/or other countries.</p>
                      <p>All other trademarks are the property of their respective owners.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}

export default App;
