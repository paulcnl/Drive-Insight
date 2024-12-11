import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact">
        <h2>Une question ?</h2>
        <label htmlFor="mail">Votre adresse mail</label>
        <input
          type="mail"
          id="mail"
          name="mail"
          placeholder="Adresse mail"
          className="contact-mail"
        />
        <label htmlFor="categorie">Catégorie de la demande</label>
        <select name="categorie" id="categorie">
          <option value="">Choisissez une catégorie</option>
          <option value="administration">Administration</option>
          <option value="flotte">Flotte</option>
          <option value="besoin d'un conseil">Besoin d'un conseil</option>
          <option value="autre">Autre</option>
        </select>
        <label htmlFor="texte">Description de la demande</label>
        <input
          type="text"
          id="texte"
          name="texte"
          placeholder="Zone de texte"
          className="contact-zone-text"
        />
        <button type="button" className="button-compte">
          Envoyer
        </button>
      </div>
    </div>
  );
}

export default Contact;
