"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const hackathonEntries = [
  { id: 1, team: "Techtonic Alliance", position: 1, category: "MED" },
  { id: 2, team: "Team Conquerors", position: 2, category: "BLOCKCHAIN" },
  { id: 3, team: "Sozo", position: 3, category: "ED" },
  { id: 4, team: "GCOEY", position: 4, category: "ED" },
  { id: 5, team: "UnderDogs", position: 5, category: "ED" },
  { id: 6, team: "Apophis", position: 6, category: "ED" },
  { id: 7, team: "SpeadeX", position: 7, category: "MED" },
  { id: 8, team: "MISSION_I_M_POSSIBLE", position: 8, category: "MED" },
  { id: 9, team: "HackSnorlax", position: 9, category: "MED" },
  { id: 10, team: "DevOcs", position: 10, category: "MED" },
  { id: 11, team: "Team Zenith", position: 11, category: "ED" },
  { id: 12, team: "Supa Strikas", position: 12, category: "ED" },
  { id: 13, team: "EduSphere", position: 13, category: "ED" },
  { id: 14, team: "Bro Code", position: 14, category: "ED" },
  { id: 15, team: "Health+", position: 15, category: "MED" },
  { id: 16, team: "Runtime Terrors", position: 16, category: "MED" },
  { id: 17, team: "DevPair", position: 17, category: "MED" },
  { id: 18, team: "SymbiSparkk", position: 18, category: "ED" },
  { id: 19, team: "Undefined", position: 19, category: "MED" },
  { id: 20, team: "IlI_Stellar.Squad_IlI", position: 20, category: "ED" },
  { id: 21, team: "Team Glycon", position: 21, category: "ED" },
  { id: 22, team: "404 Brain Not Found", position: 22, category: "MED" },
  { id: 23, team: "The Beginners 2.0", position: 23, category: "BLOCKCHAIN" },
  { id: 24, team: "Full Stack Force", position: 24, category: "MED" },
  { id: 25, team: "404_forbidden", position: 25, category: "BLOCKCHAIN" },
  { id: 26, team: "Hackoholics", position: 26, category: "MED" },
];

