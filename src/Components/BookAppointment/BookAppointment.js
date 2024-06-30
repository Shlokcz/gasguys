import React from "react";
import Styles from "./BookAppointment.module.css";

const BookAppointment = () => {
  return (
    <section className={Styles.bookAppointment}>
      <div className={Styles.bookItems}>
        <div className={Styles.bookItem1}>
          <h3>DESIGN YOUR DREAM</h3>
          <h2>Outdoor Living Space Today</h2>
          <span>
            Our new in-house design and install outdoor kitchen wing will allow
            you more time to focus on the job while our team handles the start
            to finish for your outdoor kitchen project. Plus, if you're a
            registered designer or business and have a business account, we
            provide a Designer Discount to you. Book a complimentary
            consultation today to start your project.
          </span>
          <button>Book Appointment</button>
        </div>
        <div className={Styles.bookItem2}>
          <img src="/images/outdoorliving.png" alt="design" />
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
