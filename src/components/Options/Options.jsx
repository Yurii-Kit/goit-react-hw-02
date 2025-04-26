import css from './Options.module.css';

function Options({ names, onFeedback, clicks, reset }) {
  return (
    <div className={css.options}>
      {names.map((name, index) => (
        <button
          onClick={() => onFeedback(name)}
          className={css.optionsBtn}
          key={index}
        >
          {name}
        </button>
      ))}
      {clicks ? (
        <button
          className={css.optionsBtn}
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
}

export default Options;
