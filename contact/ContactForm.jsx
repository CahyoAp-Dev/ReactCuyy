import { useImmer } from "use-immer";

const initialData = {
  name: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useImmer(initialData);

  function handleNameChange(e) {
    setFormData((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleMessageChange(e) {
    setFormData((draft) => {
      draft.message = e.target.value;
    });
  }

  return (
    <div>
      <form>
        <h1>Contact Form</h1>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          placeholder="Message"
          value={formData.message}
          onChange={handleMessageChange}
        />
        <br />
        <button type="submit">Send</button>
      </form>
      <h1>Contact Detail</h1>
      <p>Name: {formData.name}</p>
      <p>Message: {formData.message}</p>
    </div>
  );
}
