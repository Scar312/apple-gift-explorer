import appleLogo from "@/assets/apple-logo.png";

const steps = [
  "Click The Button Below",
  "Enter Your Basic Info",
  "Complete 4-6 Deals",
  "Claim Your Reward",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <header className="bg-primary rounded-t-2xl px-6 py-8 flex items-center justify-center">
          <img
            src={appleLogo}
            alt="Apple"
            className="h-16 w-auto brightness-0 invert"
          />
        </header>

        {/* Main Content */}
        <main className="bg-card rounded-b-2xl px-6 py-10 text-center shadow-lg">
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <h1 className="text-6xl sm:text-7xl font-black text-foreground">
              $500
            </h1>
            <span className="text-2xl sm:text-3xl font-bold text-muted-foreground">off</span>
          </div>
          <p className="text-muted-foreground font-semibold tracking-widest text-sm mb-10">
            APPLE STUDENT DISCOUNT
          </p>

          {/* Steps */}
          <div className="bg-muted rounded-2xl px-6 py-8 mb-8">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-foreground text-base font-semibold text-left">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://giftclick.org/aff_c?offer_id=1701&aff_id=16139"
            className="block w-full bg-foreground hover:opacity-90 text-background font-bold text-base py-4 rounded-full transition-all duration-200 text-center tracking-wide"
          >
            CLAIM YOUR GIFT CARD →
          </a>
        </main>
      </div>
    </div>
  );
};

export default Index;
