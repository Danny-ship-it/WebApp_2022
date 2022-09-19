export default function GameForm() {
    return (
      <form className="game-form">
        <label htmlFor="player">
          <span>Spiller</span>
          <input id="player" type="text" />
        </label>
        <label htmlFor="rows">
          <span>Antall rader</span>
          <input id="rows" type="number" />
        </label>
        <button>Start spillet</button>
      </form>
    );
  }