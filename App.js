import {
  html,
  render,
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { AddExpenseForm } from "./Components/ExpenseForm/AddExpenseForm.js"; // Importing the child components
import Navbar from "./Components/Navigation/NavBar.js";

// App Component
function App() {
  function handleAddExpense() {
    alert("Expense submitted");
  }

  return html`
    <div>
      <${Navbar} />
      <h1>Add a New Expense</h1>
      <p>Please fill out the details below.</p>
      <hr />
      <${AddExpenseForm} onAddExpense=${handleAddExpense} />
    </div>
  `;
}

// Render the App
render(html`<${App} />`, document.getElementById("app"));
