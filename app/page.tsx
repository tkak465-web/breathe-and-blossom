export default function Home() {
  return (
    <main
      style={{
        padding: "60px",
        textAlign: "center",
        background: "#faf7f2",
        minHeight: "100vh",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <img
          src="/images/logo/lotus-logo.jpeg"
          alt="Breathe & Blossom Logo"
          style={{
            width: "110px",
            height: "110px",
            objectFit: "contain",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>

      <h1
        style={{
          fontSize: "60px",
          color: "#7a8f7a",
        }}
      >
        Breathe & Blossom
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#8a7b6b",
          marginTop: "20px",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: "1.8",
        }}
      >
        Experience wellness, relaxation and self-care in the
        comfort of your home, workplace or event. Breathe &
        Blossom Mobile Spa brings premium wellness experiences
        directly to you.
      </p>

      <p
        style={{
          fontSize: "20px",
          color: "#8a7b6b",
          marginTop: "20px",
        }}
      >
        Luxury Mobile Spa Experience Delivered To Your Door
      </p>

      <a
        href="https://wa.me/27821234567"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          style={{
            marginTop: "40px",
            padding: "15px 30px",
            background: "#7a8f7a",
            color: "white",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
          }}
        >
          Book Appointment
        </button>
      </a>

      <hr style={{ margin: "80px 0", opacity: 0.2 }} />

      <h2
        style={{
          color: "#7a8f7a",
          fontSize: "36px",
          marginBottom: "40px",
        }}
      >
        Our Services
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <ServiceCard
          image="/images/Gallery/quick-reset.jpeg"
          title="Quick Reset"
          subtitle="30 Minutes"
        />

        <ServiceCard
          image="/images/Gallery/glow-facial.jpeg"
          title="Glow Facial"
          subtitle="45 Minutes"
        />

        <ServiceCard
          image="/images/Gallery/full-ritual.jpeg"
          title="Full Ritual"
          subtitle="60 Minutes"
        />
      </div>

      <hr style={{ margin: "80px 0", opacity: 0.2 }} />

      <h2
        style={{
          color: "#7a8f7a",
          fontSize: "36px",
          marginBottom: "40px",
        }}
      >
        Corporate Wellness
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <ServiceCard
          image="/images/Gallery/corporate/lunch-and-glow.jpeg"
          title="Lunch & Glow"
          subtitle="Corporate Wellness Package"
        />

        <ServiceCard
          image="/images/Gallery/corporate/stress-reset-day.jpeg"
          title="Stress Reset Day"
          subtitle="Corporate Wellness Package"
        />

        <ServiceCard
          image="/images/Gallery/corporate/team-glow.jpeg"
          title="Team Glow"
          subtitle="Corporate Wellness Package"
        />
      </div>

      <hr style={{ margin: "80px 0", opacity: 0.2 }} />

      <h2
        style={{
          color: "#7a8f7a",
          fontSize: "36px",
          marginBottom: "30px",
        }}
      >
        About Us
      </h2>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          color: "#8a7b6b",
          fontSize: "18px",
          lineHeight: "1.9",
        }}
      >
        Breathe & Blossom Mobile Spa was created to make
        relaxation, wellness and self-care more accessible.
        Whether at home, at work or during a special event,
        our goal is to provide a calming and rejuvenating
        experience that helps you feel refreshed, balanced
        and renewed.
      </p>

      <hr style={{ margin: "80px 0", opacity: 0.2 }} />

      <h2
        style={{
          color: "#7a8f7a",
          fontSize: "36px",
          marginBottom: "40px",
        }}
      >
        Contact
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        <ContactIcon
          image="/images/Icons/whatsapp.svg"
          label="WhatsApp"
          link="https://wa.me/27697098424"
        />

        <ContactIcon
          image="/images/Icons/facebook.svg"
          label="Facebook"
          link="https://facebook.com/example"
        />

        <ContactIcon
          image="/images/Icons/instagram.svg"
          label="Instagram"
          link="https://instagram.com/example"
        />
<ContactIcon
  image="/images/Icons/tiktok.svg"
  label="TikTok"
  link="https://tiktok.com/@youraccount"
/>
        <ContactIcon
          image="/images/Icons/gmail.svg"
          label="Email"
          link="mailto:hello@example.com"
        />
      </div>
    </main>
  );
}

function ServiceCard({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div
  style={{
    background: "white",
    borderRadius: "20px",
    overflow: "hidden",
    width: "300px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
  }}
>
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "20px" }}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

function ContactIcon({
  image,
  label,
  link,
}: {
  image: string;
  label: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt={label}
          style={{
            width: "40px",
            height: "40px",
          }}
        />

        <p
          style={{
            marginTop: "10px",
          }}
        >
          {label}
        </p>
      </div>
    </a>
  );
}