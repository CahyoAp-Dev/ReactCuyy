export default function Props() {
  const props = {
    text: "Hello World",
  };
  return (
    <div>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </div>
  );
}

function HeaderHelloWorld({ text }) {
  return (
    <h1
      style={{
        color: "red",
      }}
    >
      {text.toUpperCase()}
    </h1>
  );
}

function ParagraphHelloWorld() {
  const text = "Learn ReactJS";
  return <p>{text.toLowerCase()}</p>;
}
