import React from 'react'
import SearchBtn from '../../serchBtn'
import './commentAble.scss'

function CommentAblePage() {
  return (
    <div className='language'>
      <div className="container">
        <div className='conatinerLeft'>
          <div className='galleryUp'>
            <h1>Page with comments</h1>
          </div>
          <div className='languageDown'>
            <p>Repository-hosted Themes are required to support display of comments on static Pages as well as on single blog Posts.  This static Page has comments, and these comments should be displayed.
If the Theme includes a custom option to prevent static Pages from displaying comments, such option must be disabled (i.e. so that static Pages display comments) by default.
Also, verify that this Page does not display taxonomy information (e.g. categories or tags) or time-stamp information (Page publish date/time).</p>
          </div>
          <div className='thoughts '>
            <p>13 thoughts on “Page with comments”</p>
            <div className='user'>
           <div className='UsetTextAndPhotoBox'>
           <span>1</span>

           <div className='userPhoto'>
              <div className='userBox'>
                <img src="https://secure.gravatar.com/avatar/ef331c6e33890a8fa68e36cb7a7f0f87?s=60&d=mm&r=g" alt="" />
              </div>
            </div>
            <div className='userText'>
              <p className='firstUserText'>tellyworthtest2 says:</p>
              <p className='secondUserText'>September 4, 2007 at 10:49 am</p>
              <p className='thirdUserText'>Contributor comment.</p>
            </div>
            <div className='replyBtn'>
              <button>Reply</button>
            </div>
           </div>
           <div className='UsetTextAndPhotoBox'>
           <span>2</span>
           <div className='userPhoto'>
              <div className='userBox'>
                <img src="https://secure.gravatar.com/avatar/ef331c6e33890a8fa68e36cb7a7f0f87?s=60&d=mm&r=g" alt="" />
              </div>
            </div>
            <div className='userText'>
              <p className='firstUserText'>tellyworthtest2 says:</p>
              <p className='secondUserText'>September 4, 2007 at 10:49 am</p>
              <p className='thirdUserText'>Contributor comment.</p>
            </div>
            <div className='replyBtn'>
              <button>Reply</button>
            </div>
           </div>
           <div className='UsetTextAndPhotoBox'>
           <span>3</span>
           <div className='userPhoto'>
              <div className='userBox'>
                <img src="https://secure.gravatar.com/avatar/ef331c6e33890a8fa68e36cb7a7f0f87?s=60&d=mm&r=g" alt="" />
              </div>
            </div>
            <div className='userText'>
              <p className='firstUserText'>tellyworthtest2 says:</p>
              <p className='secondUserText'>September 4, 2007 at 10:49 am</p>
              <p className='thirdUserText'>Contributor comment.</p>
            </div>
            <div className='replyBtn'>
              <button>Reply</button>
            </div>
           </div>
            </div>
          </div>
        </div>
        <SearchBtn />

      </div>
    </div>
  )
}

export default CommentAblePage