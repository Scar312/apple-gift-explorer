import { CheckCircle } from "lucide-react";
import gamingBackdrop from "@/assets/gaming-backdrop.jpg";
import carry1stLogo from "@/assets/carry1st-logo.png";

const APPLY_URL = "https://chat.whatsapp.com/EQNHbrdrsDs8fPc9kmH4b0";

const steps = [
  "Click GET STARTED to proceed",
  "Join in on our official page",
  "Receive upto 95% off your purchases",
];

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Fixed gaming backdrop */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${gamingBackdrop})` }}
        aria-hidden="true"
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/95 to-background" aria-hidden="true" />

      {/* Header */}
      <header className="w-full bg-white/90 backdrop-blur-md border-b border-border shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center">
          <img src={carry1stLogo} alt="Carry1st" className="h-10 sm:h-12 w-auto" width={120} height={48} />
        </div>
      </header>

      {/* Hero spacer with backdrop visible */}
      <div className="relative h-48 sm:h-64 md:h-72 flex items-end justify-center pb-4">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-background" />
        <h1 className="relative text-2xl sm:text-3xl md:text-4xl font-black text-white drop-shadow-lg uppercase tracking-wide text-center px-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Get Exclusive Discounts
        </h1>
      </div>

      {/* Content card */}
      <div className="max-w-lg mx-auto px-4 sm:px-5 -mt-4 pb-12 text-center relative z-10">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-6 sm:p-8">
          <p className="text-muted-foreground text-sm sm:text-base">
            Unlock unbeatable savings on <span className="font-semibold text-primary">Free Fire</span>, <span className="font-semibold text-primary">Call of Duty Mobile</span>, <span className="font-semibold text-primary">PUBG Mobile</span> & more.
          </p>

          <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
            <CheckCircle className="text-primary w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span className="font-bold text-foreground text-sm sm:text-lg">820+ Gamers Saved Big This Month</span>
          </div>

          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-6" />

          <h2 className="uppercase tracking-widest font-extrabold text-foreground mt-8 text-sm">How To Qualify</h2>
          <p className="text-muted-foreground text-sm mt-1">Takes less than 2 minutes</p>

          <div className="flex flex-col gap-3 sm:gap-4 mt-5 sm:mt-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-3 sm:gap-4 bg-muted rounded-xl px-4 sm:px-5 py-4 sm:py-5 text-left border border-border">
                <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-base sm:text-lg">
                  {i + 1}
                </span>
                <span className="font-semibold text-foreground text-sm sm:text-base">{step}</span>
              </div>
            ))}
          </div>

          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mt-8 py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-xl uppercase tracking-wide text-center shadow-lg hover:opacity-90 transition-opacity animate-pulse-scale"
          >
            Get Started
          </a>

          <p className="text-xs text-muted-foreground mt-4">Available in US, UK, AU, CA & worldwide</p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-1">
          <img src={carry1stLogo} alt="Carry1st" className="h-8 w-auto" width={80} height={32} loading="lazy" />
          <p className="text-muted-foreground text-sm">Powered by Carry1st</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
