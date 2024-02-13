import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col px-4 md:px-12">
      <div className="flex mx-auto md:p-2 p-1 md:gap-1 gap-0.5 flex-nowrap md:text-base text-[0.5rem]">
        <button onClick={() => navigate(-1)} className="font-agrandir">
          {"< Back / "}
        </button>
        <span className="font-agrandir_bold">Contact</span>
      </div>
      <div className="shadow-lg shadow-dark_ash/50 flex flex-col gap-6 md:text-base text-[0.75rem] rounded-md font-agrandir_bold mb-6 md:mb-10 p-4 md:p-8">
        <div className="flex flex-col gap-2 md:gap-8">
          <p>
            Thank you for your interest in connecting with us! Whether you have
            a question, feedback, or simply want to say hello, we'd love to hear
            from you. Please feel free to reach out using the contact
            information provided below or by filling out the convenient form.
          </p>
          <p>
            <p>Contact Information:</p>
            <p className="flex gap-1">
              <span>Address:</span>
              <span className="font-agrandir">
                University of Nigeria Teaching Hospital, Ituku-Ozalla Campus,
                Enugu State, Nigeria
              </span>
            </p>
            <p className="flex gap-1">
              <span>Phone: Main:</span>
              <span className="font-agrandir">+2347039394911</span>
            </p>
            <p className="flex gap-1">
              <span>Email:</span>
              <span className="font-agrandir">
                unmsaparrot@gmail.com || elujekwutemichael1@gmail.com
              </span>
            </p>
            <p>
              <p className="flex gap-1">
                <span>Social Media:</span>
                <span className="font-agrandir">
                  Connect with us on social media for the latest updates, news,
                  and exclusive content:
                </span>
              </p>
              <ul className="font-agrandir list-disc px-4 md:px-6">
                <li>Facebook:</li>
                <li>PaRrOt TV - +2349136933017</li>
                <li>YouTube</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </p>

            <p className="flex gap-1">
              <span>Operating Hours:</span>
              <span className="font-agrandir">
                Monday - Friday: 9:00 AM - 5:00 PM (Local Time) Saturday -
                Sunday: Closed
              </span>
            </p>
          </p>
        </div>

        <form className="flex flex-col gap-2 md:gap-4">
          <label>Contact Form</label>
          <div className="flex border border-2 w-fit rounded  p-[0.1rem]">
            <input
              placeholder="Make complaints.."
              className="outline-none border-none p-2 text-[0.5rem] md:text-[0.875rem] md:min-w-[20rem] min-w-[10rem]"
            />
            <button className="flex px-2 md:px-4 py-[0.3rem] font-agrandir text-white bg-dark_ash rounded">
              <span className="my-auto">Submit</span>
            </button>
          </div>
        </form>

        <p>Thank you for choosing UNMSA MARKERPLACE!</p>
      </div>
    </section>
  );
}
