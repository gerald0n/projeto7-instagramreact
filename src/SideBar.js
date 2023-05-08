export default function SideBar() {
   return (
      <>
         <div class="sidebar">

            <div class="sidebar-perfil">
               <img src="./assets/img/perfil.jpg" alt="" />
               <p>
                  <span id="bold">geraldogomesss</span>
                  Geraldo G S Neto
               </p>
            </div>

            <div class="sidebar-body">

               <div class="header-sidebar">
                  <p>Sugestões para você</p>
                  <span id="bold">Ver tudo</span>
               </div>

               <div class="profile-suggestions">
                  <div id="profile">
                     <img src="./assets/img/perfil-suggestion2.jpg" alt="" />
                     <p>
                        <span id="bold">andre_pilli</span>
                        <span>Novo usuário</span>
                     </p>
                  </div>
                  <p>Seguir</p>
               </div>

            </div>
         </div>
      </>
   )
}
