export default function Button(props) {
  return (
    <div>
      <button
        style={{
          backgroundColor: props.color,
          margin: "10px",
          width: props.size,
        }}
        className="button"
        onClick={props.click}
      >
        {props.text}
      </button>
    </div>
  );
}
