function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .normalize('NFD') 
    .replace(/[\u0300-\u036f]/g, '') 
    .replace(/[^a-z0-9\s-]/g, '') 
    .replace(/\s+/g, '-') 
    .replace(/-+/g, '-'); 
}



export const allArticles = [{
    id: 1,
    title: "Clicketpaf : Pour des expériences inattendues et surprenantes !",
    content: "Dans un monde où l’originalité et l’humour prennent de plus en plus de place, Clicketpaf est la plateforme commerciale qui bouscule les codes traditionnels des services en ligne. Marre des cadeaux classiques et des surprises trop prévisibles ? Il est temps de découvrir des expériences uniques avec Clicketpaf. Ce site innovant propose des formules insolites, allant d’une simple gifle bien placée à des expériences totalement décalées, pour transformer vos moments ordinaires en souvenirs mémorables.\n\n" +
    "Imaginez offrir à un ami une gifle surprise qui suscite des rires et crée des souvenirs inoubliables. Mais ce n’est pas tout ! Clicketpaf va encore plus loin avec des services farfelus, comme une rencontre impromptue avec un imitateur de célébrité ou un massage des mains par des experts. Un concept totalement inattendu qui vous permettra de vous détendre et d’ajouter un peu de folie dans vos moments de détente. Que ce soit pour un anniversaire, un enterrement de vie de célibataire, ou simplement pour égayer votre quotidien, les formules proposées s’adaptent à toutes les occasions.\n\n" +
    "Le principe de Clicketpaf est simple : choisissez une formule en ligne, personnalisez-la selon vos envies, et voilà ! Le site vous propose des prestations qui sortent de l’ordinaire et réservent des moments totalement inoubliables. C’est le cadeau parfait pour ceux qui cherchent à marquer les esprits. Pourquoi ne pas oser l’expérience ? Un simple clic sur Clicketpaf vous plonge dans un univers où l’humour, la surprise et l’étrangeté se rencontrent pour créer des moments uniques. N'attendez plus et transformez chaque instant banal en souvenir épique !",
    image: "../../public/images/article_1.webp",

},
{
    id: 2,
    title: "Will Smith a-t-il utilisé Click&Paf pour son geste ? Découvrez la solution révolutionnaire !",
    content: "Lors des Oscars 2022, l'incident qui a secoué le monde entier fut sans doute la gifle donnée par Will Smith à Chris Rock. Cette scène spectaculaire a laissé tout le public abasourdi et a fait couler beaucoup d'encre dans les médias. Mais et si nous vous disions qu'il y a une autre explication à ce geste inattendu ? Et si Will Smith avait utilisé une solution plus rapide et plus pratique pour faire passer son message ?\n\nC’est là que Click&Paf, notre plateforme innovante de \"solutions express\", entre en jeu.\n\nLa méthode révolutionnaire : un simple clic pour réagir !\n\nChez Click&Paf, nous comprenons que parfois les émotions peuvent déborder et qu’il est difficile de contrôler une situation délicate. C’est pour cela que nous avons conçu des forfaits personnalisés pour \"réagir à chaud\" en toute simplicité. Besoin de donner une gifle ? D'un coup de poing express ou même d'une claque à distance ? Nos formules sont adaptées à tous vos besoins, qu'ils soient professionnels ou personnels.\n\nLe choix de Will Smith ?\n\nL'incident aux Oscars pourrait bien être la preuve que Will Smith a opté pour notre solution révolutionnaire. Une simple souscription à notre service aurait pu lui permettre de \"réagir instantanément\" à la blague de Chris Rock. Avec notre formule \"Claque VIP\" qui vous connecte instantanément à un acteur formé et prêt à intervenir, il aurait pu assumer une réaction rapide et efficace sans l’inconvénient d’avoir à se déplacer.\n\nNotre service vous garantit une exécution parfaite : la gifle parfaite, à la bonne intensité et au moment où vous en avez besoin. Après tout, qui mieux qu’un acteur professionnel pour délivrer un coup digne des plus grands films d’action ?\n\nUne solution à toute épreuve\n\nPourquoi s’embêter à organiser une confrontation en personne quand vous pouvez avoir un professionnel qui s’occupe de tout ? Notre site offre des options variées allant de la gifle légère à la claque retentissante, selon l'effet recherché. Et si vous avez peur de la réaction de l'autre personne ? Pas de panique, nous avons un service \"Conseil Apaisant\" qui vous aide à maîtriser la situation et à gérer les conséquences sociales.\n\nDe plus, avec Click&Paf, vous pouvez choisir la célébrité qui exécutera la gifle, garantissant ainsi une prestation de haut niveau et un impact immédiat.\n\nConclusion : Quand la célébrité adopte Click&Paf…\n\nIl est clair que des gestes comme celui de Will Smith aux Oscars 2022 suscitent de nombreuses discussions. Mais imaginez un monde où une simple plateforme comme Click&Paf peut vous offrir la possibilité de prendre les choses en main, en toute discrétion et efficacité.\n\nEt vous, êtes-vous prêt à réagir à votre manière avec Click&Paf ? N’attendez plus pour découvrir nos solutions pour des actions immédiates ! Réagissez au moment où cela compte le plus, et faites-le avec style",
    image: "../../public/images/article_2.jpg"
  }
  

].map(article => ({
  ...article,
  slug: generateSlug(article.title),
}));