const rejectedTeams = [
  "Legions",
  "MISSION_I_M_POSSIBLE",
  "Infinite Aura",
  "Byte whack",
  "Code Hawks",
  "Syntax Error",
  "Code-Decode",
  "Code Crusaders",
  "DevPair",
  "Access Granted",
  "Hacked worries",
  "GCOEY",
  "Code bees",
  "Team_1ne",
  "Byte Brigade",
  "Bro Code",
  "EISTAtech",
  "SkillStampers",
  "Code Xanders",
  "Team Zenith",
  "Team Cicada",
  "Sozo",
  "DEBUGGER",
  "HackQuad",
  "The king",
  "Apophis",
  "Team Glycon",
  "Hackfinity",
  "Byte IT",
  "The Beginners 2.0",
  "THE CODE CREW",
  "Techies",
  "Runtime Terrors",
  "Blueberry",
  "UnderDogs",
  "Innov8ors",
  "The CodeFather",
  "Ahan-Amrit",
  "Undefined",
  "Sticky codes",
  "Cryptic Coders",
  "Neural Nexus",
  "The Encryptors",
  "Rescue Rangers",
  "Code Apex",
  "Team Black",
  "The Bit Buffers",
  "Internal_Maps",
  "Full Stack Force",
  "Technos",
  "TECHNICAL MAVLE",
  "Health+",
  "Predator",
  "IlI_Stellar.Squad_IlI",
  "DevOcs",
  "BB",
  "Quasar",
  "Pytha_gorex",
  "Team Smart",
  "Team Conquerors ⚓",
  "Team Maqsad",
  "VLSI Legends",
  "Null Pointers",
  "Alpha",
  "Wi-Fighters",
  "Bug Busters",
  "CyberPunks",
  "CODE PAGLU",
  "Synapse",
  "BLASTERS",
  "Pixel Pioneers",
  "Developers",
  "Tech Titans",
  "WholeSquad",
  "404 Brain Not Found",
  "Code Breakers",
  "Byte Mafia",
  "Tri-Netra",
  "Innov8rs",
  "Glitchless",
  "Hacktivates",
  "Code2Cure",
  "Techtonic Alliance",
  "Name_space",
  "Amigos",
  "Bug Hunter Squad",
  "The debuggers",
  "Tech knights",
  "Stack Slayers",
  "404_forbidden",
  "Adhoc Nerds",
  "Byte Brilliance",
  "Tech Squad",
  "RBU Coderz",
  "HackHorizon",
  "Byte Learners",
  "EduSphere",
  "Tech mates",
  "Team Stellar",
  "The MedSavers",
  "Hacktivate",
  "PAVITRA STEP",
  "Vision_Coders",
  "$Debuggers",
  "Propagation delay",
  "Abhiyanta",
  "SoftCoders",
  "404_Not_Found",
  "Debuggers United",
  "Team W Only",
  "Neural Nomads",
  "Femme Code",
  "Bit Learners",
  "Team stackers",
  "SymptomSync",
  "Leo",
  "CodeX3",
  "TEAM EVO's",
  "Mavericks",
  "Team_C",
  "Team Mavericks",
  "Team Diamond",
  "gajar ka halwa",
  "KeyboardWarriors",
  "The Cyphers",
  "4Byte",
  "XLR8",
  "ZeroIQs",
  "Binary Brains",
  "Binary Bandits",
  "Raddos",
  "Web Dominators",
  "4 Musketeers",
  "Techaholics",
  "Verbal Vanguards",
  "Pyrobyte",
  "Satyam",
  "Infinity Codex",
  "Spectro Pause",
  "Titans",
  "CodeVerse",
  "InsightX",
  "#Karma",
  "Team Hawks",
  "Neural Nomads",
  "she++",
  "Code Ninjas",
  "ScriptSages",
  "XPLORER",
  "404NotFound",
  "Matrix",
  "EduHackers",
  "HackSHIP & Chill",
  "Tech Buddies",
  "SymbiSparkk",
  "ClueMinati",
  "Code pixels",
  "Neural Ninjas",
  "ShastraHack",
  "NEOGENESIS",
  "Scramblerrs",
  "Quadoc",
  "SpeadeX",
  "DecentraX",
  "Noobies",
  "CODEGEEKS",
  "Algonauts",
  "Team Elite",
  "Tech Avengers",
  "Code Warriors",
  "WebDevs",
  "DATA_DYNAMOS",
  "Supa Strikas",
  "Conquerorz",
  "Recursive Neural Nexus ( RNN )",
  "Jo Theek lage",
  "The innovators",
  "Men-in-Code",
  "Amit sahu",
  "HackSnorlax",
  "SLAY",
  "Cold Blooded",
  "Innovators",
  "Hackoholics",
  "Geek Velocity",
  "Persistent Strivers",
  "Codehub",
  "Team 7",
  "Eduvaters",
  "Infinity Coders",
  "codesprint",
  "Team Nexus",
  "Bit by bit",
  "Power Rangers",
];
function App() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    "all",
    ...new Set(hackathonEntries.map((entry) => entry.category)),
  ];

  const filteredEntries =
    activeCategory === "all"
      ? hackathonEntries
      : hackathonEntries.filter((entry) => entry.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    console.log("Setting category to:", category);
    setActiveCategory(category);
  };

  return (
    <section className="space-gradient relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="star absolute h-1 w-1 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <section
        className="min-h-screen text-white p-4 md:p-8 relative z-10"
        suppressHydrationWarning
      >
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            HackSphere 2.0 Results
          </h1>
          <p className="text-lg text-cyan-100 max-w-3xl mx-auto">
            Celebrating innovation and technical excellence from our shortlisted
            teams pushing the boundaries of technology.
          </p>
        </header>

        {/* All Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="border-b-2 border-cyan-500 pb-2 px-4">
              🚀 Shortlisted Teams 🚀
            </span>
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 relative z-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                type="button"
                aria-pressed={activeCategory === category}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-200 relative z-20 cursor-pointer ${
                  activeCategory === category
                    ? "bg-cyan-600 text-white font-medium"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                }`}
              >
                {category === "all" ? "All Categories" : category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredEntries.map((entry) => (
              <div
                key={entry.id}
                className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-cyan-700 p-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg">{entry.team}</span>
                  <span className="rounded-full px-2 py-0.5 text-xs font-bold bg-purple-600">
                    #{entry.position}
                  </span>
                </div>
                <div>
                  <span className="inline-block text-xs bg-gray-700 text-cyan-300 rounded-full px-3 py-1">
                    {entry.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teams Recognition */}
        <div className="mt-16 mb-8">
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="border-b-2 border-pink-500 pb-2 px-4">
              👏 All Teams 👏
            </span>
          </h2>

          <div className="w-full bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <p className="text-center mb-6 text-gray-300">
              Recognition to all teams that were a part of HackSphere 2.0:
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {rejectedTeams.map((team, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 bg-gray-700 rounded-full text-sm ${
                    hackathonEntries.some((entry) => entry.team === team)
                      ? "border border-cyan-500 text-cyan-200"
                      : "text-gray-300"
                  }`}
                >
                  {team}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
