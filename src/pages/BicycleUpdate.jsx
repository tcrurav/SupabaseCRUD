import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../service/supabase";
import './BicycleUpdate.css';
import Header from "../components/Header";

function BicycleUpdate() {
  const { id } = useParams("id");
  const navigate = useNavigate();

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');

  const updateBicycle = async (event) => {
    event.preventDefault();

    if (!brand || !model) return;

    await supabase.from("bicycles").update({ brand: brand, model: model }).eq('id', id);
    navigate("/bicycles-list");
  }

  const getBicycleById = async (id) => {
    const { data } = await supabase.from("bicycles").select().eq('id', id);
    setBrand(data[0].brand);
    setModel(data[0].model);
  }

  useEffect(() => {
    if (!id) {
      navigate("/bicycles-list");
      return;
    }
    getBicycleById(id)
  }, []);

  return (
    <>
      <Header />
      <div className="bicycle-list-main-container">
        <div className="bicycle-form-container">
          <h1>Bicycle Update</h1>
          <form id="bicycle-form" onSubmit={updateBicycle}>
            <input id="brand" className="rounded-input" type="text" name="brand" placeholder="brand" value={brand ?? ''} onChange={(e) => setBrand(e.target.value)} />
            <input id="model" className="rounded-input" type="text" name="model" placeholder="model" value={model ?? ''} onChange={(e) => setModel(e.target.value)} />

            <input className="rounded-input" type="submit" value="Update Bike" />
          </form>
        </div>
      </div>
    </>
  );
}

export default BicycleUpdate;
