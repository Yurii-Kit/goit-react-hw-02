import css from './Options.module.css';

function Options({ names, onFeedback }) {
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
    </div>
  );
}

export default Options;
