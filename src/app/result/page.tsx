"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const hackathonEntries = [
  { id: 1, team: "Techtonic Alliance", position: 1 },
  { id: 2, team: "Team Conquerors", position: 2 },
  { id: 3, team: "Sozo", position: 3 },
  { id: 4, team: "GCOEY", position: 4 },
  { id: 5, team: "UnderDogs", position: 5 },
  { id: 6, team: "Apophis", position: 6 },
  { id: 7, team: "SpeadeX", position: 7 },
  { id: 8, team: "MISSION_I_M_POSSIBLE", position: 8 },
  { id: 9, team: "HackSnorlax", position: 9 },
  { id: 10, team: "DevOcs", position: 10 },
  { id: 11, team: "Team Zenith", position: 11 },
  { id: 12, team: "Supa Strikas", position: 12 },
  { id: 13, team: "EduSphere", position: 13 },
  { id: 14, team: "Bro Code", position: 14 },
  { id: 15, team: "Health+", position: 15 },
  { id: 16, team: "Runtime Terrors", position: 16 },
  { id: 17, team: "DevPair", position: 17 },
  { id: 18, team: "SymbiSparkk", position: 18 },
  { id: 19, team: "Undefined", position: 19 },
  { id: 20, team: "IlI_Stellar.Squad_IlI", position: 20 },
  { id: 21, team: "Team Glycon", position: 21 },
  { id: 22, team: "404 Brain Not Found", position: 22 },
  { id: 23, team: "The Beginners 2.0", position: 23 },
  { id: 24, team: "Full Stack Force", position: 24 },
  { id: 25, team: "404_forbidden", position: 25 },
  { id: 26, team: "Hackoholics", position: 26 },
];

const winners = [
  { id: 1, team: "GCOEY", category : "Edu Tech." },
  { id: 2, team: "EduSphere", category : "Edu Tech." },
  { id: 3, team: "SpeadeX", category : "Health Tech." },
]

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

  useEffect(() => {
    setMounted(true);
  }, []);

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

        <section className="mb-16">
        <div className="relative">
          <h2 className="text-3xl font-bold mb-10 text-center">
            <span className="border-b-2 border-cyan-500 pb-2 px-4">🏆 Winners 🏆</span>
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-end gap-4 md:gap-8">
            {/* 2nd Place */}
            <div className="w-full md:w-1/4 order-2 md:order-1 mb-8 md:mb-0">
              <div className="h-16 bg-blue-600 bg-opacity-20 flex items-center justify-center relative">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-t-lg font-bold">
                  2nd Place
                </span>
                <span className="text-3xl">🥈</span>
              </div>
              <div className="bg-gray-800 border-2 border-blue-500 p-5 rounded-b-lg shadow-lg shadow-blue-900/30">
                <h3 className="text-xl font-bold mb-1 text-blue-300">{winners[1]?.team}</h3>
                {/* <p className="text-sm text-gray-300 mb-2">by {winners[1]?.team}</p> */}
                {/* <p className="text-sm">{winners[1]?.description}</p> */}
                <span className="inline-block mt-3 text-xs bg-blue-900 text-blue-200 rounded-full px-3 py-1">
                  {winners[1]?.category}
                </span>
              </div>
            </div>
            
            {/* 1st Place */}
            <div className="w-full md:w-1/3 order-1 md:order-2 mb-8 md:mb-0">
              <div className="h-24 bg-yellow-600 bg-opacity-20 flex items-center justify-center relative">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-t-lg font-bold">
                  1st Place
                </span>
                <span className="text-5xl">🥇</span>
              </div>
              <div className="bg-gray-800 border-2 border-yellow-500 p-6 rounded-b-lg shadow-lg shadow-yellow-900/30 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 animate-pulse"></div>
                <h3 className="text-2xl font-bold mb-2 text-yellow-300">{winners[0]?.team}</h3>
                {/* <p className="text-gray-300 mb-3">by {winners[0]?.team}</p> */}
                {/* <p>{winners[0]?.description}</p> */}
                <span className="inline-block mt-4 text-xs bg-yellow-900 text-yellow-200 rounded-full px-3 py-1">
                  {winners[0]?.category}
                </span>
              </div>
            </div>
            
            {/* 3rd Place */}
            <div className="w-full md:w-1/4 order-3">
              <div className="h-10 bg-green-600 bg-opacity-20 flex items-center justify-center relative">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-t-lg font-bold">
                  3rd Place
                </span>
                <span className="text-2xl">🥉</span>
              </div>
              <div className="bg-gray-800 border-2 border-green-500 p-5 rounded-b-lg shadow-lg shadow-green-900/30">
                <h3 className="text-xl font-bold mb-1 text-green-300">{winners[2]?.team}</h3>
                {/* <p className="text-sm text-gray-300 mb-2">by {winners[2]?.team}</p> */}
                {/* <p className="text-sm">{winners[2]?.description}</p> */}
                <span className="inline-block mt-3 text-xs bg-green-900 text-green-200 rounded-full px-3 py-1">
                  {winners[2]?.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* All Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="border-b-2 border-cyan-500 pb-2 px-4">
              🚀 Shortlisted Teams 🚀
            </span>
          </h2>
          
          <p className="text-center mb-8 text-cyan-100 max-w-3xl mx-auto">
            The following teams have been selected based on the quality and innovation demonstrated in their submitted presentations across their respective domains of expertise.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {hackathonEntries.map((entry) => (
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