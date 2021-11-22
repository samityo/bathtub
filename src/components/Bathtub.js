function Bathtub({ cells }) {
  return (
    <div className="border border-primary d-flex flex-column-reverse">
      {cells.map((cell, index) => (
        <div className={"cell " + (cell ? "bg-primary" : "")} key={index}></div>
      ))}
    </div>
  );
}

export default Bathtub;
