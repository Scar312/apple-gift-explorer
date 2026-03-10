import { MapPin } from "lucide-react";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/900.css";
import appleLogo from "@/assets/apple-logo.png";

const steps = [
  "Answer a Few Simple Questions",
  "Drop In Your iCloud or Apple Email",
  "Complete 3-5 Recommended Tasks",
  "Sit Back — We'll Get Back to You Within 24 Hours!",
];

const locations = ["USA", "UK", "CA", "AU"];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary px-6 sm:px-8 lg:px-12 pt-8 sm:pt-10 pb-16 sm:pb-20 flex items-center justify-center relative">
        <img
          src={appleLogo}
          alt="Apple"
          className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto absolute -bottom-12 sm:-bottom-16 md:-bottom-20 lg:-bottom-24 z-10 drop-shadow-2xl"
          style={{ filter: "invert(1)" }}
        />
      </header>

      {/* Main Content */}
      <main className="px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 md:pt-20 pb-12 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
        {/* Hero Section */}
        <div className="mb-10 sm:mb-14 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 sm:mb-8 leading-tight">
            Save Up To 90% on Apple!
          </h1>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {locations.map((location) => (
              <div
                key={location}
                className="flex items-center gap-2 bg-accent text-accent-foreground px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{location}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How to Qualify Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-8 sm:mb-10 text-center">
            HOW TO QUALIFY
          </h2>

          <div className="space-y-4 sm:space-y-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl px-5 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 shadow-sm"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg sm:text-xl">
                    {index + 1}
                  </div>
                  <p className="text-foreground text-base sm:text-lg md:text-xl font-semibold leading-snug">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-0 sm:px-4 md:px-8 pb-8 sm:pb-12">
          <a
            href="https://giftclick.org/aff_c?offer_id=1701&aff_id=16139"
            className="block w-full bg-primary hover:opacity-90 text-primary-foreground font-bold text-lg sm:text-xl md:text-2xl py-5 sm:py-6 rounded-full transition-all duration-200 text-center shadow-xl animate-pulse-scale"
          >
            APPLY NOW
          </a>
        </div>
      </main>
    </div>
  );
};

export default Index;
