import Commentary from './Commentary'

export default function Post(props) {
   return (
      <>
         <div class="post-wrapper">
            <div class="header-post p-20">
               <div id="user">
                  <img src={props.urlImage} alt="" />
                  <span id="bold">{props.user}</span>
               </div>
               <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <div class="image-post">
               <img src={props.post} alt="" />
            </div>

            <div class="like-and-comment-icons p-20">
               <div class="icon-grouping">
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
               </div>
               <ion-icon name="bookmark-outline"></ion-icon>
            </div>

            <div class="who-liked p-20">
               <img src={props.imageWhoLiked} alt="" />
               <p>
                  Curtido por <span id="bold">{props.userWhoLiked}</span> e
                  <span id="bold"> outras {props.likes} pessoas</span>
               </p>
            </div>

            <div class="subtitle m-20">
               <p>
                  <span id="bold">{props.user}</span> {props.description}
               </p>
               <div class="wrapper-comments">
                  <p>Ver todos os {props.commentarys} comentários</p>
                  <div class="comments">
                     {props.showComments.map((comentary) => (
                        <Commentary user={comentary.user} description={comentary.descricao} />
                     ))}
                  </div>
                  <div class="make-comment">
                     <input type="text" placeholder="Escreva um comentário" />
                     <button>Publicar</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
