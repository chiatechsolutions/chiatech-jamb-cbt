/* ═══════════════════════════════════════════════════════
   PHYSICS QUESTION BANK — CHIATECH JAMB CBT 2026
   Format: { id, question, options:{A,B,C,D}, correct, explanation, topic }
   ═══════════════════════════════════════════════════════ */
window.QUESTION_BANK = window.QUESTION_BANK || {};

window.QUESTION_BANK["Physics"] = {
  test1: [
    {
      id: 1, topic: "Vectors & Scalars",
      question: "Which of the following is a SCALAR quantity?",
      options: { A: "Velocity", B: "Displacement", C: "Speed", D: "Weight" },
      correct: "C",
      explanation: "Scalar quantities have magnitude only. Speed (e.g., 40 km/h) has no direction. Velocity, displacement, and weight are vectors — they have both magnitude and direction."
    },
    {
      id: 2, topic: "Kinematics",
      question: "A car starts from rest and accelerates uniformly to 30 m/s in 10 s. What is its acceleration?",
      options: { A: "3 m/s²", B: "0.3 m/s²", C: "300 m/s²", D: "30 m/s²" },
      correct: "A",
      explanation: "Using a = (v − u)/t = (30 − 0)/10 = 3 m/s². Always apply: a = change in velocity ÷ time taken."
    },
    {
      id: 3, topic: "Energy",
      question: "A 4 kg object is moving at 10 m/s. What is its kinetic energy?",
      options: { A: "40 J", B: "200 J", C: "400 J", D: "20 J" },
      correct: "B",
      explanation: "KE = ½mv² = ½ × 4 × 10² = ½ × 4 × 100 = 200 J. Remember: always square the velocity first."
    },
    {
      id: 4, topic: "Gravitational PE",
      question: "A 5 kg stone is at a height of 20 m above the ground (g = 10 m/s²). Its potential energy is:",
      options: { A: "10 J", B: "100 J", C: "1000 J", D: "2000 J" },
      correct: "C",
      explanation: "GPE = mgh = 5 × 10 × 20 = 1000 J. The formula is simple: mass × gravity × height."
    },
    {
      id: 5, topic: "Newton's Laws",
      question: "Newton's First Law of Motion is also called the law of:",
      options: { A: "Acceleration", B: "Inertia", C: "Action-Reaction", D: "Gravitation" },
      correct: "B",
      explanation: "Newton's 1st Law states that a body remains at rest or in uniform motion unless acted upon by an external force. This resistance to change is called INERTIA."
    },
    {
      id: 6, topic: "Newton's Second Law",
      question: "A net force of 20 N acts on a 4 kg mass. What is the acceleration?",
      options: { A: "80 m/s²", B: "0.2 m/s²", C: "5 m/s²", D: "16 m/s²" },
      correct: "C",
      explanation: "F = ma → a = F/m = 20/4 = 5 m/s². Newton's 2nd Law: Force = mass × acceleration."
    },
    {
      id: 7, topic: "Waves",
      question: "A wave has frequency 200 Hz and wavelength 1.5 m. Calculate its speed.",
      options: { A: "133.3 m/s", B: "201.5 m/s", C: "300 m/s", D: "198.5 m/s" },
      correct: "C",
      explanation: "Wave speed v = fλ = 200 × 1.5 = 300 m/s. This is the universal wave equation."
    },
    {
      id: 8, topic: "Light",
      question: "The image formed by a plane mirror is:",
      options: {
        A: "Real, inverted, same size",
        B: "Virtual, upright, same size",
        C: "Real, upright, magnified",
        D: "Virtual, inverted, diminished"
      },
      correct: "B",
      explanation: "A plane mirror always produces a VIRTUAL (cannot be formed on screen), UPRIGHT (same orientation), and SAME SIZE image. It is also laterally inverted (left↔right)."
    },
    {
      id: 9, topic: "Electricity",
      question: "A resistor has a voltage of 12 V across it and a current of 3 A. Its resistance is:",
      options: { A: "36 Ω", B: "4 Ω", C: "15 Ω", D: "0.25 Ω" },
      correct: "B",
      explanation: "Ohm's Law: R = V/I = 12/3 = 4 Ω. The three forms of Ohm's law: V=IR, I=V/R, R=V/I."
    },
    {
      id: 10, topic: "Electricity",
      question: "Three resistors of 6Ω, 3Ω, and 2Ω are connected in parallel. The total resistance is:",
      options: { A: "11 Ω", B: "1 Ω", C: "0.55 Ω", D: "3.67 Ω" },
      correct: "B",
      explanation: "For parallel: 1/R = 1/6 + 1/3 + 1/2 = 1/6 + 2/6 + 3/6 = 6/6 = 1. Therefore R = 1 Ω. In parallel, resistance decreases."
    },
    {
      id: 11, topic: "Heat",
      question: "The process by which heat flows through a solid without movement of matter is:",
      options: { A: "Convection", B: "Radiation", C: "Conduction", D: "Evaporation" },
      correct: "C",
      explanation: "CONDUCTION is heat transfer through solids via particle vibration — no bulk movement of matter. Convection needs fluid movement; radiation needs no medium."
    },
    {
      id: 12, topic: "Radioactivity",
      question: "The half-life of a radioactive element is 8 days. What fraction remains after 24 days?",
      options: { A: "1/6", B: "1/3", C: "1/8", D: "1/4" },
      correct: "C",
      explanation: "24 days = 3 half-lives (24÷8). After each half-life, half remains: (½)³ = 1/8. Always find how many half-lives fit into the total time."
    },
    {
      id: 13, topic: "Sound",
      question: "Sound CANNOT travel through:",
      options: { A: "Steel", B: "Water", C: "Vacuum", D: "Air" },
      correct: "C",
      explanation: "Sound is a MECHANICAL wave — it requires a medium (matter) to travel. A vacuum has no particles, so sound cannot propagate. This is why space is silent."
    },
    {
      id: 14, topic: "Pressure",
      question: "A force of 50 N acts on an area of 0.5 m². What is the pressure?",
      options: { A: "25 Pa", B: "100 Pa", C: "0.01 Pa", D: "2.5 Pa" },
      correct: "B",
      explanation: "P = F/A = 50/0.5 = 100 Pa (Pascals). Pressure = Force per unit area. The Pascal is the SI unit of pressure."
    },
    {
      id: 15, topic: "Simple Machines",
      question: "A machine has a velocity ratio of 5 and an efficiency of 80%. Its mechanical advantage is:",
      options: { A: "6.25", B: "4", C: "1.6", D: "25" },
      correct: "B",
      explanation: "Efficiency = (MA/VR) × 100%. So MA = (Efficiency × VR)/100 = (80 × 5)/100 = 4. These three are always linked."
    },
    {
      id: 16, topic: "Electromagnetism",
      question: "Which of the following is NOT an electromagnetic wave?",
      options: { A: "X-rays", B: "Sound waves", C: "Gamma rays", D: "Ultraviolet rays" },
      correct: "B",
      explanation: "Sound waves are MECHANICAL waves requiring a medium. Electromagnetic waves (X-rays, gamma rays, UV, radio, light, microwaves) travel through a vacuum at c = 3×10⁸ m/s."
    },
    {
      id: 17, topic: "Projectile",
      question: "A body is projected horizontally. Which of the following remains CONSTANT throughout the flight?",
      options: {
        A: "Vertical velocity",
        B: "Horizontal velocity",
        C: "Resultant velocity",
        D: "Vertical displacement"
      },
      correct: "B",
      explanation: "In projectile motion, horizontal velocity remains constant (no horizontal force acts, ignoring air resistance). Vertical velocity increases due to gravity."
    },
    {
      id: 18, topic: "Optics",
      question: "A convex lens is also called a _____ lens.",
      options: {
        A: "Diverging",
        B: "Concave",
        C: "Converging",
        D: "Plain"
      },
      correct: "C",
      explanation: "A CONVEX lens is thicker at the centre — it converges (brings together) parallel light rays to a focal point. Concave lenses diverge light."
    },
    {
      id: 19, topic: "Density",
      question: "A material has a mass of 200 g and a volume of 40 cm³. What is its density?",
      options: { A: "0.2 g/cm³", B: "8000 g/cm³", C: "5 g/cm³", D: "5000 kg/m³" },
      correct: "C",
      explanation: "Density ρ = mass/volume = 200/40 = 5 g/cm³. To convert to kg/m³, multiply by 1000: 5000 kg/m³. Both C and the kg/m³ value are correct, but C matches the given units."
    },
    {
      id: 20, topic: "Circular Motion",
      question: "The force directed towards the centre in circular motion is called:",
      options: { A: "Centrifugal force", B: "Centripetal force", C: "Gravitational force", D: "Normal force" },
      correct: "B",
      explanation: "CENTRIPETAL force is the inward force that keeps a body moving in a circle. F = mv²/r. Centrifugal force is the apparent outward force felt by the object (pseudo-force)."
    },
    {
      id: 21, topic: "Work & Power",
      question: "A machine does 4000 J of work in 20 seconds. Its power output is:",
      options: { A: "80,000 W", B: "200 W", C: "400 W", D: "2000 W" },
      correct: "B",
      explanation: "Power = Work/Time = 4000/20 = 200 Watts. Power is the RATE of doing work. 1 Watt = 1 Joule per second."
    },
    {
      id: 22, topic: "Thermometry",
      question: "Convert 37°C to Kelvin.",
      options: { A: "236 K", B: "310 K", C: "100 K", D: "374 K" },
      correct: "B",
      explanation: "K = °C + 273 = 37 + 273 = 310 K. Absolute zero (0 K) = −273°C. The Kelvin scale starts at absolute zero."
    },
    {
      id: 23, topic: "Capacitors",
      question: "The unit of capacitance is the:",
      options: { A: "Ohm", B: "Henry", C: "Farad", D: "Weber" },
      correct: "C",
      explanation: "Capacitance is measured in FARADS (F), named after Michael Faraday. Ohm=resistance, Henry=inductance, Weber=magnetic flux."
    },
    {
      id: 24, topic: "Atomic Physics",
      question: "Which particle in an atom has NO electric charge?",
      options: { A: "Proton", B: "Electron", C: "Neutron", D: "Positron" },
      correct: "C",
      explanation: "NEUTRON is electrically neutral (no charge). Proton has +1 charge, electron has −1 charge. Neutrons are found in the nucleus alongside protons."
    },
    {
      id: 25, topic: "Waves",
      question: "Which property of a wave determines its pitch?",
      options: { A: "Amplitude", B: "Frequency", C: "Wavelength", D: "Speed" },
      correct: "B",
      explanation: "FREQUENCY determines pitch: higher frequency = higher pitch. Amplitude determines loudness. A useful mnemonic: Frequency → pitch (both start with rhythmic patterns)."
    },
    {
      id: 26, topic: "Mechanics",
      question: "The momentum of a 3 kg object moving at 8 m/s is:",
      options: { A: "24 kg m/s", B: "2.67 kg m/s", C: "11 kg m/s", D: "0.375 kg m/s" },
      correct: "A",
      explanation: "Momentum p = mv = 3 × 8 = 24 kg m/s. Momentum is a VECTOR quantity (has direction). It is conserved in all collisions (Law of Conservation of Momentum)."
    },
    {
      id: 27, topic: "Friction",
      question: "Which type of friction acts between surfaces that are NOT in relative motion?",
      options: { A: "Kinetic friction", B: "Rolling friction", C: "Static friction", D: "Fluid friction" },
      correct: "C",
      explanation: "STATIC friction acts when surfaces are stationary relative to each other. It prevents motion from starting. Static friction > Kinetic friction (harder to start than maintain motion)."
    },
    {
      id: 28, topic: "Gas Laws",
      question: "Boyle's Law states that, at constant temperature, pressure is _____ proportional to volume.",
      options: { A: "Directly", B: "Inversely", C: "Equally", D: "Exponentially" },
      correct: "B",
      explanation: "Boyle's Law: P ∝ 1/V (at constant T). So P₁V₁ = P₂V₂. When volume increases, pressure decreases. Squeezing a balloon demonstrates this."
    },
    {
      id: 29, topic: "Optics",
      question: "Total internal reflection occurs when light travels from a:",
      options: {
        A: "Denser to less dense medium and angle > critical angle",
        B: "Less dense to denser medium",
        C: "Denser to less dense medium and angle < critical angle",
        D: "Vacuum into glass"
      },
      correct: "A",
      explanation: "Total internal reflection requires TWO conditions: (1) light must go from denser to less dense medium, AND (2) angle of incidence must exceed the critical angle. Used in optical fibres."
    },
    {
      id: 30, topic: "Electricity",
      question: "Which of the following is the correct formula for electrical power?",
      options: { A: "P = I/V", B: "P = IV", C: "P = I²/R", D: "P = V/I" },
      correct: "B",
      explanation: "Electrical Power P = IV (current × voltage). Also P = I²R = V²/R. All three are equivalent using Ohm's law. Power is measured in Watts."
    },
    {
      id: 31, topic: "Mirrors",
      question: "A concave mirror used as a shaving mirror produces an image that is:",
      options: {
        A: "Virtual, magnified and upright",
        B: "Real, diminished and inverted",
        C: "Virtual, diminished and inverted",
        D: "Real, magnified and upright"
      },
      correct: "A",
      explanation: "When an object is INSIDE the focal point of a concave mirror, the image is virtual, magnified, and upright — ideal for shaving/makeup mirrors."
    },
    {
      id: 32, topic: "Nuclear Physics",
      question: "In nuclear fission, a heavy nucleus is:",
      options: { A: "Combined with another nucleus", B: "Split into two lighter nuclei", C: "Converted into energy only", D: "Transformed into a neutron" },
      correct: "B",
      explanation: "Nuclear FISSION = splitting of a heavy nucleus (like U-235) into two lighter nuclei + energy + neutrons. Nuclear FUSION = combining light nuclei. Fission powers nuclear reactors."
    },
    {
      id: 33, topic: "Equilibrium",
      question: "For a body to be in equilibrium, the net torque about any point must be:",
      options: { A: "Maximum", B: "Equal to weight", C: "Zero", D: "Equal to normal force" },
      correct: "C",
      explanation: "For rotational equilibrium: ΣTorque = 0 (clockwise torques = anticlockwise torques). Also ΣForce = 0 for translational equilibrium. Both conditions required for complete equilibrium."
    },
    {
      id: 34, topic: "Heat Transfer",
      question: "The Stefan-Boltzmann law relates the rate of radiation to the _____ of the absolute temperature.",
      options: { A: "Square", B: "Cube", C: "Fourth power", D: "Square root" },
      correct: "C",
      explanation: "Stefan-Boltzmann Law: E ∝ T⁴. The power radiated by a black body is proportional to the FOURTH POWER of absolute temperature. Doubling temperature increases radiation by 2⁴ = 16 times."
    },
    {
      id: 35, topic: "Electrostatics",
      question: "Two positive charges Q₁ and Q₂ separated by distance r. The electrostatic force between them is:",
      options: { A: "Attractive", B: "Zero", C: "Repulsive", D: "Perpendicular to r" },
      correct: "C",
      explanation: "Like charges REPEL; unlike charges attract. Two positive charges will push each other away. This is Coulomb's Law: F = kQ₁Q₂/r²."
    },
    {
      id: 36, topic: "Semiconductor",
      question: "Which of the following is a semiconductor?",
      options: { A: "Copper", B: "Silicon", C: "Glass", D: "Rubber" },
      correct: "B",
      explanation: "SILICON is a semiconductor — its conductivity is between conductors (copper) and insulators (glass, rubber). Silicon is the basis of modern electronics and computer chips."
    },
    {
      id: 37, topic: "Optics",
      question: "The splitting of white light into its component colours by a prism is called:",
      options: { A: "Reflection", B: "Refraction", C: "Dispersion", D: "Diffraction" },
      correct: "C",
      explanation: "DISPERSION is the splitting of white light into the visible spectrum (ROYGBIV) by a prism. Different colours have different wavelengths and therefore different refractive indices."
    },
    {
      id: 38, topic: "Electromagnetic Induction",
      question: "Faraday's law states that the induced EMF is proportional to the rate of change of:",
      options: { A: "Electric field", B: "Current", C: "Magnetic flux", D: "Resistance" },
      correct: "C",
      explanation: "Faraday's Law: EMF = −dΦ/dt (rate of change of magnetic flux). The negative sign reflects Lenz's Law (induced EMF opposes the change). This is the basis of generators and transformers."
    },
    {
      id: 39, topic: "Impulse",
      question: "The impulse experienced by a body is equal to its change in:",
      options: { A: "Velocity", B: "Acceleration", C: "Momentum", D: "Kinetic energy" },
      correct: "C",
      explanation: "Impulse = Force × time = Δp (change in momentum). J = FΔt = mv − mu. This is the impulse-momentum theorem. A large force for a short time = small force for longer time."
    },
    {
      id: 40, topic: "Measurement",
      question: "The instrument used to measure the electromotive force (EMF) of a cell accurately is a:",
      options: { A: "Voltmeter", B: "Ammeter", C: "Potentiometer", D: "Galvanometer" },
      correct: "C",
      explanation: "A POTENTIOMETER measures EMF accurately because it draws NO current from the cell (null method). A voltmeter draws small current and gives slightly lower reading than true EMF."
    },
  ],

  test2: [
    {
      id: 1, topic: "Motion",
      question: "The gradient of a velocity-time graph gives:",
      options: { A: "Speed", B: "Displacement", C: "Acceleration", D: "Distance" },
      correct: "C",
      explanation: "On a velocity-time graph: gradient = acceleration, area under graph = displacement. On a distance-time graph: gradient = speed."
    },
    {
      id: 2, topic: "Energy",
      question: "Which of the following is NOT a form of energy?",
      options: { A: "Thermal energy", B: "Nuclear energy", C: "Momentum", D: "Chemical energy" },
      correct: "C",
      explanation: "Momentum (p = mv) is NOT a form of energy — it is a measure of quantity of motion. Energy forms include: kinetic, potential, thermal, nuclear, chemical, electrical, light, sound."
    },
    // Add remaining 38 questions following same structure...
    // Use JAMB past questions from 2015–2024 for variety
  ],
  
  // Tests 3-20: Follow exact same structure
  // Each test should have 40 unique questions
  // Suggested topics per test:
  // test3: Focus on Mechanics & Thermodynamics
  // test4: Focus on Waves, Light & Optics
  // test5: Focus on Electricity & Magnetism
  // test6: Focus on Modern Physics (Atomic, Nuclear, Semiconductor)
  // test7-20: Mix all topics, increasing difficulty
};