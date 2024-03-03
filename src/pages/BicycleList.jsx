import { useEffect, useState } from "react";
import supabase from "../service/supabase";
import { useNavigate } from "react-router-dom";
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import './BicycleList.css';
import Header from "../components/Header";

function BicycleList() {
  const navigate = useNavigate();
  const [bicycles, setBicycles] = useState([]);

  useEffect(() => {
    getBicycles();
  }, []);

  async function getBicycles() {
    const { data } = await supabase.from("bicycles").select();
    setBicycles(data);
  }

  async function deleteBicycle(id) {
    await supabase.from("bicycles").delete().eq("id", id);
    getBicycles();
  }

  async function updateBicycle(id) {
    navigate(`/bicycle-update/${id}`);
  }

  return (
    <>
      <Header />
      <div className="bicycle-list-main-container">
        <div className="bicycle-list">
          <h1>Bicycle List</h1>
          {bicycles.map((b, index) =>
            <div className="bike-item" key={index}>
              {b.brand} {b.model}
              <div className="bike-icons">
                <FaRegTrashAlt onClick={() => deleteBicycle(b.id)} />
                <FaPencilAlt onClick={() => updateBicycle(b.id)} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BicycleList;
