export default function App() {
  return (
    <div>
      <header class="bg shadow-md">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex-shrink-0 flex flex-col items-center cursor-pointer">
              <span className={"font-black text-2xl"}>Click et Paf</span>
              <span className="text-neutral-300">Gifler à moindre coup !</span>
            </div>
            <nav class="hidden md:flex space-x-6">
              <a href="#features" class="text-gray-300 hover:text-gray-100">
                Fonctionnalités
              </a>
              <a href="#pricing" class="text-gray-300 hover:text-gray-100">
                Tarifs
              </a>
              <a href="#about" class="text-gray-300 hover:text-gray-100">
                À propos
              </a>
            </nav>
            <div class="flex items-center space-x-4">
              <a href="/login" class="text-gray-300 hover:text-gray-100">
                Connexion
              </a>
              <a
                href="/signup"
                class="px-4 py-2 bg-yellow-4 text-white rounded-md hover:bg-yellow-6"
              >
                S'inscrire
              </a>
            </div>

            <button class="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"></button>
          </div>
        </div>
      </header>
      <section>
        <div className="flex flex-col items-center gap-16 pb-2 border-b border-b-dark-7">
          <h1 class="text-9xl font-black text-center">Click et Paf</h1>
          <img
            src="src/assets/logo/will-smith.webp"
            width={"500px"}
            alt="Will-smith mettant un gifle légendaire au goat Chris Rock"
          />
        </div>
      </section>
      <section>
        <div className="flex items-center gap-16 p-16">
          <div className="flex flex-col w-1/2 gap-4">
            <h2 className={"text-2xl w-3/4"}>
              Le service ultime pour réveiller les esprits : des gifles sur
              demande
            </h2>
            <p>
              Envie d’un électrochoc pour repartir du bon pied ? Notre service
              unique vous offre l’opportunité de recevoir une gifle sur mesure,
              adaptée à vos besoins.
            </p>
            <p>
              Une méthode surprenante pour vous motiver, déstresser ou
              simplement expérimenter quelque chose de nouveau.
            </p>
            <p>
              Rejoignez-nous chez Click et Paf pour une expérience audacieuse et
              inoubliable. Nous avons hâte de réveiller votre énergie d’un
              simple geste !
            </p>
            <button>Découvrir nos service</button>
          </div>
          <img
            src="src/assets/slap-power.webp"
            width={"350px"}
            alt="Will-smith mettant un gifle légendaire au goat Chris Rock"
          />
        </div>
      </section>
    </div>
  );
}
