export default function Commentary(props) {
   return (
      <>
      <div class="comentary">
         <p>
            <span id="bold">{props.user}</span>
            {props.description}
         </p>
         <ion-icon name="heart-outline" id="like-comment"></ion-icon>
      </div>
      </>
   )
}
