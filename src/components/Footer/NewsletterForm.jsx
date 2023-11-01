import React from "react";

const NewsletterForm = () => {
  return (
    <section class="newsletter-form " id="newsletter_form_Div">
      <form id="newsletterForm" className="m">
        <div className="inner input-group d-flex  flex-nowrap">
          <div className="input-layer  input-group-sm">
            <i class="fas fa-mobile-alt mobile-icon"></i>
            <input
              class="first-input"
              type="text"
              id="newsletter_Mobile"
              placeholder="شماره موبایل شما "
              name="Mobile"
            />
          </div>
          <div className="input-layer position-relative">
            <i class="fas fa-envelope  mail-icon border-start"></i>{" "}
            <input
              class="text-start"
              type="email"
              id="newsletter_Email"
              placeholder="پست الکترونیکی شما "
              name="Email"
            />
          </div>
          <div className="inner-button ">
            <button
              class="btn btn-success btn-group-vertical rounded-start-0 rounded-end-1"
              type="button"
              id="button-addon1"
            >
              عضویت در خبرنامه
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default NewsletterForm;
