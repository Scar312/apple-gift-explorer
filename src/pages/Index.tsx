import bestBuyLogo from "@/assets/best-buy-logo.svg";

const CLAIM_URL = "https://giftclick.org/aff_c?offer_id=4332&aff_id=16139";

const steps = [
  "Tap The Button Below",
  "Enter Your Basic Information",
  "Complete 4-6 Deals",
  "Claim Your Reward",
];

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 sm:p-8">
      <main className="w-full max-w-md overflow-hidden rounded-lg border-2 border-foreground bg-card shadow-xl">
        <header className="flex min-h-48 items-center justify-center bg-primary px-10 py-9">
          <img
            src={bestBuyLogo}
            alt="Best Buy"
            className="h-auto w-full max-w-72 rounded bg-card px-6 py-4 shadow-sm"
            width={288}
            height={194}
          />
        </header>

        <div className="px-6 pb-8 pt-9 sm:px-8">
          <h1 className="text-center text-6xl font-black leading-none text-card-foreground sm:text-7xl">
            $1,000
            <span className="ml-2 align-baseline text-xl font-bold text-muted-foreground sm:text-2xl">off</span>
          </h1>
          <p className="mt-4 text-center text-sm font-extrabold uppercase text-muted-foreground">
            Best Buy Student Discount
          </p>

          <ol className="mt-8 space-y-5 border-y-2 border-border py-6">
            {steps.map((step, i) => (
              <li key={step} className="flex items-center gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-primary-foreground ring-2 ring-foreground">
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
            className="animate-pulse-scale mt-8 block w-full rounded bg-primary px-5 py-4 text-center font-black uppercase text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Claim Your Best Buy Reward →
          </a>
        </div>
      </main>
    </div>
  );
};

export default Index;
