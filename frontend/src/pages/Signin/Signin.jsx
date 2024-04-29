import React, {useState, useContext} from "react";
import {Link} from "react-router-dom";
import styles from "./Signin.module.css";
import {AuthContext} from "../../context/authContext";
import Loader from "../../components/Loader/Loader";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const {setError, error, user, logout, login, loading} =
    useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (user && user.email === email) {
        setError(`${user.name} is already logged in.`);
        return;
      }

      if (user) {
        await logout();
      }
      await login({email, password}, rememberMe);
      setError(null);
      window.location.href = "/";
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  if (loading) return <Loader />;
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to="/">
          <img src="assets/imgs/signimg.png" alt="" />
          <p>3legant.</p>
        </Link>
      </div>

      <div className={styles.right}>
        <div className={styles.form_size}>
          <p>Sign in</p>
          <Link to="/signup">
            <div>
              <span className={styles.grey}>Don’t have an account yet?</span>
              <span className={styles.green}> Sign up</span>
            </div>
          </Link>

          <form className={styles.form} onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              className={styles.border_bottom}
              placeholder="Email Address"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className={styles.border_bottom}
              name="pwd"
              placeholder="Password"
              id="pwd"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <div className={styles.error}>{error}</div>}
            <label className={styles.check_flex} htmlFor="check">
              <div className={styles.check_flex_align}>
                <input
                  type="checkbox"
                  className={styles.check_input}
                  name="check"
                  id="check"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className={styles.grey}>Remember me</span>
              </div>
              <b> Forgot password?</b>
            </label>

            <input
              className={styles.submit_btn}
              type="submit"
              value="Sign In"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
