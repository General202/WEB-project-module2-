export default function SeatMap({ selectedSeats, onToggle, bookedSeats }) {
  const seats = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 60px)",
      gap: 10
    }}>
      {seats.map(seat => {
        const isSelected = selectedSeats.includes(seat);
        const isBooked = bookedSeats.includes(seat);

        let color = "green";
        if (isBooked) color = "red";
        else if (isSelected) color = "blue";

        return (
          <div
            key={seat}
            onClick={() => {
              if (!isBooked) onToggle(seat);
            }}
            style={{
              width: 60,
              height: 60,
              background: color,
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: isBooked ? "not-allowed" : "pointer"
            }}
          >
            {seat}
          </div>
        );
      })}
    </div>
  );
}