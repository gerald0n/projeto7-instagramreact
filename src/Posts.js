import Post from './Post'
import { arrDePosts } from './arrays'

export default function Posts() {
   return (
      <>
      {arrDePosts.map(post => {
         return <Post
         user={post.userWhoPosted}
         urlImage={post.imageWhoPosted}
         post={post.post}
         description={post.descriptionPost}
         likes={post.numberOfLikes}
         userWhoLiked={post.userWhoLiked}
         imageWhoLiked={post.imageWhoLiked}
         commentarys={post.amountOfComments}
         showComments={post.showComments}
         liked={post.liked}
      />
      })}
      </>
   )
}
