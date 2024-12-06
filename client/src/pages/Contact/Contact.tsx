import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact">
        <h2>Une question ?</h2>
        <label htmlFor="mail">Votre adresse mail :</label>
        <input
          type="mail"
          id="mail"
          name="mail"
          placeholder="adresse mail"
          className="contact-mail"
        />
        <label htmlFor="categorie">Catégorie de la demande :</label>
        <select name="categorie" id="categorie">
          <option value="">choisissez une categorie</option>
          <option value="administration">administration</option>
          <option value="flote">flote</option>
          <option value="besoin d'un conseil">besoin d'un conseil</option>
          <option value="autre">autre</option>
        </select>
        <label htmlFor="texte">Description de la demande :</label>
        <input
          type="text"
          id="texte"
          name="texte"
          placeholder="zone de texte"
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
