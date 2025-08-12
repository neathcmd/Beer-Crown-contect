import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Menu,
  X,
  Beer,
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  Trophy,
  Users,
  Music,
  Mic,
  Volume2,
} from "lucide-react";
import heroImage from "../assets/beer-festival-hero.jpg";

const beers = [
  { id: 1, name: "Hazy IPA", brewery: "Various", type: "IPA" },
  { id: 2, name: "Hazy IPA", brewery: "Various", type: "IPA" },
  { id: 3, name: "Speciality IPA", brewery: "Various", type: "IPA" },
  { id: 4, name: "Weizenbock", brewery: "Various", type: "Wheat Beer" },
  { id: 5, name: "New England IPA", brewery: "Various", type: "IPA" },
  { id: 6, name: "American IPA", brewery: "Various", type: "IPA" },
  { id: 7, name: "Blonde Ale", brewery: "Various", type: "Ale" },
  { id: 8, name: "American Pale Ale", brewery: "Various", type: "Pale Ale" },
  { id: 9, name: "Brut IPA", brewery: "Various", type: "IPA" },
  { id: 10, name: "American Stout", brewery: "Various", type: "Stout" },
  { id: 11, name: "Specialty IPA", brewery: "Various", type: "IPA" },
];

const breweries = [
  {
    name: "Sak Pub",
    description:
      "SAK PUB Craft Beer & Bites opened its taproom and kitchen in October 2021, serving handcrafted small batch craft beer from taps in a welcoming atmosphere.",
  },
  {
    name: "Project Brews",
    description:
      "A small microbrewery based in Kampot since 2020 making modern hoppy beers.",
  },
  {
    name: "Black Bamboo",
    description:
      "The first island craft brewery in Cambodia. Located on Silk island near the Capital City, offering great craft beers with a river view.",
  },
  {
    name: "Botanico Brewing Company",
    description:
      "Located in the heart of Phnom Penh, one of the oldest craft breweries in the country, creating diverse beers with locally grown ingredients. Real Cambodian Craft Beer!",
  },
  {
    name: "Riel Brewing and Distilling",
    description:
      "A pioneering craft brewery in Phnom Penh, celebrated for establishing the local craft beer scene with creative, high-quality beers using unique Cambodian ingredients.",
  },
  {
    name: "Fuzzy Logic",
    description:
      "Established in 2014, one of the pioneers introducing craft beer to Cambodia and South East Asia. Known for Thunderslap IPA and John Lemon Hard Lemonade.",
  },
  {
    name: "Chug Lab",
    description:
      "A nano brewery in Phnom Penh focused on high quality modern craft beers, with a heavy metal themed Tap House 'Chug Lab' in Bkk3.",
  },
  {
    name: "Brew Khnear",
    description:
      "Focusing on work/life balance with solid and creative beers made from finest ingredients using traditional brewing techniques. 'Brew Together' philosophy.",
  },
  {
    name: "Funghi Art",
    description:
      "Creating new value for Cambodian rice through fermentation technology. Produces craft sake, sweet potato and rice Shochu and Gin, all made from Cambodian Rice.",
  },
  {
    name: "Jaya-Vara Meadery",
    description:
      "Crafting unique meads and beers in Cambodia for 3 years. Started as passion for traditional honey wine, now experimenting with bold flavors and local ingredients.",
  },
  {
    name: "Krama Craft Brewery",
    description:
      "A cozy craft brewery in Siem Reap, founded by French-Cambodian partners. Offers creative, locally inspired beers like Triple Khmer and Black IPA.",
  },
];

const scheduleItems = [
  {
    time: "2:00 PM",
    title: "Event Begins",
    description: "Gates open, registration starts",
    icon: Clock,
    type: "event",
  },
  {
    time: "3:15 PM",
    title: "MC Introduction",
    description: "Official welcome and event overview",
    icon: Mic,
    type: "announcement",
  },
  {
    time: "3:30 PM - 6:30 PM",
    title: "DJ Wha-Wah",
    description: "Music and beer tasting session",
    icon: Volume2,
    type: "entertainment",
  },
  {
    time: "6:40 PM",
    title: "Blind Tasting Live Session",
    description: "Professional judges evaluate beers",
    icon: Trophy,
    type: "judging",
  },
  {
    time: "7:30 PM",
    title: "Award Ceremony Begins",
    description: "Announcement of winners",
    icon: Trophy,
    type: "ceremony",
  },
  {
    time: "8:30 PM - 11:00 PM",
    title: "The Broken Cymbal",
    description: "Live music performance",
    icon: Music,
    type: "entertainment",
  },
  {
    time: "11:30 PM",
    title: "Event Ends",
    description: "Thank you and safe travels",
    icon: Clock,
    type: "event",
  },
];

