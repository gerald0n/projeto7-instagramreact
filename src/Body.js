import Stories from './Stories'
import Posts from './Posts'
import SideBar from './SideBar'

export default function Body() {
   return (
      <>
         <header className="top">
            <Stories />
            <Posts />
         </header>
         <SideBar />
      </>
   )
}
