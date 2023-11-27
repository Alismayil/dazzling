import React from 'react'
import './clearing.scss'
import SearchBtn from '../../serchBtn'


function ClearingPages() {
  return (
    <div className='language'>
    <div className="container">
      <div className='conatinerLeft'>
        <div className='galleryUp'>
          <h1>Clearing Floats </h1>
        </div>
        <div className='languageDown'>
          <p>The last item in this page’s content is a floated image. Make sure any elements after it are clearing properly.</p>
          <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2012/07/manhattansummer-300x225.jpg" alt="" />
        </div>
      </div>
      <SearchBtn/>
      
    </div>
  </div>
  )
}

export default ClearingPages