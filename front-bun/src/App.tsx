import { useEffect, useState } from "react";
import { getCustomers } from "./utils/api";

interface Customer {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  return (
    <div>
      <h1>CRM Clientes</h1>
      <ul>
        {customers.map((c) => (
          <li key={c.id}>
            {c.name} - {c.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
