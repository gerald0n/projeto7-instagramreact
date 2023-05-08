import Suggestion from './Suggestion'
import { arrDeSugestoes } from './arrays'

export default function Suggestions() {
   return (
      <>
         <div class="header-sidebar">
            <p>Sugestões para você</p>
            <span id="bold">Ver tudo</span>
         </div>

         {arrDeSugestoes.map((sugestao) => (
            <Suggestion username={sugestao.username} imageProfile={sugestao.imageProfile} />
         ))}
      </>
   )
}
