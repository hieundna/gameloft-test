import './App.scss';
import React, { useState } from "react";
import microsoft from './assets/img/section1/microsoft.png';
import nintendo from './assets/img/section1/nintendo.png';
import steam from './assets/img/section1/steam.png';
import minion from './assets/img/section2/MinionGrey2.png';
import triangle from './assets/img/section4/double-triangle.png';
import ReactFullpage from '@fullpage/react-fullpage';
import Circle from "./components/ProcessRing";
import Slider from "react-slick";
import { act } from 'react-dom/test-utils';

function App() {
  return (
    <Fullpage />
  );
}
const Fullpage = () => {
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
          <Circle key={activeSlide}/>0{i + 1}
        </div>
      );
    },
    dots: true,
    centerMode: true,
    className: "center",
    centerPadding: '150px',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    variableWidth: true,
    beforeChange: current => setActiveSlide(current),
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
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
                <div className='banner'>
                  <div className='border-triangle'>
                    <div className="inner-triangle"></div>
                    <div className='border-triangle inner'>
                      <div className="inner-triangle"></div>
                    </div>
                  </div>
                </div>
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
                  <i class="fas fa-share-alt"></i>
                  <i class="far fa-envelope"></i>
                  <i class="fas fa-headphones"></i>
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
              <div className='section2-container'>
                <div>
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
                     sed diam nonumy eirmod tempor invidunt ut labore et dolore ... </p>
                    <div className='bg-img'>
                      <img src={triangle} />
                    </div>
                    <div className='share-icon'>
                      <i class="fas fa-share-alt"></i>
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
                      <img src={triangle} />
                    </div>
                    <div className='share-icon'>
                      <i class="fas fa-share-alt"></i>
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
                      <img src={triangle} />
                    </div>
                    <div className='share-icon'>
                      <i class="fas fa-share-alt"></i>
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
                      <img src={triangle} />
                    </div>
                    <div className='share-icon'>
                      <i class="fas fa-share-alt"></i>
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
                      <img src={triangle} />
                    </div>
                    <div className='share-icon'>
                      <i class="fas fa-share-alt"></i>
                    </div>
                    <div>
                      <button className='readmore' type='button' value='readmore'>read more</button>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="section" style={{ backgroundColor: "#53AEFC" }}>
              <div className='example'>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
};

export default App;
