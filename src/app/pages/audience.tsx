import { Form } from "react-router-dom";

export default function AudiencePage() {
  return (
    <section className="flex flex-col gap-8 p-8">
      <h1>Audience Page</h1>
      {/* there is not sopposed to be more than one form showing at a time but we will handle it when we get designs  */}
      <div className="flex flex-col gap-4">
        {/* Could be as a part of a filter system i.e also by tags birthdays and the likes */}
        <label>Choose Campaign List</label>
        <select className="border rounded-full px-4 py-2">
          <option>Default campaign</option>
        </select>
      </div>

      <Form className="flex flex-col gap-4">
        <input name="list_name" className="border rounded-full px-4 py-2" />
        <button className="border rounded-full px-4 py-2">
          Create Email List
        </button>
      </Form>

      <Form className="flex flex-col gap-4">
        <input name="list_name" className="border rounded-full px-4 py-2" />
        <input name="email" className="border rounded-full px-4 py-2" />
        <input name="first_name" className="border rounded-full px-4 py-2" />
        <input name="last_name" className="border rounded-full px-4 py-2" />
        <button className="border rounded-full px-4 py-2">
          Manually Add Contact to list
        </button>
      </Form>

      <div>
        <h1>Current list of contacts</h1>
        {/* Display contact list here and add editing and deleteing capabilities */}
      </div>
    </section>
  );
}
