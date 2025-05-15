export default function Component() {
  return (
    <div>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </div>
  );
}

// U can create multiple function in one file
function HeaderHelloWorld() {
  return (
    <h1>Hello World</h1>
  );
}

function ParagraphHelloWorld() {
  return (
    <p>Learn ReactJS Component</p>
  );
}
