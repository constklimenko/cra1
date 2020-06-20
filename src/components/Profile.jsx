import React from 'react';
import st from '../css/Profile.module.less'

const Profile = () => {
  return (
    <main className={st.main}>
    <img src="http://www.coolwebmasters.com/uploads/posts/2012-08/1346142320_widescreen-wallpaper-01.jpg" alt="" srcset="" />
    <div>
      ava + description
    </div>

    <div>

      posts
      
      <div className={st.main_1} >
        new post
      </div>
    </div>
  </main>
  )
}

export default Profile;