function GameButton({ colour, lightUp, onClick, active }) {
  return (
    <div
      className={`gameButton pa ${colour} ${lightUp ? "on" : ""} ${
        active ? "active" : ""
      }`}
      onClick={() => onClick(colour)}
    ></div>
  );
}

export { GameButton };