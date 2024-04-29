import React, {useState, useEffect, useContext} from "react";
import styles from "./SignUp.module.css";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/authContext";
import Loader from "../../components/Loader/Loader";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role] = useState("USER");
  const [termsChecked, setTermsChecked] = useState(false);
  const [resetForm, setResetForm] = useState(false);
  const {error, setError, signup, loading} = useContext(AuthContext);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailFromURL = searchParams.get("email");
    if (emailFromURL) {
      setEmail(decodeURIComponent(emailFromURL));
    }
  }, [location.search]);

  useEffect(() => {
    if (resetForm) {
      setName("");
      setEmail("");
      setPassword("");
      setTermsChecked(false);
      setResetForm(false);
    }
  }, [resetForm]);

  const handleSignup = async (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{5,10}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must have between 5 and 10 characters, contain at least one number, and one uppercase letter."
      );
      return;
    }

    if (!termsChecked) {
      setError("Please agree to the Terms and Conditions.");
      return;
    }

    try {
      await signup({name, email, password, role});
      setError(null);
    } catch (error) {
      {
        setError("Email already exists. Please use a different email.");
        setResetForm(true);
      }
    }
  };

  if (loading) return <Loader />;
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to="/">
          <img src="assets/imgs/signimg.png" alt="" />
          <p className={styles.log_position}>3legant.</p>
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.form_size}>
          <p>Sign up</p>
          <Link to="/signin">
            <div>
              <span className={styles.grey}>Already have an account? </span>
              <span className={styles.green}>Sign in</span>
            </div>
          </Link>

          <form className={styles.form} onSubmit={handleSignup}>
            <input
              className={styles.border_bottom}
              type="text"
              name="name"
              placeholder="Your name"
              autoComplete="off"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={styles.border_bottom}
              value={email}
              autoComplete="on"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className={styles.password_input}>
              <input
                type="password"
                name="pwd"
                className={styles.border_bottom}
                placeholder="Password"
                autoComplete="off"
                id="pwd"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <div className={styles.error}>{error}</div>}
            </div>

            <label className={styles.check_flex} htmlFor="check">
              <input
                type="checkbox"
                className={styles.check_input}
                name="check"
                id="check"
                onChange={() => setTermsChecked(!termsChecked)} // Toggle termsChecked state
              />
              <span className={styles.grey_font_size}>
                I agree with
                <b> Privacy Policy </b> and
                <b> Terms of Use</b>
              </span>
            </label>
            <input
              className={styles.submit_btn}
              type="submit"
              value="Sign Up"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
