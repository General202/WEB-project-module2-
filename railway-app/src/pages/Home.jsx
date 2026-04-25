import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import TrainList from "../components/TrainList";
import { toast } from "react-toastify";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.success) {
      toast.success("Квитки успішно заброньовані!");
    }
  }, [location]);

  return (
    <div>
      <h1>Список потягів</h1>
      <TrainList />
    </div>
  );
}