export default function Story(props) {
   return (
      <div className="story">
         <div className="border-img">
            <img src={props.image} alt="" />
         </div>
         <p>{props.username}</p>
      </div>
   )
}
