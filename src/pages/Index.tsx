import appleLogo from "@/assets/apple-logo.png";

const CLAIM_URL = "https://dub.sh/applexx";

const steps = [
  "Click The Button Below",
  "Enter Your Basic Info",
  "Complete 4-6 Deals",
  "Claim Your Reward",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <main className="w-full max-w-md bg-card rounded-2xl overflow-hidden shadow-xl">
        {/* Blue header */}
        <div className="bg-primary py-10 flex items-center justify-center">
          <img
            src={appleLogo}
            alt="Apple logo"
            className="w-14 h-14 object-contain brightness-0 invert"
            width={56}
            height={56}
          />
        </div>

        <div className="px-6 pt-8 pb-8">
          <h1 className="text-center text-6xl font-extrabold tracking-tight text-card-foreground leading-none">
            $1,000
            <span className="text-2xl font-bold text-muted-foreground ml-1 align-baseline">off</span>
          </h1>
          <p className="text-center mt-3 text-sm font-semibold tracking-[0.15em] uppercase text-muted-foreground">
            Apple Student Discount
          </p>

          <ol className="mt-8 bg-muted rounded-xl p-5 space-y-5">
            {steps.map((step, i) => (
              <li key={step} className="flex items-center gap-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="font-bold text-card-foreground">{step}</span>
              </li>
            ))}
          </ol>

          <a
            href={CLAIM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block w-full rounded-full bg-primary py-4 text-center font-bold uppercase tracking-wide text-primary-foreground shadow-md hover:opacity-90 transition-opacity animate-pulse-scale"
          >
            Claim Your Gift Card →
          </a>
        </div>
      </main>
    </div>
  );
};

export default Index;
