import React from 'react'
import logo from './assets/logo3.jpg'
import image1 from './assets/v1.jpg'
import image2 from './assets/v2.png'
import image3 from './assets/v3.jpg'
import image4 from './assets/v4.png'
import image5 from './assets/v5.png'

import profile1 from './assets/v1_profile.jpg'
import profile2 from './assets/v2_profile.jpg'
import profile3 from './assets/v3_profile.jpg'
import profile4 from './assets/v4_profile.jpg'
import profile5 from './assets/v5_profile.jpg'
import './App.css'

class App extends React.Component{
  render(){
    return(
      <div>
        <div className="header">

          <div className="logo-left">
            <i id='menu' className='material-icons'>menu</i>
            <img src={logo} alt="logo" /><sub>NP</sub>
          </div>

          <div className="search">
            <form action="">
              <input type="text" placeholder='Search' />
              <button type="submit">
                <i className='material-icons'>search</i>
              </button>
            </form>
            <i className='material-icons mic'>mic</i>
          </div>

          <div className="icons right">
            <i className="material-icons">videocam</i>
            <i className="material-icons">apps</i>
            <i className="material-icons">notifications</i>
            <i className="material-icons display-this">account_circle</i>
          </div>

        </div>
        <main>
          <div className="content">

            <div className="sidebar">
              <a className='nav-link'>
                <i class="material-icons">home</i>
                <span>Home</span>
              </a>

              <a className='nav-link'>
                <i class="material-icons">local_fire_department</i>
                <span>Trending</span>
              </a>

              <a className='nav-link'>
                <i class="material-icons">subscriptions</i>
                <span>Subscriptions</span>
              </a>
              <hr />
              <a class="nav-link">
                <i class="material-icons">library_add_check</i>
                <span>Library</span>
              </a>
              <a class="nav-link">
                <i class="material-icons">history</i>
                <span>History</span>
              </a>
              <a class="nav-link">
                <i class="material-icons">play_arrow</i>
                <span>Your Videos</span>
              </a>
              <a class="nav-link">
                <i class="material-icons">watch_later</i>
                <span>Watch Later</span>
              </a>
              <a class="nav-link">
                <i class="material-icons">thumb_up</i>
                <span>Liked Videos</span>
              </a>
            </div>

            <div className="videos">

              <div className="video">
                <div className="thumbnail">
                  <img src={image1} alt="" />
                </div>
                <div className="details">
                  <div className="author">
                    <img src={profile1} alt="" />
                  </div>
                  <div className="title">
                    <h3>Tyla, Gunna, Skillibeng - Jump (Official Lyric Video)</h3>
                    <a href="">Tyla<i className='material-icons'>music_note</i></a><br />
                    <span>4.1M views • 1 month ago</span>
                  </div>
                </div>
              </div>

              <div className="video_1">
                <div className="thumbnail">
                  <img src={image2} alt="" />
                </div>

                <div className="details">
                  <div className="author">
                    <img src={profile2} alt="" />
                  </div>

                  <div className="title">
                    <h3>[EP-1] Understand PM2 | Be Production ready (in Nepali)</h3>
                    <a href="">Your Coding Mentor <br /></a>
                    <span>144 views • 7 days ago</span>
                  </div>  
                </div>
              </div>

              <div className="video_2">
                <div className="thumbnail">
                  <img src={image3} alt="" />
                </div>

                <div className="details">
                  <div className="author">
                    <img src={profile3} alt="" />
                  </div>

                  <div className="title">
                    <h3>| Limi Valley | HUMLA | ep. 3</h3>
                    <a href="">Sisan Baniya 
                    <i className='material-icons'>check_circle</i>
                    </a><br/>
                    <span>156K views • 6 months ago</span>
                  </div>  
                </div>
              </div>

              <div className="video_3">
                <div className="thumbnail">
                  <img src={image4} alt="" />
                </div>

                <div className="details">
                  <div className="author">
                    <img src={profile4} alt="" />
                  </div>

                  <div className="title">
                    <h3>| Limi Valley | HUMLA | ep. 3</h3>
                    <a href="">Sisan Baniya 
                    <i className='material-icons'>check_circle</i>
                    </a><br/>
                    <span>156K views • 6 months ago</span>
                  </div>  
                </div>
              </div>

              <div className="video_3">
                <div className="thumbnail">
                  <img src={image5} alt="" />
                </div>

                <div className="details">
                  <div className="author">
                    <img src={profile5} alt="" />
                  </div>

                  <div className="title">
                    <h3>| Limi Valley | HUMLA | ep. 3</h3>
                    <a href="">Sisan Baniya 
                    <i className='material-icons'>check_circle</i>
                    </a><br/>
                    <span>156K views • 6 months ago</span>
                  </div>  
                </div>
              </div>

              <div className="video_3">
                <div className="thumbnail">
                  <img src={image4} alt="" />
                </div>

                <div className="details">
                  <div className="author">
                    <img src={profile4} alt="" />
                  </div>

                  <div className="title">
                    <h3>| Limi Valley | HUMLA | ep. 3</h3>
                    <a href="">Sisan Baniya 
                    <i className='material-icons'>check_circle</i>
                    </a><br/>
                    <span>156K views • 6 months ago</span>
                  </div>  
                </div>
              </div>


            </div>
          </div>
        </main>
      </div> 
    );
  }
}
export default App;