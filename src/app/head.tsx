export default function Head() {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cell AI",
              url: "https://www.cellai.in",
              logo: "https://www.cellai.in/images/logo/cellAi.svg",
              contactPoint: {
                "@type": "ContactPoint",
                email: "tech@cellai.in",
                contactType: "Customer Support",
              },
            }),
          }}
        />
      </>
    );
  }
  