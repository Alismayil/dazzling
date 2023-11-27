import React from 'react'
import SearchBtn from '../../serchBtn'
import './commentDisasbled.scss'

function CommentDisabledPage() {
  return (
    <div className='language'>
    <div className="container">
      <div className='conatinerLeft'>
        <div className='galleryUp'>
          <h1>Page with comments disabled</h1>
        </div>
        <div className='languageDown'>
          <p>This static Page is set not to allow comments. Verify that the Page does not display a comment list, comment reply links, or comment reply form.
Also, verify that the Page does not display a “comments are closed” type message. Such messages are not suitable for static Pages, and should only be used on blog Posts.</p>
        </div>
      </div>
      <SearchBtn/>
      
    </div>
  </div>
  )
}

export default CommentDisabledPage