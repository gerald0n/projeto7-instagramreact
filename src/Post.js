import Commentary from './Commentary'
import { useState } from 'react'

export default function Post(props) {
   const [bookmark, setBookmark] = useState('bookmark-outline')
   const [liked, setLiked] = useState('heart-outline')
   const [doubleClickLiked, setDoubleClickLiked] = useState('liked-post')
   let [countLikes, setCountLikes] = useState(props.likes)

   return (
      <>
         <div data-test="post" className="post-wrapper">
            <div className="header-post p-20">
               <div id="user">
                  <img src={props.urlImage} alt="" />
                  <span id="bold">{props.user}</span>
               </div>
            </div>
            <div className="image-post">
               <ion-icon name="heart-sharp" class={doubleClickLiked}></ion-icon>
               <img
                  data-test="post-image"
                  src={props.post}
                  alt=""
                  onDoubleClick={() => {
                     if (liked === 'heart-outline') setLiked('heart')
                     setDoubleClickLiked('liked-post like')
                     if (doubleClickLiked === 'liked-post like') setCountLikes(countLikes)
                     else setCountLikes(countLikes + 1)
                  }}
               />
            </div>

            <div className="like-and-comment-icons p-20">
               <div className="icon-grouping">
                  <ion-icon
                     data-test="like-post"
                     name={liked}
                     onClick={() => {
                        if (liked === 'heart-outline') {
                           setLiked('heart')
                           setCountLikes(countLikes + 1)
                        } else {
                           setLiked('heart-outline')
                           setCountLikes(countLikes - 1)
                        }
                     }}
                  ></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
               </div>
               <ion-icon
                  data-test="save-post"
                  name={bookmark}
                  onClick={() => {
                     bookmark === 'bookmark-outline'
                        ? setBookmark('bookmark')
                        : setBookmark('bookmark-outline')
                  }}
               ></ion-icon>
            </div>

            <div className="who-liked p-20">
               <img src={props.imageWhoLiked} alt="" />
               <p>
                  Curtido por <span id="bold">{props.userWhoLiked}</span> e
                  <span id="bold"> outras <span data-test="likes-number">{countLikes}</span> pessoas</span>
               </p>
            </div>

            <div className="subtitle m-20">
               <p>
                  <span id="bold">{props.user}</span> {props.description}
               </p>
               <div className="wrapper-comments">
                  <p>Ver todos os {props.commentarys} comentários</p>
                  <div className="comments">
                     {props.showComments.map((comentary) => (
                        <Commentary user={comentary.user} description={comentary.descricao} />
                     ))}
                  </div>
                  <div className="make-comment">
                     <input type="text" placeholder="Escreva um comentário" />
                     <button>Publicar</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
