import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col md:px-12 px-4">
      <div className="flex mx-auto md:p-2 p-1 md:gap-1 gap-0.5 flex-nowrap md:text-base text-[0.5rem]">
        <button onClick={() => navigate(-1)} className="font-agrandir">
          {"< Back /"}
        </button>
        <span className="font-agrandir_bold">About</span>
      </div>
      <div className="shadow-lg shadow-dark_ash/50 flex flex-col md:text-base text-[0.75rem] rounded-md font-agrandir_bold gap-2 md:gap-8 mb-4 md:mb-10 px-4 md:p-8">
        <p>
          Welcome to UNMSA MARKETPLACE, your ultimate destination for excellent
          e-commerce services. At UNMSA MARKETPLACE, we are passionate about
          empowering and bringing entrepreneurial minds together and enriching
          their their lives through and beyond e-commerce.
        </p>

        <p>
          <h3 className="text-[0.875rem] md:text-[1.2rem] font-agrandir_grandheavy">
            Our Journey:
          </h3>
          <p>
            UNMSA MARKETPLACE was founded in 2024 by the UNMSA PR Team led by
            Rt. Hon. Elujekwute Michael Chinedu (Chemo-Mike), the UNMSA Public
            Relations Officer.
          </p>
          <p>
            It all started with a vision to integrate and maximize the potential
            of UNMSAITES. Since then, we have been on a journey punctuated by
            challenges and setbacks but eventually crowned by massive success.
          </p>
        </p>

        <p>
          <h3 className="text-[0.875rem] md:text-[1.2rem] font-agrandir_grandheavy">
            What We Offer:
          </h3>
          <p>
            At UNMSA MARKETPLACE, we strive to make available and obtainable all
            products and services needed in the student environment. Whether
            you're looking for electronics, groceries, wares, cosmetics,
            stationeries, we have you covered.
          </p>
        </p>

        <p>
          <h3 className="text-[0.875rem] md:text-[1.2rem] font-agrandir_grandheavy">
            Our Team:
          </h3>
          <p>
            Behind UNMSA MARKETPLACE is a dedicated team of 5 team members who
            are committed to seeing to the developing and maintenance of the
            platform. From designers and developers to content creators and
            customer support, each member of our team plays a crucial role in
            bringing UNMSA MARKETPLACE to life.
          </p>
        </p>

        <p>
          <h3 className="text-[0.875rem] md:text-[1.2rem] font-agrandir_grandheavy">
            Our Values:
          </h3>
          <p>
            At UNMSA MARKETPLACE, we believe in integrity, transparency,
            creativity, and valuable support as they shape everything we do.
          </p>
        </p>

        <p>
          <h3 className="text-[0.875rem] md:text-[1.2rem] font-agrandir_grandheavy">
            Our Commitment:
          </h3>
          <p>
            We are committed to providing high-quality products and services
            through closely regulated marketing. Our goal is to bring to reality
            top-notch e-commerce system only few have been able to imagine.
          </p>
        </p>

        <p>
          <h3 className="text-[0.875rem] md:text-[1.2rem] font-agrandir_grandheavy">
            Join Us:
          </h3>
          <p>
            We invite you to create a profile with us (sellers) and/or take a
            tour of the site to see the different products available for
            purchase (buyers).
          </p>
          <p>
            Also follow us on our social media platforms in the Contact section.
          </p>
          <p>
            Together, we can be part of a revolutionary marketplace for
            UNMSAITES and other students alike.
          </p>
          <p>
            Thank you for visiting UNMSA MARKETPLACE. We're thrilled to have you
            here!
          </p>
          <p>
            Don't hesitate to connect with us if you have any questions or
            feedback
          </p>
        </p>
      </div>
    </section>
  );
}
