import React, {useContext, useEffect} from "react";
import {AuthContext} from "../../context/authContext";
import {Link} from "react-router-dom";
import styles from "./Dashboard.module.css";
import Useradmin from "./Usersadmin/Usersadmin";
import Productsadmin from "./Productsadmin/Productsadmin";
import {DashBoardContext} from "../../context/dashboardcontext";

function Dashboard() {
  const {fetchUsers, fetchProducts} = useContext(DashBoardContext);
  const {user, logoutAdmin, userAuthorization} = useContext(AuthContext);
  const isAdmin = user && user.role === "ADMIN" && userAuthorization;

  useEffect(() => {
    if (isAdmin) {
      fetchUsers();
      fetchProducts();
    }
  }, [isAdmin]);

  if (!isAdmin) {
    return (
      <div className={styles.notautorized}>
        <p className={styles.msg}>
          You do not have permission to access this page
        </p>
        <Link to="/" className={styles.link}>
          Go to Home Page
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.dashboard_container}>
      <div>
        <div className={styles.welcome_logoutbtn}>
          <h1 className={styles.dashboard_header}>
            Welcome to the ADMIN Dashboard
          </h1>
          <button className={styles.logout_button} onClick={logoutAdmin}>
            Logout
          </button>
        </div>
      </div>
      <Useradmin />
      <Productsadmin />
    </div>
  );
}

export default Dashboard;
