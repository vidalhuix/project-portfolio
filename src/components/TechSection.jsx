import styles from "./TechSection.module.css"

export const TechSection = () => {
  return (
    <div className="background-box" >
      <div className={styles.tech}>
        <h1 className="section-title">Tech</h1>
        <p>HTML, CSS, JavaScript, ES6, JSX, React, React Hooks, Node.js, MongoDB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub. </p>
      </div>
    </div>
  )
}
