import { useNavigate } from "react-router-dom";
import { getBookedSeatsCount } from "../services/BookingService";

export default function TrainCard({ train }) {
  const navigate = useNavigate();

  const totalSeats = 60; 
  const booked = getBookedSeatsCount(train.id); 
  const free = totalSeats - booked; 

  return (
    <div className="card">
      <h3>{train.number}</h3>
      <p>{train.from} → {train.to}</p>
      <p>Відправлення: {new Date(train.departure).toLocaleString()}</p>
      <p>Тривалість: {train.duration}</p>
      <p>
        Вільні місця: <strong>{free}</strong> / {totalSeats}
      </p>
      <button onClick={() => navigate(`/booking/${train.id}`)}>
        Забронювати
      </button>
    </div>
  );
}