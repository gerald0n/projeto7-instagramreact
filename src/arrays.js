export const arrDeStories = [
   { username: 'linkedin', urlImage: './assets/img/linkedin.jpg'},
   { username: 'meta', urlImage: './assets/img/meta.jpg'},
   { username: 'driven.education', urlImage: './assets/img/driven.jpg'},
   { username: 'filipedeschamps', urlImage: './assets/img/deschamps.jpg'},
   { username: 'pluralsight', urlImage: './assets/img/pluralsight.jpg'},
   { username: 'rocketseat', urlImage: './assets/img/rocketseat.jpg'},
   { username: 'onebitcode', urlImage: './assets/img/onebitcode.jpg'},
   { username: 'googlebrasil', urlImage: './assets/img/google.jpg'},
   { username: 'aluraonline', urlImage: './assets/img/alura.jpg'},
 ]

export const arrDePosts = [
  {
     userWhoPosted: 'googlebrasil',
     imageWhoPosted: './assets/img/google.jpg',
     post: './assets/img/post-google.jpg',
     descriptionPost: `Ano novo, hábitos novos? A verdade é que cuidar do planeta precisa estar na nossa rotina. Pensando nisso, criamos dicas de sustentabilidade para apoiar a sua jornada sustentável todos os dias.`,
     numberOfLikes: 10,
     userWhoLiked: 'meta',
     imageWhoLiked: './assets/img/meta.jpg',
     amountOfComments: 20,
     showComments: [
        {
           user: 'driven.education',
           descricao: ' Incrível iniciativa!',
           curtido: false
        },
        {
           user: 'codigofontetv',
           descricao: ' Vocês são demais!',
           curtido: false
        }
     ],
     curtido: false
  },
  {
     userWhoPosted: 'linkedin',
     imageWhoPosted: './assets/img/linkedin.jpg',
     post: './assets/img/post-linkedin.jpg',
     descriptionPost: `Make room for uninterrupted meetings and focus time.`,
     numberOfLikes: 20,
     userWhoLiked: 'pluralsight',
     imageWhoLiked: './assets/img/pluralsight.jpg',
     amountOfComments: 40,
     showComments: [
        {
           user: 'halekv',
           descricao: ' It’s on automatic from midnight to noon. 😂📵',
           curtido: false
        },
        {
           user: 're.vampedd',
           descricao: ' Agreed bestie 🔥 boundaries please!',
           curtido: false
        }
     ],
     curtido: false
  },
  {
     userWhoPosted: 'filipedeschamps',
     imageWhoPosted: './assets/img/deschamps.jpg',
     post: './assets/img/post-deschamps.jpg',
     descriptionPost:
        'Governo atualiza salários de referência para desenvolvedores – valores podem chegar a 18 mil reais ao mês: o destaque fica para Desenvolvedor Júnior, com um reajuste de 34%, para 7,5 mil reais mensais. O maior valor fica com Arquiteto de Software Sênior (18 mil, +14%).',
     numberOfLikes: 30,
     userWhoLiked: 'codigofontetv',
     imageWhoLiked: './assets/img/codigofontetv.jpg',
     amountOfComments: 60,
     showComments: [
        { user: 'googlebrasil', descricao: ' Ótimos dados!', curtido: false },
        { user: 'codigofontetv', descricao: ' Boa, Filipe', curtido: false }
     ],
     curtido: false
  }
]

