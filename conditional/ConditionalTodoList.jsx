import Todo from "./Todo.jsx";

export default function ConditionalTodoList() {
    return (
        <ul>
            <Todo text="Belajar React" isCompleted={true} isDeleted={true} />
            <Todo text="Belajar React 2025" isCompleted={true} />
            <Todo text="Belajar React Native" isCompleted={false} />
        </ul>
    );
}