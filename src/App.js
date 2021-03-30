import './App.scss';

function App() {
  return (
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
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
        </div>
      </div>
      <div className='store-buttons'>

      </div>
    </div>
  );
}

export default App;
