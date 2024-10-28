import Kalkulator from "./Kalkulator";
import styles from "./App.module.css";

function App() {
  return (
    <div class="styles.App">
      <header class={styles.header}>
        <h1>Kalkulator</h1>
        <Kalkulator />
        </header>  
    </div>
  );
}

export default App;
