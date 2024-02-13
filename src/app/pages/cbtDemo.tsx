import { Outlet } from "react-router-dom";

export default function CBTDemoPage() {
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex w-full px-12 py-4 text-white bg-green">
          <span className="font-agrandir_bold text-[1.5rem]">
            Computer Based Test{" "}
            <span className="font-agrandir_thinItalic">(Demo)</span>
          </span>
        </div>
        <div className="flex flex-col bg-lighter_green w-fit px-12 py-6 font-agrandir_bold rounded-xl text-dark_green text-[0.875rem] mx-20">
          <p>
            The CBT Features are still in development. Over 10,000 questions
            spanning all medical courses for the MBBS as well as USMLE and PLAB
            exams are being uploaded to the official website.
          </p>
          <p>
            CBT Demo is limited to only 10 questions per subject. To answer more
            questions , assess question banks, get insights to answers, log into
            the official website here - PARROT
          </p>
        </div>
      </div>
      <Outlet />
    </section>
  );
}
