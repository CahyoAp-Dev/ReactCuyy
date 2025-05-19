export default function MyButton({onSmash, text}) {
  return <button onClick={onSmash}>{text}</button>;
}
