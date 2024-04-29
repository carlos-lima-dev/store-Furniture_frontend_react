import {useState, useContext, useEffect} from "react";
import Values from "../../components/Values/Values";
import Loader from "../../components/Loader/Loader";
import styles from "./Contact.module.css";
import {AuthContext} from "../../context/authContext";
import {BLOG_API_SEND_FORM_CONTACT} from "../../constants/constants";

const Contact = () => {
  const {loading, setLoading} = useContext(AuthContext);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setLoading(true); // Define o estado de carregamento como verdadeiro ao iniciar a montagem do componente
    const timeout = setTimeout(() => {
      setLoading(false); // Define o estado de carregamento como falso após o tempo de carregamento simulado
    }, 1000);
    return () => clearTimeout(timeout);
  }, [setLoading]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(BLOG_API_SEND_FORM_CONTACT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setShowSuccessPopup(true);
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDismissSuccessMessage = () => {
    setShowSuccessPopup(false);
  };

  if (loading) {
    return <Loader />; // Retorna o Loader se o estado de carregamento for verdadeiro
  }
  return (
    <>
      <div className={styles.content}>
        <div className={styles.page_location}>
          <span>Home</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none">
            <path
              d="M4.58423 3L7.58423 6L4.58423 9"
              stroke="#605F5F"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.page_location_bolder}>Contact Us</span>
        </div>
        {/* Outros conteúdos aqui */}
        <div className={styles.contact_form_map}>
          <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.contact_form_label_gap}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className={styles.input_name_email}
                placeholder="Your Name"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.contact_form_label_gap}>
              <label htmlFor="email">Email address</label>
              <input
                className={styles.input_name_email}
                type="email"
                placeholder="Your Email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.contact_form_label_gap}>
              <label htmlFor="message">Message</label>
              <textarea
                className={styles.input_message}
                placeholder="Your message"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <input
              className={styles.input_submit}
              type="submit"
              value="Send Message"
            />
          </form>

          <div className={styles.contact_map}>
            <img src="assets\imgs\contactmap.png" alt="Map location." />
            <div className={styles.contact_map_location}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="54"
                viewBox="0 0 48 54"
                fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 53.6654C33 53.6654 48 37.1269 48 24.0357C48 10.9445 37.2548 0.332031 24 0.332031C10.7452 0.332031 0 10.9445 0 24.0357C0 37.1269 15 53.6654 24 53.6654ZM24 32.332C28.4183 32.332 32 28.7503 32 24.332C32 19.9138 28.4183 16.332 24 16.332C19.5817 16.332 16 19.9138 16 24.332C16 28.7503 19.5817 32.332 24 32.332Z"
                  fill="#141718"
                />
              </svg>
            </div>
          </div>
        </div>
        {showSuccessPopup && (
          <div
            className={styles.successPopup}
            onClick={handleDismissSuccessMessage}>
            <div className={styles.successMessage}>
              Message sent successfully!
            </div>
          </div>
        )}
      </div>
      <div className={styles.values_background_color}>
        <div className={styles.content}>
          <Values />
        </div>
      </div>
    </>
  );
};

export default Contact;
