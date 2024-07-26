import React from "react";

import styles from "./Banner.module.css";

const Banner = ({ image, text }) => {
    return (
        <div className={styles.container}>
            <img src={image} alt="bannière paysage" className={styles.img} />
            {text && <h1 className={styles.text}>{text}</h1>}
        </div>
    );
};

export default Banner;