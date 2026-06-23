
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

/* Email to Bakita */

export const sendContactEmail = async (
  contact
) => {

  return await resend.emails.send({
    from: "onboarding@resend.dev",

    to: [
      "info.bakitalydiaelizabeth@gmail.com",
    ],

    replyTo: contact.email,

    subject: `New Contact Form Message: ${contact.subject}`,

    html: `
      <h2>New Contact Form Submission</h2>

      <p>
        <strong>Name:</strong>
        ${contact.full_name}
      </p>

      <p>
        <strong>Email:</strong>
        ${contact.email}
      </p>

      <p>
        <strong>Subject:</strong>
        ${contact.subject}
      </p>

      <p>
        <strong>Message:</strong>
        ${contact.message}
      </p>

      <hr>

      <p>
        Simply click <strong>Reply</strong>
        in your email client to respond
        directly to the sender.
      </p>
    `,
  });
};

/* Confirmation Email To Visitor */

export const sendConfirmationEmail =
  async (contact) => {

    return await resend.emails.send({
      from: "onboarding@resend.dev",

      to: [
        contact.email,
      ],

      subject:
        "Thank You for Contacting Bakita Lydia Elizabeth",

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: auto;
        ">

          <h2>
            Thank You For Reaching Out
          </h2>

          <p>
            Dear
            ${contact.full_name},
          </p>

          <p>
            Thank you for contacting
            Bakita Lydia Elizabeth.
          </p>

          <p>
            Your message has been
            received successfully
            and will be reviewed
            as soon as possible.
          </p>

          <p>
            Subject:
            <strong>
              ${contact.subject}
            </strong>
          </p>

          <p>
            We appreciate your
            interest and look
            forward to connecting
            with you.
          </p>

          <br>

          <p>
            Kind Regards,
          </p>

          <p>
            <strong>
              Bakita Lydia Elizabeth
            </strong>
            <br>
            Law Student |
            Researcher |
            Advocate
          </p>

        </div>
      `,
    });
  };

export const sendNewsletterNotification =
  async (email) => {

    return await resend.emails.send({
      from: "onboarding@resend.dev",

      to: [
        "info.bakitalydiaelizabeth@gmail.com",
      ],

      subject:
        "New Newsletter Subscriber",

      html: `
        <h2>
          New Newsletter Subscription
        </h2>

        <p>
          A new visitor has subscribed.
        </p>

        <p>
          <strong>Email:</strong>
          ${email}
        </p>
      `,
    });
};

export const sendWelcomeNewsletterEmail =
  async (email) => {

    return await resend.emails.send({
      from: "onboarding@resend.dev",

      to: [email],

      subject:
        "Welcome to Bakita Lydia's Newsletter",

      html: `
        <h2>
          Welcome!
        </h2>

        <p>
          Thank you for subscribing to
          Bakita Lydia Elizabeth's
          newsletter.
        </p>

        <p>
          You will receive updates on:
        </p>

        <ul>
          <li>Legal Research</li>
          <li>Publications</li>
          <li>Community Initiatives</li>
          <li>Academic Insights</li>
        </ul>

        <p>
          Thank you for joining.
        </p>

        <p>
          <strong>
            Bakita Lydia Elizabeth
          </strong>
        </p>
      `,
    });
};

export const sendPublicationEmail =
  async (
    subscriberEmail,
    publication
  ) => {

    return await resend.emails.send({
      from: "onboarding@resend.dev",

      to: [subscriberEmail],

      subject: `New Publication: ${publication.title}`,

      html: `
        <h2>
          New Publication Available
        </h2>

        <h3>
          ${publication.title}
        </h3>

        <p>
          ${publication.description}
        </p>

        <p>
          A new legal publication has
          been published by
          Bakita Lydia Elizabeth.
        </p>

        <p>
          Visit the Publications page
          to read the full article.
        </p>

        <br>

        <p>
          Regards,
        </p>

        <p>
          <strong>
            Bakita Lydia Elizabeth
          </strong>
        </p>
      `,
    });
};




