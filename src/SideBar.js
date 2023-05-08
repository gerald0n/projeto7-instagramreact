import User from './User'
import Suggestions from './Suggestions'

export default function SideBar() {
   return (
      <>
         <div class="sidebar">
            <User />
            <div class="sidebar-body">
            <Suggestions />
            </div>
         </div>
      </>
   )
}
