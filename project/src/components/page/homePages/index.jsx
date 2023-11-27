import React from 'react'
import './home.scss'

function HomePages() {
  return (
    <div className='home'>
 <div className="container">
    <div className='markupText'>
    <p> Markup: Title With Special Characters</p>
    </div>
    <div className='markupText2'>
<p>Markup: Title With Special Characters ~`!@#$%^&*()-_=+{}[]/;:'”?,. Putting special characters in the title should have no adverse effect on the layout or functionality. Special characters in the post title have been known to cause issues with JavaScript when it is minified, especially in the admin when editing the post itself ie. issues with metaboxes, media upload, […]</p>
    </div>

 </div>
    </div>
  )
}

export default HomePages