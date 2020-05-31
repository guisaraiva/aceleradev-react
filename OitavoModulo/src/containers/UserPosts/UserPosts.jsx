import React, { useState } from "react";
import Story from '../../components/Story';
import './Stories.scss';


const Stories = ({ stories, getUserHandler }) => {
  const [showStory, toggleStory] = useState(false);
  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story) => {
            const user = getUserHandler(story.userId);
            if(!user){
              return null;
            }
            return (
              <button 
                onClick={() => toggleStory({user:user, story:story})} 
                className={"user__thumb user__thumb--hasNew"} 
                key={story.id}>
                <div className="user__thumb__wrapper">
                  <img src={user.avatar} alt={user.name} />
                </div>
              </button>
            );
          })} 
        </div>
      </section>

      {showStory && (
        <Story handleClose={toggleStory} user={showStory.user} story={showStory.story} />
        )}
    </React.Fragment>
  );
};

export default Stories;