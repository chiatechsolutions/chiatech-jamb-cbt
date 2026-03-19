// questions/computer.js
window.QUESTION_BANK = window.QUESTION_BANK || {};

window.QUESTION_BANK["Computer"] = {
  test1: [
    {
      id: 1, topic: "Evolution of Computing",
      question: "The first generation of computers used which of the following for circuitry?",
      options: { A: "Transistors", B: "Vacuum Tubes", C: "Integrated Circuits", D: "Microprocessors" },
      correct: "B",
      explanation: "1st Gen: Vacuum Tubes; 2nd Gen: Transistors; 3rd Gen: Integrated Circuits (ICs); 4th Gen: Microprocessors (VLSI)."
    },
    {
      id: 2, topic: "Hardware",
      question: "Which part of the CPU is responsible for performing mathematical calculations and logical comparisons?",
      options: { A: "Control Unit", B: "Registers", C: "Arithmetic Logic Unit", D: "Cache" },
      correct: "C",
      explanation: "The ALU (Arithmetic Logic Unit) handles all calculations and logic (AND, OR, NOT)."
    },
    {
      id: 3, topic: "Storage",
      question: "Which of the following is a type of volatile memory?",
      options: { A: "ROM", B: "Hard Disk", C: "RAM", D: "Flash Drive" },
      correct: "C",
      explanation: "RAM (Random Access Memory) is volatile; its content is lost when power is turned off. ROM and disks are non-volatile."
    },
    {
      id: 4, topic: "Data Representation",
      question: "How many bits make up one byte?",
      options: { A: "4", B: "8", C: "16", D: "32" },
      correct: "B",
      explanation: "8 bits = 1 Byte. 4 bits = 1 Nibble."
    },
    {
      id: 5, topic: "Software",
      question: "An operating system is an example of:",
      options: { A: "Application software", B: "System software", C: "Utility software", D: "Malware" },
      correct: "B",
      explanation: "System software (like Windows, Linux, Android) manages the hardware and provides a platform for applications."
    },
    {
      id: 6, topic: "Networking",
      question: "The networking topology where all nodes are connected to a central hub is:",
      options: { A: "Bus", B: "Ring", C: "Star", D: "Mesh" },
      correct: "C",
      explanation: "In a STAR topology, if the central hub fails, the whole network goes down, but if one node fails, the rest stay active."
    },
    {
      id: 7, topic: "Internet",
      question: "HTTP stands for:",
      options: { A: "HyperText Transfer Protocol", B: "High Transfer Text Process", C: "Hyperlink Text Trade Protocol", D: "HyperText Type Procedure" },
      correct: "A",
      explanation: "HTTP is the foundation of data communication for the World Wide Web."
    },
    {
      id: 8, topic: "Number Systems",
      question: "The hexadecimal number system has a base of:",
      options: { A: "2", B: "8", C: "10", D: "16" },
      correct: "D",
      explanation: "Binary (Base 2), Octal (Base 8), Decimal (Base 10), Hexadecimal (Base 16)."
    },
    {
      id: 9, topic: "Logic Gates",
      question: "Which logic gate produces a HIGH output only when all its inputs are HIGH?",
      options: { A: "OR", B: "AND", C: "NOT", D: "NAND" },
      correct: "B",
      explanation: "The AND gate requires all inputs to be 1 (True) to output 1."
    },
    {
      id: 10, topic: "Computer Ethics",
      question: "The unauthorized copying and distribution of software is known as:",
      options: { A: "Hacking", B: "Phishing", C: "Software Piracy", D: "Spamming" },
      correct: "C",
      explanation: "Software piracy violates copyright laws and ethical use of intellectual property."
    },
    {
      id: 11, topic: "Input/Output",
      question: "Which of the following is both an input and output device?",
      options: { A: "Keyboard", B: "Monitor", C: "Touchscreen", D: "Printer" },
      correct: "C",
      explanation: "A touchscreen accepts input via touch and displays output visually."
    },
    {
      id: 12, topic: "Programming",
      question: "A program that translates high-level language into machine code line-by-line is a/an:",
      options: { A: "Compiler", B: "Interpreter", C: "Assembler", D: "Linker" },
      correct: "B",
      explanation: "Interpreters translate line-by-line; Compilers translate the entire program at once."
    },
    {
      id: 13, topic: "File Management",
      question: "The file extension '.docx' usually denotes a:",
      options: { A: "Spreadsheet", B: "Word document", C: "PowerPoint presentation", D: "Image file" },
      correct: "B",
      explanation: ".docx is the standard format for Microsoft Word. .xlsx is for Excel; .pptx is for PowerPoint."
    },
    {
      id: 14, topic: "Cybersecurity",
      question: "A program designed to replicate itself and spread to other computers is a:",
      options: { A: "Trojan Horse", B: "Virus", C: "Spyware", D: "Adware" },
      correct: "B",
      explanation: "A computer virus attaches itself to programs and replicates, often causing system harm."
    },
    {
      id: 15, topic: "MS Excel",
      question: "In Excel, a formula must always begin with a/an:",
      options: { A: "+", B: "#", C: "=", D: "@" },
      correct: "C",
      explanation: "The '=' sign tells Excel that the following characters constitute a mathematical or logical formula."
    },
    {
      id: 16, topic: "Databases",
      question: "In a database table, a unique identifier for each record is called a:",
      options: { A: "Foreign Key", B: "Primary Key", C: "Candidate Key", D: "Composite Key" },
      correct: "B",
      explanation: "A Primary Key ensures that no two rows in a table are identical (e.g., an ID number)."
    },
    {
      id: 17, topic: "Evolution of Computing",
      question: "Who is known as the 'Father of the Computer'?",
      options: { A: "Alan Turing", B: "Charles Babbage", C: "John von Neumann", D: "Blaise Pascal" },
      correct: "B",
      explanation: "Charles Babbage designed the Analytical Engine, the first general-purpose computer concept."
    },
    {
      id: 18, topic: "Hardware",
      question: "The 'Brain' of the computer is the:",
      options: { A: "Motherboard", B: "Hard Drive", C: "Central Processing Unit", D: "Power Supply" },
      correct: "C",
      explanation: "The CPU executes instructions and coordinates all hardware components."
    },
    {
      id: 19, topic: "Networking",
      question: "Which of these is the largest type of network?",
      options: { A: "LAN", B: "MAN", C: "WAN", D: "PAN" },
      correct: "C",
      explanation: "WAN (Wide Area Network) covers large geographical areas (e.g., the Internet). LAN is for a single building."
    },
    {
      id: 20, topic: "Data Representation",
      question: "The binary equivalent of the decimal number 10 is:",
      options: { A: "1001", B: "1010", C: "1100", D: "1111" },
      correct: "B",
      explanation: "8 + 0 + 2 + 0 in binary positions ($2^3, 2^2, 2^1, 2^0$) equals 1010."
    },
    {
      id: 21, topic: "Programming",
      question: "Which of the following is a low-level language?",
      options: { A: "Python", B: "Java", C: "Assembly Language", D: "C++" },
      correct: "C",
      explanation: "Assembly and Machine Language are low-level; Python and Java are high-level."
    },
    {
      id: 22, topic: "Cloud Computing",
      question: "Which service allows users to store and access data over the internet instead of a local hard drive?",
      options: { A: "Cloud Storage", B: "Virtualization", C: "Web Browsing", D: "Local Area Network" },
      correct: "A",
      explanation: "Examples include Google Drive, iCloud, and OneDrive."
    },
    {
      id: 23, topic: "Algorithms",
      question: "A graphical representation of the steps in an algorithm is a:",
      options: { A: "Pseudocode", B: "Flowchart", C: "Program", D: "Source Code" },
      correct: "B",
      explanation: "Flowcharts use standardized symbols (rectangles for process, diamonds for decisions) to map logic."
    },
    {
      id: 24, topic: "Logic Gates",
      question: "The NOT gate is also known as a/an:",
      options: { A: "Adder", B: "Inverter", C: "Multiplier", D: "Flip-flop" },
      correct: "B",
      explanation: "It 'inverts' the input: 0 becomes 1, and 1 becomes 0."
    },
    {
      id: 25, topic: "MS PowerPoint",
      question: "In PowerPoint, the shortcut key to start a slideshow from the beginning is:",
      options: { A: "F1", B: "F5", C: "F7", D: "F11" },
      correct: "B",
      explanation: "F5 launches the presentation mode instantly."
    },
    {
      id: 26, topic: "Hardware",
      question: "Which port is most commonly used to connect modern keyboards and mice?",
      options: { A: "VGA", B: "HDMI", C: "USB", D: "Parallel Port" },
      correct: "C",
      explanation: "USB (Universal Serial Bus) is the industry standard for peripheral connections."
    },
    {
      id: 27, topic: "Modern Trends",
      question: "What does 'AI' stand for in computing?",
      options: { A: "Advanced Interface", B: "Artificial Intelligence", C: "Automated Integration", D: "Array Instruction" },
      correct: "B",
      explanation: "Artificial Intelligence refers to the simulation of human intelligence by machines."
    },
    {
      id: 28, topic: "Number Systems",
      question: "The binary digits 0 and 1 are called:",
      options: { A: "Bytes", B: "Characters", C: "Bits", D: "Pixels" },
      correct: "C",
      explanation: "Bit is short for 'Binary Digit'."
    },
    {
      id: 29, topic: "Operating Systems",
      question: "Which of the following is an open-source operating system?",
      options: { A: "Windows 11", B: "macOS", C: "Linux", D: "iOS" },
      correct: "C",
      explanation: "Linux's source code is free and available for anyone to modify and distribute."
    },
    {
      id: 30, topic: "Keyboard",
      question: "Which key is used to cancel a command or close a dialog box?",
      options: { A: "Enter", B: "Shift", C: "Escape (Esc)", D: "Tab" },
      correct: "C",
      explanation: "The Esc key generally acts as a 'back' or 'cancel' button in software."
    },
    {
      id: 31, topic: "Internet",
      question: "A website's address is officially known as its:",
      options: { A: "IP address", B: "URL", C: "MAC address", D: "Domain" },
      correct: "B",
      explanation: "URL stands for Uniform Resource Locator."
    },
    {
      id: 32, topic: "Cybersecurity",
      question: "The act of sending fraudulent emails to steal sensitive information is:",
      options: { A: "Phishing", B: "Hacking", C: "Encryption", D: "Firewalling" },
      correct: "A",
      explanation: "Phishing emails often mimic banks or trusted sites to trick users into entering passwords."
    },
    {
      id: 33, topic: "Storage",
      question: "Which of these has the highest storage capacity?",
      options: { A: "CD-ROM", B: "DVD", C: "Blu-ray Disc", D: "Floppy Disk" },
      correct: "C",
      explanation: "Blu-ray can hold up to 50GB; DVD is ~4.7GB; CD is ~700MB."
    },
    {
      id: 34, topic: "Data Representation",
      question: "In computing, ASCII is used for representing:",
      options: { A: "Images", B: "Sound", C: "Text/Characters", D: "Video" },
      correct: "C",
      explanation: "ASCII (American Standard Code for Information Interchange) assigns numbers to characters."
    },
    {
      id: 35, topic: "MS Word",
      question: "The shortcut key for 'Undo' in most Windows applications is:",
      options: { A: "Ctrl + C", B: "Ctrl + V", C: "Ctrl + Z", D: "Ctrl + Y" },
      correct: "C",
      explanation: "Ctrl+Z undos; Ctrl+Y redos; Ctrl+C copies; Ctrl+V pastes."
    },
    {
      id: 36, topic: "Computer Types",
      question: "Powerful computers used by large organizations for bulk data processing are:",
      options: { A: "Microcomputers", B: "Mainframes", C: "Supercomputers", D: "Workstations" },
      correct: "B",
      explanation: "Mainframes are known for reliability and processing massive transactions (like in banks)."
    },
    {
      id: 37, topic: "Graphics",
      question: "A single dot on a computer screen is called a:",
      options: { A: "Bit", B: "Pixel", C: "Point", D: "Vector" },
      correct: "B",
      explanation: "Pixel is short for 'Picture Element'."
    },
    {
      id: 38, topic: "Logic Gates",
      question: "The gate that outputs the opposite of its input is the:",
      options: { A: "XOR", B: "NOT", C: "NOR", D: "OR" },
      correct: "B",
      explanation: "If input is 1, output is 0. If input is 0, output is 1."
    },
    {
      id: 39, topic: "Internet",
      question: "A program used to view web pages is called a:",
      options: { A: "Search Engine", B: "Web Browser", C: "URL", D: "Web Server" },
      correct: "B",
      explanation: "Examples of browsers include Chrome, Firefox, and Edge."
    },
    {
      id: 40, topic: "Modern Trends",
      question: "What technology allows physical objects to connect and exchange data over the internet?",
      options: { A: "Virtual Reality", B: "Blockchain", C: "Internet of Things (IoT)", D: "Big Data" },
      correct: "C",
      explanation: "IoT includes smart fridges, smart watches, and connected industrial sensors."
    }
  ]
};