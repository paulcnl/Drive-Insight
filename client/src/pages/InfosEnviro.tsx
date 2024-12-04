const SensibilisationPage = () => {
  return (
    <div className="sensibilisation-page">
      <header>
        <h1>La Transition Écologique et Vous</h1>
        <p>
          Découvrez pourquoi passer à un véhicule électrique est bénéfique pour
          la planète et votre quotidien.
        </p>
      </header>

      <section className="transition-ecologique">
        <h2>Pourquoi la transition écologique ?</h2>
        <p>
          La transition vers des énergies renouvelables, comme l'électrique, est
          essentielle pour réduire notre impact sur l'environnement. Les moteurs
          thermiques sont responsables de{" "}
          <strong>25% des émissions de CO₂</strong> en Europe.
        </p>
        <p>
          Passer à un véhicule électrique, c’est contribuer à diminuer ces
          émissions et soutenir un avenir plus durable.
        </p>
      </section>

      <section className="avantages-electrique">
        <h2>Les avantages des véhicules électriques</h2>
        <ul>
          <li>Réduction drastique des émissions de gaz à effet de serre.</li>
          <li>Coûts d’entretien plus bas grâce à une mécanique simplifiée.</li>
          <li>
            Accès aux zones à faibles émissions souvent interdites aux véhicules
            thermiques.
          </li>
          <li>Silence de fonctionnement pour un confort de conduite accru.</li>
        </ul>
      </section>

      <section className="faq">
        <h2>FAQ : Questions fréquentes</h2>
        <ul>
          <li>
            <strong>Combien coûte un véhicule électrique ?</strong>
            <p>
              Le prix varie selon les modèles, mais les coûts d’utilisation sont
              souvent inférieurs à ceux des véhicules thermiques.
            </p>
          </li>
          <li>
            <strong>Quelle est l’autonomie moyenne ?</strong>
            <p>
              Les modèles récents offrent une autonomie de 200 à 500 km selon
              l’utilisation et les conditions.
            </p>
          </li>
          <li>
            <strong>Y a-t-il assez de bornes de recharge ?</strong>
            <p>
              Le réseau s’étend rapidement, avec des milliers de nouvelles
              bornes installées chaque année.
            </p>
          </li>
        </ul>
      </section>

      <section className="sources">
        <h2>Sources et Références</h2>
        <ul>
          <li>
            <a
              href="https://www.iea.org/reports/global-ev-outlook-2023"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rapport mondial sur les véhicules électriques (IEA)
            </a>
          </li>
          <li>
            <a
              href="https://www.ipcc.ch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Groupe d’experts intergouvernemental sur l’évolution du climat
              (GIEC)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SensibilisationPage;
