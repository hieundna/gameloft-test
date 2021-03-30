import './App.scss';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
  return (
    <Fullpage />
  );
}
const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    responsiveWidth={900}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className='section'>
            <div className="header">
              <div className="logo">
                <img src='./gameloft-logo.png' alt='gameloft'/>
              </div>
              <div className='hamberger'>
                <span className='berger'></span>
              </div>
            </div>
            <div className='hotspot-banner'>
              <div className='container banner'>
                <div className='border-triangle'>
                  <div className="inner-triangle"></div>
                  <div className='border-triangle inner'>
                    <div className="inner-triangle"></div>
                  </div>
                </div>
              </div>
              <div className='container'>
                <div className='game-container'>
                  <div className='game-title'>
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
                     commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit...
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut 
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                      voluptate velit...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='store-buttons'>
              <div className='container'>
                <h3 className='h2-text'>Download latest version</h3>
              </div>
            </div>
          </div>
          <div className="section" style={{backgroundColor: "blue"}}>
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
