import { Form } from "react-router-dom";

export default function CreateMailPage() {
  return (
    <section>
      <h1>Create Email Campaign</h1>
      <Form method="post" className="flex flex-col gap-4">
        <input
          name="sender"
          className="px-4 py-2 border border-black rounded-3xl"
          placeholder="From"
        />
        <input
          name="receivers"
          className="px-4 py-2 border border-black rounded-3xl"
          placeholder="To"
        />
        <textarea
          name="content"
          className="px-4 py-2 border border-black rounded-3xl h-24"
          placeholder="What would you like to say..."
        />
        <button className="px-4 py-2 border rounded-2xl border-black">
          Send Now
        </button>
      </Form>
    </section>
  );
}
