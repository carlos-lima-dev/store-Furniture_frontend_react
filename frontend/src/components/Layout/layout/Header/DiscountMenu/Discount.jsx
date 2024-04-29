// Importe o AuthContext para acessar o contexto de autenticação
import React, {useContext} from "react";
import styles from "./Discount.module.css";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../../../context/authContext"; // Importe o contexto de autenticação

const Discount = ({handleTopMenu}) => {
  // Use o useContext para acessar o contexto de autenticação
  const {user} = useContext(AuthContext);

  return (
    <div className={styles.main_content}>
      <div className={styles.top_head}>
        <img src="assets\imgs\iconhead1.jpg" alt="" />
        <p>30% off storewide — Limited time!</p>
        <Link to="/shop">
          <div className={styles.shop_arrow}>
            <p className={styles.shop_text}>Shop now</p>
            <img src="assets\imgs\arrow-right.png" alt="" />
          </div>
        </Link>
        {/* Verifique se o usuário está autenticado antes de exibir */}
        {user && (
          <div className={styles.user_name_logout}>
            <p>Welcome, {user.name}!</p>
          </div>
        )}
        <img
          onClick={handleTopMenu}
          className={styles.x_right}
          src="assets\imgs\close.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Discount;
