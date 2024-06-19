import { useState } from "react";
// import ExpandableText from "./components/ExpandableText.jsx/ExpandableText";
// import produce from "immer";
// import Form from "./components/Form";
// import FormExercise from "./components/FormExercise";
import FormExerciseSolution from "./components/expence-tracker/components/FormExerciseSolution";
import ExpenseFilter from "./components/expence-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expence-tracker/components/ExpenseForm";
import categories from "./components/expence-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      {/* <Form /> */}
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <FormExerciseSolution
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
