export default function SayHelloForm() {
  function handleClick(e) {
    e.preventDefault();
    const name = document.getElementById("input_name").value;
    document.getElementById("text_hello").textContent = `Hello ${name}`;
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input id="input_name" />
        <button type="submit">Say Hello</button>
      </form>
      <h1 id="text_hello">Hello World</h1>
    </div>
  );
}
