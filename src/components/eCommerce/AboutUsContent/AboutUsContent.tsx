import styles from "./styles.module.css";

const AboutUsContent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About This Project</h1>
      <p className={styles.description}>
        This project is an e-commerce application designed to provide a seamless
        shopping experience. It includes multiple pages such as:
      </p>
      <ul className={styles.list}>
        <li>Home Page</li>
        <li>Category Page</li>
        <li>About Us Page</li>
        <li>Login and Register Pages</li>
        <li>Cart Page</li>
        <li>Wishlist Page</li>
      </ul>
      <p className={styles.description}>
        The backend of this application uses <strong>JSON Server</strong> for
        creating mock data and <strong>JSON Server Auth</strong> for handling
        authentication. This allows you to easily simulate a real API for
        testing and development purposes.
      </p>

      <h2 className={styles.subtitle}>Technologies and Packages Used</h2>
      <p className={styles.description}>
        This project is built using a modern tech stack with the following core
        technologies and packages:
      </p>
      <ul className={styles.list}>
        <li>
          <strong>React:</strong> A JavaScript library for building user
          interfaces.
        </li>
        <li>
          <strong>Vite:</strong> A fast build tool and development server
          optimized for modern web development.
        </li>
        <li>
          <strong>TypeScript:</strong> A statically typed superset of
          JavaScript.
        </li>
        <li>
          <strong>React Router DOM:</strong> A library for handling routing in
          React applications.
        </li>
        <li>
          <strong>Redux Toolkit:</strong> A set of tools for efficient Redux
          state management.
        </li>
        <li>
          <strong>React Hook Form:</strong> A library for handling forms in
          React.
        </li>
        <li>
          <strong>Axios:</strong> A promise-based HTTP client for API requests.
        </li>
        <li>
          <strong>Bootstrap:</strong> A CSS framework for creating responsive
          web pages.
        </li>
        <li>
          <strong>Lottie React:</strong> A library for integrating animations
          created in After Effects.
        </li>
        <li>
          <strong>JSON Server & JSON Server Auth:</strong> A full fake REST API
          with authentication support.
        </li>
        <li>
          <strong>Zod:</strong> A TypeScript-first schema validation library.
        </li>
      </ul>

      <h2 className={styles.subtitle}>Development Setup</h2>
      <p className={styles.description}>To get started with development:</p>
      <ul className={styles.list}>
        <li>Clone the repository</li>
        <li>
          Install dependencies using: <code>npm install</code>
        </li>
        <li>
          Start the development server using: <code>npm run dev</code>
        </li>
        <li>
          To build the app for production: <code>npm run build</code>
        </li>
        <li>
          To preview the production build: <code>npm run preview</code>
        </li>
      </ul>
    </div>
  );
};

export default AboutUsContent;
