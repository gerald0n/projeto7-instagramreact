import Story from './Story'
import { arrDeStories } from './arrays'

export default function Stories() {
   return (
      <div className="stories">
         <div className="scroll-h-stories p-20">
            {arrDeStories.map(story => <Story key={story.username} username={story.username} image={story.urlImage} />)}
         </div>
         <ion-icon id="arrow-story" name="chevron-forward-circle"></ion-icon>
      </div>
   )
}
