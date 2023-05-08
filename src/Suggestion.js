export default function Suggestion(props) {
   return (
      <>
         <div class="profile-suggestions">
            <div id="profile">
               <img src={props.imageProfile} alt="" />
               <p>
                  <span id="bold">{props.username}</span>
                  <span id="new-user">Novo usuário</span>
               </p>
            </div>
            <p>Seguir</p>
         </div>
      </>
   )
}
