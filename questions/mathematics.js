window.QUESTION_BANK = window.QUESTION_BANK || {};

window.QUESTION_BANK["Mathematics"] = {
  test1: [
    {
      id: 1, topic: "Number Theory",
      question: "Find the HCF of 24, 36, and 48.",
      options: { A: "6", B: "12", C: "24", D: "48" },
      correct: "B",
      explanation: "Factor 24=2³×3; 36=2²×3²; 48=2⁴×3. HCF = lowest power of each common factor = 2²×3 = 4×3 = 12. HCF is the LARGEST number that divides all given numbers exactly."
    },
    {
      id: 2, topic: "Algebra",
      question: "Solve for x: 3x − 7 = 14",
      options: { A: "x = 7", B: "x = 3", C: "x = 2.33", D: "x = 21" },
      correct: "A",
      explanation: "3x − 7 = 14 → 3x = 14 + 7 = 21 → x = 21/3 = 7. Always isolate the variable: move constants to the right, then divide by the coefficient."
    },
    {
      id: 3, topic: "Quadratic",
      question: "The roots of x² − 5x + 6 = 0 are:",
      options: { A: "2 and 3", B: "−2 and −3", C: "1 and 6", D: "−1 and −6" },
      correct: "A",
      explanation: "Factorise: (x−2)(x−3) = 0. So x=2 or x=3. Check: 2+3=5 ✓ and 2×3=6 ✓. Product of roots = c/a = 6, sum of roots = −b/a = 5."
    },
    {
      id: 4, topic: "Indices",
      question: "Simplify: 2³ × 2⁴",
      options: { A: "2⁷", B: "4⁷", C: "2¹²", D: "2⁻¹" },
      correct: "A",
      explanation: "When multiplying same base: ADD exponents. 2³ × 2⁴ = 2^(3+4) = 2⁷ = 128. Key rules: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ."
    },
    {
      id: 5, topic: "Logarithms",
      question: "Evaluate: log₁₀ 1000",
      options: { A: "2", B: "10", C: "3", D: "100" },
      correct: "C",
      explanation: "log₁₀ 1000 = log₁₀ 10³ = 3. Log is the INVERSE of exponential. log₁₀ x = y means 10ʸ = x. So log₁₀ 1000 = 3 because 10³ = 1000."
    },
    {
      id: 6, topic: "Trigonometry",
      question: "In a right triangle, sin θ = 3/5. What is cos θ?",
      options: { A: "4/5", B: "3/4", C: "5/3", D: "5/4" },
      correct: "A",
      explanation: "Using Pythagoras: adjacent = √(5²−3²) = √(25−9) = √16 = 4. cos θ = adjacent/hypotenuse = 4/5. Always draw the triangle: opposite=3, hypotenuse=5, adjacent=4 (a 3-4-5 right triangle)."
    },
    {
      id: 7, topic: "Statistics",
      question: "Find the mean of: 4, 7, 9, 11, 14",
      options: { A: "8", B: "9", C: "10", D: "11" },
      correct: "B",
      explanation: "Mean = Sum/Count = (4+7+9+11+14)/5 = 45/5 = 9. The mean is the arithmetic average. Also find median (middle value when sorted = 9) and mode (most frequent value)."
    },
    {
      id: 8, topic: "Sets",
      question: "If A = {1,2,3,4} and B = {3,4,5,6}, then A ∩ B is:",
      options: { A: "{1,2,3,4,5,6}", B: "{3,4}", C: "{1,2,5,6}", D: "{}" },
      correct: "B",
      explanation: "A ∩ B (intersection) = elements in BOTH sets = {3,4}. A ∪ B (union) = elements in either set = {1,2,3,4,5,6}. A−B (difference) = elements in A but not B = {1,2}."
    },
    {
      id: 9, topic: "Sequence",
      question: "The 10th term of the arithmetic sequence 3, 7, 11, 15, ... is:",
      options: { A: "39", B: "43", C: "47", D: "51" },
      correct: "A",
      explanation: "AP: a=3, d=4. nth term = a+(n−1)d = 3+(10−1)×4 = 3+36 = 39. The common difference d = 7−3 = 4. Always identify a (first term) and d (common difference) first."
    },
    {
      id: 10, topic: "Coordinate Geometry",
      question: "The gradient of the line joining (2,3) and (6,11) is:",
      options: { A: "0.5", B: "2", C: "4", D: "8" },
      correct: "B",
      explanation: "Gradient m = (y₂−y₁)/(x₂−x₁) = (11−3)/(6−2) = 8/4 = 2. A positive gradient means the line slopes upward (left to right). Rise over run."
    },
    {
      id: 11, topic: "Geometry",
      question: "The sum of interior angles of a hexagon is:",
      options: { A: "540°", B: "720°", C: "900°", D: "360°" },
      correct: "B",
      explanation: "Sum of interior angles = (n−2) × 180° where n = number of sides. Hexagon: n=6 → (6−2)×180 = 4×180 = 720°. Triangle: 180°, Quadrilateral: 360°, Pentagon: 540°."
    },
    {
      id: 12, topic: "Probability",
      question: "A bag has 3 red balls and 5 blue balls. Probability of picking a red ball is:",
      options: { A: "3/5", B: "5/8", C: "3/8", D: "1/3" },
      correct: "C",
      explanation: "P(red) = number of red/total = 3/(3+5) = 3/8. Probability is always between 0 and 1. P(blue) = 5/8. P(red) + P(blue) = 3/8 + 5/8 = 1 ✓"
    },
    {
      id: 13, topic: "Circle",
      question: "The area of a circle with radius 7 cm is: (π = 22/7)",
      options: { A: "44 cm²", B: "154 cm²", C: "22 cm²", D: "49 cm²" },
      correct: "B",
      explanation: "Area = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 cm². Circumference = 2πr = 2 × (22/7) × 7 = 44 cm. Both formulas tested frequently."
    },
    {
      id: 14, topic: "Surds",
      question: "Simplify: √75",
      options: { A: "5√3", B: "3√5", C: "15√3", D: "25√3" },
      correct: "A",
      explanation: "√75 = √(25×3) = √25 × √3 = 5√3. Always look for perfect square factors: 75 = 25 × 3, and √25 = 5. This is surd simplification."
    },
    {
      id: 15, topic: "Fractions",
      question: "Express 0.375 as a fraction in its lowest terms.",
      options: { A: "375/1000", B: "3/8", C: "1/3", D: "7/16" },
      correct: "B",
      explanation: "0.375 = 375/1000. Simplify: 375/1000 = 75/200 = 15/40 = 3/8. Or: 0.375 × 8 = 3, so 0.375 = 3/8. Quick check: 3 ÷ 8 = 0.375 ✓"
    },
    {
      id: 16, topic: "Percentage",
      question: "A trader buys an item for ₦800 and sells it for ₦1000. What is the percentage profit?",
      options: { A: "20%", B: "25%", C: "80%", D: "200%" },
      correct: "B",
      explanation: "Profit = 1000−800 = ₦200. % Profit = (Profit/Cost price)×100 = (200/800)×100 = 25%. Always use COST PRICE as the base, not selling price."
    },
    {
      id: 17, topic: "Vectors",
      question: "If a = (3, 4), the magnitude |a| is:",
      options: { A: "7", B: "12", C: "5", D: "25" },
      correct: "C",
      explanation: "|a| = √(3²+4²) = √(9+16) = √25 = 5. The magnitude (modulus) uses Pythagoras' theorem. The (3,4,5) right triangle is a Pythagorean triple — very common in JAMB."
    },
    {
      id: 18, topic: "Differentiation",
      question: "If y = 3x² + 2x, then dy/dx is:",
      options: { A: "6x + 2", B: "3x + 2", C: "6x²", D: "x² + 2" },
      correct: "A",
      explanation: "Differentiate term by term: d/dx(3x²) = 6x; d/dx(2x) = 2. So dy/dx = 6x + 2. Rule: d/dx(axⁿ) = naxⁿ⁻¹. Bring down the power and reduce power by 1."
    },
    {
      id: 19, topic: "Integration",
      question: "Evaluate ∫(4x + 3)dx",
      options: {
        A: "4x² + 3x + C",
        B: "2x² + 3x + C",
        C: "4x² + 3 + C",
        D: "2x + 3 + C"
      },
      correct: "B",
      explanation: "∫(4x)dx = 4x²/2 = 2x²; ∫(3)dx = 3x. So ∫(4x+3)dx = 2x² + 3x + C. Rule: ∫axⁿ dx = axⁿ⁺¹/(n+1) + C. Always add constant of integration C."
    },
    {
      id: 20, topic: "Binary Numbers",
      question: "Convert 1011₂ to base 10.",
      options: { A: "9", B: "10", C: "11", D: "12" },
      correct: "C",
      explanation: "1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11₁₀. Binary uses powers of 2. Each digit (bit) position represents a power of 2 from right to left."
    },
    // Add 20 more questions to complete 40 for test1
  ],
  
  test2: [
    // 40 different Math questions focusing on different topics
  ],
  // Continue test3 through test20...
};