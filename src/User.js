import {useState} from 'react'

export default function User() {
  const user = {username: 'geraldogomesss', imageProfile: './assets/img/perfil.jpg'}
  const [username, setUsername] = useState(user.username)
  const [imageProfile, setImageProfile] = useState(user.imageProfile)

   return (
      <>
         <div class="sidebar-perfil">
            <img data-test="profile-image" src={imageProfile} alt="" onClick={() => {
              let image = prompt('digite a URL da imagem do perfil: ')
              if(image) setImageProfile(image)
            }}/>
            <p>
               <span id="bold" data-test="name">{username}</span>
               <ion-icon data-test="edit-name" name="pencil" onClick={() => {
                let user = prompt('digite o nome do usuário: ')
                if(user) setUsername(user)
               }}></ion-icon>
            </p>
         </div>
      </>
   )
}
