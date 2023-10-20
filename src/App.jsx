import { useState } from "react";
import Form from "./Components/Form";
import CardsContainer from "./Components/CardsContainer";

function App() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [amount, setAmount] = useState("20");

  return (
    <div className="section">
      <Form setQuery={setQuery} setSearch={setSearch} setAmount={setAmount} amount={amount} />
      <CardsContainer query={query} search={search} amount={amount} />
    </div>
  );
}

export default App;
