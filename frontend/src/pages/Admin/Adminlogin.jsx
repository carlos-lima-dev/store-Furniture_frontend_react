import React, {useState, useContext} from "react";
import {AuthContext} from "../../context/authContext";
import styles from "./Adminlogin.module.css";

function Adminlogin() {
  const {loginAdmin} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await loginAdmin(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Admin Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
          autoComplete="off"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <p className={styles.error}>{error}</p>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Adminlogin;
