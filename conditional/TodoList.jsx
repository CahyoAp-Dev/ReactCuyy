import Todo from "./Todo.jsx";

export default function TodoList() {
    return (
        <ul>
            <Todo text="Belajar React" isCompleted={true} />
            <Todo text="Belajar React Native" isCompleted={false} />
        </ul>
    );
}