const awards = [
  {
    title: "Main Award",
    subtitle: "Gold, Silver & Bronze",
    description:
      "Judged by six international experts according to BJCP score sheet in blind tasting mode. Some judges are BJCP certified.",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    title: "People's Choice Award",
    subtitle: "Voted by You",
    description:
      "This award is judged by all our guests. Use the Google form on this website and submit one judging per beer.",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "Brewer's Choice Award",
    subtitle: "Peer Recognition",
    description:
      "All participating brewers judge each beer as well. This is the brewers' recognition award.",
    icon: Beer,
    color: "text-green-500",
  },
];

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleVoteClick = () => {
    window.open("https://forms.google.com", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Beer className="h-8 w-8 text-festival-gold" />
              <span className="font-bold text-xl text-foreground">
                CBAC 2025
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-festival-gold"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("breweries")}
                className="text-foreground hover:text-festival-gold"
              >
                Breweries
              </button>
              <button
                onClick={() => scrollToSection("schedule")}
                className="text-foreground hover:text-festival-gold"
              >
                Schedule
              </button>
              <button
                onClick={() => scrollToSection("awards")}
                className="text-foreground hover:text-festival-gold"
              >
                Awards
              </button>
            </div>

            {/* Vote Button */}
            <Button
              onClick={() => scrollToSection("voting")}
              className="hidden md:flex bg-festival-gold text-festival-dark hover:bg-festival-amber"
            >
              Vote Now
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left hover:text-festival-gold py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("breweries")}
                  className="text-left hover:text-festival-gold py-2"
                >
                  Breweries
                </button>
                <button
                  onClick={() => scrollToSection("schedule")}
                  className="text-left hover:text-festival-gold py-2"
                >
                  Schedule
                </button>
                <button
                  onClick={() => scrollToSection("awards")}
                  className="text-left hover:text-festival-gold py-2"
                >
                  Awards
                </button>
                <Button
                  onClick={() => scrollToSection("voting")}
                  className="mt-4 bg-festival-gold text-festival-dark hover:bg-festival-amber w-full"
                >
                  Vote Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 min-h-screen flex flex-col justify-center">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border mb-8">
              <span className="text-festival-gold font-semibold">
                CBAC Presents
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
              Cambodian Craft Beer Crown
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-festival-gold mb-8">
              2025
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-3 p-4 bg-card/60 backdrop-blur-sm rounded-lg border border-border">
                <Calendar className="h-5 w-5 text-festival-gold" />
                <div className="text-left">
                  <div className="font-semibold text-foreground">
                    August 16, 2025
                  </div>
                  <div className="text-sm text-muted-foreground">Friday</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-card/60 backdrop-blur-sm rounded-lg border border-border">
                <Clock className="h-5 w-5 text-festival-gold" />
                <div className="text-left">
                  <div className="font-semibold text-foreground">
                    2:00 PM - 11:30 PM
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Full Event
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-card/60 backdrop-blur-sm rounded-lg border border-border">
                <MapPin className="h-5 w-5 text-festival-gold" />
                <div className="text-left">
                  <div className="font-semibold text-foreground">
                    Botanico Garden
                  </div>
                  <div className="text-sm text-muted-foreground">Street 29</div>
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join us for Cambodia's premier craft beer competition! Taste 11
              exceptional beers from local breweries and cast your vote for the
              People's Choice Award.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("voting")}
                size="lg"
                className="bg-festival-gold text-festival-dark hover:bg-festival-amber font-bold px-8 py-4 text-lg"
              >
                Start Judging Beers
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-festival-gold text-festival-gold hover:bg-festival-gold hover:text-festival-dark font-semibold px-8 py-4 text-lg"
                onClick={() => scrollToSection("breweries")}
              >
                Meet the Breweries
              </Button>
            </div>

            <div className="mt-12 text-center">
              <div className="text-6xl md:text-8xl font-bold text-festival-gold/20 mb-2">
                11
              </div>
              <div className="text-lg md:text-xl font-semibold text-foreground">
                Craft Beers to Judge
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voting Section */}
      <section
        id="voting"
        className="py-20 bg-gradient-to-b from-background to-card"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-festival-gold/10 border border-festival-gold/20 mb-6">
              <Trophy className="h-4 w-4 text-festival-gold mr-2" />
              <span className="text-festival-gold font-semibold">
                People's Choice Award
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Judge the Beers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Taste each of the 11 craft beers and submit your judgment. Your
              vote counts towards the People's Choice Award!
            </p>

            <Button
              onClick={handleVoteClick}
              size="lg"
              className="bg-festival-gold text-festival-dark hover:bg-festival-amber font-bold px-12 py-6 text-xl mb-12"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Open Voting Form
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
              Beers in Competition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {beers.map((beer) => (
                <Card
                  key={beer.id}
                  className="bg-gradient-card border-border hover:border-festival-gold/50"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-festival-gold">
                        #{beer.id}
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-festival-gold/10 text-festival-gold"
                      >
                        {beer.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      {beer.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{beer.brewery}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-card border-festival-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center text-festival-gold">
                  <Users className="h-5 w-5 mr-2" />
                  How to Vote
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Voting Process:
                    </h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Taste each beer sample</li>
                      <li>• Fill out one form per beer</li>
                      <li>• Submit judgment for all 11 beers</li>
                      <li>• Results announced at 7:30 PM</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Quick Access:
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Bookmark this page for easy access throughout the event.
                      You'll return here 11 times!
                    </p>
                    <Button
                      onClick={handleVoteClick}
                      className="bg-festival-gold text-festival-dark hover:bg-festival-amber w-full"
                    >
                      Vote Again
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Breweries Section */}
      <section
        id="breweries"
        className="py-20 bg-gradient-to-b from-card to-background"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Meet the Breweries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the talented breweries behind the 11 exceptional beers
              you'll be judging today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {breweries.map((brewery, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border hover:border-festival-gold/50 h-full"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-festival-gold">
                    {brewery.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {brewery.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section
        id="schedule"
        className="py-20 bg-gradient-to-b from-background to-card"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Event Schedule
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A full day of craft beer, music, and celebration. From tasting to
              awards ceremony, here's your complete timeline.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {scheduleItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-card border-border hover:border-festival-gold/50"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center space-x-3">
                        <div className="flex w-10 h-10 bg-gradient-card border border-festival-gold rounded-full items-center justify-center">
                          <Icon className="h-4 w-4 text-festival-gold" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-foreground">
                            {item.title}
                          </CardTitle>
                          <div className="text-2xl font-bold text-festival-gold">
                            {item.time}
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-festival-gold/10 text-festival-gold border-festival-gold/20">
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section
        id="awards"
        className="py-20 bg-gradient-to-b from-card to-background"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Awards
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three distinct awards celebrate excellence from different
              perspectives - expert judges, beer lovers, and fellow brewers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-card border-border hover:border-festival-gold/50 text-center h-full"
                >
                  <CardHeader className="pb-6">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-card border-2 border-festival-gold flex items-center justify-center`}
                    >
                      <Icon className={`h-8 w-8 ${award.color}`} />
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {award.title}
                    </CardTitle>
                    <div className="text-festival-gold font-semibold">
                      {award.subtitle}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {award.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-t from-card to-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Beer className="h-6 w-6 text-festival-gold" />
                <span className="font-bold text-xl text-foreground">
                  CBAC 2025
                </span>
              </div>
              <p className="text-muted-foreground">
                Cambodia's premier craft beer competition celebrating local
                breweries and exceptional beers.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-4">
                Event Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-festival-gold" />
                  <span>August 16, 2025</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Clock className="h-4 w-4 text-festival-gold" />
                  <span>2:00 PM - 11:30 PM</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-festival-gold" />
                  <span>Botanico Craft Beer Garden, Street 29</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-4">Organizer</h3>
              <div className="space-y-2">
                <div className="text-festival-gold font-semibold">CBAC</div>
                <div className="text-muted-foreground">
                  Cambodian Craft Beer Association
                </div>
                <p className="text-sm text-muted-foreground">
                  Promoting craft beer culture and supporting local breweries
                  across Cambodia.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-4">
                Quick Access
              </h3>
              <Card className="bg-gradient-card border-festival-gold/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-festival-gold mb-1">
                    11
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">
                    Beers to Judge
                  </div>
                  <button
                    onClick={() => scrollToSection("voting")}
                    className="text-festival-gold hover:text-festival-amber font-semibold"
                  >
                    Vote Now →
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-muted-foreground">
                  © 2025 Cambodian Craft Beer Association. All rights reserved.
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-muted-foreground hover:text-festival-gold"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("breweries")}
                  className="text-muted-foreground hover:text-festival-gold"
                >
                  Breweries
                </button>
                <button
                  onClick={() => scrollToSection("voting")}
                  className="text-muted-foreground hover:text-festival-gold font-semibold"
                >
                  Vote
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
