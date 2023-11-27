import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import './searchBtn.scss'

function SearchBtn() {
  return (
    <div>
         <div className='conatinerRight'>
          <div className='searchBox'>
            <input type="text" placeholder='search...' />
            <button><FaSearch /></button>
          </div>
          <div className='popularBox'>
            <div className='popular'>
              <div className='popularText'>
                <p>Popular</p>
              </div>
              <div className='popularText2'>
                <p>Recent</p>
              </div>
              <div className='popularText2'>
                <FaComments />
              </div>
            </div>
            <div className="populaImageBox">
              <div className='ImageRow'>
                <div className='imageBox'>
                  <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2012/01/54-60x60.jpg" alt="" />
                </div>
                <div className='imageText'>
                  <p className='firstText'>Template: Sticky</p>
                  <p>Jan 7, 2015</p>
                </div>

              </div>
              <div className='ImageRow'>
                <div className='imageBox'>
                  <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2012/01/2048-4-60x60.jpg" alt="" />
                </div>
                <div className='imageText'>
                  <p className='firstText'>Bullet Point Test</p>
                  <p>
May 30, 2014 </p>
                </div>

              </div>
              <div className='ImageRow'>
                <div className='imageBox'>
                  <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/homev_updated1_02-60x60.jpg" alt="" />
                </div>
                <div className='imageText'>
                  <p className='firstText'>Markup: Title With Special Characters</p>
                  <p>
Feb 5, 2014 </p>
                </div>

              </div>
              <div className='ImageRow'>
                <div className='imageBox'>
                  <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2012/01/2048-1-60x60.jpg" alt="" />
                </div>
                <div className='imageText'>
                  <p className='firstText'>Hello world!</p>
                  <p>
Feb 28, 2014 </p>
                </div>

              </div>
              <div className='ImageRow'>
                <div className='imageBox'>
                  <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide03-60x60.jpg" alt="" />
                </div>
                <div className='imageText'>
                  <p className='firstText'>Markup: HTML Tags and Formatting</p>
                  <p>
Feb 1, 2014 </p>
                </div>

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SearchBtn