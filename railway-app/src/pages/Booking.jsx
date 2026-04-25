import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import WagonSelector from "../components/WagonSelector";
import SeatMap from "../components/SeatMap";
import BookingForm from "../components/BookingForm";
import { saveBooking, getBookedSeats } from "../services/BookingService";

export default function Booking() {
  const { trainId } = useParams();
  const navigate = useNavigate();

  const [wagon, setWagon] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const bookedSeats = getBookedSeats(trainId, wagon);

  const toggleSeat = (seat) => {
    setSelectedSeats(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  const handleBooking = (form) => {
    if (selectedSeats.length === 0) {
      alert("Обери хоча б одне місце");
      return;
    }

    saveBooking({
      trainId: Number(trainId),
      wagon,
      seats: selectedSeats,
      ...form
    });

    navigate("/", { state: { success: true } });
  };

  return (
    <div>
      <h1>Бронювання</h1>

      <WagonSelector
        selected={wagon}
        onSelect={(w) => {
          setWagon(w);
          setSelectedSeats([]); 
        }}
      />

      <SeatMap
        selectedSeats={selectedSeats}
        onToggle={toggleSeat}
        bookedSeats={bookedSeats}
      />

      <BookingForm onSubmit={handleBooking} />
    </div>
  );
}