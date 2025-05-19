export default function SearchForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("You Search Me");
      }}
    >
      <input type="text" />
      <button type="submit">Search</button>
    </form>
  );
}
