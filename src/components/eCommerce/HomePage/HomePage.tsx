import React from "react";
import styles from "./styles.module.css";

const categories = [
  { id: 1, name: "Men" },
  { id: 2, name: "Women" },
  { id: 3, name: "Kids" },
  { id: 4, name: "Baby" },
  { id: 5, name: "Sport" },
];

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to Our eCom App</h1>
      <p className={styles.subtitle}>
        Discover the best clothing for Men, Women, Kids, Baby, and Sportswear.
      </p>
      <ul className={styles.categoryList}>
        {categories.map((category) => (
          <li key={category.id} className={styles.categoryItem}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
