import Todo from "../conditional/Todo.jsx";

export default function CollectionTodoList() {
  const data = [
    {
      text: "Learn React",
      isCompleted: true,
      isDeleted: true,
    },
    {
      text: "Learn React Native",
      isCompleted: false,
    },
    {
      text: "Learn JavaScript",
      isCompleted: true,
    },
    {
      text: "React 2025",
      isCompleted: true,
    },
  ];

  return (
    <ul>
      {data.map((todo) => (
        <Todo {...todo} />
      ))}
    </ul>
  );
}
