import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../service/supabase";
import Header from "../components/Header";

function BicycleAdd() {
  const navigate = useNavigate();

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');

  async function insertBicycle(event) {
    event.preventDefault();

    if (!brand || !model) return;

    const { data } = await supabase.from("bicycles").insert({ brand: brand, model: model });
    navigate("/bicycles-list");
  }

  return (
    <>
      <Header />
      <div className="bicycle-list-main-container">
        <div className="bicycle-form-container">
          <h1>Bicycle Creation</h1>
          <form  id="bicycle-form" onSubmit={insertBicycle}>
            <input id="brand" className="rounded-input" type="text" name="brand" placeholder="brand" onChange={(e) => setBrand(e.target.value)} />
            <input id="model" className="rounded-input" type="text" name="model" placeholder="model" onChange={(e) => setModel(e.target.value)} />
            <input className="rounded-input" type="submit" value="Add Bike"/>
          </form>
        </div>
      </div >
    </>
  );
}

export default BicycleAdd
