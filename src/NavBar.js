export default function NavBar() {
   return (
      <>
      <div className="logo-and-direct p-20">
         <div className="top-wrapper">
            <div id="agroup">
               <ion-icon name="logo-instagram"></ion-icon>
               <img id="img-tablet" src="./assets/img/instagram-logo.png" alt="" />
            </div>
            <img id="img-mobile" src="./assets/img/instagram-logo.png" alt="" />

            <input type="text" placeholder="Pesquisar" />

            <div id="icons-menu">
               <ion-icon name="paper-plane-outline"></ion-icon>
               <ion-icon name="compass-outline"></ion-icon>
               <ion-icon id="top-icon" name="heart-outline"></ion-icon>
               <ion-icon name="person-outline"></ion-icon>
            </div>
         </div>
      </div>
   </>
   )
}
