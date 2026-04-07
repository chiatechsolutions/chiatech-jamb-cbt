// questions/computer.js

  window.QUESTION_BANK = window.QUESTION_BANK || {};

window.QUESTION_BANK["Computer"] = {
  test1: [
    {
      id: 1, topic: "Evolution of Computing",
      question: "The first generation of computers used which of the following for circuitry?",
      options: { A: "Transistors", B: "Vacuum Tubes", C: "Integrated Circuits", D: "Microprocessors" },
      correct: "B",
      explanation: "KEY RULE: First generation computers used vacuum tubes for circuitry. NOTE: Transistors belong to second generation, integrated circuits to third generation, and microprocessors to fourth generation. REMEMBER: The evolution moved from large, hot vacuum tubes to smaller and faster components."
    },
    {
      id: 2, topic: "Hardware",
      question: "Which part of the CPU is responsible for performing mathematical calculations and logical comparisons?",
      options: { A: "Control Unit", B: "Registers", C: "Arithmetic Logic Unit", D: "Cache" },
      correct: "C",
      explanation: "KEY RULE: The Arithmetic Logic Unit handles arithmetic operations and logical comparisons. NOTE: The Control Unit directs operations, registers hold very small temporary data, and cache improves access speed. REMEMBER: ALU is the calculating and decision-making unit inside the CPU."
    },
    {
      id: 3, topic: "Storage",
      question: "Which of the following is a type of volatile memory?",
      options: { A: "ROM", B: "Hard Disk", C: "RAM", D: "Flash Drive" },
      correct: "C",
      explanation: "KEY RULE: RAM is volatile because its contents are lost when power is switched off. NOTE: ROM, hard disk, and flash drive are non-volatile storage types. REMEMBER: Volatile memory needs constant power to retain data."
    },
    {
      id: 4, topic: "Data Representation",
      question: "How many bits make up one byte?",
      options: { A: "4", B: "8", C: "16", D: "32" },
      correct: "B",
      explanation: "KEY RULE: One byte is made up of 8 bits. NOTE: Four bits make one nibble, while 16 and 32 bits are larger groupings used in some systems. REMEMBER: Bit is the smallest unit, byte is the common storage block."
    },
    {
      id: 5, topic: "Software",
      question: "An operating system is an example of:",
      options: { A: "Application software", B: "System software", C: "Utility software", D: "Malware" },
      correct: "B",
      explanation: "KEY RULE: An operating system is system software because it manages hardware resources and supports application programs. NOTE: Application software solves user tasks, utility software performs maintenance, and malware is harmful software. REMEMBER: Windows, Linux, and Android are all system software."
    },
    {
      id: 6, topic: "Networking",
      question: "The networking topology where all nodes are connected to a central hub is:",
      options: { A: "Bus", B: "Ring", C: "Star", D: "Mesh" },
      correct: "C",
      explanation: "KEY RULE: In a star topology, every node connects to a central hub or switch. NOTE: Bus uses one main cable, ring forms a loop, and mesh connects nodes more extensively. REMEMBER: Star looks like spokes joining a central point."
    },
    {
      id: 7, topic: "Internet",
      question: "HTTP stands for:",
      options: { A: "HyperText Transfer Protocol", B: "High Transfer Text Process", C: "Hyperlink Text Trade Protocol", D: "HyperText Type Procedure" },
      correct: "A",
      explanation: "KEY RULE: HTTP means HyperText Transfer Protocol. NOTE: It is the standard protocol used to transfer web pages across the World Wide Web; the other options are incorrect expansions. REMEMBER: HTTP is seen at the beginning of many web addresses."
    },
    {
      id: 8, topic: "Number Systems",
      question: "The hexadecimal number system has a base of:",
      options: { A: "2", B: "8", C: "10", D: "16" },
      correct: "D",
      explanation: "KEY RULE: Hexadecimal is base 16 and uses digits 0-9 and letters A-F. NOTE: Binary is base 2, octal is base 8, and decimal is base 10. REMEMBER: Hex is commonly used to represent binary values in shorter form."
    },
    {
      id: 9, topic: "Logic Gates",
      question: "Which logic gate produces a HIGH output only when all its inputs are HIGH?",
      options: { A: "OR", B: "AND", C: "NOT", D: "NAND" },
      correct: "B",
      explanation: "KEY RULE: An AND gate outputs 1 only when all inputs are 1. NOTE: OR gives 1 if at least one input is 1, NOT inverts a single input, and NAND is the opposite of AND. REMEMBER: AND is strict because every condition must be true."
    },
    {
      id: 10, topic: "Computer Ethics",
      question: "The unauthorized copying and distribution of software is known as:",
      options: { A: "Hacking", B: "Phishing", C: "Software Piracy", D: "Spamming" },
      correct: "C",
      explanation: "KEY RULE: Software piracy is the illegal copying or sharing of software without permission. NOTE: Hacking involves unauthorized access, phishing steals information, and spamming sends unwanted messages. REMEMBER: Piracy violates copyright and intellectual property laws."
    },
    {
      id: 11, topic: "Input/Output",
      question: "Which of the following is both an input and output device?",
      options: { A: "Keyboard", B: "Monitor", C: "Touchscreen", D: "Printer" },
      correct: "C",
      explanation: "KEY RULE: A touchscreen displays information and also accepts input through touch. NOTE: Keyboard is input only, while monitor and printer are output only. REMEMBER: Some modern devices combine display and interaction in one unit."
    },
    {
      id: 12, topic: "Programming",
      question: "A program that translates high-level language into machine code line-by-line is a/an:",
      options: { A: "Compiler", B: "Interpreter", C: "Assembler", D: "Linker" },
      correct: "B",
      explanation: "KEY RULE: An interpreter translates and executes source code one line at a time. NOTE: A compiler translates the whole program before execution, assembler handles assembly language, and linker joins program modules. REMEMBER: Interpret means translate as you go."
    },
    {
      id: 13, topic: "File Management",
      question: "The file extension '.docx' usually denotes a:",
      options: { A: "Spreadsheet", B: "Word document", C: "PowerPoint presentation", D: "Image file" },
      correct: "B",
      explanation: "KEY RULE: The .docx extension is used for Microsoft Word documents. NOTE: .xlsx is for Excel spreadsheets and .pptx is for PowerPoint presentations. REMEMBER: DOC relates to document editing in Word."
    },
    {
      id: 14, topic: "Cybersecurity",
      question: "A program designed to replicate itself and spread to other computers is a:",
      options: { A: "Trojan Horse", B: "Virus", C: "Spyware", D: "Adware" },
      correct: "B",
      explanation: "KEY RULE: A virus is malicious software that can copy itself and spread from one system to another. NOTE: A Trojan disguises itself as legitimate software, spyware secretly monitors users, and adware pushes unwanted ads. REMEMBER: Viruses infect and multiply."
    },
    {
      id: 15, topic: "MS Excel",
      question: "In Excel, a formula must always begin with a/an:",
      options: { A: "+", B: "#", C: "=", D: "@" },
      correct: "C",
      explanation: "KEY RULE: Excel formulas begin with the equals sign to indicate a calculation or function. NOTE: The other symbols do not correctly start standard spreadsheet formulas. REMEMBER: No equals sign, no formula processing."
    },
    {
      id: 16, topic: "Databases",
      question: "In a database table, a unique identifier for each record is called a:",
      options: { A: "Foreign Key", B: "Primary Key", C: "Candidate Key", D: "Composite Key" },
      correct: "B",
      explanation: "KEY RULE: A primary key uniquely identifies each record in a table. NOTE: A foreign key links tables, a candidate key is a possible unique field, and a composite key combines multiple fields. REMEMBER: Every table should have a reliable way to identify each row uniquely."
    },
    {
      id: 17, topic: "Evolution of Computing",
      question: "Who is known as the 'Father of the Computer'?",
      options: { A: "Alan Turing", B: "Charles Babbage", C: "John von Neumann", D: "Blaise Pascal" },
      correct: "B",
      explanation: "KEY RULE: Charles Babbage is called the Father of the Computer because of his design of the Analytical Engine. NOTE: Alan Turing contributed greatly to computing theory, John von Neumann to computer architecture, and Blaise Pascal built an early calculator. REMEMBER: Babbage's ideas laid the foundation for modern computers."
    },
    {
      id: 18, topic: "Hardware",
      question: "The 'Brain' of the computer is the:",
      options: { A: "Motherboard", B: "Hard Drive", C: "Central Processing Unit", D: "Power Supply" },
      correct: "C",
      explanation: "KEY RULE: The CPU is regarded as the brain because it processes instructions and controls operations. NOTE: The motherboard connects components, the hard drive stores data, and the power supply provides electricity. REMEMBER: Processing and control happen mainly in the CPU."
    },
    {
      id: 19, topic: "Networking",
      question: "Which of these is the largest type of network?",
      options: { A: "LAN", B: "MAN", C: "WAN", D: "PAN" },
      correct: "C",
      explanation: "KEY RULE: WAN covers a wide geographical area, often spanning countries or continents. NOTE: LAN is local, MAN is metropolitan, and PAN covers a very small personal range. REMEMBER: The Internet is the best-known example of a WAN."
    },
    {
      id: 20, topic: "Data Representation",
      question: "The binary equivalent of the decimal number 10 is:",
      options: { A: "1001", B: "1010", C: "1100", D: "1111" },
      correct: "B",
      explanation: "FORMULA: Decimal 10 equals 8 + 2, so its binary form is 1010. NOTE: 1001 is 9, 1100 is 12, and 1111 is 15. REMEMBER: Check binary place values from right to left as 1, 2, 4, 8."
    },
    {
      id: 21, topic: "Programming",
      question: "Which of the following is a low-level language?",
      options: { A: "Python", B: "Java", C: "Assembly Language", D: "C++" },
      correct: "C",
      explanation: "KEY RULE: Assembly language is a low-level language because it is close to machine language. NOTE: Python, Java and C++ are high-level languages designed to be easier for humans to use. REMEMBER: Low-level languages have stronger hardware dependence."
    },
    {
      id: 22, topic: "Cloud Computing",
      question: "Which service allows users to store and access data over the internet instead of a local hard drive?",
      options: { A: "Cloud Storage", B: "Virtualization", C: "Web Browsing", D: "Local Area Network" },
      correct: "A",
      explanation: "KEY RULE: Cloud storage allows files to be saved and retrieved online from remote servers. NOTE: Virtualization creates virtual systems, web browsing accesses websites, and LAN is a network type. REMEMBER: Google Drive and OneDrive are common cloud storage services."
    },
    {
      id: 23, topic: "Algorithms",
      question: "A graphical representation of the steps in an algorithm is a:",
      options: { A: "Pseudocode", B: "Flowchart", C: "Program", D: "Source Code" },
      correct: "B",
      explanation: "KEY RULE: A flowchart uses symbols and arrows to show the sequence of steps in solving a problem. NOTE: Pseudocode is written in plain structured language, while program and source code are actual coding forms. REMEMBER: Flowcharts help visualize logic before coding."
    },
    {
      id: 24, topic: "Logic Gates",
      question: "The NOT gate is also known as a/an:",
      options: { A: "Adder", B: "Inverter", C: "Multiplier", D: "Flip-flop" },
      correct: "B",
      explanation: "KEY RULE: A NOT gate is called an inverter because it reverses the input state. NOTE: Adder performs addition, multiplier multiplies values, and flip-flop is a memory circuit. REMEMBER: NOT simply changes 1 to 0 and 0 to 1."
    },
    {
      id: 25, topic: "MS PowerPoint",
      question: "In PowerPoint, the shortcut key to start a slideshow from the beginning is:",
      options: { A: "F1", B: "F5", C: "F7", D: "F11" },
      correct: "B",
      explanation: "KEY RULE: F5 starts a PowerPoint slideshow from the first slide. NOTE: F1 usually opens help, while F7 is often spell check in Microsoft Office. REMEMBER: F5 is a popular presentation shortcut for quick delivery."
    },
    {
      id: 26, topic: "Hardware",
      question: "Which port is most commonly used to connect modern keyboards and mice?",
      options: { A: "VGA", B: "HDMI", C: "USB", D: "Parallel Port" },
      correct: "C",
      explanation: "KEY RULE: USB is the standard interface for most modern keyboards, mice and many peripherals. NOTE: VGA and HDMI are display connectors, while parallel ports are older and less common today. REMEMBER: USB supports easy plug-and-play connection."
    },
    {
      id: 27, topic: "Modern Trends",
      question: "What does 'AI' stand for in computing?",
      options: { A: "Advanced Interface", B: "Artificial Intelligence", C: "Automated Integration", D: "Array Instruction" },
      correct: "B",
      explanation: "KEY RULE: AI stands for Artificial Intelligence. NOTE: It refers to computer systems designed to imitate aspects of human intelligence such as learning, reasoning and decision-making. REMEMBER: AI powers tools like chatbots, recommendations and smart assistants."
    },
    {
      id: 28, topic: "Number Systems",
      question: "The binary digits 0 and 1 are called:",
      options: { A: "Bytes", B: "Characters", C: "Bits", D: "Pixels" },
      correct: "C",
      explanation: "KEY RULE: A bit means binary digit and can only be 0 or 1. NOTE: A byte is made of 8 bits, characters are symbols, and pixels are picture elements on a screen. REMEMBER: All digital data is ultimately built from bits."
    },
    {
      id: 29, topic: "Operating Systems",
      question: "Which of the following is an open-source operating system?",
      options: { A: "Windows 11", B: "macOS", C: "Linux", D: "iOS" },
      correct: "C",
      explanation: "KEY RULE: Linux is open source because its source code can be studied, modified and distributed freely. NOTE: Windows, macOS and iOS are mainly proprietary systems. REMEMBER: Open source encourages customization and community development."
    },
    {
      id: 30, topic: "Keyboard",
      question: "Which key is used to cancel a command or close a dialog box?",
      options: { A: "Enter", B: "Shift", C: "Escape (Esc)", D: "Tab" },
      correct: "C",
      explanation: "KEY RULE: The Esc key is commonly used to cancel an operation or exit a dialog box. NOTE: Enter confirms actions, Shift modifies input, and Tab moves focus between fields. REMEMBER: Esc often means back out or stop."
    },
    {
      id: 31, topic: "Internet",
      question: "A website's address is officially known as its:",
      options: { A: "IP address", B: "URL", C: "MAC address", D: "Domain" },
      correct: "B",
      explanation: "KEY RULE: URL stands for Uniform Resource Locator and identifies the location of a resource on the web. NOTE: IP address identifies a networked device, MAC address identifies hardware, and domain is only one part of the web address. REMEMBER: A full web address is called a URL."
    },
    {
      id: 32, topic: "Cybersecurity",
      question: "The act of sending fraudulent emails to steal sensitive information is:",
      options: { A: "Phishing", B: "Hacking", C: "Encryption", D: "Firewalling" },
      correct: "A",
      explanation: "KEY RULE: Phishing involves fake messages designed to trick users into revealing passwords or financial details. NOTE: Hacking is broader unauthorized access, encryption protects data, and firewalling is not the attack described here. REMEMBER: Be suspicious of urgent emails asking for personal information."
    },
    {
      id: 33, topic: "Storage",
      question: "Which of these has the highest storage capacity?",
      options: { A: "CD-ROM", B: "DVD", C: "Blu-ray Disc", D: "Floppy Disk" },
      correct: "C",
      explanation: "KEY RULE: Blu-ray discs store more data than DVDs, CDs and floppy disks. NOTE: Typical capacities are about 700MB for CD, 4.7GB for DVD, and much less for floppy disks. REMEMBER: Blu-ray is used when higher-capacity optical storage is needed."
    },
    {
      id: 34, topic: "Data Representation",
      question: "In computing, ASCII is used for representing:",
      options: { A: "Images", B: "Sound", C: "Text/Characters", D: "Video" },
      correct: "C",
      explanation: "KEY RULE: ASCII is a coding system for representing letters, digits and other text characters. NOTE: It does not directly represent images, sound or video. REMEMBER: ASCII helped standardize character encoding across systems."
    },
    {
      id: 35, topic: "MS Word",
      question: "The shortcut key for 'Undo' in most Windows applications is:",
      options: { A: "Ctrl + C", B: "Ctrl + V", C: "Ctrl + Z", D: "Ctrl + Y" },
      correct: "C",
      explanation: "KEY RULE: Ctrl + Z reverses the most recent action. NOTE: Ctrl + C copies, Ctrl + V pastes, and Ctrl + Y usually redoes or repeats an action. REMEMBER: Undo is one of the most important editing shortcuts."
    },
    {
      id: 36, topic: "Computer Types",
      question: "Powerful computers used by large organizations for bulk data processing are:",
      options: { A: "Microcomputers", B: "Mainframes", C: "Supercomputers", D: "Workstations" },
      correct: "B",
      explanation: "KEY RULE: Mainframes are designed for massive transaction processing and high reliability in large organizations. NOTE: Microcomputers are personal systems, supercomputers focus on scientific computation, and workstations support technical tasks. REMEMBER: Banks and large institutions often rely on mainframes."
    },
    {
      id: 37, topic: "Graphics",
      question: "A single dot on a computer screen is called a:",
      options: { A: "Bit", B: "Pixel", C: "Point", D: "Vector" },
      correct: "B",
      explanation: "KEY RULE: A pixel is the smallest visible unit of a digital image or display. NOTE: A bit is a binary digit, a vector is a graphics format idea, and point is too general here. REMEMBER: More pixels usually mean finer image detail."
    },
    {
      id: 38, topic: "Logic Gates",
      question: "The gate that outputs the opposite of its input is the:",
      options: { A: "XOR", B: "NOT", C: "NOR", D: "OR" },
      correct: "B",
      explanation: "KEY RULE: The NOT gate inverts the input state. NOTE: XOR compares inputs, NOR combines OR with negation, and OR outputs 1 if any input is 1. REMEMBER: NOT is the simplest logic gate because it only reverses."
    },
    {
      id: 39, topic: "Internet",
      question: "A program used to view web pages is called a:",
      options: { A: "Search Engine", B: "Web Browser", C: "URL", D: "Web Server" },
      correct: "B",
      explanation: "KEY RULE: A web browser is software used to access and display web pages. NOTE: A search engine helps find information, a URL is an address, and a web server hosts web content. REMEMBER: Chrome, Firefox and Edge are browsers."
    },
    {
      id: 40, topic: "Modern Trends",
      question: "What technology allows physical objects to connect and exchange data over the internet?",
      options: { A: "Virtual Reality", B: "Blockchain", C: "Internet of Things (IoT)", D: "Big Data" },
      correct: "C",
      explanation: "KEY RULE: IoT refers to physical devices connected to the internet to collect and exchange data. NOTE: Virtual Reality focuses on immersive environments, blockchain on distributed records, and big data on large-scale data analysis. REMEMBER: Smart homes and wearable devices are common IoT examples."
    }
  ],
    test2: [
    {
      id: 1, topic: "Early Computing",
      question: "Which of the following devices was used mainly for counting in the early history of computing?",
      options: { A: "Abacus", B: "Scanner", C: "Compiler", D: "Modem" },
      correct: "A",
      explanation: "KEY RULE: The abacus is one of the earliest devices used for counting and simple arithmetic. NOTE: Scanner and modem are modern devices, while a compiler is software. REMEMBER: Early computing devices were mechanical, not electronic."
    },
    {
      id: 2, topic: "Computer Generations",
      question: "The major technology associated with third generation computers is",
      options: { A: "Vacuum tubes", B: "Transistors", C: "Integrated circuits", D: "Microprocessors" },
      correct: "C",
      explanation: "KEY RULE: Third generation computers used integrated circuits (ICs). NOTE: Vacuum tubes = first generation, transistors = second, microprocessors = fourth. REMEMBER: ICs made computers smaller and faster."
    },
    {
      id: 3, topic: "Computer Types",
      question: "A computer designed to perform a single specific task is called a",
      options: { A: "General-purpose computer", B: "Special-purpose computer", C: "Hybrid computer", D: "Supercomputer" },
      correct: "B",
      explanation: "KEY RULE: Special-purpose computers are designed for one specific task. NOTE: General-purpose systems handle multiple tasks. REMEMBER: ATM machines and embedded systems are examples."
    },
    {
      id: 4, topic: "Computer Characteristics",
      question: "The ability of a computer to perform repetitive tasks without getting tired is called",
      options: { A: "Accuracy", B: "Diligence", C: "Speed", D: "Versatility" },
      correct: "B",
      explanation: "KEY RULE: Diligence refers to performing tasks repeatedly without fatigue. NOTE: Accuracy relates to correctness, speed to fast processing. REMEMBER: Computers do not get tired like humans."
    },
    {
      id: 5, topic: "Input Devices",
      question: "Which of the following devices is used to capture images into a computer system?",
      options: { A: "Scanner", B: "Speaker", C: "Printer", D: "Plotter" },
      correct: "A",
      explanation: "KEY RULE: A scanner converts hard copy images into digital format. NOTE: Others are output devices. REMEMBER: Scan = input from paper to system."
    },
    {
      id: 6, topic: "Keyboard",
      question: "The keys used to move the cursor on the screen are called",
      options: { A: "Function keys", B: "Numeric keys", C: "Cursor control keys", D: "Alphabet keys" },
      correct: "C",
      explanation: "KEY RULE: Cursor keys move the pointer or insertion point. NOTE: Function keys perform commands. REMEMBER: Arrow keys are cursor keys."
    },
    {
      id: 7, topic: "Output Devices",
      question: "Which device is used to produce sound output from a computer?",
      options: { A: "Monitor", B: "Speaker", C: "Keyboard", D: "Mouse" },
      correct: "B",
      explanation: "KEY RULE: Speakers convert digital signals into sound. NOTE: Monitor shows visuals; keyboard and mouse are input devices. REMEMBER: Audio output requires speakers."
    },
    {
      id: 8, topic: "CPU Registers",
      question: "Which register holds the next instruction to be executed?",
      options: { A: "Program Counter", B: "Accumulator", C: "MAR", D: "MDR" },
      correct: "A",
      explanation: "KEY RULE: The Program Counter stores the address of the next instruction. NOTE: MAR stores addresses, MDR stores data. REMEMBER: PC = next instruction tracker."
    },
    {
      id: 9, topic: "Primary Memory",
      question: "Which of the following is volatile memory?",
      options: { A: "ROM", B: "RAM", C: "Hard disk", D: "DVD" },
      correct: "B",
      explanation: "KEY RULE: RAM loses its contents when power is off. NOTE: ROM and disks are non-volatile. REMEMBER: RAM is temporary memory."
    },
    {
      id: 10, topic: "Storage Units",
      question: "1 byte is equal to",
      options: { A: "4 bits", B: "8 bits", C: "16 bits", D: "2 bits" },
      correct: "B",
      explanation: "KEY RULE: 1 byte = 8 bits. NOTE: 4 bits = nibble. REMEMBER: Byte is the standard memory unit."
    },
    {
      id: 11, topic: "Logic Gates",
      question: "Which gate outputs 1 only when both inputs are 1?",
      options: { A: "OR", B: "AND", C: "NOT", D: "NOR" },
      correct: "B",
      explanation: "KEY RULE: AND gate requires all inputs to be HIGH. NOTE: OR needs only one input HIGH. REMEMBER: AND = strict condition."
    },
    {
      id: 12, topic: "Operating System",
      question: "Which is NOT a function of an operating system?",
      options: { A: "Memory management", B: "File management", C: "Device management", D: "Chip manufacturing" },
      correct: "D",
      explanation: "KEY RULE: OS manages resources, not hardware production. NOTE: Chip manufacturing is hardware engineering. REMEMBER: OS controls, not builds."
    },
    {
      id: 13, topic: "Utility Software",
      question: "Software used to protect against viruses is",
      options: { A: "Spreadsheet", B: "Antivirus", C: "Word processor", D: "Database" },
      correct: "B",
      explanation: "KEY RULE: Antivirus software detects and removes malware. NOTE: Others are application software. REMEMBER: Protection requires antivirus."
    },
    {
      id: 14, topic: "Data and Information",
      question: "Processed data that is meaningful is called",
      options: { A: "Data", B: "Information", C: "Byte", D: "Instruction" },
      correct: "B",
      explanation: "KEY RULE: Information is processed data. NOTE: Data is raw facts. REMEMBER: Processing adds meaning."
    },
    {
      id: 15, topic: "Logic Gates",
      question: "What is the output expression for the circuit shown above?",
      diagram: "assets/computer/test2/question15.png",
      options: { A: "ABC + BC", B: "(A + B) + (B + C)", C: "AB + AC", D: "A'B + BC" },
      correct: "D",
      explanation: "KEY RULE: A passes through NOT giving A'. NOTE: Top AND gives A'B, bottom AND gives BC, final OR combines them. REMEMBER: Solve circuits left to right: NOT → AND → OR."
    },
    {
      id: 16, topic: "Word Processing",
      question: "Which feature is used to correct spelling errors in MS Word?",
      options: { A: "Spell check", B: "Insert", C: "Print", D: "Slide show" },
      correct: "A",
      explanation: "KEY RULE: Spell check detects spelling errors. NOTE: Insert adds content; print outputs document. REMEMBER: Always check spelling before submission."
    },
    {
      id: 17, topic: "Spreadsheet",
      question: "A collection of worksheets is called a",
      options: { A: "Cell", B: "Workbook", C: "Range", D: "Database" },
      correct: "B",
      explanation: "KEY RULE: Workbook contains worksheets. NOTE: Cell is a single unit. REMEMBER: Excel file = workbook."
    },
    {
      id: 18, topic: "Database",
      question: "A row in a database table is called a",
      options: { A: "Field", B: "Record", C: "Column", D: "Attribute" },
      correct: "B",
      explanation: "KEY RULE: Row = record. NOTE: Column = field. REMEMBER: Record holds complete data."
    },
    {
      id: 19, topic: "Database Organization",
      question: "Parent-child database structure is called",
      options: { A: "Relational", B: "Hierarchical", C: "Flat", D: "Sequential" },
      correct: "B",
      explanation: "KEY RULE: Hierarchical model uses tree structure. NOTE: Relational uses tables. REMEMBER: Tree = hierarchy."
    },
    {
      id: 20, topic: "Graphics",
      question: "Which is a graphics package?",
      options: { A: "CorelDraw", B: "Excel", C: "Access", D: "Linux" },
      correct: "A",
      explanation: "KEY RULE: CorelDraw is used for graphic design. NOTE: Others serve different purposes. REMEMBER: Graphics = design tools."
    },
    {
      id: 21, topic: "Presentation",
      question: "Software used for slide presentations is",
      options: { A: "PowerPoint", B: "Word", C: "Access", D: "Paint" },
      correct: "A",
      explanation: "KEY RULE: PowerPoint creates slides. NOTE: Word is for documents. REMEMBER: Slides = PowerPoint."
    },
    {
      id: 22, topic: "Web Design",
      question: "Which is used for creating web pages?",
      options: { A: "Dreamweaver", B: "Scanner", C: "Compiler", D: "Speaker" },
      correct: "A",
      explanation: "KEY RULE: Dreamweaver is a web design tool. NOTE: Others are not for web design. REMEMBER: Websites need design tools."
    },
    {
      id: 23, topic: "File Operations",
      question: "Which is NOT a file operation?",
      options: { A: "Delete", B: "Copy", C: "Retrieve", D: "Compile" },
      correct: "D",
      explanation: "KEY RULE: Compile is programming, not file management. NOTE: Others are file operations. REMEMBER: Files are managed, programs are compiled."
    },
    {
      id: 24, topic: "Data Loss",
      question: "Which is a cause of data loss?",
      options: { A: "Backup", B: "Deletion", C: "Labeling", D: "Security" },
      correct: "B",
      explanation: "KEY RULE: Accidental deletion causes data loss. NOTE: Backup prevents loss. REMEMBER: Always backup data."
    },
    {
      id: 25, topic: "Booting",
      question: "Starting a computer from OFF state is",
      options: { A: "Warm boot", B: "Cold boot", C: "Debugging", D: "Spooling" },
      correct: "B",
      explanation: "KEY RULE: Cold boot starts from power-off. NOTE: Warm boot is restart. REMEMBER: Cold = from off."
    },
    {
      id: 26, topic: "Maintenance",
      question: "Which is proper maintenance?",
      options: { A: "Blocking vents", B: "Dust exposure", C: "Regular cleaning", D: "Spilling liquid" },
      correct: "C",
      explanation: "KEY RULE: Cleaning maintains system health. NOTE: Others damage systems. REMEMBER: Clean systems last longer."
    },
    {
      id: 27, topic: "ICT",
      question: "ICT combines computing with",
      options: { A: "Agriculture", B: "Communication", C: "Transport", D: "Construction" },
      correct: "B",
      explanation: "KEY RULE: ICT = Information + Communication Technology. NOTE: Others are unrelated. REMEMBER: Communication is key."
    },
    {
      id: 28, topic: "Network Types",
      question: "City-wide network is",
      options: { A: "LAN", B: "PAN", C: "MAN", D: "WAN" },
      correct: "C",
      explanation: "KEY RULE: MAN covers a city. NOTE: WAN covers larger areas. REMEMBER: Metropolitan = MAN."
    },
    {
      id: 29, topic: "Email",
      question: "Part after '@' is called",
      options: { A: "Username", B: "Domain", C: "Password", D: "File" },
      correct: "B",
      explanation: "KEY RULE: Domain identifies service provider. NOTE: Username is before '@'. REMEMBER: user@domain."
    },
    {
      id: 30, topic: "Internet Services",
      question: "Sending electronic messages is done via",
      options: { A: "FTP", B: "Email", C: "WWW", D: "LAN" },
      correct: "B",
      explanation: "KEY RULE: Email sends messages electronically. NOTE: FTP transfers files. REMEMBER: Email = communication."
    },
    {
      id: 31, topic: "Network Devices",
      question: "Device that boosts signals is",
      options: { A: "Repeater", B: "Mouse", C: "Printer", D: "Scanner" },
      correct: "A",
      explanation: "KEY RULE: Repeater regenerates signals. NOTE: Others are not network devices. REMEMBER: Repeaters extend distance."
    },
    {
      id: 32, topic: "WWW",
      question: "HTML stands for",
      options: { A: "HyperText Markup Language", B: "High Text Machine Language", C: "Hyper Transfer Mark Language", D: "Home Tool Markup Language" },
      correct: "A",
      explanation: "KEY RULE: HTML structures web pages. NOTE: Others are incorrect expansions. REMEMBER: HTML builds web pages."
    },
    {
      id: 33, topic: "Programming",
      question: "Which is high-level language?",
      options: { A: "Machine code", B: "Assembly", C: "Python", D: "Binary" },
      correct: "C",
      explanation: "KEY RULE: Python is high-level. NOTE: Others are low-level. REMEMBER: High-level is human-friendly."
    },
    {
      id: 34, topic: "Algorithm",
      question: "A property of algorithm is",
      options: { A: "Ambiguity", B: "Definiteness", C: "Infinite loop", D: "Unclear steps" },
      correct: "B",
      explanation: "KEY RULE: Definiteness means clear steps. NOTE: Algorithms must not be ambiguous. REMEMBER: Clarity is essential."
    },
    {
      id: 35, topic: "Flowchart",
      question: "Input/output symbol is",
      options: { A: "Rectangle", B: "Diamond", C: "Parallelogram", D: "Oval" },
      correct: "C",
      explanation: "KEY RULE: Parallelogram represents input/output. NOTE: Rectangle = process, diamond = decision. REMEMBER: Slanted shape = I/O."
    },
    {
      id: 36, topic: "Program Development",
      question: "After problem analysis comes",
      options: { A: "Design", B: "Maintenance", C: "Review", D: "Shutdown" },
      correct: "A",
      explanation: "KEY RULE: Design follows analysis. NOTE: Maintenance comes later. REMEMBER: Analyze → Design → Code."
    },
    {
      id: 37, topic: "AI",
      question: "AI that learns from data is",
      options: { A: "Machine Learning", B: "Mail Merge", C: "Booting", D: "Formatting" },
      correct: "A",
      explanation: "KEY RULE: Machine learning enables systems to learn from data. NOTE: Others are unrelated. REMEMBER: Learning = AI."
    },
    {
      id: 38, topic: "Robotics",
      question: "Robot component for movement is",
      options: { A: "Actuator", B: "Worksheet", C: "Domain", D: "Paragraph" },
      correct: "A",
      explanation: "KEY RULE: Actuators produce movement. NOTE: Others are unrelated. REMEMBER: Act = actuator."
    },
    {
      id: 39, topic: "Cybercrime",
      question: "Unauthorized access is",
      options: { A: "Booting", B: "Hacking", C: "Printing", D: "Scanning" },
      correct: "B",
      explanation: "KEY RULE: Hacking is unauthorized access. NOTE: Others are normal operations. REMEMBER: Access without permission = hacking."
    },
    {
      id: 40, topic: "Security",
      question: "Best way to prevent unauthorized access is",
      options: { A: "No password", B: "Share password", C: "Strong password", D: "Turn off monitor" },
      correct: "C",
      explanation: "KEY RULE: Strong passwords secure systems. NOTE: Sharing passwords weakens security. REMEMBER: Security starts with access control."
    }
  ],
  test3: [
    {
      id: 1, topic: "History of Computing",
      question: "Which mechanical device was invented by Blaise Pascal to perform arithmetic operations?",
      options: { A: "Analytical Engine", B: "Pascal Calculator", C: "Abacus", D: "Jacquard Loom" },
      correct: "B",
      explanation: "KEY RULE: Pascal invented the Pascaline for addition and subtraction. NOTE: Analytical Engine was by Babbage, Abacus predates Pascal, Jacquard Loom used punched cards. REMEMBER: Pascal = mechanical calculator."
    },
    {
      id: 2, topic: "Computer Generations",
      question: "Which generation introduced microprocessors?",
      options: { A: "First", B: "Second", C: "Third", D: "Fourth" },
      correct: "D",
      explanation: "KEY RULE: Fourth generation computers use microprocessors. NOTE: Earlier generations used vacuum tubes, transistors and ICs. REMEMBER: Microprocessor = modern computing."
    },
    {
      id: 3, topic: "Computer Types",
      question: "A handheld smartphone is classified as",
      diagram: "assets/computer/test3/question3.png",
      options: { A: "Mainframe", B: "Supercomputer", C: "Microcomputer", D: "Minicomputer" },
      correct: "C",
      explanation: "KEY RULE: Smartphones are microcomputers due to their size and personal use. NOTE: Mainframes and supercomputers are large systems. REMEMBER: Personal devices = microcomputers."
    },
    {
      id: 4, topic: "Hardware",
      question: "Which component connects all parts of a computer together?",
      options: { A: "CPU", B: "Motherboard", C: "RAM", D: "Hard disk" },
      correct: "B",
      explanation: "KEY RULE: Motherboard is the main circuit board connecting all components. NOTE: CPU processes, RAM stores temporarily. REMEMBER: Motherboard = central connection hub."
    },
    {
      id: 5, topic: "Input Devices",
      question: "Which device is used to control cursor movement on screen?",
      options: { A: "Printer", B: "Mouse", C: "Speaker", D: "Plotter" },
      correct: "B",
      explanation: "KEY RULE: Mouse controls pointer movement. NOTE: Others are output devices. REMEMBER: Cursor movement = mouse."
    },
    {
      id: 6, topic: "Output Devices",
      question: "Which device produces visual output?",
      options: { A: "Keyboard", B: "Scanner", C: "Monitor", D: "Joystick" },
      correct: "C",
      explanation: "KEY RULE: Monitor displays visual output. NOTE: Others are input devices. REMEMBER: Screen = monitor."
    },
    {
      id: 7, topic: "Memory",
      question: "Which memory retains data even after power is off?",
      options: { A: "RAM", B: "Cache", C: "ROM", D: "Registers" },
      correct: "C",
      explanation: "KEY RULE: ROM is non-volatile. NOTE: RAM is volatile. REMEMBER: ROM stores permanent data."
    },
    {
      id: 8, topic: "Storage Units",
      question: "Which is the largest unit?",
      options: { A: "Kilobyte", B: "Megabyte", C: "Gigabyte", D: "Terabyte" },
      correct: "D",
      explanation: "KEY RULE: Storage increases KB < MB < GB < TB. NOTE: Terabyte is largest here. REMEMBER: Bigger units store more data."
    },
    {
      id: 9, topic: "Logic Gates",
      question: "Which gate outputs 0 only when both inputs are 1?",
      options: { A: "AND", B: "OR", C: "NAND", D: "NOR" },
      correct: "C",
      explanation: "KEY RULE: NAND is NOT-AND. NOTE: It inverts AND output. REMEMBER: NAND = inverse AND."
    },
    {
      id: 10, topic: "Logic Gates",
      question: "What is the output expression of the circuit?",
      diagram: "assets/computer/test3/question10.png",
      options: { A: "A+B", B: "AB", C: "A'B + BC", D: "A+B+C" },
      correct: "C",
      explanation: "KEY RULE: Analyze NOT → AND → OR sequence. NOTE: Output becomes A'B + BC. REMEMBER: Break circuit step-by-step."
    },
    {
      id: 11, topic: "Operating System",
      question: "Which OS is commonly used on smartphones?",
      options: { A: "Windows", B: "Linux", C: "Android", D: "DOS" },
      correct: "C",
      explanation: "KEY RULE: Android is mobile OS. NOTE: Windows mainly PC. REMEMBER: Smartphones use Android/iOS."
    },
    {
      id: 12, topic: "Software",
      question: "MS Word is an example of",
      options: { A: "System software", B: "Utility software", C: "Application software", D: "Firmware" },
      correct: "C",
      explanation: "KEY RULE: Application software solves user tasks. NOTE: Word is for document processing. REMEMBER: User tools = application software."
    },
    {
      id: 13, topic: "Spreadsheet",
      question: "Intersection of row and column is",
      options: { A: "Workbook", B: "Cell", C: "Sheet", D: "Formula" },
      correct: "B",
      explanation: "KEY RULE: Cell is intersection point. NOTE: Workbook contains sheets. REMEMBER: A1, B2 are cells."
    },
    {
      id: 14, topic: "Database",
      question: "A column in a table is called",
      options: { A: "Record", B: "Field", C: "Row", D: "Entry" },
      correct: "B",
      explanation: "KEY RULE: Column = field. NOTE: Row = record. REMEMBER: Field describes attribute."
    },
    {
      id: 15, topic: "Graphics",
      question: "Which is used for drawing?",
      options: { A: "Paint", B: "Excel", C: "Access", D: "DOS" },
      correct: "A",
      explanation: "KEY RULE: Paint is graphics tool. NOTE: Others are not. REMEMBER: Drawing = Paint."
    },
    {
      id: 16, topic: "Presentation",
      question: "Slides are created in",
      options: { A: "Word", B: "Excel", C: "PowerPoint", D: "Access" },
      correct: "C",
      explanation: "KEY RULE: PowerPoint creates slides. NOTE: Others differ. REMEMBER: Presentation = PowerPoint."
    },
    {
      id: 17, topic: "Networking",
      question: "Internet is an example of",
      options: { A: "LAN", B: "MAN", C: "WAN", D: "PAN" },
      correct: "C",
      explanation: "KEY RULE: Internet spans globe = WAN. NOTE: LAN is local. REMEMBER: Global network = WAN."
    },
    {
      id: 18, topic: "Networking",
      question: "Which device directs traffic?",
      options: { A: "Router", B: "Mouse", C: "Printer", D: "Speaker" },
      correct: "A",
      explanation: "KEY RULE: Router directs packets. NOTE: Others are not network devices. REMEMBER: Routing = router."
    },
    {
      id: 19, topic: "Internet",
      question: "WWW stands for",
      options: { A: "World Wide Web", B: "Wide World Web", C: "World Web Wide", D: "Web World Wide" },
      correct: "A",
      explanation: "KEY RULE: WWW = World Wide Web. NOTE: Others incorrect. REMEMBER: Web = WWW."
    },
    {
      id: 20, topic: "Email",
      question: "Electronic messages are sent using",
      options: { A: "FTP", B: "Email", C: "LAN", D: "HTML" },
      correct: "B",
      explanation: "KEY RULE: Email sends messages. NOTE: FTP transfers files. REMEMBER: Messaging = email."
    },
    {
      id: 21, topic: "Programming",
      question: "Step-by-step problem solution is",
      options: { A: "Program", B: "Algorithm", C: "Flowchart", D: "Code" },
      correct: "B",
      explanation: "KEY RULE: Algorithm is logical steps. NOTE: Flowchart is diagram. REMEMBER: Plan before coding."
    },
    {
      id: 22, topic: "Flowchart",
      question: "Decision symbol is",
      options: { A: "Rectangle", B: "Diamond", C: "Oval", D: "Circle" },
      correct: "B",
      explanation: "KEY RULE: Diamond represents decision. NOTE: Rectangle = process. REMEMBER: Decision = diamond."
    },
    {
      id: 23, topic: "Programming",
      question: "High-level language is",
      options: { A: "Binary", B: "Assembly", C: "Java", D: "Machine code" },
      correct: "C",
      explanation: "KEY RULE: Java is high-level. NOTE: Others low-level. REMEMBER: Human-readable = high-level."
    },
    {
      id: 24, topic: "AI",
      question: "AI application includes",
      options: { A: "Typing", B: "Gaming", C: "Word processing", D: "Printing" },
      correct: "B",
      explanation: "KEY RULE: AI used in games. NOTE: Others basic tasks. REMEMBER: Smart systems = AI."
    },
    {
      id: 25, topic: "Robotics",
      question: "Robot sensing device is",
      options: { A: "Sensor", B: "Keyboard", C: "Mouse", D: "Printer" },
      correct: "A",
      explanation: "KEY RULE: Sensors detect environment. NOTE: Others are unrelated. REMEMBER: Robots sense first."
    },
    {
      id: 26, topic: "Security",
      question: "Protection of data is called",
      options: { A: "Networking", B: "Security", C: "Processing", D: "Programming" },
      correct: "B",
      explanation: "KEY RULE: Security protects data. NOTE: Others different tasks. REMEMBER: Data safety = security."
    },
    {
      id: 27, topic: "Cybercrime",
      question: "Stealing data illegally is",
      options: { A: "Hacking", B: "Printing", C: "Scanning", D: "Booting" },
      correct: "A",
      explanation: "KEY RULE: Hacking is unauthorized access. NOTE: Others are normal tasks. REMEMBER: Illegal access = hacking."
    },
    {
      id: 28, topic: "Storage",
      question: "Device for long-term storage is",
      options: { A: "RAM", B: "ROM", C: "Hard disk", D: "Cache" },
      correct: "C",
      explanation: "KEY RULE: Hard disk stores data permanently. NOTE: RAM is temporary. REMEMBER: Long-term = disk."
    },
    {
      id: 29, topic: "Booting",
      question: "Restarting system is",
      options: { A: "Cold boot", B: "Warm boot", C: "Shutdown", D: "Debugging" },
      correct: "B",
      explanation: "KEY RULE: Warm boot = restart. NOTE: Cold boot = from OFF. REMEMBER: Restart = warm."
    },
    {
      id: 30, topic: "Maintenance",
      question: "Prevent overheating by",
      options: { A: "Blocking vents", B: "Cooling system", C: "Dust", D: "Liquids" },
      correct: "B",
      explanation: "KEY RULE: Cooling prevents overheating. NOTE: Blocking vents is harmful. REMEMBER: Cooling = safety."
    },
    {
      id: 31, topic: "ICT",
      question: "ICT involves",
      options: { A: "Communication", B: "Only hardware", C: "Only software", D: "None" },
      correct: "A",
      explanation: "KEY RULE: ICT includes communication tech. NOTE: Not limited to hardware/software. REMEMBER: ICT connects systems."
    },
    {
      id: 32, topic: "Network Topology",
      question: "Bus topology uses",
      options: { A: "Central hub", B: "Single cable", C: "Ring", D: "Mesh" },
      correct: "B",
      explanation: "KEY RULE: Bus uses one backbone cable. NOTE: Star uses hub. REMEMBER: Bus = single line."
    },
    {
      id: 33, topic: "Internet",
      question: "Browser is used for",
      options: { A: "Coding", B: "Viewing pages", C: "Printing", D: "Compiling" },
      correct: "B",
      explanation: "KEY RULE: Browser displays web pages. NOTE: Others incorrect. REMEMBER: Chrome, Edge = browsers."
    },
    {
      id: 34, topic: "URL",
      question: "Website address is",
      options: { A: "IP", B: "URL", C: "HTML", D: "LAN" },
      correct: "B",
      explanation: "KEY RULE: URL identifies web page. NOTE: IP is numeric. REMEMBER: Address = URL."
    },
    {
      id: 35, topic: "Programming",
      question: "Compiler translates",
      options: { A: "Line-by-line", B: "Whole program", C: "Hardware", D: "Files" },
      correct: "B",
      explanation: "KEY RULE: Compiler translates entire program. NOTE: Interpreter is line-by-line. REMEMBER: Compile once, run many."
    },
    {
      id: 36, topic: "Algorithm",
      question: "Algorithm must be",
      options: { A: "Ambiguous", B: "Finite", C: "Infinite", D: "Complex" },
      correct: "B",
      explanation: "KEY RULE: Algorithm must end (finite). NOTE: Infinite loops invalid. REMEMBER: Must stop."
    },
    {
      id: 37, topic: "AI",
      question: "AI branch includes",
      options: { A: "Machine Learning", B: "Typing", C: "Printing", D: "Formatting" },
      correct: "A",
      explanation: "KEY RULE: ML is AI branch. NOTE: Others not AI. REMEMBER: Learning machines."
    },
    {
      id: 38, topic: "Robotics",
      question: "Robot control system does",
      options: { A: "Move", B: "Decide", C: "Sense", D: "Store" },
      correct: "B",
      explanation: "KEY RULE: Control system processes decisions. NOTE: Sensors detect, actuators move. REMEMBER: Brain of robot."
    },
    {
      id: 39, topic: "Security",
      question: "Firewall is used for",
      options: { A: "Cooking", B: "Security", C: "Printing", D: "Gaming" },
      correct: "B",
      explanation: "KEY RULE: Firewall protects networks. NOTE: Blocks unauthorized access. REMEMBER: Security barrier."
    },
    {
      id: 40, topic: "Modern Tech",
      question: "Smart devices use",
      options: { A: "IoT", B: "Typing", C: "Printing", D: "Storage only" },
      correct: "A",
      explanation: "KEY RULE: IoT connects devices. NOTE: Smart homes use IoT. REMEMBER: Connected devices = IoT."
    }
  ],
    test4: [
    {
      id: 1, topic: "Flowcharts",
      question: "The basic problem with the flowchart is that it has",
      diagram: "assets/computer/test4/question1_3.png",
      options: { A: "no direction", B: "no algorithm", C: "END is a process", D: "improper branch out" },
      correct: "C",
      explanation: "KEY RULE: In a standard flowchart, END must be shown with a terminal symbol, not as a process box. NOTE: The chart still has direction and a visible algorithm idea, so those options are weaker distractors. REMEMBER: Terminal symbols are used only for START and END."
    },
    {
      id: 2, topic: "Flowcharts",
      question: "What activity is the flowchart made to represent?",
      diagram: "assets/computer/test4/question1_3.png",
      options: { A: "How to pick an orange", B: "Instruction to pick an orange", C: "Evaluation on how to pick an orange", D: "Number of times to pick an orange" },
      correct: "A",
      explanation: "KEY RULE: The flowchart models the process of picking oranges until a stopping condition is met. NOTE: It is not merely an evaluation or a count in isolation; it is a process description. REMEMBER: Flowcharts mainly show how an activity is carried out step by step."
    },
    {
      id: 3, topic: "Flowcharts",
      question: "If N in the flowchart is represented by 10, which of the following conditions is not true?",
      diagram: "assets/computer/test4/question1_3.png",
      options: { A: "If C > 10, do not pick orange", B: "If C = 10, stop picking orange", C: "If C < 10, keep picking orange", D: "If C = 10, continue picking orange" },
      correct: "D",
      explanation: "KEY RULE: The process stops when the condition C = N is satisfied, so at C = 10 it should stop, not continue. NOTE: If C is still less than 10, the loop continues; once the stopping value is reached, the process ends. REMEMBER: A loop stops when its terminating condition becomes true."
    },
    {
      id: 4, topic: "History of Computing",
      question: "Which early computing device used rods and movable beads for counting?",
      options: { A: "Jacquard loom", B: "Abacus", C: "Slide rule", D: "Pascal calculator" },
      correct: "B",
      explanation: "KEY RULE: The abacus is an ancient counting device made with beads on rods. NOTE: Slide rule uses scales, Pascal calculator is a mechanical adding device, and Jacquard loom controlled weaving patterns. REMEMBER: Beads and rods point directly to the abacus."
    },
    {
      id: 5, topic: "Computer Generations",
      question: "The generation of computers that used integrated circuits is the",
      options: { A: "first generation", B: "second generation", C: "third generation", D: "fourth generation" },
      correct: "C",
      explanation: "KEY RULE: Third generation computers used integrated circuits, making them smaller and faster. NOTE: First generation used vacuum tubes, second used transistors, and fourth used microprocessors. REMEMBER: ICs are the signature of the third generation."
    },
    {
      id: 6, topic: "Computer Classification",
      question: "Which type of computer is most suitable for processing huge volumes of transactions in large organizations such as banks?",
      options: { A: "Microcomputer", B: "Mainframe", C: "Tablet", D: "Wearable computer" },
      correct: "B",
      explanation: "KEY RULE: Mainframe computers are built for high-volume transaction processing and reliability. NOTE: Microcomputers, tablets, and wearables are much smaller systems for personal or limited tasks. REMEMBER: Large institutions often rely on mainframes."
    },
    {
      id: 7, topic: "Computer Characteristics",
      question: "A computer is said to be versatile because it can",
      options: { A: "work without electricity", B: "perform many different tasks", C: "repair itself physically", D: "think exactly like a human" },
      correct: "B",
      explanation: "KEY RULE: Versatility means the ability to handle many different kinds of jobs. NOTE: Computers require electricity, do not physically repair themselves, and do not naturally think like humans. REMEMBER: One machine, many uses equals versatility."
    },
    {
      id: 8, topic: "Input Devices",
      question: "Which device is used to enter printed text and images from paper into a computer?",
      options: { A: "Plotter", B: "Scanner", C: "Speaker", D: "Projector" },
      correct: "B",
      explanation: "KEY RULE: A scanner captures documents and pictures from paper into digital form. NOTE: Plotter, speaker, and projector are output devices. REMEMBER: Scan means converting hard copy into soft copy."
    },
    {
      id: 9, topic: "Keyboard Keys",
      question: "The keys labelled F1 to F12 on a keyboard are called",
      options: { A: "cursor keys", B: "numeric keys", C: "function keys", D: "alphabetic keys" },
      correct: "C",
      explanation: "KEY RULE: F1 to F12 are function keys used for special commands. NOTE: Cursor keys move the insertion point, numeric keys enter numbers, and alphabetic keys enter letters. REMEMBER: The letter F stands for function."
    },
    {
      id: 10, topic: "Output Devices",
      question: "Which output device is best for producing large engineering drawings and maps?",
      options: { A: "Speaker", B: "Monitor", C: "Scanner", D: "Plotter" },
      correct: "D",
      explanation: "KEY RULE: A plotter is designed for producing precise large-format graphics. NOTE: A speaker outputs sound, a monitor shows soft copy, and a scanner is an input device. REMEMBER: Technical drawings are classic plotter jobs."
    },
    {
      id: 11, topic: "CPU Components",
      question: "Which unit of the CPU performs arithmetic calculations and logical comparisons?",
      options: { A: "Control Unit", B: "Arithmetic Logic Unit", C: "Memory Unit", D: "Power Unit" },
      correct: "B",
      explanation: "KEY RULE: The ALU carries out arithmetic operations and logical tests. NOTE: The Control Unit coordinates operations, while memory and power units do not do the main calculations. REMEMBER: ALU is the calculator of the CPU."
    },
    {
      id: 12, topic: "Registers",
      question: "Which register stores the address of the next instruction to be executed?",
      options: { A: "Accumulator", B: "Program Counter", C: "Memory Data Register", D: "Current Instruction Register" },
      correct: "B",
      explanation: "KEY RULE: The Program Counter holds the address of the next instruction in sequence. NOTE: The Accumulator stores intermediate results, MDR stores data, and CIR holds the current instruction. REMEMBER: PC tells the CPU what comes next."
    },
    {
      id: 13, topic: "Primary Memory",
      question: "Which memory type is volatile?",
      options: { A: "ROM", B: "DVD", C: "RAM", D: "Flash disk" },
      correct: "C",
      explanation: "KEY RULE: RAM is volatile because its contents disappear when power is switched off. NOTE: ROM, DVD, and flash disk are non-volatile storage types. REMEMBER: Temporary working memory is RAM."
    },
    {
      id: 14, topic: "Storage Units",
      question: "How many bits make one byte?",
      options: { A: "2", B: "4", C: "8", D: "16" },
      correct: "C",
      explanation: "KEY RULE: One byte is made up of 8 bits. NOTE: Four bits make a nibble, so that option is a common trap. REMEMBER: Bit is the smallest unit, byte is the basic grouped unit."
    },
    {
      id: 15, topic: "Logic Gates",
      question: "Which logic gate gives a HIGH output only when all its inputs are HIGH?",
      options: { A: "OR", B: "AND", C: "NOT", D: "NOR" },
      correct: "B",
      explanation: "KEY RULE: An AND gate outputs 1 only when every input is 1. NOTE: OR needs only one true input, NOT inverts, and NOR is the inverse of OR. REMEMBER: AND is the strict gate."
    },
    {
      id: 16, topic: "System Software",
      question: "Which of the following is an example of system software?",
      options: { A: "MS Word", B: "CorelDraw", C: "Linux", D: "PowerPoint" },
      correct: "C",
      explanation: "KEY RULE: Linux is an operating system, and operating systems are system software. NOTE: MS Word, CorelDraw, and PowerPoint are application software. REMEMBER: System software runs the computer environment."
    },
    {
      id: 17, topic: "Utility Software",
      question: "Which utility software is used to detect and remove malicious programs from a computer?",
      options: { A: "Antivirus", B: "Spreadsheet", C: "Presentation package", D: "Database package" },
      correct: "A",
      explanation: "KEY RULE: Antivirus software is designed to detect, quarantine, and remove malware. NOTE: Spreadsheet, presentation, and database packages serve user application tasks, not system protection. REMEMBER: Virus protection needs antivirus tools."
    },
    {
      id: 18, topic: "Translator Software",
      question: "A program that translates a high-level language one line at a time is called an",
      options: { A: "assembler", B: "compiler", C: "interpreter", D: "editor" },
      correct: "C",
      explanation: "KEY RULE: An interpreter translates and executes code line by line. NOTE: A compiler translates the whole program before execution, assembler handles assembly language, and editor is mainly for writing code. REMEMBER: Interpret means step-by-step translation."
    },
    {
      id: 19, topic: "Data and Information",
      question: "Processed data that is meaningful to the user is known as",
      options: { A: "record", B: "instruction", C: "information", D: "digitization" },
      correct: "C",
      explanation: "KEY RULE: Information is processed data that has meaning and usefulness. NOTE: Data is raw, a record is a database row, and digitization is a conversion process. REMEMBER: Data becomes information after processing."
    },
    {
      id: 20, topic: "Number Bases",
      question: "What is the decimal equivalent of binary 1011?",
      options: { A: "9", B: "10", C: "11", D: "12" },
      correct: "C",
      explanation: "FORMULA: 1011 base 2 = 1x8 + 0x4 + 1x2 + 1x1 = 11. NOTE: Wrong answers usually come from mixing up binary place values. REMEMBER: Binary place values are 1, 2, 4, 8 from right to left."
    },
    {
      id: 21, topic: "Word Processing",
      question: "Which word processing feature is specifically used to combine a standard document with many recipient records?",
      options: { A: "Mail merge", B: "Spell check", C: "Search", D: "Justify" },
      correct: "A",
      explanation: "KEY RULE: Mail merge combines a main document with a data source to produce personalized copies. NOTE: Spell check corrects spelling, search locates text, and justify aligns paragraphs. REMEMBER: One letter to many people means mail merge."
    },
    {
      id: 22, topic: "Spreadsheet",
      question: "In a spreadsheet, the intersection of a row and a column is called a",
      options: { A: "worksheet", B: "cell", C: "workbook", D: "formula" },
      correct: "B",
      explanation: "KEY RULE: A cell is the basic box where data is entered at the meeting point of a row and column. NOTE: A worksheet is a whole sheet, a workbook contains sheets, and a formula is an expression. REMEMBER: Cell references look like A1 or C5."
    },
    {
      id: 23, topic: "Spreadsheet Functions",
      question: "Which function is used to add the values in cells A1 to A5 in MS Excel?",
      options: { A: "=COUNT(A1:A5)", B: "=SUM(A1:A5)", C: "=AVERAGE(A1:A5)", D: "=MAX(A1:A5)" },
      correct: "B",
      explanation: "FORMULA: The SUM function adds all the values in the selected range. NOTE: COUNT counts entries, AVERAGE finds the mean, and MAX finds the highest value. REMEMBER: SUM is the standard addition function."
    },
    {
      id: 24, topic: "Database Terms",
      question: "A unique identifier for each record in a database table is called a",
      options: { A: "field", B: "form", C: "primary key", D: "report" },
      correct: "C",
      explanation: "KEY RULE: A primary key uniquely identifies each record in a table. NOTE: A field is a column, a form is used for data entry, and a report is for output presentation. REMEMBER: Good tables need a unique key."
    },
    {
      id: 25, topic: "Graphics Package",
      question: "Which software package is most suitable for designing a business card?",
      options: { A: "MS Access", B: "CorelDraw", C: "Ubuntu", D: "Compiler" },
      correct: "B",
      explanation: "KEY RULE: CorelDraw is a graphics package used for designing items like business cards, logos, and certificates. NOTE: MS Access is for databases, Ubuntu is an operating system, and compiler translates code. REMEMBER: Visual design work belongs to graphics software."
    },
    {
      id: 26, topic: "Presentation Package",
      question: "Which package is mainly used for creating slide presentations?",
      options: { A: "MS PowerPoint", B: "MS Excel", C: "Photoshop", D: "Oracle" },
      correct: "A",
      explanation: "KEY RULE: MS PowerPoint is designed for slide-based presentations. NOTE: Excel is for spreadsheets, Photoshop for graphics editing, and Oracle for databases. REMEMBER: Slides and slide shows point to PowerPoint."
    },
    {
      id: 27, topic: "Web Design",
      question: "Which of the following is an example of a web design package?",
      options: { A: "Dreamweaver", B: "Printer driver", C: "Joystick", D: "Mouse pad" },
      correct: "A",
      explanation: "KEY RULE: Dreamweaver is a web authoring and design tool. NOTE: The other options are not web design packages. REMEMBER: Web page creation often uses tools like Dreamweaver and HTML editors."
    },
    {
      id: 28, topic: "File Organization",
      question: "A file in which records are stored one after another in the order they arrive is a",
      options: { A: "serial file", B: "relational file", C: "graphical file", D: "hybrid file" },
      correct: "A",
      explanation: "KEY RULE: Serial organization stores records in order of arrival. NOTE: Relational is a database model, while the other options are not the expected file organization methods here. REMEMBER: Arrival order points to serial organization."
    },
    {
      id: 29, topic: "Data Security",
      question: "Which of the following is the best protection against losing valuable files after system failure?",
      options: { A: "Turning off the monitor", B: "Using regular backup", C: "Increasing speaker volume", D: "Removing the mouse" },
      correct: "B",
      explanation: "KEY RULE: Backup preserves extra copies of files for recovery after failure, deletion, or disaster. NOTE: The other options do not protect stored information. REMEMBER: If data matters, back it up."
    },
    {
      id: 30, topic: "Booting",
      question: "Starting a computer from complete power-off state is called",
      options: { A: "warm booting", B: "cold booting", C: "logging out", D: "debugging" },
      correct: "B",
      explanation: "KEY RULE: Cold booting means turning on the system from full shutdown. NOTE: Warm booting is a restart without complete power-off, while the others are unrelated. REMEMBER: Cold boot begins from OFF."
    },
    {
      id: 31, topic: "Computer Room Safety",
      question: "Which of the following is a correct computer laboratory practice?",
      options: { A: "Keep liquids close to the keyboard", B: "Maintain a dust-free environment", C: "Use broken sockets", D: "Block ventilation openings" },
      correct: "B",
      explanation: "KEY RULE: A dust-free environment helps protect computer components and supports safe usage. NOTE: Liquids, broken sockets, and blocked ventilation are dangerous. REMEMBER: A safe environment reduces hardware damage and accidents."
    },
    {
      id: 32, topic: "ICT",
      question: "The acronym ICT means",
      options: { A: "Internal Computer Transfer", B: "Information and Communication Technology", C: "Integrated Communication Terminal", D: "Internet Control Technique" },
      correct: "B",
      explanation: "KEY RULE: ICT stands for Information and Communication Technology. NOTE: The other options are not the accepted expansion. REMEMBER: ICT combines data handling with communication systems."
    },
    {
      id: 33, topic: "Network Types",
      question: "A network that covers a city is called a",
      options: { A: "LAN", B: "PAN", C: "MAN", D: "WAN" },
      correct: "C",
      explanation: "KEY RULE: MAN means Metropolitan Area Network and covers a city-sized area. NOTE: LAN is smaller and local, PAN is personal, and WAN is much larger. REMEMBER: Metropolitan equals MAN."
    },
    {
      id: 34, topic: "Internet Services",
      question: "Which Internet service is used mainly for transferring files between computers on a network?",
      options: { A: "E-mail", B: "FTP", C: "WWW", D: "Chatroom" },
      correct: "B",
      explanation: "KEY RULE: FTP stands for File Transfer Protocol and is used for sending files between systems. NOTE: E-mail sends messages, WWW gives web access, and chatrooms support online discussion. REMEMBER: File transfer points to FTP."
    },
    {
      id: 35, topic: "Programming Languages",
      question: "Which of the following is a low-level programming language?",
      options: { A: "Python", B: "Java", C: "Assembly language", D: "BASIC" },
      correct: "C",
      explanation: "KEY RULE: Assembly language is low-level because it is close to machine code. NOTE: Python, Java, and BASIC are high-level languages. REMEMBER: Low-level languages are hardware-oriented."
    },
    {
      id: 36, topic: "Algorithms",
      question: "Which of the following is a basic property of a good algorithm?",
      options: { A: "Ambiguity", B: "Definiteness", C: "Infinite repetition", D: "Randomness" },
      correct: "B",
      explanation: "KEY RULE: Definiteness means each step of the algorithm must be clear and unambiguous. NOTE: Ambiguity and endless repetition weaken an algorithm, while randomness is not a required property. REMEMBER: Good algorithms are clear, finite, and effective."
    },
    {
      id: 37, topic: "Program Development",
      question: "Which stage comes immediately after program coding in the program development process?",
      options: { A: "Compilation", B: "Problem definition", C: "Maintenance", D: "Feasibility study" },
      correct: "A",
      explanation: "KEY RULE: After writing code, the next stage is program compilation. NOTE: Problem definition comes much earlier, while maintenance comes after deployment and use. REMEMBER: Code first, then compile."
    },
    {
      id: 38, topic: "Artificial Intelligence",
      question: "Which branch of AI enables computers to learn patterns from data and improve performance?",
      options: { A: "Machine Learning", B: "Page Layout", C: "File Management", D: "Cold Booting" },
      correct: "A",
      explanation: "KEY RULE: Machine Learning is the AI branch focused on learning from data. NOTE: The other options are unrelated computing tasks. REMEMBER: Learning from examples is machine learning."
    },
    {
      id: 39, topic: "Robotics",
      question: "Which robot component is mainly responsible for movement or action?",
      options: { A: "Actuator", B: "Worksheet", C: "Domain name", D: "Paragraph" },
      correct: "A",
      explanation: "KEY RULE: Actuators create movement and physical action in robotic systems. NOTE: The other options are unrelated to robotics hardware. REMEMBER: Sensors detect, controllers decide, actuators act."
    },
    {
      id: 40, topic: "Cybersecurity",
      question: "The act of sending deceptive messages to trick people into revealing passwords or banking details is called",
      options: { A: "phishing", B: "formatting", C: "compiling", D: "debugging" },
      correct: "A",
      explanation: "KEY RULE: Phishing is a cyber-attack that uses fake messages or websites to steal sensitive information. NOTE: Formatting, compiling, and debugging are normal computing operations, not deception attacks. REMEMBER: Fake urgent messages asking for credentials often indicate phishing."
    }
  ],
    test5: [
    {
      id: 1, topic: "History of Computing",
      question: "Which early mechanical device used logarithmic scales to aid multiplication and division?",
      options: { A: "Abacus", B: "Slide rule", C: "Pascal calculator", D: "Hollerith machine" },
      correct: "B",
      explanation: "KEY RULE: The slide rule uses logarithmic scales to simplify multiplication, division and related calculations. NOTE: The abacus is mainly for counting, Pascal calculator handles basic mechanical arithmetic, and Hollerith machine was used for tabulation. REMEMBER: Engineers widely used the slide rule before electronic calculators."
    },
    {
      id: 2, topic: "Computer Generations",
      question: "Which generation of computers is associated mainly with vacuum tubes?",
      options: { A: "First generation", B: "Second generation", C: "Third generation", D: "Fourth generation" },
      correct: "A",
      explanation: "KEY RULE: First generation computers used vacuum tubes for circuitry. NOTE: Second generation used transistors, third generation used integrated circuits, and fourth generation used microprocessors. REMEMBER: Vacuum tubes made first generation machines bulky and heat-prone."
    },
    {
      id: 3, topic: "Computer Types",
      question: "A desktop computer used by one person at a time is best classified as a",
      options: { A: "supercomputer", B: "mainframe", C: "microcomputer", D: "minicomputer" },
      correct: "C",
      explanation: "KEY RULE: A microcomputer is a personal computer designed for individual use. NOTE: Supercomputers and mainframes serve much larger-scale tasks, while minicomputers are mid-range multi-user systems. REMEMBER: Personal desktops and laptops fall under microcomputers."
    },
    {
      id: 4, topic: "Computer Characteristics",
      question: "The ability of a computer to produce correct results when given correct data and instructions is called",
      options: { A: "diligence", B: "accuracy", C: "versatility", D: "automation" },
      correct: "B",
      explanation: "KEY RULE: Accuracy refers to the correctness of computer output when the input and instructions are correct. NOTE: Diligence is repetition without fatigue, versatility is multi-purpose use, and automation is self-operation after instruction. REMEMBER: Wrong input still gives wrong output despite computer accuracy."
    },
    {
      id: 5, topic: "Communication Systems",
      question: "This device uses a transmission method called",
      diagram: "assets/computer/test1/question1.png",
      options: { A: "broadcast", B: "podcast", C: "multicast", D: "unicast" },
      correct: "D",
      explanation: "KEY RULE: Unicast is a one-to-one transmission method where data is sent from one source to one destination. NOTE: Broadcast is one-to-all, multicast is one-to-selected-many, and podcast is not the intended network transmission method here. REMEMBER: A single sender to a single receiver suggests unicast."
    },
    {
      id: 6, topic: "Input Devices",
      question: "Which input device is most suitable for playing interactive computer games that require directional control?",
      options: { A: "Joystick", B: "Scanner", C: "Plotter", D: "Speaker" },
      correct: "A",
      explanation: "KEY RULE: A joystick is designed for directional control in games and simulation environments. NOTE: Scanner captures documents, plotter is for large graphic output, and speaker produces sound. REMEMBER: Game movement and navigation often point to a joystick."
    },
    {
      id: 7, topic: "Output Devices",
      question: "Which of the following is an example of a soft-copy output device?",
      options: { A: "Printer", B: "Monitor", C: "Plotter", D: "Photocopier" },
      correct: "B",
      explanation: "KEY RULE: A monitor displays output on screen, making it a soft-copy device. NOTE: Printer and plotter produce hard copy, while photocopier is not a standard computer output device in this context. REMEMBER: Screen display means soft copy."
    },
    {
      id: 8, topic: "CPU Components",
      question: "The unit of the CPU that performs calculations such as addition and subtraction is the",
      options: { A: "Control Unit", B: "Arithmetic Logic Unit", C: "Program Counter", D: "Memory Address Register" },
      correct: "B",
      explanation: "KEY RULE: The Arithmetic Logic Unit handles arithmetic operations and logical comparisons. NOTE: The Control Unit coordinates activities, while PC and MAR are registers with different duties. REMEMBER: ALU is the CPU's calculator."
    },
    {
      id: 9, topic: "Primary Storage",
      question: "Which of the following is contained in the primary memory unit of a computer?",
      options: { A: "RAM and ROM", B: "DVD and CD", C: "Hard disk and tape", D: "Scanner and printer" },
      correct: "A",
      explanation: "KEY RULE: Primary memory consists mainly of RAM and ROM. NOTE: DVD, CD, hard disk, and tape are secondary storage devices, while scanner and printer are peripherals. REMEMBER: Primary memory works directly with the CPU."
    },
    {
      id: 10, topic: "Storage Units",
      question: "Which of the following is the correct ascending order of storage units?",
      options: { A: "Byte, bit, nibble, kilobyte", B: "Bit, nibble, byte, kilobyte", C: "Nibble, bit, byte, megabyte", D: "Byte, nibble, bit, gigabyte" },
      correct: "B",
      explanation: "KEY RULE: Storage units increase in the order bit, nibble, byte, kilobyte and beyond. NOTE: A nibble is 4 bits and a byte is 8 bits, so the other orders are incorrect. REMEMBER: Smallest to larger helps avoid confusion."
    },
    {
      id: 11, topic: "Registers",
      question: "Which register temporarily holds data coming from memory before processing?",
      options: { A: "MAR", B: "MDR", C: "PC", D: "CIR" },
      correct: "B",
      explanation: "KEY RULE: The Memory Data Register holds data or instructions transferred to or from memory. NOTE: MAR stores addresses, PC stores the next instruction location, and CIR stores the current instruction. REMEMBER: Data goes to MDR, address goes to MAR."
    },
    {
      id: 12, topic: "Logic Gates",
      question: "The output of a NOT gate is 1 when the input is",
      options: { A: "1", B: "0", C: "both 0 and 1", D: "undefined" },
      correct: "B",
      explanation: "KEY RULE: A NOT gate inverts its input, so input 0 produces output 1. NOTE: Input 1 would produce output 0, and standard logic gates do not produce undefined outputs in simple truth tables. REMEMBER: NOT means opposite."
    },
    {
      id: 13, topic: "System Software",
      question: "Which of the following is NOT a type of system software?",
      options: { A: "Operating system", B: "Translator", C: "Utility software", D: "Word processor" },
      correct: "D",
      explanation: "KEY RULE: A word processor is application software used for creating and editing documents. NOTE: Operating systems, translators, and utility software are all types of system software in the syllabus context. REMEMBER: User task software is application software."
    },
    {
      id: 14, topic: "Operating Systems",
      question: "Which operating system is commonly associated with open-source computing?",
      options: { A: "Linux", B: "Windows", C: "iOS", D: "macOS only" },
      correct: "A",
      explanation: "KEY RULE: Linux is a widely known open-source operating system. NOTE: Windows and iOS are proprietary, while macOS is also not open source in the standard school classification. REMEMBER: Open source often points to Linux."
    },
    {
      id: 15, topic: "Application Software",
      question: "Which package is most suitable for preparing payroll calculations for workers?",
      options: { A: "Spreadsheet package", B: "Graphics package", C: "Presentation package", D: "Antivirus package" },
      correct: "A",
      explanation: "KEY RULE: Spreadsheet packages are ideal for calculations involving formulas, totals and numeric analysis. NOTE: Graphics and presentation packages serve different purposes, while antivirus is for protection. REMEMBER: Numeric tables and formulas suggest spreadsheet use."
    },
    {
      id: 16, topic: "Data and Information",
      question: "A list of examination scores before they are arranged or summarized is called",
      options: { A: "information", B: "data", C: "knowledge", D: "output" },
      correct: "B",
      explanation: "KEY RULE: Raw facts that have not yet been processed are called data. NOTE: Information is processed data with meaning, while output is the result after processing. REMEMBER: Facts first, information later."
    },
    {
      id: 17, topic: "Number Bases",
      question: "What is the binary equivalent of decimal 13?",
      options: { A: "1011", B: "1101", C: "1110", D: "1001" },
      correct: "B",
      explanation: "FORMULA: Decimal 13 = 8 + 4 + 1, which gives binary 1101. NOTE: The other options represent different decimal values. REMEMBER: Use powers of 2 to convert decimal to binary."
    },
    {
      id: 18, topic: "Word Processing",
      question: "Which operation in MS Word is used to check and correct likely spelling mistakes in a document?",
      options: { A: "Print preview", B: "Spell check", C: "Mail merge", D: "Slide transition" },
      correct: "B",
      explanation: "KEY RULE: Spell check identifies and suggests corrections for misspelled words. NOTE: Print preview shows layout, mail merge personalizes letters, and slide transition belongs to presentations. REMEMBER: Proofread electronically with spell check."
    },
    {
      id: 19, topic: "Spreadsheet Terms",
      question: "An Excel file that can contain several worksheets is called a",
      options: { A: "record", B: "workbook", C: "formula", D: "field" },
      correct: "B",
      explanation: "KEY RULE: A workbook is the full spreadsheet file containing one or more worksheets. NOTE: A record and field belong mainly to database terminology, and a formula is an expression. REMEMBER: Workbook contains worksheets."
    },
    {
      id: 20, topic: "Database Concepts",
      question: "Which database term refers to a complete row of related information about one item?",
      options: { A: "Field", B: "Record", C: "Form", D: "Query" },
      correct: "B",
      explanation: "KEY RULE: A record is a complete row containing related facts about one entity. NOTE: A field is a column, while form and query are tools for entry and retrieval. REMEMBER: Row equals record."
    },
    {
      id: 21, topic: "Database Organization",
      question: "Which database organization stores data in tables that can be related by keys?",
      options: { A: "Hierarchical", B: "Relational", C: "Sequential", D: "Serial" },
      correct: "B",
      explanation: "KEY RULE: Relational databases organize data into tables connected by keys. NOTE: Hierarchical databases use parent-child structures, while sequential and serial are more closely tied to file organization methods. REMEMBER: Tables plus links suggest relational."
    },
    {
      id: 22, topic: "Graphics Package",
      question: "Which of the following is best used for designing certificates and invitation cards?",
      options: { A: "CorelDraw", B: "MS Access", C: "Compiler", D: "Command prompt" },
      correct: "A",
      explanation: "KEY RULE: CorelDraw is used for graphic design tasks such as certificates, logos and invitation cards. NOTE: Access manages databases, compiler translates programs, and command prompt is a text interface. REMEMBER: Creative layout work belongs to graphics packages."
    },
    {
      id: 23, topic: "Presentation Package",
      question: "Which feature of a presentation package allows movement effects between one slide and the next?",
      options: { A: "Transition", B: "Mailing list", C: "Primary key", D: "Boot manager" },
      correct: "A",
      explanation: "KEY RULE: Transition controls how one slide changes to another during a slideshow. NOTE: Mailing list is for communication, primary key is a database term, and boot manager is unrelated. REMEMBER: Slide-to-slide effect equals transition."
    },
    {
      id: 24, topic: "Web Design",
      question: "Which of the following is an example of a web design language or tool?",
      options: { A: "Dreamweaver", B: "Plotter", C: "Scanner", D: "Router" },
      correct: "A",
      explanation: "KEY RULE: Dreamweaver is used in web design and web page development. NOTE: Plotter, scanner and router are not web authoring tools. REMEMBER: Website creation requires web languages or design packages."
    },
    {
      id: 25, topic: "File Classification",
      question: "A file that stores permanent information used repeatedly for reference is called a",
      options: { A: "transaction file", B: "master file", C: "temporary file only", D: "cache file" },
      correct: "B",
      explanation: "KEY RULE: A master file keeps relatively permanent data used again and again. NOTE: A transaction file records day-to-day changes, while cache and temporary files are different concepts. REMEMBER: Stable core data belongs in a master file."
    },
    {
      id: 26, topic: "File Operations",
      question: "Which of the following is a basic file handling operation?",
      options: { A: "Compile", B: "Retrieve", C: "Encrypt only", D: "Broadcast" },
      correct: "B",
      explanation: "KEY RULE: Retrieving a file is one of the standard file operations. NOTE: Compile belongs to programming translation, encryption is a security technique, and broadcast is a transmission method. REMEMBER: Open, close, copy, retrieve and delete are file operations."
    },
    {
      id: 27, topic: "Data Loss",
      question: "Which of the following can cause loss of data in a computer system?",
      options: { A: "Regular backup", B: "Inadvertent deletion", C: "Proper labelling", D: "Password use" },
      correct: "B",
      explanation: "KEY RULE: Inadvertent deletion means accidental removal of data, leading to loss. NOTE: Backup, labelling and password use are preventive or protective measures. REMEMBER: Human error is a major cause of data loss."
    },
    {
      id: 28, topic: "Booting",
      question: "Which type of booting occurs when a running computer is restarted without switching off the main power?",
      options: { A: "Cold booting", B: "Warm booting", C: "Hard formatting", D: "Log off" },
      correct: "B",
      explanation: "KEY RULE: Warm booting refers to restarting a computer that is already powered on. NOTE: Cold booting starts from full power-off, while formatting and logging off are different operations. REMEMBER: Restart means warm boot."
    },
    {
      id: 29, topic: "Computer Maintenance",
      question: "Which of the following is a simple computer maintenance practice?",
      options: { A: "Blocking air vents", B: "Regular cleaning of peripherals", C: "Pouring liquid on the keyboard", D: "Using the system in a dusty room" },
      correct: "B",
      explanation: "KEY RULE: Regular cleaning helps remove dust and supports proper operation of hardware. NOTE: Blocking vents, spilling liquid and using dusty rooms increase the risk of damage. REMEMBER: Clean systems usually last longer."
    },
    {
      id: 30, topic: "Computer Room Safety",
      question: "Which condition is most desirable in a computer laboratory?",
      options: { A: "Poor illumination", B: "Dust-free environment", C: "Water close to sockets", D: "Blocked ventilation" },
      correct: "B",
      explanation: "KEY RULE: A dust-free environment reduces hardware problems and supports safe operation. NOTE: Poor lighting strains users, while water near sockets and blocked ventilation are dangerous. REMEMBER: Safety and cleanliness go together in a computer room."
    },
    {
      id: 31, topic: "ICT",
      question: "Which of the following is a type of data network?",
      options: { A: "LAN", B: "Joystick", C: "Printer", D: "Compiler" },
      correct: "A",
      explanation: "KEY RULE: LAN is a Local Area Network and is one of the types of data networks in ICT. NOTE: Joystick and printer are devices, while compiler is software. REMEMBER: PAN, LAN, MAN and WAN are standard network types."
    },
    {
      id: 32, topic: "Internet Terms",
      question: "A program used to access and view web pages is called a",
      options: { A: "browser", B: "compiler", C: "server rack", D: "database" },
      correct: "A",
      explanation: "KEY RULE: A browser is software for opening and navigating web pages. NOTE: A compiler translates programs, a server rack is hardware infrastructure, and a database stores structured data. REMEMBER: Chrome, Firefox and Edge are browsers."
    },
    {
      id: 33, topic: "Email",
      question: "Which part of the e-mail address user@jamb.gov.ng identifies the service domain?",
      options: { A: "user", B: "@", C: "jamb.gov.ng", D: "gov only" },
      correct: "C",
      explanation: "KEY RULE: The domain part comes after the at-sign and identifies the hosting organization or service. NOTE: The username appears before the at-sign, and the symbol itself is only a separator. REMEMBER: user at domain is the standard structure."
    },
    {
      id: 34, topic: "Network Topologies",
      question: "In which topology are all nodes connected to a central device such as a hub or switch?",
      options: { A: "Bus topology", B: "Ring topology", C: "Star topology", D: "Tree topology only" },
      correct: "C",
      explanation: "KEY RULE: Star topology connects all nodes to a central hub or switch. NOTE: Bus uses one main cable, ring forms a loop, and tree is not the basic expected answer here. REMEMBER: Central device points to star topology."
    },
    {
      id: 35, topic: "Network Devices",
      question: "Which network device amplifies or regenerates weak signals to extend transmission distance?",
      options: { A: "Repeater", B: "Router", C: "Scanner", D: "Monitor" },
      correct: "A",
      explanation: "KEY RULE: A repeater regenerates weak signals so they can travel farther. NOTE: A router chooses network paths, while scanner and monitor are not signal-regeneration devices. REMEMBER: Repeaters repeat signals."
    },
    {
      id: 36, topic: "Programming Languages",
      question: "Which of the following is a low-level programming language?",
      options: { A: "Python", B: "Java", C: "Assembly language", D: "BASIC" },
      correct: "C",
      explanation: "KEY RULE: Assembly language is low-level because it is close to machine language and hardware operations. NOTE: Python, Java and BASIC are high-level languages. REMEMBER: Low-level languages are less user-friendly but more hardware-near."
    },
    {
      id: 37, topic: "Algorithms",
      question: "Which of the following is a property of a good algorithm?",
      options: { A: "Ambiguity", B: "Finiteness", C: "Infinite looping", D: "No output" },
      correct: "B",
      explanation: "KEY RULE: Finiteness means an algorithm must end after a limited number of steps. NOTE: Ambiguity, endless loops and lack of output contradict good algorithm design. REMEMBER: A valid algorithm must start clearly and stop clearly."
    },
    {
      id: 38, topic: "Flowchart Symbols",
      question: "Which flowchart symbol is used for input and output operations?",
      options: { A: "Rectangle", B: "Diamond", C: "Parallelogram", D: "Oval" },
      correct: "C",
      explanation: "KEY RULE: The parallelogram symbol represents input and output in flowcharts. NOTE: Rectangle is process, diamond is decision, and oval is start/stop. REMEMBER: Slanted four-sided symbol means input/output."
    },
    {
      id: 39, topic: "Artificial Intelligence",
      question: "Which branch of AI is concerned with enabling machines to learn from data?",
      options: { A: "Machine Learning", B: "Page formatting", C: "Mail merge", D: "Cold booting" },
      correct: "A",
      explanation: "KEY RULE: Machine Learning enables systems to identify patterns and improve from data. NOTE: The other options are unrelated to AI. REMEMBER: Learning from examples is the heart of machine learning."
    },
    {
      id: 40, topic: "Cybersecurity",
      question: "The act of sending fake messages or creating fake websites to trick users into revealing confidential details is called",
      options: { A: "spooling", B: "phishing", C: "formatting", D: "defragmentation" },
      correct: "B",
      explanation: "KEY RULE: Phishing is a cyber threat that uses deception to collect passwords, banking details and other sensitive data. NOTE: Spooling, formatting and defragmentation are normal computing operations, not social-engineering attacks. REMEMBER: Be suspicious of urgent messages asking for credentials."
    }
  ],
    test6: [
    {
      id: 1, topic: "Communication Systems",
      question: "In Figure, the signals from modem X to modem Y is",
      diagram: "assets/computer/test6/question1_2",
      options: { A: "analogue", B: "digital", C: "imaginary", D: "aperiodic" },
      correct: "A",
      explanation: "KEY RULE: Modems convert digital data from computers into analogue signals for transmission over certain communication media, then convert back at the receiving end. NOTE: The computers and router process digital data, but the modem-to-modem link in this figure is represented as analogue transmission. REMEMBER: Modem means modulator-demodulator, so it handles conversion between digital and analogue."
    },
    {
      id: 2, topic: "Communication Devices",
      question: "The main function of the modem in the communication system shown is to",
      diagram: "assets/computer/test6/question1_2",
      options: { A: "display web pages", B: "convert signals between digital and analogue forms", C: "print transmitted data", D: "store files permanently" },
      correct: "B",
      explanation: "KEY RULE: A modem converts digital signals from a computer into analogue form for transmission and converts incoming analogue signals back to digital. NOTE: It does not display pages, print output, or serve as permanent storage. REMEMBER: Modulation and demodulation are the modem's core duties."
    },
    {
      id: 3, topic: "History of Computing",
      question: "Which early device introduced the idea of using punched cards to control operations?",
      options: { A: "Abacus", B: "Jacquard loom", C: "Pascal calculator", D: "Napier's bones" },
      correct: "B",
      explanation: "KEY RULE: The Jacquard loom used punched cards to control weaving patterns and influenced later computing ideas. NOTE: The abacus is for counting, Pascal calculator performs arithmetic, and Napier's bones aid multiplication. REMEMBER: Punched-card control is strongly linked to Jacquard loom."
    },
    {
      id: 4, topic: "Computer Generations",
      question: "Which generation of computers is associated with microprocessors?",
      options: { A: "First generation", B: "Second generation", C: "Third generation", D: "Fourth generation" },
      correct: "D",
      explanation: "KEY RULE: Fourth generation computers use microprocessors as their major technology. NOTE: First generation used vacuum tubes, second used transistors, and third used integrated circuits. REMEMBER: Modern personal computers are products of the microprocessor era."
    },
    {
      id: 5, topic: "Computer Classification",
      question: "A computer designed to solve a particular task only is called a",
      options: { A: "general-purpose computer", B: "special-purpose computer", C: "hybrid computer", D: "supercomputer" },
      correct: "B",
      explanation: "KEY RULE: A special-purpose computer is built for a defined task such as ATM control or traffic-light control. NOTE: A general-purpose computer handles many tasks, while hybrid and supercomputer describe other classifications. REMEMBER: One main task usually means special-purpose."
    },
    {
      id: 6, topic: "Computer Characteristics",
      question: "The ability of a computer to carry out repeated tasks without loss of quality is known as",
      options: { A: "diligence", B: "fatigue", C: "guesswork", D: "emotion" },
      correct: "A",
      explanation: "KEY RULE: Diligence means the computer can continue working on repetitive tasks without tiredness. NOTE: Computers do not rely on emotion or guesswork, and fatigue is a human limitation. REMEMBER: Payroll processing and result tabulation show computer diligence."
    },
    {
      id: 7, topic: "Input Devices",
      question: "Which device is best used to capture still images directly into a computer?",
      options: { A: "Digital camera", B: "Speaker", C: "Plotter", D: "Monitor" },
      correct: "A",
      explanation: "KEY RULE: A digital camera captures images and transfers them into a computer in digital form. NOTE: Speaker, plotter, and monitor are output devices. REMEMBER: Cameras provide image input."
    },
    {
      id: 8, topic: "Output Devices",
      question: "Which output device is most appropriate for producing audio output?",
      options: { A: "Speaker", B: "Scanner", C: "Mouse", D: "Light pen" },
      correct: "A",
      explanation: "KEY RULE: A speaker converts digital audio signals into audible sound. NOTE: Scanner, mouse, and light pen are input devices. REMEMBER: Sound output requires speakers or headphones."
    },
    {
      id: 9, topic: "CPU Components",
      question: "Which part of the CPU directs and coordinates all processor activities?",
      options: { A: "Arithmetic Logic Unit", B: "Control Unit", C: "Accumulator", D: "Cache" },
      correct: "B",
      explanation: "KEY RULE: The Control Unit supervises instruction execution and coordinates the parts of the CPU. NOTE: The ALU calculates, the accumulator stores interim values, and cache is fast memory. REMEMBER: The CU is the traffic controller inside the CPU."
    },
    {
      id: 10, topic: "Memory Types",
      question: "Which of the following is an example of secondary storage?",
      options: { A: "RAM", B: "ROM", C: "Hard disk", D: "Register" },
      correct: "C",
      explanation: "KEY RULE: A hard disk is secondary storage because it stores data permanently outside the CPU's direct working memory. NOTE: RAM, ROM, and registers are primary or internal memory components. REMEMBER: Secondary storage keeps data for long-term use."
    },
    {
      id: 11, topic: "Storage Units",
      question: "Which of the following is equal to 4 bits?",
      options: { A: "Byte", B: "Word", C: "Nibble", D: "Kilobyte" },
      correct: "C",
      explanation: "KEY RULE: A nibble is made up of 4 bits. NOTE: A byte contains 8 bits, while kilobyte is much larger. REMEMBER: Two nibbles make one byte."
    },
    {
      id: 12, topic: "Registers",
      question: "The register that stores the address of a memory location to be accessed is the",
      options: { A: "MAR", B: "MDR", C: "PC", D: "ACC" },
      correct: "A",
      explanation: "KEY RULE: The Memory Address Register stores the address of the memory location being read or written. NOTE: MDR stores data, PC stores the next instruction address, and ACC stores intermediate results. REMEMBER: Address belongs to MAR."
    },
    {
      id: 13, topic: "Logic Gates",
      question: "The output of an OR gate is 0 only when",
      options: { A: "all inputs are 1", B: "at least one input is 1", C: "all inputs are 0", D: "the input is undefined" },
      correct: "C",
      explanation: "KEY RULE: An OR gate outputs 1 when any input is 1, so it outputs 0 only when all inputs are 0. NOTE: This differs from AND, which requires all inputs to be 1 for a high output. REMEMBER: OR is satisfied by any true input."
    },
    {
      id: 14, topic: "Operating Systems",
      question: "Which of the following is a function of an operating system?",
      options: { A: "Designing logos", B: "Managing files and memory", C: "Printing only", D: "Controlling weather" },
      correct: "B",
      explanation: "KEY RULE: The operating system manages system resources such as memory, files, processes, and devices. NOTE: Logo design belongs to graphics software, and printing is only one task, not the full OS role. REMEMBER: The OS is the manager of the computer environment."
    },
    {
      id: 15, topic: "Utility Software",
      question: "Which of the following is an example of utility software?",
      options: { A: "MS Excel", B: "Antivirus", C: "PowerPoint", D: "CorelDraw" },
      correct: "B",
      explanation: "KEY RULE: Antivirus is utility software because it maintains and protects the system. NOTE: Excel, PowerPoint, and CorelDraw are application packages used for user tasks. REMEMBER: Utility software keeps the system healthy."
    },
    {
      id: 16, topic: "Application Software",
      question: "Which package is most appropriate for preparing a budget with formulas and totals?",
      options: { A: "Spreadsheet package", B: "Word processor", C: "Graphics package", D: "Antivirus package" },
      correct: "A",
      explanation: "KEY RULE: Spreadsheet packages are designed for calculations, tabulation, formulas, and charts. NOTE: Word processors are mainly for text, graphics packages for design, and antivirus for protection. REMEMBER: Numbers plus formulas point to spreadsheets."
    },
    {
      id: 17, topic: "Data and Information",
      question: "Which statement best describes information?",
      options: { A: "It is raw and unprocessed facts only", B: "It is meaningless data", C: "It is processed data that is meaningful", D: "It is always stored in ROM" },
      correct: "C",
      explanation: "KEY RULE: Information is data that has been processed into a meaningful form for use or decision-making. NOTE: Raw facts are data, not information, and storage location does not define information. REMEMBER: Processing adds meaning."
    },
    {
      id: 18, topic: "Number Bases",
      question: "What is the decimal equivalent of hexadecimal A?",
      options: { A: "8", B: "9", C: "10", D: "11" },
      correct: "C",
      explanation: "KEY RULE: In hexadecimal, A represents decimal 10. NOTE: Hexadecimal digits go 0-9, then A, B, C, D, E, F for 10-15. REMEMBER: A is the first alphabetic hex digit."
    },
    {
      id: 19, topic: "Word Processing",
      question: "Which feature in a word processor is used to find a word and replace it with another throughout a document?",
      options: { A: "Mail merge", B: "Find and replace", C: "Page setup", D: "Print preview" },
      correct: "B",
      explanation: "KEY RULE: Find and replace quickly searches for a word or phrase and substitutes a new one. NOTE: Mail merge personalizes documents, page setup adjusts layout, and print preview shows output appearance. REMEMBER: Repeated editing is easiest with find and replace."
    },
    {
      id: 20, topic: "Spreadsheet",
      question: "In Excel, the formula =SUM(B1:B4) is used to",
      options: { A: "multiply the values", B: "count the values", C: "add the values", D: "find the average" },
      correct: "C",
      explanation: "FORMULA: The SUM function adds all numerical values in the range B1 to B4. NOTE: COUNT counts entries, and AVERAGE calculates the mean. REMEMBER: SUM is the basic addition function in spreadsheets."
    },
    {
      id: 21, topic: "Database Terms",
      question: "A complete row of related data in a table is called a",
      options: { A: "field", B: "record", C: "form", D: "report" },
      correct: "B",
      explanation: "KEY RULE: A record is one full row of related information about an entity. NOTE: A field is a column, while form and report are used for entry and output. REMEMBER: Row equals record."
    },
    {
      id: 22, topic: "Database Organization",
      question: "Which database organization uses tables linked by keys?",
      options: { A: "Hierarchical", B: "Relational", C: "Sequential", D: "Serial" },
      correct: "B",
      explanation: "KEY RULE: Relational databases organize data into tables connected through keys and relationships. NOTE: Hierarchical databases use parent-child trees, while sequential and serial refer more to file organization. REMEMBER: Tables plus relationships suggest relational."
    },
    {
      id: 23, topic: "Graphics Packages",
      question: "Which of the following is best used for designing a school emblem?",
      options: { A: "MS Access", B: "PowerPoint", C: "CorelDraw", D: "Linux" },
      correct: "C",
      explanation: "KEY RULE: CorelDraw is a graphics package suitable for logos, emblems, invitations, and similar designs. NOTE: Access is a database package, PowerPoint is for presentations, and Linux is an operating system. REMEMBER: Design work belongs to graphics tools."
    },
    {
      id: 24, topic: "Presentation Packages",
      question: "Which package is most suitable for preparing slide-based teaching materials?",
      options: { A: "MS Word", B: "MS PowerPoint", C: "MS Access", D: "Antivirus" },
      correct: "B",
      explanation: "KEY RULE: MS PowerPoint is designed for creating and showing slide presentations. NOTE: Word is for documents, Access is for databases, and antivirus is for protection. REMEMBER: Slides point to PowerPoint."
    },
    {
      id: 25, topic: "Web Design",
      question: "Which of the following is an element of good web design?",
      options: { A: "Poor navigation", B: "Intuitiveness", C: "Confusing layout", D: "No content" },
      correct: "B",
      explanation: "KEY RULE: Intuitiveness is a key element of good web design because users should understand the interface easily. NOTE: Poor navigation, confusing layout, and lack of content weaken a website. REMEMBER: A good site should be easy to use."
    },
    {
      id: 26, topic: "File Organization",
      question: "Which file access method allows records to be read one after another in order?",
      options: { A: "Random access", B: "Sequential access", C: "Indexed access", D: "Hashed access" },
      correct: "B",
      explanation: "KEY RULE: Sequential access reads records in a fixed sequence, usually from beginning to end. NOTE: Random access jumps directly to a record, while indexed and hashed methods use supporting structures. REMEMBER: One-after-another access is sequential."
    },
    {
      id: 27, topic: "Data Loss",
      question: "Which of the following is a common cause of data loss?",
      options: { A: "Regular backup", B: "Inadvertent deletion", C: "Antivirus update", D: "Proper labeling" },
      correct: "B",
      explanation: "KEY RULE: Inadvertent deletion means accidental removal of files or records, causing data loss. NOTE: Backup, antivirus, and labeling are protective measures rather than causes. REMEMBER: Human error often causes serious loss."
    },
    {
      id: 28, topic: "Booting",
      question: "Starting a computer from complete power-off state is known as",
      options: { A: "warm booting", B: "cold booting", C: "logging off", D: "debugging" },
      correct: "B",
      explanation: "KEY RULE: Cold booting occurs when the system is powered on from an off state. NOTE: Warm booting is a restart without full power-off, while logging off and debugging are different tasks. REMEMBER: Cold boot begins from OFF."
    },
    {
      id: 29, topic: "Computer Maintenance",
      question: "Which of the following is a correct maintenance practice for a computer system?",
      options: { A: "Blocking ventilation holes", B: "Cleaning peripherals regularly", C: "Pouring liquid on components", D: "Using the system in a dusty room" },
      correct: "B",
      explanation: "KEY RULE: Regular cleaning helps keep equipment in good condition and reduces dust-related damage. NOTE: Blocking vents, adding liquid, and using dusty environments harm the system. REMEMBER: Clean and dry conditions support computer longevity."
    },
    {
      id: 30, topic: "ICT",
      question: "Which of the following is a type of network based on geographical coverage?",
      options: { A: "LAN", B: "Compiler", C: "Worksheet", D: "Joystick" },
      correct: "A",
      explanation: "KEY RULE: LAN, MAN, PAN, and WAN are standard network types based on area coverage. NOTE: Compiler, worksheet, and joystick are not network categories. REMEMBER: Local Area Network is one of the common ICT network types."
    },
    {
      id: 31, topic: "Internet Terms",
      question: "HTTP stands for",
      options: { A: "High Transfer Text Protocol", B: "HyperText Transfer Protocol", C: "Hyperlink Terminal Process", D: "Home Transfer Text Page" },
      correct: "B",
      explanation: "KEY RULE: HTTP means HyperText Transfer Protocol, the standard used for web communication. NOTE: The other expansions are incorrect constructions. REMEMBER: HTTP appears at the beginning of many web addresses."
    },
    {
      id: 32, topic: "Email",
      question: "In the e-mail address user@example.com, the part after the at-sign is called the",
      options: { A: "username", B: "password", C: "domain name", D: "protocol" },
      correct: "C",
      explanation: "KEY RULE: The part after the at-sign identifies the domain or hosting service. NOTE: The username is before the at-sign, and password is not visible in the address. REMEMBER: user at domain is the standard e-mail format."
    },
    {
      id: 33, topic: "Network Topologies",
      question: "Which network topology connects all nodes to a central hub or switch?",
      options: { A: "Bus", B: "Ring", C: "Star", D: "Mesh" },
      correct: "C",
      explanation: "KEY RULE: In a star topology, every node links directly to a central device. NOTE: Bus uses a common cable, ring forms a loop, and mesh has many interconnections. REMEMBER: Central hub suggests star."
    },
    {
      id: 34, topic: "Network Devices",
      question: "Which device forwards packets between networks and selects the best route?",
      options: { A: "Router", B: "Printer", C: "Scanner", D: "Keyboard" },
      correct: "A",
      explanation: "KEY RULE: A router directs packets between networks and decides routing paths. NOTE: Printer, scanner, and keyboard are not networking devices. REMEMBER: Route selection belongs to routers."
    },
    {
      id: 35, topic: "Programming Languages",
      question: "Which of the following is a high-level programming language?",
      options: { A: "Machine code", B: "Assembly language", C: "Python", D: "Binary code" },
      correct: "C",
      explanation: "KEY RULE: Python is a high-level language because it is easier for humans to read, write, and maintain. NOTE: Machine code, binary code, and assembly language are low-level forms. REMEMBER: High-level languages are programmer-friendly."
    },
    {
      id: 36, topic: "Algorithms",
      question: "A key property of a good algorithm is that it must",
      options: { A: "be ambiguous", B: "run forever", C: "have definiteness", D: "avoid output" },
      correct: "C",
      explanation: "KEY RULE: Definiteness means every step in the algorithm must be clear and unambiguous. NOTE: Endless execution and lack of output violate algorithm requirements. REMEMBER: A good algorithm is clear, finite, and effective."
    },
    {
      id: 37, topic: "Flowchart Symbols",
      question: "Which flowchart symbol is used for decision making?",
      options: { A: "Rectangle", B: "Diamond", C: "Parallelogram", D: "Oval" },
      correct: "B",
      explanation: "KEY RULE: The diamond symbol represents a decision or branching point in a flowchart. NOTE: Rectangle is for processing, parallelogram for input/output, and oval for start/stop. REMEMBER: Questions in flowcharts go into diamonds."
    },
    {
      id: 38, topic: "Artificial Intelligence",
      question: "Which AI branch is concerned mainly with helping computers understand human language?",
      options: { A: "Machine Learning", B: "Natural Language Processing", C: "File Processing", D: "Boot Control" },
      correct: "B",
      explanation: "KEY RULE: Natural Language Processing focuses on understanding, analyzing, and generating human language. NOTE: Machine Learning is broader, while the other options are unrelated. REMEMBER: Chatbots and translators rely heavily on NLP."
    },
    {
      id: 39, topic: "Robotics",
      question: "Which of the following is a component of a robot used for sensing its environment?",
      options: { A: "Sensor", B: "Worksheet", C: "Paragraph", D: "Domain" },
      correct: "A",
      explanation: "KEY RULE: Sensors help robots detect light, temperature, position, and other environmental conditions. NOTE: The other options are not robotic components. REMEMBER: Robots sense before acting."
    },
    {
      id: 40, topic: "Cybersecurity",
      question: "The act of sending deceptive messages to trick people into revealing passwords or banking details is called",
      options: { A: "compiling", B: "formatting", C: "phishing", D: "debugging" },
      correct: "C",
      explanation: "KEY RULE: Phishing is a cyber threat that uses fake messages, links, or websites to steal confidential information. NOTE: Compiling, formatting, and debugging are legitimate computing activities. REMEMBER: Suspicious urgent messages asking for credentials often indicate phishing."
    }
  ],
    test7: [
    {
      id: 1, topic: "Network Types",
      question: "The type of network represented in the Figure is called",
      diagram: "assets/computer/test7/question1_2.png",
      options: { A: "LAN", B: "MAN", C: "PAN", D: "WAN" },
      correct: "C",
      explanation: "KEY RULE: A Personal Area Network (PAN) connects devices within a very short range around a person, often using Bluetooth. NOTE: LAN covers a building, MAN covers a city, and WAN spans very large areas. REMEMBER: Bluetooth-based nearby device connection usually indicates PAN."
    },
    {
      id: 2, topic: "Bluetooth Technology",
      question: "The communication technology illustrated at the centre of the figure is mainly used for",
      diagram: "assets/computer/test7/question1_2.png",
      options: { A: "long-distance satellite broadcasting", B: "short-range wireless device connection", C: "undersea fibre transmission", D: "high-voltage power distribution" },
      correct: "B",
      explanation: "KEY RULE: Bluetooth is used for short-range wireless communication among personal devices. NOTE: It is not meant for satellite broadcasting, undersea cable transmission, or power distribution. REMEMBER: Phones, headsets, printers and laptops commonly connect with Bluetooth."
    },
    {
      id: 3, topic: "History of Computing",
      question: "Which early computing device was invented by John Napier to aid multiplication and division?",
      options: { A: "Napier's bones", B: "Abacus", C: "Pascal calculator", D: "Jacquard loom" },
      correct: "A",
      explanation: "KEY RULE: Napier's bones were developed to simplify multiplication and division. NOTE: The abacus is a counting frame, Pascal calculator is a mechanical adder, and Jacquard loom controlled weaving patterns. REMEMBER: Napier is directly linked with Napier's bones."
    },
    {
      id: 4, topic: "Computer Generations",
      question: "Which computer generation is associated with transistors?",
      options: { A: "First generation", B: "Second generation", C: "Third generation", D: "Fourth generation" },
      correct: "B",
      explanation: "KEY RULE: Second generation computers used transistors instead of vacuum tubes. NOTE: First generation used vacuum tubes, third used integrated circuits, and fourth used microprocessors. REMEMBER: Transistors made computers smaller, faster and more reliable."
    },
    {
      id: 5, topic: "Computer Classification",
      question: "Which class of computer is best suited for complex scientific calculations such as weather forecasting?",
      options: { A: "Microcomputer", B: "Workstation", C: "Supercomputer", D: "Tablet computer" },
      correct: "C",
      explanation: "KEY RULE: Supercomputers are built for extremely large-scale and complex calculations. NOTE: Microcomputers and tablets are personal systems, while workstations are powerful but smaller in scale. REMEMBER: Massive simulations point to supercomputers."
    },
    {
      id: 6, topic: "Computer Characteristics",
      question: "Which characteristic of a computer refers to its ability to work very fast?",
      options: { A: "Speed", B: "Diligence", C: "Versatility", D: "Storage" },
      correct: "A",
      explanation: "KEY RULE: Speed describes how quickly a computer processes data and instructions. NOTE: Diligence refers to repetition without fatigue, versatility to handling many tasks, and storage to keeping data. REMEMBER: Millions of operations per second show computer speed."
    },
    {
      id: 7, topic: "Input Devices",
      question: "Which device is used to enter spoken words directly into a computer system?",
      options: { A: "Microphone", B: "Printer", C: "Monitor", D: "Plotter" },
      correct: "A",
      explanation: "KEY RULE: A microphone captures sound input for the computer. NOTE: Printer, monitor and plotter are output devices. REMEMBER: Voice goes in through a microphone."
    },
    {
      id: 8, topic: "Output Devices",
      question: "Which of the following devices produces permanent output on paper?",
      options: { A: "Monitor", B: "Speaker", C: "Printer", D: "Mouse" },
      correct: "C",
      explanation: "KEY RULE: A printer produces hard copy output on paper. NOTE: A monitor gives soft copy, speaker gives audio, and mouse is an input device. REMEMBER: Paper output means hard copy from a printer."
    },
    {
      id: 9, topic: "CPU Components",
      question: "The component of the CPU that performs addition, subtraction and logical comparison is the",
      options: { A: "Control Unit", B: "ALU", C: "ROM", D: "Bus" },
      correct: "B",
      explanation: "KEY RULE: The Arithmetic Logic Unit performs arithmetic and logical operations. NOTE: The Control Unit coordinates processing, ROM stores permanent instructions, and the bus carries signals. REMEMBER: ALU is the calculation engine of the CPU."
    },
    {
      id: 10, topic: "Primary Memory",
      question: "Which memory loses its contents when power is switched off?",
      options: { A: "ROM", B: "Flash memory", C: "RAM", D: "DVD" },
      correct: "C",
      explanation: "KEY RULE: RAM is volatile memory, so its contents disappear when power is lost. NOTE: ROM, flash memory and DVD are non-volatile. REMEMBER: Working memory is temporary."
    },
    {
      id: 11, topic: "Storage Units",
      question: "Which of the following is the correct value of 1 byte?",
      options: { A: "2 bits", B: "4 bits", C: "8 bits", D: "16 bits" },
      correct: "C",
      explanation: "KEY RULE: One byte is made up of 8 bits. NOTE: Four bits form a nibble, not a byte. REMEMBER: Byte is the standard basic storage group."
    },
    {
      id: 12, topic: "Registers",
      question: "Which register stores the instruction currently being decoded or executed?",
      options: { A: "CIR", B: "MAR", C: "PC", D: "MDR" },
      correct: "A",
      explanation: "KEY RULE: The Current Instruction Register stores the instruction currently in use by the processor. NOTE: MAR stores addresses, PC points to the next instruction, and MDR stores transferred data. REMEMBER: Current instruction goes to CIR."
    },
    {
      id: 13, topic: "Logic Gates",
      question: "Which logic gate gives a HIGH output only when all inputs are HIGH?",
      options: { A: "OR", B: "AND", C: "NOT", D: "NOR" },
      correct: "B",
      explanation: "KEY RULE: An AND gate outputs 1 only when every input is 1. NOTE: OR needs just one true input, NOT inverts, and NOR is the opposite of OR. REMEMBER: AND is the strict gate."
    },
    {
      id: 14, topic: "Operating Systems",
      question: "Which of the following is an example of an operating system for smartphones?",
      options: { A: "Android", B: "CorelDraw", C: "MS Access", D: "Oracle" },
      correct: "A",
      explanation: "KEY RULE: Android is a mobile operating system widely used on smartphones. NOTE: CorelDraw is a graphics package, MS Access is a database package, and Oracle is a database management system. REMEMBER: Mobile phones commonly run Android or iOS."
    },
    {
      id: 15, topic: "Utility Software",
      question: "Which utility program helps protect a computer system against malware?",
      options: { A: "Spreadsheet", B: "Antivirus", C: "Presentation package", D: "Web browser" },
      correct: "B",
      explanation: "KEY RULE: Antivirus software scans, detects and removes malicious software. NOTE: Spreadsheet, presentation and browsers serve other user tasks. REMEMBER: System protection requires security utilities."
    },
    {
      id: 16, topic: "Application Software",
      question: "Which package is best for preparing a tabulated class result with formulas and totals?",
      options: { A: "Spreadsheet package", B: "Graphics package", C: "Operating system", D: "Antivirus package" },
      correct: "A",
      explanation: "KEY RULE: Spreadsheet packages are designed for formulas, calculations and tabulation. NOTE: Graphics packages handle design, operating systems manage resources, and antivirus protects the system. REMEMBER: Marks and totals suggest spreadsheet use."
    },
    {
      id: 17, topic: "Data and Information",
      question: "Which of the following is best described as processed data?",
      options: { A: "Information", B: "Character", C: "Digitization", D: "Byte" },
      correct: "A",
      explanation: "KEY RULE: Information is processed data that is meaningful and useful. NOTE: A byte is a storage unit, while character and digitization do not mean processed facts in this context. REMEMBER: Data becomes information after processing."
    },
    {
      id: 18, topic: "Number Bases",
      question: "What is the decimal equivalent of binary 1110?",
      options: { A: "12", B: "13", C: "14", D: "15" },
      correct: "C",
      explanation: "FORMULA: 1110 base 2 = 1x8 + 1x4 + 1x2 + 0x1 = 14. NOTE: Wrong answers usually come from incorrect place-value addition. REMEMBER: Binary place values rise as 1, 2, 4, 8 from right to left."
    },
    {
      id: 19, topic: "Word Processing",
      question: "Which feature is used in a word processor to check grammar and spelling mistakes?",
      options: { A: "Mail merge", B: "Spell check", C: "Slide transition", D: "Chart wizard" },
      correct: "B",
      explanation: "KEY RULE: Spell check is used to identify and correct spelling and some grammar issues. NOTE: Mail merge personalizes documents, while slide transition and chart wizard belong to other packages. REMEMBER: Proofing tools are common in word processors."
    },
    {
      id: 20, topic: "Spreadsheet Terms",
      question: "A vertical arrangement of cells in a worksheet is called a",
      options: { A: "row", B: "column", C: "range", D: "record" },
      correct: "B",
      explanation: "KEY RULE: A column runs vertically in a spreadsheet. NOTE: A row runs horizontally, a range is a group of cells, and a record is a database term. REMEMBER: Columns go up and down."
    },
    {
      id: 21, topic: "Database Terms",
      question: "A field in a database table represents a",
      options: { A: "row of related data", B: "single category of information", C: "complete report", D: "set of slides" },
      correct: "B",
      explanation: "KEY RULE: A field is one column containing one type of information such as name or age. NOTE: A row is a record, not a field, and reports and slides are different concepts. REMEMBER: Column equals field."
    },
    {
      id: 22, topic: "Database Packages",
      question: "Which of the following is a database application package?",
      options: { A: "MS Access", B: "MS Paint", C: "PowerPoint", D: "Chrome" },
      correct: "A",
      explanation: "KEY RULE: MS Access is used for creating and managing databases. NOTE: Paint is for graphics, PowerPoint for presentations, and Chrome is a browser. REMEMBER: Tables, queries and forms point to Access."
    },
    {
      id: 23, topic: "Graphics Package",
      question: "Which package is suitable for designing an invitation card?",
      options: { A: "CorelDraw", B: "Linux", C: "Compiler", D: "MS DOS" },
      correct: "A",
      explanation: "KEY RULE: CorelDraw is a graphics package used for creative designs such as invitation cards and logos. NOTE: Linux is an operating system, compiler translates code, and MS DOS is an old operating system interface. REMEMBER: Graphic design tasks need design software."
    },
    {
      id: 24, topic: "Presentation Package",
      question: "Which package is mainly used for slide presentations?",
      options: { A: "MS PowerPoint", B: "MS Excel", C: "MS Access", D: "Antivirus" },
      correct: "A",
      explanation: "KEY RULE: MS PowerPoint is designed for slide-based presentations. NOTE: Excel is for spreadsheets, Access is for databases, and antivirus is for security. REMEMBER: Slides and slide show point to PowerPoint."
    },
    {
      id: 25, topic: "Web Design",
      question: "Which of the following is an example of a web authoring or design tool?",
      options: { A: "Dreamweaver", B: "Joystick", C: "Speaker", D: "Mouse pad" },
      correct: "A",
      explanation: "KEY RULE: Dreamweaver is used to create and edit web pages. NOTE: The other options are hardware or accessories, not web design tools. REMEMBER: Website creation often uses Dreamweaver or HTML editors."
    },
    {
      id: 26, topic: "File Organization",
      question: "Which file access method allows direct retrieval of a record without going through earlier records in order?",
      options: { A: "Sequential access", B: "Random access", C: "Serial access", D: "Manual access" },
      correct: "B",
      explanation: "KEY RULE: Random access allows direct entry to a desired record or location. NOTE: Sequential and serial methods go through data in order, while manual access is not the standard computerized answer here. REMEMBER: Jumping directly to a record means random access."
    },
    {
      id: 27, topic: "Data Security",
      question: "Which of the following helps to maintain data integrity after accidental deletion or disaster?",
      options: { A: "Regular backup", B: "Dust exposure", C: "Weak password", D: "Removing antivirus" },
      correct: "A",
      explanation: "KEY RULE: Backup provides an extra copy of data for restoration after failure, deletion or disaster. NOTE: The other options weaken protection rather than strengthen it. REMEMBER: Important data should never exist in only one place."
    },
    {
      id: 28, topic: "Booting",
      question: "Restarting a computer system without turning off the main power is called",
      options: { A: "cold booting", B: "warm booting", C: "logging out", D: "spooling" },
      correct: "B",
      explanation: "KEY RULE: Warm booting means restarting a running computer. NOTE: Cold booting begins from complete power-off, while logging out and spooling are different operations. REMEMBER: Restart equals warm boot."
    },
    {
      id: 29, topic: "Computer Maintenance",
      question: "Which practice is best for prolonging the life of a computer system?",
      options: { A: "Keeping the system in a dusty room", B: "Blocking ventilation holes", C: "Regular cleaning and proper handling", D: "Pouring liquid near the keyboard" },
      correct: "C",
      explanation: "KEY RULE: Regular cleaning and careful handling reduce damage and improve system longevity. NOTE: Dust, blocked vents and liquids increase the chance of faults. REMEMBER: Clean, cool and dry conditions are best for computers."
    },
    {
      id: 30, topic: "ICT",
      question: "ICT is best described as the use of computers and communication technologies for",
      options: { A: "information processing and exchange", B: "crop spraying only", C: "road construction only", D: "book binding only" },
      correct: "A",
      explanation: "KEY RULE: ICT combines information handling with communication systems for sharing and processing information. NOTE: The other options are unrelated specialized activities. REMEMBER: ICT links computing and communication."
    },
    {
      id: 31, topic: "Internet Terms",
      question: "A browser is used mainly for",
      options: { A: "viewing web pages", B: "printing cash receipts", C: "measuring voltage", D: "designing circuits only" },
      correct: "A",
      explanation: "KEY RULE: A browser is software used to access and view web pages. NOTE: The other functions belong to other tools and devices. REMEMBER: Chrome, Edge and Firefox are browsers."
    },
    {
      id: 32, topic: "E-mail",
      question: "In an e-mail address user@school.edu.ng, the part after the at-sign is the",
      options: { A: "username", B: "domain name", C: "password", D: "message body" },
      correct: "B",
      explanation: "KEY RULE: The part after the at-sign identifies the domain or service host. NOTE: The username is before the at-sign, while password and message body are separate concepts. REMEMBER: user at domain is standard e-mail structure."
    },
    {
      id: 33, topic: "Network Topologies",
      question: "Which topology connects all nodes to one central device?",
      options: { A: "Bus topology", B: "Star topology", C: "Ring topology", D: "Sequential topology" },
      correct: "B",
      explanation: "KEY RULE: Star topology uses a central hub or switch to connect all nodes. NOTE: Bus uses one main cable, ring forms a loop, and sequential topology is not the expected standard answer. REMEMBER: Central connection point indicates star."
    },
    {
      id: 34, topic: "Network Devices",
      question: "Which network device regenerates weak signals so they can travel longer distances?",
      options: { A: "Repeater", B: "Keyboard", C: "Plotter", D: "Microphone" },
      correct: "A",
      explanation: "KEY RULE: A repeater strengthens or regenerates signals in a network. NOTE: Keyboard, plotter and microphone are not signal-boosting devices. REMEMBER: Repeaters repeat and extend signals."
    },
    {
      id: 35, topic: "Programming Languages",
      question: "Which of the following is a high-level programming language?",
      options: { A: "Assembly language", B: "Machine code", C: "Java", D: "Binary instruction" },
      correct: "C",
      explanation: "KEY RULE: Java is a high-level language designed to be more readable and portable. NOTE: Assembly, machine code and binary instructions are low-level forms. REMEMBER: High-level languages are closer to human language than machine language."
    },
    {
      id: 36, topic: "Algorithms",
      question: "A sequence of well-defined steps for solving a problem is called an",
      options: { A: "algorithm", B: "output device", C: "database", D: "worksheet" },
      correct: "A",
      explanation: "KEY RULE: An algorithm is an ordered set of steps for solving a problem. NOTE: The other options are unrelated concepts. REMEMBER: Good programming starts with a clear algorithm."
    },
    {
      id: 37, topic: "Flowchart Symbols",
      question: "Which flowchart symbol represents input or output?",
      options: { A: "Rectangle", B: "Diamond", C: "Parallelogram", D: "Oval" },
      correct: "C",
      explanation: "KEY RULE: The parallelogram symbol represents input and output operations in a flowchart. NOTE: Rectangle is process, diamond is decision, and oval is start/stop. REMEMBER: Slanted shape means I/O."
    },
    {
      id: 38, topic: "Artificial Intelligence",
      question: "Which branch of AI enables systems to improve from experience and data?",
      options: { A: "Machine Learning", B: "Page layout", C: "Formatting", D: "Mail merge" },
      correct: "A",
      explanation: "KEY RULE: Machine Learning allows systems to learn patterns from data and improve performance. NOTE: The other options are not AI branches. REMEMBER: Learning from examples is central to machine learning."
    },
    {
      id: 39, topic: "Robotics",
      question: "Which component of a robot helps it detect conditions such as heat, light or distance?",
      options: { A: "Sensor", B: "Paragraph", C: "Worksheet", D: "Domain" },
      correct: "A",
      explanation: "KEY RULE: Sensors collect environmental information for the robot. NOTE: The other options are unrelated to robotic hardware. REMEMBER: Robots sense first, then act."
    },
    {
      id: 40, topic: "Cybersecurity",
      question: "The act of using fake websites or messages to steal confidential details is known as",
      options: { A: "phishing", B: "compiling", C: "booting", D: "formatting" },
      correct: "A",
      explanation: "KEY RULE: Phishing is a deceptive cyber-attack used to trick users into revealing passwords, account details or other sensitive data. NOTE: Compiling, booting and formatting are normal computing processes. REMEMBER: Be suspicious of urgent requests for private information."
    }
  ],
    test8: [
    {
      id: 1, topic: "Graphics Interface",
      question: "The part of the graphic interface in the Figure labelled V is called",
      diagram: "assets/computer/test8/question1-5.png",
      options: { A: "pan", B: "zoom in", C: "zoom out", D: "fit to window" },
      correct: "D",
      explanation: "KEY RULE: The icon labelled V shows a framed object fitted within a boundary, which represents fit to window. NOTE: Pan is usually shown with a hand symbol, while zoom in and zoom out use magnifying glass icons. REMEMBER: When an image is adjusted to occupy the available display area properly, the command is fit to window."
    },
    {
      id: 2, topic: "Graphics Interface",
      question: "The part of the graphic interface labelled III is used to",
      diagram: "assets/computer/test8/question1-5.png",
      options: { A: "move the drawing surface", B: "enlarge the object", C: "reduce the object", D: "close the window" },
      correct: "A",
      explanation: "KEY RULE: The hand-shaped icon represents the pan tool, which is used to move the view across the drawing area. NOTE: Enlarging and reducing objects are zoom actions, while closing a window is unrelated to this icon. REMEMBER: A hand symbol in graphics packages commonly means drag or pan across the workspace."
    },
    {
      id: 3, topic: "Graphics Interface",
      question: "The graphic interface icon labelled I is used to",
      diagram: "assets/computer/test8/question1-5.png",
      options: { A: "zoom in on an object", B: "zoom out from an object", C: "fit object to screen", D: "move the page" },
      correct: "A",
      explanation: "KEY RULE: A magnifying glass with a plus sign represents zoom in. NOTE: Zoom out usually carries a minus sign, fit to screen uses a framing icon, and moving the page is done with the pan tool. REMEMBER: Plus inside a magnifier means enlarge the current view."
    },
    {
      id: 4, topic: "Graphics Interface",
      question: "The graphic interface icon labelled II is used to",
      diagram: "assets/computer/test8/question1-5.png",
      options: { A: "close the file", B: "zoom out from the current view", C: "pan the page", D: "print the drawing" },
      correct: "B",
      explanation: "KEY RULE: A magnifying glass with a minus sign represents zoom out. NOTE: Closing, panning, and printing are different commands not shown by this icon. REMEMBER: Minus inside a magnifier means reduce the visible size of the object or page."
    },
    {
      id: 5, topic: "Graphics Interface",
      question: "The icon labelled IV is most likely used to",
      diagram: "assets/computer/test8/question1-5.png",
      options: { A: "set the view to 100 percent", B: "delete the selected object", C: "insert a new page", D: "draw a rectangle" },
      correct: "A",
      explanation: "KEY RULE: The icon marked 100 indicates restoration of the view to actual or normal size, usually 100 percent. NOTE: Deleting, inserting pages, and drawing shapes use different interface symbols. REMEMBER: 100 on a zoom icon usually means actual-size display."
    },
    {
      id: 6, topic: "History of Computing",
      question: "Which early computing device was invented by Blaise Pascal?",
      options: { A: "Pascal calculator", B: "Jacquard loom", C: "Abacus", D: "Slide rule" },
      correct: "A",
      explanation: "KEY RULE: Blaise Pascal developed the Pascal calculator, also called the Pascaline, for arithmetic operations. NOTE: Jacquard loom used punched cards, the abacus is much older, and the slide rule is a different device. REMEMBER: Pascal is directly linked with Pascal calculator."
    },
    {
      id: 7, topic: "Computer Generations",
      question: "The technology associated with second generation computers is",
      options: { A: "vacuum tubes", B: "transistors", C: "integrated circuits", D: "microprocessors" },
      correct: "B",
      explanation: "KEY RULE: Second generation computers used transistors, replacing the vacuum tubes of the first generation. NOTE: Integrated circuits belong to the third generation, while microprocessors belong to the fourth. REMEMBER: Transistors made computers smaller and more reliable than vacuum tubes."
    },
    {
      id: 8, topic: "Computer Types",
      question: "A computer used by one person at a time for general tasks is usually a",
      options: { A: "mainframe", B: "microcomputer", C: "supercomputer", D: "minicomputer" },
      correct: "B",
      explanation: "KEY RULE: A microcomputer is designed for personal use and general-purpose computing. NOTE: Mainframes and supercomputers handle much larger workloads, while minicomputers are mid-range systems. REMEMBER: Desktop and laptop systems are microcomputers."
    },
    {
      id: 9, topic: "Hardware",
      question: "The main circuit board that holds the CPU, memory and connectors is called the",
      options: { A: "motherboard", B: "hard disk", C: "printer board", D: "monitor case" },
      correct: "A",
      explanation: "KEY RULE: The motherboard is the central circuit board that connects all major computer components. NOTE: A hard disk stores data, while the other options are not the main system board. REMEMBER: The motherboard is the backbone of the computer system."
    },
    {
      id: 10, topic: "Input Devices",
      question: "Which device is best used for entering text and commands into a computer?",
      options: { A: "Keyboard", B: "Speaker", C: "Monitor", D: "Plotter" },
      correct: "A",
      explanation: "KEY RULE: The keyboard is the primary input device for entering text, numbers and commands. NOTE: Speaker, monitor and plotter are output devices. REMEMBER: Typing requires a keyboard."
    },
    {
      id: 11, topic: "Output Devices",
      question: "Which device is used to display soft-copy output?",
      options: { A: "Printer", B: "Scanner", C: "Monitor", D: "Joystick" },
      correct: "C",
      explanation: "KEY RULE: A monitor displays information visually on the screen, making it a soft-copy output device. NOTE: A printer gives hard copy, while scanner and joystick are input devices. REMEMBER: Screen display means monitor."
    },
    {
      id: 12, topic: "CPU Components",
      question: "Which part of the CPU performs arithmetic and logical operations?",
      options: { A: "Control Unit", B: "ALU", C: "ROM", D: "Bus" },
      correct: "B",
      explanation: "KEY RULE: The Arithmetic Logic Unit performs calculations and logical comparisons. NOTE: The Control Unit coordinates activities, ROM stores instructions, and the bus carries signals. REMEMBER: ALU is the calculator section of the processor."
    },
    {
      id: 13, topic: "Primary Memory",
      question: "Which memory is volatile?",
      options: { A: "ROM", B: "DVD", C: "RAM", D: "Flash disk" },
      correct: "C",
      explanation: "KEY RULE: RAM is volatile memory because its contents are lost when power goes off. NOTE: ROM, DVD and flash disk retain their contents without power. REMEMBER: Temporary working memory is RAM."
    },
    {
      id: 14, topic: "Storage Units",
      question: "Which of the following is equal to 8 bits?",
      options: { A: "Nibble", B: "Byte", C: "Word", D: "Kilobyte" },
      correct: "B",
      explanation: "KEY RULE: One byte consists of 8 bits. NOTE: A nibble is 4 bits, and kilobyte is much larger. REMEMBER: Bit is the smallest common unit; byte is the next basic grouping."
    },
    {
      id: 15, topic: "Logic Gates",
      question: "Which gate produces the opposite of its input?",
      options: { A: "OR gate", B: "NOT gate", C: "AND gate", D: "NOR gate" },
      correct: "B",
      explanation: "KEY RULE: A NOT gate inverts the input, turning 1 to 0 and 0 to 1. NOTE: OR and AND combine inputs, while NOR is the inverse of OR. REMEMBER: NOT is also called an inverter."
    },
    {
      id: 16, topic: "Operating Systems",
      question: "Which of the following is an example of an operating system?",
      options: { A: "MS Word", B: "Linux", C: "CorelDraw", D: "PowerPoint" },
      correct: "B",
      explanation: "KEY RULE: Linux is an operating system that manages system resources and supports application software. NOTE: MS Word, CorelDraw and PowerPoint are application packages. REMEMBER: Operating systems run the computer environment."
    },
    {
      id: 17, topic: "Utility Software",
      question: "Which utility software is used to protect a computer against malware?",
      options: { A: "Database package", B: "Spreadsheet package", C: "Antivirus", D: "Presentation package" },
      correct: "C",
      explanation: "KEY RULE: Antivirus software detects, prevents and removes malicious programs. NOTE: Database, spreadsheet and presentation packages are application software, not protective utilities. REMEMBER: Security against malware begins with antivirus tools."
    },
    {
      id: 18, topic: "Translator Software",
      question: "A translator that converts a high-level program line by line is called an",
      options: { A: "compiler", B: "assembler", C: "interpreter", D: "editor" },
      correct: "C",
      explanation: "KEY RULE: An interpreter translates and executes code one line at a time. NOTE: A compiler translates the entire program, assembler handles assembly language, and an editor is for writing code. REMEMBER: Interpret means translate step by step."
    },
    {
      id: 19, topic: "Data and Information",
      question: "Processed facts that are meaningful to the user are known as",
      options: { A: "data", B: "information", C: "digits", D: "characters" },
      correct: "B",
      explanation: "KEY RULE: Information is processed data that has meaning and usefulness. NOTE: Data is raw facts, while digits and characters are just symbols. REMEMBER: Data becomes information after processing."
    },
    {
      id: 20, topic: "Number Bases",
      question: "What is the decimal equivalent of binary 1001?",
      options: { A: "7", B: "8", C: "9", D: "10" },
      correct: "C",
      explanation: "FORMULA: 1001 base 2 = 1x8 + 0x4 + 0x2 + 1x1 = 9. NOTE: The wrong options come from incorrect place-value calculation. REMEMBER: Binary place values rise as 1, 2, 4, 8 from right to left."
    },
    {
      id: 21, topic: "Word Processing",
      question: "Which feature is used in MS Word to combine one document with many addresses?",
      options: { A: "Spell check", B: "Mail merge", C: "Find and replace", D: "Page setup" },
      correct: "B",
      explanation: "KEY RULE: Mail merge combines a main document with a list of records to produce many personalized copies. NOTE: Spell check corrects errors, find and replace edits text, and page setup controls layout. REMEMBER: One letter to many recipients means mail merge."
    },
    {
      id: 22, topic: "Spreadsheet",
      question: "The intersection of a row and a column in a worksheet is called a",
      options: { A: "cell", B: "record", C: "file", D: "chart" },
      correct: "A",
      explanation: "KEY RULE: A cell is the box where a row and a column meet. NOTE: A record is a database row, while file and chart mean different things. REMEMBER: Entries like A1 and C5 are cell references."
    },
    {
      id: 23, topic: "Database Terms",
      question: "A complete row of related information in a database table is called a",
      options: { A: "field", B: "record", C: "report", D: "query" },
      correct: "B",
      explanation: "KEY RULE: A record is a full row containing related data about one person, object or event. NOTE: A field is a column, while report and query are different database tools. REMEMBER: Row equals record."
    },
    {
      id: 24, topic: "Graphics Package",
      question: "Which software is best for designing logos and invitation cards?",
      options: { A: "CorelDraw", B: "MS Access", C: "Chrome", D: "Antivirus" },
      correct: "A",
      explanation: "KEY RULE: CorelDraw is a graphics package suitable for visual designs such as logos, posters and invitation cards. NOTE: Access is for databases, Chrome is a browser, and antivirus protects the system. REMEMBER: Creative design tasks belong to graphics software."
    },
    {
      id: 25, topic: "Presentation Package",
      question: "Which of the following is used for preparing slide presentations?",
      options: { A: "MS Excel", B: "MS PowerPoint", C: "MS Access", D: "MS DOS" },
      correct: "B",
      explanation: "KEY RULE: MS PowerPoint is designed specifically for creating slides and running presentations. NOTE: Excel is for spreadsheets, Access is for databases, and MS DOS is an operating environment. REMEMBER: Slides point to PowerPoint."
    },
    {
      id: 26, topic: "Web Design",
      question: "Which of the following is an example of a web design package?",
      options: { A: "Dreamweaver", B: "Keyboard", C: "Printer", D: "Speaker" },
      correct: "A",
      explanation: "KEY RULE: Dreamweaver is used for creating and editing web pages. NOTE: Keyboard, printer and speaker are hardware devices, not web authoring tools. REMEMBER: Web page development requires tools like Dreamweaver."
    },
    {
      id: 27, topic: "File Organization",
      question: "Which access method reads records one after another in order?",
      options: { A: "Random access", B: "Sequential access", C: "Indexed access", D: "Direct memory access" },
      correct: "B",
      explanation: "KEY RULE: Sequential access retrieves records in a fixed order from beginning to end. NOTE: Random access jumps directly to a location, while indexed uses an index for lookup. REMEMBER: One-after-another retrieval is sequential."
    },
    {
      id: 28, topic: "Data Security",
      question: "Which of the following best protects important files against permanent loss?",
      options: { A: "Regular backup", B: "Increasing monitor brightness", C: "Turning off the speaker", D: "Changing wallpaper" },
      correct: "A",
      explanation: "KEY RULE: Backup creates extra copies of files for recovery after damage, deletion or disaster. NOTE: The other options do not preserve data. REMEMBER: Valuable data should always have another copy."
    },
    {
      id: 29, topic: "Booting",
      question: "Restarting a running computer system is known as",
      options: { A: "cold booting", B: "warm booting", C: "formatting", D: "logging out" },
      correct: "B",
      explanation: "KEY RULE: Warm booting means restarting a computer that is already powered on. NOTE: Cold booting starts from full power-off, while formatting and logging out are different operations. REMEMBER: Restart means warm boot."
    },
    {
      id: 30, topic: "Computer Maintenance",
      question: "Which of the following is good maintenance practice?",
      options: { A: "Using the system in a dusty room", B: "Regular cleaning of hardware parts", C: "Blocking ventilation openings", D: "Keeping water near the keyboard" },
      correct: "B",
      explanation: "KEY RULE: Regular cleaning helps prevent dust build-up and keeps components working properly. NOTE: Dust, blocked vents and nearby liquids can damage the system. REMEMBER: Clean and safe environments extend computer life."
    },
    {
      id: 31, topic: "ICT",
      question: "ICT combines information technology with",
      options: { A: "construction", B: "communication", C: "agriculture", D: "sports" },
      correct: "B",
      explanation: "KEY RULE: ICT stands for Information and Communication Technology. NOTE: The other options do not complete the accepted meaning of ICT. REMEMBER: Communication is the second major part of ICT."
    },
    {
      id: 32, topic: "Internet Terms",
      question: "A website address is officially known as a",
      options: { A: "URL", B: "RAM", C: "CPU", D: "ALU" },
      correct: "A",
      explanation: "KEY RULE: URL means Uniform Resource Locator and identifies the address of a web resource. NOTE: RAM, CPU and ALU are computer hardware or memory terms. REMEMBER: Web address equals URL."
    },
    {
      id: 33, topic: "Email",
      question: "In the e-mail address user@school.edu.ng, the part before the at-sign is the",
      options: { A: "domain name", B: "username", C: "country code", D: "website" },
      correct: "B",
      explanation: "KEY RULE: The part before the at-sign identifies the user's mailbox name or username. NOTE: The domain comes after the at-sign, and the other options are different concepts. REMEMBER: user at domain is the standard structure."
    },
    {
      id: 34, topic: "Network Devices",
      question: "Which device routes packets between different networks?",
      options: { A: "Router", B: "Scanner", C: "Plotter", D: "Keyboard" },
      correct: "A",
      explanation: "KEY RULE: A router directs traffic between networks and chooses suitable paths for packets. NOTE: Scanner, plotter and keyboard are not networking devices. REMEMBER: Routes are chosen by routers."
    },
    {
      id: 35, topic: "Programming Languages",
      question: "Which of the following is a low-level language?",
      options: { A: "Python", B: "Java", C: "Assembly language", D: "BASIC" },
      correct: "C",
      explanation: "KEY RULE: Assembly language is close to machine code and hardware operations, making it low-level. NOTE: Python, Java and BASIC are high-level languages. REMEMBER: Low-level languages are hardware-near."
    },
    {
      id: 36, topic: "Algorithms",
      question: "A key property of a good algorithm is",
      options: { A: "ambiguity", B: "finiteness", C: "infinite repetition", D: "unclear output" },
      correct: "B",
      explanation: "KEY RULE: Finiteness means the algorithm must end after a limited number of steps. NOTE: Ambiguity and endless repetition make an algorithm poor. REMEMBER: A valid algorithm must stop."
    },
    {
      id: 37, topic: "Flowchart Symbols",
      question: "Which symbol is used in a flowchart to represent decision making?",
      options: { A: "Rectangle", B: "Diamond", C: "Oval", D: "Parallelogram" },
      correct: "B",
      explanation: "KEY RULE: The diamond symbol represents a decision or branching point in a flowchart. NOTE: Rectangle is for process, oval is for start/stop, and parallelogram is for input/output. REMEMBER: Yes/No choices go in diamonds."
    },
    {
      id: 38, topic: "Artificial Intelligence",
      question: "Which AI branch helps computers understand and process human language?",
      options: { A: "Natural Language Processing", B: "Spreadsheeting", C: "Printing", D: "Booting" },
      correct: "A",
      explanation: "KEY RULE: Natural Language Processing focuses on understanding and generating human language. NOTE: The other options are unrelated to AI language tasks. REMEMBER: Translation, chatbots and speech tools depend on NLP."
    },
    {
      id: 39, topic: "Robotics",
      question: "Which robot component is used for movement and physical action?",
      options: { A: "Actuator", B: "Worksheet", C: "Paragraph", D: "Database" },
      correct: "A",
      explanation: "KEY RULE: Actuators are responsible for movement and action in robots. NOTE: The other options are unrelated computing terms. REMEMBER: Sensors sense, controllers decide, actuators act."
    },
    {
      id: 40, topic: "Cybersecurity",
      question: "Using fake websites or messages to trick users into revealing confidential details is called",
      options: { A: "phishing", B: "printing", C: "formatting", D: "compiling" },
      correct: "A",
      explanation: "KEY RULE: Phishing is a deceptive cybercrime used to obtain passwords, account details and other sensitive information. NOTE: Printing, formatting and compiling are normal computing activities, not theft by deception. REMEMBER: Fake urgent requests for credentials often indicate phishing."
    }
  ],
    test9: [
    {
      id: 1, topic: "MS Access",
      question: "The part of the MS Access interface labelled X in the Figure is called",
      diagram: "assets/computer/test9/question1_4.png",
      options: { A: "Report view", B: "Report wizard", C: "Query design", D: "Query view" },
      correct: "D",
      explanation: "KEY RULE: The icon labelled X represents Query View in the MS Access interface. NOTE: Report view and Report wizard are report tools, while Query design is a different query-creation mode. REMEMBER: In Access, query-related icons are used for viewing or designing data retrieval structures."
    },
    {
      id: 2, topic: "MS Access",
      question: "The part of the MS Access interface labelled 'Print Preview' in the Figure is used to",
      diagram: "assets/computer/test9/question1_4.png",
      options: { A: "view how a report or document will appear when printed", B: "create a new database table", C: "delete selected records permanently", D: "convert a query to a form automatically" },
      correct: "A",
      explanation: "KEY RULE: Print Preview displays a page exactly as it will appear on paper before actual printing. NOTE: It does not create tables, delete records, or automatically convert queries into forms. REMEMBER: Preview first, then print."
    },
    {
      id: 3, topic: "MS Access",
      question: "The interface option labelled 'Layout View' in the Figure is mainly used for",
      diagram: "assets/computer/test9/question1_4.png",
      options: { A: "testing network devices", B: "editing the structure and appearance of forms or reports while viewing data", C: "booting the computer system", D: "running spreadsheet formulas" },
      correct: "B",
      explanation: "KEY RULE: Layout View allows a user to modify the design and arrangement of forms or reports while still seeing live data. NOTE: It is unrelated to networking, booting, or spreadsheet calculations. REMEMBER: Layout View combines design adjustment with data visibility."
    },
    {
      id: 4, topic: "MS Access",
      question: "The interface option labelled 'Design View' in the Figure is best used for",
      diagram: "assets/computer/test9/question1_4.png",
      options: { A: "structuring database objects in detailed design mode", B: "playing audio files", C: "zooming graphics", D: "sending e-mail attachments" },
      correct: "A",
      explanation: "KEY RULE: Design View is used for creating or modifying the detailed structure of tables, queries, forms, and reports. NOTE: It is not for multimedia playback, graphics zooming, or e-mail operations. REMEMBER: Deep editing of structure happens in Design View."
    },
    {
      id: 5, topic: "History of Computing",
      question: "Which early computing device was used mainly for census tabulation?",
      options: { A: "Hollerith machine", B: "Abacus", C: "Slide rule", D: "Pascal calculator" },
      correct: "A",
      explanation: "KEY RULE: Hollerith's machine was developed for tabulating census data efficiently. NOTE: The abacus is a counting device, slide rule aids calculation, and Pascal calculator performs arithmetic mechanically. REMEMBER: Census processing strongly points to Hollerith."
    },
    {
      id: 6, topic: "Computer Generations",
      question: "Computers that used vacuum tubes belong to the",
      options: { A: "first generation", B: "second generation", C: "third generation", D: "fourth generation" },
      correct: "A",
      explanation: "KEY RULE: First generation computers used vacuum tubes for circuitry. NOTE: Second generation used transistors, third used integrated circuits, and fourth used microprocessors. REMEMBER: Vacuum tubes mark the earliest electronic generation."
    },
    {
      id: 7, topic: "Computer Types",
      question: "Which type of computer is worn on the body and often used for fitness or health tracking?",
      options: { A: "Mainframe", B: "Wearable computer", C: "Supercomputer", D: "Minicomputer" },
      correct: "B",
      explanation: "KEY RULE: Wearable computers are small computing devices designed to be worn on the body. NOTE: Mainframes and supercomputers are large systems, while minicomputers are mid-range computers. REMEMBER: Smart watches are common examples of wearables."
    },
    {
      id: 8, topic: "Computer Characteristics",
      question: "The ability of a computer to store huge amounts of data is referred to as",
      options: { A: "accuracy", B: "large storage", C: "fatigue", D: "guesswork" },
      correct: "B",
      explanation: "KEY RULE: Large storage refers to the computer's capacity to keep huge amounts of information. NOTE: Accuracy concerns correctness, while fatigue and guesswork are human traits, not computer characteristics. REMEMBER: Modern systems can store data in gigabytes and terabytes."
    },
    {
      id: 9, topic: "Input Devices",
      question: "Which of the following is an example of a pointing device?",
      options: { A: "Mouse", B: "Printer", C: "Speaker", D: "Monitor" },
      correct: "A",
      explanation: "KEY RULE: A mouse is a pointing device used to move the cursor and select items on screen. NOTE: Printer, speaker, and monitor are output devices. REMEMBER: Pointing and clicking suggest a mouse."
    },
    {
      id: 10, topic: "Keyboard Keys",
      question: "Which set of keys is used mainly for moving the cursor on the screen?",
      options: { A: "Function keys", B: "Cursor control keys", C: "Alphabetic keys", D: "Numeric keypad only" },
      correct: "B",
      explanation: "KEY RULE: Cursor control keys move the insertion point or pointer across the screen. NOTE: Function keys trigger commands, alphabetic keys type letters, and numeric keys enter numbers. REMEMBER: Arrow keys are cursor-control keys."
    },
    {
      id: 11, topic: "Output Devices",
      question: "Which output device is best for producing graphical drawings such as building plans?",
      options: { A: "Plotter", B: "Microphone", C: "Scanner", D: "Joystick" },
      correct: "A",
      explanation: "KEY RULE: A plotter is used for high-precision large-format graphics like engineering and architectural drawings. NOTE: Microphone, scanner, and joystick are input devices. REMEMBER: Technical drawing output points to a plotter."
    },
    {
      id: 12, topic: "CPU Components",
      question: "Which CPU component interprets instructions and controls system operations?",
      options: { A: "ALU", B: "Control Unit", C: "Hard disk", D: "Flash memory" },
      correct: "B",
      explanation: "KEY RULE: The Control Unit interprets instructions and coordinates the activities of the computer system. NOTE: The ALU handles arithmetic and logic, while hard disk and flash memory are storage devices. REMEMBER: Control and coordination belong to the CU."
    },
    {
      id: 13, topic: "Memory Types",
      question: "Which memory contains permanent instructions needed to start a computer?",
      options: { A: "RAM", B: "Cache", C: "ROM", D: "Register" },
      correct: "C",
      explanation: "KEY RULE: ROM stores permanent instructions such as the startup firmware. NOTE: RAM and cache are volatile, while registers are temporary processor storage locations. REMEMBER: Boot instructions are kept in ROM."
    },
    {
      id: 14, topic: "Storage Units",
      question: "Which of the following is the largest unit of storage among these?",
      options: { A: "Kilobyte", B: "Megabyte", C: "Gigabyte", D: "Terabyte" },
      correct: "D",
      explanation: "KEY RULE: Storage units grow from kilobyte to megabyte to gigabyte to terabyte. NOTE: Each step represents a much larger capacity than the previous one. REMEMBER: TB is larger than GB."
    },
    {
      id: 15, topic: "Registers",
      question: "Which register stores data being transferred to or from memory?",
      options: { A: "MDR", B: "MAR", C: "PC", D: "CIR" },
      correct: "A",
      explanation: "KEY RULE: The Memory Data Register stores the actual data being read from or written to memory. NOTE: MAR stores addresses, PC stores the next instruction location, and CIR holds the current instruction. REMEMBER: Data belongs to MDR."
    },
    {
      id: 16, topic: "Logic Gates",
      question: "Which logic gate produces a HIGH output when at least one input is HIGH?",
      options: { A: "AND", B: "NOT", C: "OR", D: "NAND" },
      correct: "C",
      explanation: "KEY RULE: An OR gate outputs 1 when one or more of its inputs is 1. NOTE: AND requires all inputs to be 1, NOT inverts, and NAND is the inverse of AND. REMEMBER: OR is satisfied by any true input."
    },
    {
      id: 17, topic: "System Software",
      question: "Which of the following is classified as system software?",
      options: { A: "MS Word", B: "Operating system", C: "Spreadsheet package", D: "Graphics package" },
      correct: "B",
      explanation: "KEY RULE: The operating system is system software because it manages hardware and supports application programs. NOTE: Word processors, spreadsheets, and graphics packages are application software. REMEMBER: The OS runs the computing environment."
    },
    {
      id: 18, topic: "Translator Software",
      question: "A translator that converts an entire source program before execution is called a",
      options: { A: "compiler", B: "interpreter", C: "editor", D: "debugger" },
      correct: "A",
      explanation: "KEY RULE: A compiler translates the whole program into machine code before execution. NOTE: An interpreter works line by line, while editor and debugger serve different roles. REMEMBER: Compile first, then run."
    },
    {
      id: 19, topic: "Data and Information",
      question: "Which of the following is a property of good information?",
      options: { A: "Meaninglessness", B: "Irrelevance", C: "Accuracy", D: "Ambiguity" },
      correct: "C",
      explanation: "KEY RULE: Good information should be accurate, relevant, timely, and useful. NOTE: Meaninglessness, irrelevance, and ambiguity reduce the value of information. REMEMBER: Correct decisions depend on accurate information."
    },
    {
      id: 20, topic: "Number Bases",
      question: "What is the decimal equivalent of binary 1010?",
      options: { A: "8", B: "9", C: "10", D: "12" },
      correct: "C",
      explanation: "FORMULA: 1010 base 2 = 1x8 + 0x4 + 1x2 + 0x1 = 10. NOTE: The distractors result from wrong place-value addition. REMEMBER: Binary uses powers of 2."
    },
    {
      id: 21, topic: "Word Processing",
      question: "Which operation in MS Word is used to align text evenly along both left and right margins?",
      options: { A: "Justify", B: "Copy", C: "Paste", D: "Close" },
      correct: "A",
      explanation: "KEY RULE: Justify aligns text neatly against both margins. NOTE: Copy and paste are editing commands, while close exits the file or program. REMEMBER: Fully aligned paragraph edges indicate justification."
    },
    {
      id: 22, topic: "Spreadsheet",
      question: "Which Excel function is used to calculate the arithmetic mean of a group of numbers?",
      options: { A: "SUM", B: "AVERAGE", C: "MAX", D: "COUNT" },
      correct: "B",
      explanation: "FORMULA: The AVERAGE function returns the mean of selected numeric values. NOTE: SUM adds values, MAX finds the highest value, and COUNT tallies entries. REMEMBER: Mean equals average."
    },
    {
      id: 23, topic: "Database Terms",
      question: "A column in a database table is called a",
      options: { A: "record", B: "field", C: "report", D: "row" },
      correct: "B",
      explanation: "KEY RULE: A field is a column that holds one type of information. NOTE: A record is a row, while report is an output format. REMEMBER: Column equals field."
    },
    {
      id: 24, topic: "Graphics Package",
      question: "Which package is commonly used for designing certificates and logos?",
      options: { A: "CorelDraw", B: "MS Access", C: "Linux", D: "Chrome" },
      correct: "A",
      explanation: "KEY RULE: CorelDraw is a graphics package used for creative visual design. NOTE: Access is for databases, Linux is an operating system, and Chrome is a browser. REMEMBER: Design tasks point to graphics software."
    },
    {
      id: 25, topic: "Presentation Package",
      question: "Which feature in PowerPoint controls how one slide changes to another?",
      options: { A: "Transition", B: "Mail merge", C: "Primary key", D: "Spell check only" },
      correct: "A",
      explanation: "KEY RULE: Transition effects determine how one slide moves to the next in a presentation. NOTE: Mail merge belongs to word processing, while primary key belongs to databases. REMEMBER: Slide-to-slide movement is transition."
    },
    {
      id: 26, topic: "Web Design",
      question: "Which of the following is an example of a web design package?",
      options: { A: "Dreamweaver", B: "Plotter", C: "Speaker", D: "Keyboard" },
      correct: "A",
      explanation: "KEY RULE: Dreamweaver is a web design and authoring package. NOTE: Plotter, speaker, and keyboard are hardware devices. REMEMBER: Websites are built with web tools, not peripherals."
    },
    {
      id: 27, topic: "File Organization",
      question: "Which file organization stores records in the exact order they are received?",
      options: { A: "Serial", B: "Relational", C: "Network", D: "Graphical" },
      correct: "A",
      explanation: "KEY RULE: Serial file organization stores records one after another in order of arrival. NOTE: Relational is a database model, while the other options are not the intended file organization methods here. REMEMBER: Arrival order means serial."
    },
    {
      id: 28, topic: "File Operations",
      question: "Which of the following is a basic file operation?",
      options: { A: "Delete", B: "Compile", C: "Broadcast", D: "Translate" },
      correct: "A",
      explanation: "KEY RULE: Deleting is a standard file operation along with create, open, copy, retrieve, and update. NOTE: Compile and translate belong to programming, while broadcast belongs to communication. REMEMBER: Files are managed with direct handling actions."
    },
    {
      id: 29, topic: "Data Security",
      question: "Which measure is most useful for restoring files after accidental deletion or hardware failure?",
      options: { A: "Backup", B: "Brightness control", C: "Screen saver", D: "Speaker volume" },
      correct: "A",
      explanation: "KEY RULE: Backup provides a recoverable extra copy of important data. NOTE: Brightness, screen saver, and speaker volume do not protect stored files. REMEMBER: Recovery depends on having another copy."
    },
    {
      id: 30, topic: "Booting",
      question: "Turning on a computer from complete power-off state is called",
      options: { A: "warm booting", B: "cold booting", C: "logging off", D: "debugging" },
      correct: "B",
      explanation: "KEY RULE: Cold booting occurs when a system starts from an off state. NOTE: Warm booting is a restart without full power-off, while the others are unrelated. REMEMBER: Cold boot begins from OFF."
    },
    {
      id: 31, topic: "Computer Maintenance",
      question: "Which of the following is a good maintenance practice?",
      options: { A: "Using a dusty room", B: "Regular cleaning of the system", C: "Spilling liquid near the keyboard", D: "Blocking ventilation holes" },
      correct: "B",
      explanation: "KEY RULE: Regular cleaning helps protect equipment from dust buildup and damage. NOTE: Dust, liquids, and blocked vents increase the risk of hardware faults. REMEMBER: Clean, cool, and dry conditions help computer systems last longer."
    },
    {
      id: 32, topic: "ICT",
      question: "ICT stands for",
      options: { A: "Internal Computer Training", B: "Information and Communication Technology", C: "Internet and Cable Transfer", D: "Integrated Central Terminal" },
      correct: "B",
      explanation: "KEY RULE: ICT means Information and Communication Technology. NOTE: The other options are incorrect expansions. REMEMBER: ICT combines data handling with communication."
    },
    {
      id: 33, topic: "Network Types",
      question: "A network that covers a city is called a",
      options: { A: "PAN", B: "LAN", C: "MAN", D: "WAN" },
      correct: "C",
      explanation: "KEY RULE: MAN means Metropolitan Area Network and covers a city-scale area. NOTE: PAN is personal, LAN is local, and WAN covers larger regions. REMEMBER: Metropolitan equals MAN."
    },
    {
      id: 34, topic: "Internet Services",
      question: "Which internet service is mainly used to transfer files between systems?",
      options: { A: "FTP", B: "E-mail", C: "WWW", D: "Chatroom" },
      correct: "A",
      explanation: "KEY RULE: FTP stands for File Transfer Protocol and is used for file transfer. NOTE: E-mail is for messaging, WWW is for web access, and chatrooms are for discussion. REMEMBER: File transfer points to FTP."
    },
    {
      id: 35, topic: "Programming Languages",
      question: "Which of the following is a high-level programming language?",
      options: { A: "Machine language", B: "Assembly language", C: "Python", D: "Binary code" },
      correct: "C",
      explanation: "KEY RULE: Python is a high-level language designed to be easy for humans to read and write. NOTE: Machine language, assembly language, and binary code are low-level forms. REMEMBER: High-level languages are more user-friendly."
    },
    {
      id: 36, topic: "Algorithms",
      question: "A major property of a good algorithm is",
      options: { A: "ambiguity", B: "finiteness", C: "infinite looping", D: "absence of output" },
      correct: "B",
      explanation: "KEY RULE: Finiteness means the algorithm must end after a limited number of steps. NOTE: Ambiguity and endless looping make an algorithm poor. REMEMBER: A valid algorithm must stop."
    },
    {
      id: 37, topic: "Flowchart Symbols",
      question: "Which flowchart symbol is used for start or stop?",
      options: { A: "Diamond", B: "Rectangle", C: "Oval", D: "Parallelogram" },
      correct: "C",
      explanation: "KEY RULE: The oval or terminal symbol represents the start or stop of a flowchart. NOTE: Diamond is for decision, rectangle for process, and parallelogram for input/output. REMEMBER: Flowcharts begin and end with terminal symbols."
    },
    {
      id: 38, topic: "Artificial Intelligence",
      question: "Which branch of AI focuses on helping computers understand human language?",
      options: { A: "Natural Language Processing", B: "Spreadsheet Design", C: "Printing", D: "Boot Control" },
      correct: "A",
      explanation: "KEY RULE: Natural Language Processing deals with understanding and generating human language. NOTE: The other options are not AI language fields. REMEMBER: Chatbots and translators rely on NLP."
    },
    {
      id: 39, topic: "Robotics",
      question: "Which robot component is used to detect environmental changes such as light or distance?",
      options: { A: "Sensor", B: "Actuator", C: "Worksheet", D: "Domain" },
      correct: "A",
      explanation: "KEY RULE: Sensors detect environmental conditions for the robot. NOTE: Actuators perform movement, while worksheet and domain are unrelated terms. REMEMBER: Robots sense before they act."
    },
    {
      id: 40, topic: "Cybersecurity",
      question: "The act of using fake messages or fake websites to obtain confidential information is called",
      options: { A: "phishing", B: "formatting", C: "compiling", D: "spooling" },
      correct: "A",
      explanation: "KEY RULE: Phishing is a deceptive method used to trick users into revealing passwords, account details, or other private information. NOTE: Formatting, compiling, and spooling are legitimate computing operations. REMEMBER: Be suspicious of urgent requests for confidential details."
    }
  ],
    test10: [
    {
      id: 1, topic: "History of Computing",
      question: "Which early computing device used beads on rods for counting operations?",
      options: { A: "Abacus", B: "Slide rule", C: "Pascal calculator", D: "Hollerith machine" },
      correct: "A",
      explanation: "KEY RULE: The abacus is one of the earliest counting devices using beads on rods. NOTE: Slide rule uses scales, Pascal calculator is mechanical, and Hollerith machine is for tabulation. REMEMBER: Beads and rods indicate abacus."
    },
    {
      id: 2, topic: "Computer Generations",
      question: "Which generation of computers is associated with integrated circuits?",
      options: { A: "First generation", B: "Second generation", C: "Third generation", D: "Fourth generation" },
      correct: "C",
      explanation: "KEY RULE: Third generation computers used integrated circuits, making them faster and smaller. NOTE: First used vacuum tubes, second used transistors, and fourth uses microprocessors. REMEMBER: ICs define the third generation."
    },
    {
      id: 3, topic: "Computer Types",
      question: "A computer system designed to perform many different types of tasks is called a",
      options: { A: "special-purpose computer", B: "general-purpose computer", C: "analog computer", D: "hybrid computer" },
      correct: "B",
      explanation: "KEY RULE: A general-purpose computer is designed to handle a variety of tasks using different software. NOTE: Special-purpose systems perform one task, while analog and hybrid describe data types. REMEMBER: Multi-task systems are general-purpose."
    },
    {
      id: 4, topic: "Computer Characteristics",
      question: "Which characteristic of a computer refers to its ability to perform tasks automatically once started?",
      options: { A: "Automation", B: "Speed", C: "Accuracy", D: "Storage" },
      correct: "A",
      explanation: "KEY RULE: Automation means the computer can execute tasks without further human intervention after instructions are given. NOTE: Speed relates to processing rate, accuracy to correctness, and storage to data capacity. REMEMBER: Set it once, it runs automatically."
    },
    {
      id: 5, topic: "Input Devices",
      question: "Which device is used to input pictures or text from paper into a computer?",
      options: { A: "Scanner", B: "Speaker", C: "Plotter", D: "Monitor" },
      correct: "A",
      explanation: "KEY RULE: A scanner converts physical documents into digital form. NOTE: Speaker, plotter and monitor are output devices. REMEMBER: Paper to computer requires scanning."
    },
    {
      id: 6, topic: "Output Devices",
      question: "Which of the following devices produces sound output?",
      options: { A: "Printer", B: "Speaker", C: "Scanner", D: "Keyboard" },
      correct: "B",
      explanation: "KEY RULE: A speaker converts digital signals into audible sound. NOTE: Printer produces hard copy, scanner inputs images, and keyboard inputs text. REMEMBER: Audio output comes from speakers."
    },
    {
      id: 7, topic: "CPU Components",
      question: "Which part of the CPU is responsible for performing logical comparisons?",
      options: { A: "Control Unit", B: "Arithmetic Logic Unit", C: "Register", D: "Memory Unit" },
      correct: "B",
      explanation: "KEY RULE: The ALU performs both arithmetic and logical operations. NOTE: Control Unit directs operations, registers store data temporarily, and memory holds instructions. REMEMBER: Logic and arithmetic belong to ALU."
    },
    {
      id: 8, topic: "Primary Memory",
      question: "Which of the following memory types is non-volatile?",
      options: { A: "RAM", B: "Cache", C: "ROM", D: "Register" },
      correct: "C",
      explanation: "KEY RULE: ROM retains its contents even when power is turned off. NOTE: RAM, cache, and registers are volatile memory types. REMEMBER: Permanent instructions are stored in ROM."
    },
    {
      id: 9, topic: "Storage Units",
      question: "How many bits are in one nibble?",
      options: { A: "2", B: "4", C: "8", D: "16" },
      correct: "B",
      explanation: "KEY RULE: A nibble consists of 4 bits. NOTE: A byte consists of 8 bits. REMEMBER: Two nibbles make one byte."
    },
    {
      id: 10, topic: "Registers",
      question: "Which register stores the next instruction to be executed?",
      options: { A: "MAR", B: "MDR", C: "Program Counter", D: "Accumulator" },
      correct: "C",
      explanation: "KEY RULE: The Program Counter holds the address of the next instruction to be executed. NOTE: MAR stores addresses, MDR stores data, and accumulator stores intermediate results. REMEMBER: PC points to the next step."
    },
    {
      id: 11, topic: "Logic Gates",
      question: "Which gate gives an output of 1 when both inputs are 0?",
      options: { A: "OR", B: "AND", C: "NOR", D: "NAND" },
      correct: "C",
      explanation: "KEY RULE: NOR gate outputs 1 only when all inputs are 0. NOTE: OR outputs 1 if any input is 1, AND requires all inputs 1, NAND is inverse of AND. REMEMBER: NOR is NOT-OR."
    },
    {
      id: 12, topic: "Operating Systems",
      question: "Which of the following is NOT an operating system?",
      options: { A: "Windows", B: "Linux", C: "MS Word", D: "Android" },
      correct: "C",
      explanation: "KEY RULE: MS Word is application software, not an operating system. NOTE: Windows, Linux, and Android are operating systems. REMEMBER: OS manages hardware; Word processes text."
    },
    {
      id: 13, topic: "Utility Software",
      question: "Which of the following is used to compress files to reduce storage space?",
      options: { A: "Antivirus", B: "Backup software", C: "Compression utility", D: "Spreadsheet" },
      correct: "C",
      explanation: "KEY RULE: Compression utilities reduce file size for storage or transmission. NOTE: Antivirus protects, backup copies data, and spreadsheet handles calculations. REMEMBER: Zip files are created by compression tools."
    },
    {
      id: 14, topic: "Translator Software",
      question: "Which translator converts assembly language into machine code?",
      options: { A: "Compiler", B: "Interpreter", C: "Assembler", D: "Debugger" },
      correct: "C",
      explanation: "KEY RULE: An assembler translates assembly language into machine language. NOTE: Compiler and interpreter handle high-level languages. REMEMBER: Assembly needs assembler."
    },
    {
      id: 15, topic: "Data and Information",
      question: "Which of the following best describes data?",
      options: { A: "Processed facts", B: "Meaningful output", C: "Raw facts", D: "Analyzed information" },
      correct: "C",
      explanation: "KEY RULE: Data refers to raw, unprocessed facts. NOTE: Information is processed data with meaning. REMEMBER: Data becomes information after processing."
    },
    {
      id: 16, topic: "Number Bases",
      question: "What is the binary equivalent of decimal 6?",
      options: { A: "101", B: "110", C: "111", D: "100" },
      correct: "B",
      explanation: "FORMULA: 6 = 4 + 2 = 110 in binary. NOTE: Binary uses powers of 2. REMEMBER: Convert decimal by breaking into powers of 2."
    },
    {
      id: 17, topic: "Word Processing",
      question: "Which feature is used to automatically correct typing errors in a document?",
      options: { A: "AutoCorrect", B: "Mail merge", C: "Print preview", D: "Find" },
      correct: "A",
      explanation: "KEY RULE: AutoCorrect automatically fixes common typing mistakes. NOTE: Mail merge personalizes documents, print preview shows layout, and find searches text. REMEMBER: Typing errors are fixed automatically by AutoCorrect."
    },
    {
      id: 18, topic: "Spreadsheet",
      question: "Which function returns the highest value in a range of cells?",
      options: { A: "SUM", B: "AVERAGE", C: "MAX", D: "COUNT" },
      correct: "C",
      explanation: "KEY RULE: MAX function returns the largest value in a range. NOTE: SUM adds, AVERAGE computes mean, COUNT counts entries. REMEMBER: MAX means maximum."
    },
    {
      id: 19, topic: "Database",
      question: "Which of the following is used to retrieve specific data from a database?",
      options: { A: "Form", B: "Query", C: "Report", D: "Table" },
      correct: "B",
      explanation: "KEY RULE: A query is used to search and retrieve specific information from a database. NOTE: Table stores data, form inputs data, report displays output. REMEMBER: Ask questions with queries."
    },
    {
      id: 20, topic: "Graphics",
      question: "Which tool is used to draw straight lines in a graphics package?",
      options: { A: "Line tool", B: "Fill tool", C: "Text tool", D: "Crop tool" },
      correct: "A",
      explanation: "KEY RULE: The line tool is used to draw straight lines. NOTE: Fill tool colors objects, text tool inserts text, crop tool trims images. REMEMBER: Straight lines require the line tool."
    },
    {
      id: 21, topic: "Presentation",
      question: "Which feature is used to apply visual effects to slides?",
      options: { A: "Animation", B: "Formula", C: "Query", D: "Booting" },
      correct: "A",
      explanation: "KEY RULE: Animation adds movement effects to objects in slides. NOTE: Formula is spreadsheet, query is database, booting is system start. REMEMBER: Slide effects are animations."
    },
    {
      id: 22, topic: "Web Design",
      question: "HTML stands for",
      options: { A: "HyperText Markup Language", B: "HighText Machine Language", C: "Hyperlink Transfer Method Language", D: "Home Tool Markup Language" },
      correct: "A",
      explanation: "KEY RULE: HTML is the standard language used to create web pages. NOTE: Other expansions are incorrect. REMEMBER: Web pages are built with HTML."
    },
    {
      id: 23, topic: "File Organization",
      question: "Which file type stores temporary data for processing?",
      options: { A: "Master file", B: "Transaction file", C: "Temporary file", D: "Permanent file" },
      correct: "C",
      explanation: "KEY RULE: Temporary files store data temporarily during processing. NOTE: Master files store permanent data. REMEMBER: Temporary files are short-lived."
    },
    {
      id: 24, topic: "Data Security",
      question: "Which method protects data by converting it into unreadable form?",
      options: { A: "Backup", B: "Encryption", C: "Deletion", D: "Formatting" },
      correct: "B",
      explanation: "KEY RULE: Encryption converts data into unreadable form to prevent unauthorized access. NOTE: Backup copies data, deletion removes it, formatting prepares storage. REMEMBER: Secure data using encryption."
    },
    {
      id: 25, topic: "Booting",
      question: "Which booting method involves restarting the computer without switching off power?",
      options: { A: "Cold boot", B: "Warm boot", C: "Hard boot", D: "Soft reset" },
      correct: "B",
      explanation: "KEY RULE: Warm boot is restarting without powering off. NOTE: Cold boot starts from off state. REMEMBER: Restart equals warm boot."
    },
    {
      id: 26, topic: "Maintenance",
      question: "Which practice prevents overheating of computer components?",
      options: { A: "Blocking vents", B: "Proper ventilation", C: "Using water", D: "Closing system tightly" },
      correct: "B",
      explanation: "KEY RULE: Proper ventilation allows heat to escape and prevents overheating. NOTE: Blocking vents traps heat. REMEMBER: Cooling ensures system longevity."
    },
    {
      id: 27, topic: "ICT",
      question: "Which of the following is an example of ICT application?",
      options: { A: "E-learning", B: "Manual writing", C: "Hand drawing", D: "Typing without computer" },
      correct: "A",
      explanation: "KEY RULE: ICT enables digital learning through online platforms. NOTE: Other options are manual processes. REMEMBER: ICT enhances communication and learning."
    },
    {
      id: 28, topic: "Internet",
      question: "Which protocol is used for sending e-mails?",
      options: { A: "HTTP", B: "FTP", C: "SMTP", D: "TCP" },
      correct: "C",
      explanation: "KEY RULE: SMTP (Simple Mail Transfer Protocol) is used for sending e-mails. NOTE: HTTP is for web pages, FTP for file transfer. REMEMBER: Mail sending uses SMTP."
    },
    {
      id: 29, topic: "Email",
      question: "Which symbol separates username from domain in an email address?",
      options: { A: ".", B: "@", C: "#", D: "/" },
      correct: "B",
      explanation: "KEY RULE: The @ symbol separates the username and domain. NOTE: Other symbols are not used for this purpose. REMEMBER: user@domain format."
    },
    {
      id: 30, topic: "Networking",
      question: "Which topology uses a single central cable?",
      options: { A: "Star", B: "Ring", C: "Bus", D: "Mesh" },
      correct: "C",
      explanation: "KEY RULE: Bus topology uses one main cable. NOTE: Star uses central hub. REMEMBER: One backbone cable indicates bus topology."
    },
    {
      id: 31, topic: "Network Devices",
      question: "Which device connects multiple networks together?",
      options: { A: "Router", B: "Switch", C: "Hub", D: "Repeater" },
      correct: "A",
      explanation: "KEY RULE: Router connects different networks and routes data. NOTE: Switch connects devices within same network. REMEMBER: Router = route data."
    },
    {
      id: 32, topic: "Programming",
      question: "Which language is closest to machine language?",
      options: { A: "Python", B: "Assembly", C: "Java", D: "BASIC" },
      correct: "B",
      explanation: "KEY RULE: Assembly language is low-level and close to machine language. NOTE: Others are high-level languages. REMEMBER: Assembly bridges human and machine."
    },
    {
      id: 33, topic: "Algorithms",
      question: "Which property ensures an algorithm produces result?",
      options: { A: "Input", B: "Output", C: "Finiteness", D: "Ambiguity" },
      correct: "B",
      explanation: "KEY RULE: Output ensures an algorithm produces a result. NOTE: Finiteness ensures it ends. REMEMBER: Every algorithm must give output."
    },
    {
      id: 34, topic: "Flowcharts",
      question: "Which symbol represents processing?",
      options: { A: "Rectangle", B: "Diamond", C: "Oval", D: "Parallelogram" },
      correct: "A",
      explanation: "KEY RULE: Rectangle represents process step. NOTE: Diamond is decision, oval start/end. REMEMBER: Action steps are rectangles."
    },
    {
      id: 35, topic: "AI",
      question: "Which AI application is used for voice assistants?",
      options: { A: "NLP", B: "Compiler", C: "Booting", D: "Formatting" },
      correct: "A",
      explanation: "KEY RULE: NLP enables machines understand speech. NOTE: Others unrelated. REMEMBER: Siri and Alexa use NLP."
    },
    {
      id: 36, topic: "Robotics",
      question: "Which part controls robot actions?",
      options: { A: "Controller", B: "Sensor", C: "Actuator", D: "Wheel" },
      correct: "A",
      explanation: "KEY RULE: Controller is the brain controlling robot. NOTE: Sensor detects, actuator moves. REMEMBER: Control comes from controller."
    },
    {
      id: 37, topic: "Cybersecurity",
      question: "Which attack steals data using fake websites?",
      options: { A: "Phishing", B: "Hacking", C: "Booting", D: "Formatting" },
      correct: "A",
      explanation: "KEY RULE: Phishing tricks users via fake sites. NOTE: Others are general or unrelated. REMEMBER: Fake login pages indicate phishing."
    },
    {
      id: 38, topic: "Cybersecurity",
      question: "A secret code used to access a system is called",
      options: { A: "Username", B: "Password", C: "Address", D: "Protocol" },
      correct: "B",
      explanation: "KEY RULE: Password protects access. NOTE: Username identifies user. REMEMBER: Keep passwords secure."
    },
    {
      id: 39, topic: "Ethics",
      question: "Unauthorized copying of software is called",
      options: { A: "Piracy", B: "Encryption", C: "Backup", D: "Compression" },
      correct: "A",
      explanation: "KEY RULE: Software piracy is illegal copying. NOTE: Others are legal processes. REMEMBER: Respect software licenses."
    },
    {
      id: 40, topic: "ICT",
      question: "Which device is used for video conferencing?",
      options: { A: "Webcam", B: "Printer", C: "Scanner", D: "Plotter" },
      correct: "A",
      explanation: "KEY RULE: Webcam captures video for communication. NOTE: Others are not video devices. REMEMBER: Online meetings require webcam."
    }
  ],
    test11: [
    {
      id: 1, topic: "History of Computing",
      question: "Which early calculating device used numbered rods to perform multiplication?",
      options: { A: "Abacus", B: "Napier's bones", C: "Slide rule", D: "Pascal calculator" },
      correct: "B",
      explanation: "KEY RULE: Napier's bones used numbered rods to simplify multiplication and division. NOTE: Abacus uses beads, slide rule uses scales, and Pascal calculator is mechanical. REMEMBER: Rod-based calculation is Napier's bones."
    },
    {
      id: 2, topic: "Computer Generations",
      question: "Which generation of computers introduced artificial intelligence concepts?",
      options: { A: "First generation", B: "Second generation", C: "Third generation", D: "Fifth generation" },
      correct: "D",
      explanation: "KEY RULE: Fifth generation computers focus on AI, expert systems, and intelligent processing. NOTE: Earlier generations focused on hardware evolution. REMEMBER: AI is linked to fifth generation."
    },
    {
      id: 3, topic: "Computer Types",
      question: "Which type of computer combines features of both analog and digital systems?",
      options: { A: "Supercomputer", B: "Hybrid computer", C: "Mainframe", D: "Microcomputer" },
      correct: "B",
      explanation: "KEY RULE: Hybrid computers combine analog and digital capabilities. NOTE: Supercomputers are high-speed, mainframes handle bulk data, microcomputers are personal systems. REMEMBER: Hybrid = mix of analog and digital."
    },
    {
      id: 4, topic: "Computer Characteristics",
      question: "Which characteristic allows a computer to handle different types of tasks?",
      options: { A: "Speed", B: "Accuracy", C: "Versatility", D: "Automation" },
      correct: "C",
      explanation: "KEY RULE: Versatility refers to the ability to perform many different types of tasks. NOTE: Speed is about processing rate, accuracy is correctness, and automation is self-operation. REMEMBER: Many tasks = versatility."
    },
    {
      id: 5, topic: "Input Devices",
      question: "Which input device is used to draw directly on the screen?",
      options: { A: "Light pen", B: "Keyboard", C: "Printer", D: "Speaker" },
      correct: "A",
      explanation: "KEY RULE: A light pen allows users to draw or select directly on the screen. NOTE: Keyboard inputs text, printer and speaker are output devices. REMEMBER: Direct screen interaction uses a light pen."
    },
    {
      id: 6, topic: "Output Devices",
      question: "Which device displays images on a large wall for presentations?",
      options: { A: "Projector", B: "Mouse", C: "Scanner", D: "Joystick" },
      correct: "A",
      explanation: "KEY RULE: A projector displays images from a computer onto a large surface. NOTE: Mouse, scanner, and joystick are input devices. REMEMBER: Large display requires projection."
    },
    {
      id: 7, topic: "CPU Components",
      question: "Which part of the CPU stores intermediate results during processing?",
      options: { A: "Accumulator", B: "Control Unit", C: "ROM", D: "Bus" },
      correct: "A",
      explanation: "KEY RULE: The accumulator temporarily stores intermediate results. NOTE: Control Unit coordinates, ROM stores permanent instructions, and bus transfers data. REMEMBER: Temporary results go to accumulator."
    },
    {
      id: 8, topic: "Memory Types",
      question: "Which type of memory is fastest and located closest to the CPU?",
      options: { A: "Cache memory", B: "RAM", C: "ROM", D: "Hard disk" },
      correct: "A",
      explanation: "KEY RULE: Cache memory is very fast and located close to the CPU to speed up processing. NOTE: RAM is slower than cache, ROM is permanent, hard disk is secondary storage. REMEMBER: Cache boosts CPU speed."
    },
    {
      id: 9, topic: "Storage Units",
      question: "Which of the following equals 1024 bytes?",
      options: { A: "1 kilobyte", B: "1 megabyte", C: "1 gigabyte", D: "1 bit" },
      correct: "A",
      explanation: "KEY RULE: 1 kilobyte equals 1024 bytes in standard computing. NOTE: Megabyte and gigabyte are larger units. REMEMBER: KB = 1024 bytes."
    },
    {
      id: 10, topic: "Registers",
      question: "Which register holds the current instruction being executed?",
      options: { A: "CIR", B: "PC", C: "MAR", D: "MDR" },
      correct: "A",
      explanation: "KEY RULE: The Current Instruction Register stores the instruction currently being executed. NOTE: PC holds next instruction address, MAR holds address, MDR holds data. REMEMBER: Current instruction = CIR."
    },
    {
      id: 11, topic: "Logic Gates",
      question: "Which logic gate produces 0 output only when all inputs are 1?",
      options: { A: "AND", B: "OR", C: "NAND", D: "NOR" },
      correct: "C",
      explanation: "KEY RULE: NAND is the inverse of AND, so it outputs 0 only when all inputs are 1. NOTE: AND outputs 1 when all inputs are 1. REMEMBER: NAND = NOT AND."
    },
    {
      id: 12, topic: "Operating Systems",
      question: "Which of the following is a mobile operating system?",
      options: { A: "Android", B: "Windows XP", C: "Linux server", D: "MS DOS" },
      correct: "A",
      explanation: "KEY RULE: Android is specifically designed for mobile devices. NOTE: Others are mainly desktop/server systems. REMEMBER: Smartphones commonly use Android."
    },
    {
      id: 13, topic: "Utility Software",
      question: "Which utility software helps to remove unwanted files from a computer?",
      options: { A: "Disk cleanup", B: "Word processor", C: "Spreadsheet", D: "Presentation" },
      correct: "A",
      explanation: "KEY RULE: Disk cleanup removes temporary and unnecessary files. NOTE: Others are application software. REMEMBER: Cleanup tools free storage space."
    },
    {
      id: 14, topic: "Translator Software",
      question: "Which program helps find and fix errors in a program?",
      options: { A: "Compiler", B: "Debugger", C: "Assembler", D: "Interpreter" },
      correct: "B",
      explanation: "KEY RULE: A debugger is used to locate and correct errors in programs. NOTE: Compiler translates code, assembler handles assembly language, interpreter executes line-by-line. REMEMBER: Debugging fixes bugs."
    },
    {
      id: 15, topic: "Data and Information",
      question: "Which term refers to meaningful output after processing data?",
      options: { A: "Data", B: "Information", C: "Bit", D: "Byte" },
      correct: "B",
      explanation: "KEY RULE: Information is processed data that is meaningful. NOTE: Data is raw facts, bit and byte are storage units. REMEMBER: Meaningful output is information."
    },
    {
      id: 16, topic: "Number Bases",
      question: "What is the decimal equivalent of binary 111?",
      options: { A: "5", B: "6", C: "7", D: "8" },
      correct: "C",
      explanation: "FORMULA: 111 base 2 = 4 + 2 + 1 = 7. NOTE: Add binary place values. REMEMBER: Binary uses powers of 2."
    },
    {
      id: 17, topic: "Word Processing",
      question: "Which feature automatically moves text to the next line when the margin is reached?",
      options: { A: "Word wrap", B: "Mail merge", C: "Spell check", D: "Print preview" },
      correct: "A",
      explanation: "KEY RULE: Word wrap automatically moves text to the next line without pressing Enter. NOTE: Other options serve different functions. REMEMBER: Text flows automatically with word wrap."
    },
    {
      id: 18, topic: "Spreadsheet",
      question: "Which function counts numeric entries in a range?",
      options: { A: "COUNT", B: "SUM", C: "MAX", D: "MIN" },
      correct: "A",
      explanation: "KEY RULE: COUNT counts numeric entries. NOTE: SUM adds values, MAX finds highest, MIN finds lowest. REMEMBER: COUNT counts numbers only."
    },
    {
      id: 19, topic: "Database",
      question: "Which database object is used to display formatted output?",
      options: { A: "Form", B: "Query", C: "Report", D: "Table" },
      correct: "C",
      explanation: "KEY RULE: Reports present formatted output. NOTE: Tables store data, queries retrieve data, forms input data. REMEMBER: Output presentation uses reports."
    },
    {
      id: 20, topic: "Graphics",
      question: "Which tool is used to fill color into shapes?",
      options: { A: "Fill tool", B: "Line tool", C: "Text tool", D: "Zoom tool" },
      correct: "A",
      explanation: "KEY RULE: Fill tool applies color to shapes. NOTE: Others perform different tasks. REMEMBER: Coloring uses fill tool."
    },
    {
      id: 21, topic: "Presentation",
      question: "Which feature allows movement of objects within slides?",
      options: { A: "Animation", B: "Transition", C: "Query", D: "Format" },
      correct: "A",
      explanation: "KEY RULE: Animation applies effects to objects inside slides. NOTE: Transition is between slides. REMEMBER: Object motion = animation."
    },
    {
      id: 22, topic: "Web Design",
      question: "Which tag is used to create a paragraph in HTML?",
      options: { A: "<p>", B: "<h1>", C: "<br>", D: "<div>" },
      correct: "A",
      explanation: "KEY RULE: <p> defines paragraph. NOTE: Others serve different roles. REMEMBER: Paragraph tag = p."
    },
    {
      id: 23, topic: "File Organization",
      question: "Which file stores permanent data?",
      options: { A: "Master file", B: "Temporary file", C: "Transaction file", D: "Cache file" },
      correct: "A",
      explanation: "KEY RULE: Master file stores permanent data. NOTE: Temporary files are short-term. REMEMBER: Master file holds core data."
    },
    {
      id: 24, topic: "Data Security",
      question: "Which method prevents unauthorized access using passwords?",
      options: { A: "Authentication", B: "Backup", C: "Compression", D: "Formatting" },
      correct: "A",
      explanation: "KEY RULE: Authentication verifies identity using passwords. NOTE: Others do not restrict access. REMEMBER: Access control uses authentication."
    },
    {
      id: 25, topic: "Booting",
      question: "Which boot loads operating system from hard disk?",
      options: { A: "Cold boot", B: "Warm boot", C: "Soft boot", D: "Network boot" },
      correct: "A",
      explanation: "KEY RULE: Cold boot loads OS from disk at startup. NOTE: Warm boot is restart. REMEMBER: Initial start = cold boot."
    },
    {
      id: 26, topic: "Maintenance",
      question: "Which practice prevents dust damage?",
      options: { A: "Regular cleaning", B: "Water exposure", C: "Blocking vents", D: "Leaving system open" },
      correct: "A",
      explanation: "KEY RULE: Cleaning removes dust buildup. NOTE: Others damage system. REMEMBER: Dust-free = safe system."
    },
    {
      id: 27, topic: "ICT",
      question: "Which is an example of ICT communication tool?",
      options: { A: "Email", B: "Hammer", C: "Notebook", D: "Pen" },
      correct: "A",
      explanation: "KEY RULE: Email is digital communication. NOTE: Others are manual tools. REMEMBER: ICT tools are electronic."
    },
    {
      id: 28, topic: "Internet",
      question: "Which protocol is used for web browsing?",
      options: { A: "HTTP", B: "FTP", C: "SMTP", D: "TCP only" },
      correct: "A",
      explanation: "KEY RULE: HTTP is used for web access. NOTE: Others have different roles. REMEMBER: Web = HTTP."
    },
    {
      id: 29, topic: "Email",
      question: "Which part of email identifies user?",
      options: { A: "Username", B: "Domain", C: "Protocol", D: "Server" },
      correct: "A",
      explanation: "KEY RULE: Username identifies user. NOTE: Domain identifies server. REMEMBER: Before @ is user."
    },
    {
      id: 30, topic: "Networking",
      question: "Which topology connects nodes in a loop?",
      options: { A: "Ring", B: "Star", C: "Bus", D: "Mesh" },
      correct: "A",
      explanation: "KEY RULE: Ring forms loop. NOTE: Others differ. REMEMBER: Loop = ring."
    },
    {
      id: 31, topic: "Network Devices",
      question: "Which device connects computers in a LAN?",
      options: { A: "Switch", B: "Scanner", C: "Printer", D: "Speaker" },
      correct: "A",
      explanation: "KEY RULE: Switch connects LAN devices. NOTE: Others are peripherals. REMEMBER: LAN devices connect via switch."
    },
    {
      id: 32, topic: "Programming",
      question: "Which language uses binary digits?",
      options: { A: "Machine language", B: "Python", C: "Java", D: "BASIC" },
      correct: "A",
      explanation: "KEY RULE: Machine language uses binary. NOTE: Others are high-level. REMEMBER: 0s and 1s = machine language."
    },
    {
      id: 33, topic: "Algorithms",
      question: "Which ensures algorithm stops?",
      options: { A: "Finiteness", B: "Ambiguity", C: "Loop", D: "Input" },
      correct: "A",
      explanation: "KEY RULE: Finiteness ensures termination. NOTE: Others do not. REMEMBER: Algorithm must end."
    },
    {
      id: 34, topic: "Flowcharts",
      question: "Which symbol is for input/output?",
      options: { A: "Parallelogram", B: "Rectangle", C: "Diamond", D: "Oval" },
      correct: "A",
      explanation: "KEY RULE: Parallelogram is I/O symbol. NOTE: Others differ. REMEMBER: Slanted shape = I/O."
    },
    {
      id: 35, topic: "AI",
      question: "Which AI system mimics human decision making?",
      options: { A: "Expert system", B: "Spreadsheet", C: "Compiler", D: "Router" },
      correct: "A",
      explanation: "KEY RULE: Expert systems simulate human expertise. NOTE: Others unrelated. REMEMBER: AI decision systems = expert systems."
    },
    {
      id: 36, topic: "Robotics",
      question: "Which part moves robot arms?",
      options: { A: "Actuator", B: "Sensor", C: "Controller", D: "Circuit board" },
      correct: "A",
      explanation: "KEY RULE: Actuators produce motion. NOTE: Sensors detect. REMEMBER: Movement = actuator."
    },
    {
      id: 37, topic: "Cybersecurity",
      question: "Which attack uses malware?",
      options: { A: "Virus attack", B: "Backup", C: "Formatting", D: "Printing" },
      correct: "A",
      explanation: "KEY RULE: Virus is malware. NOTE: Others are safe processes. REMEMBER: Malware causes attacks."
    },
    {
      id: 38, topic: "Cybersecurity",
      question: "Which tool protects system?",
      options: { A: "Antivirus", B: "Compiler", C: "Spreadsheet", D: "Browser" },
      correct: "A",
      explanation: "KEY RULE: Antivirus protects system. NOTE: Others do not. REMEMBER: Security = antivirus."
    },
    {
      id: 39, topic: "Ethics",
      question: "Illegal software copying is",
      options: { A: "Piracy", B: "Backup", C: "Encryption", D: "Compression" },
      correct: "A",
      explanation: "KEY RULE: Piracy is illegal copying. NOTE: Others are legal. REMEMBER: Respect licenses."
    },
    {
      id: 40, topic: "ICT",
      question: "Which device captures video input?",
      options: { A: "Webcam", B: "Printer", C: "Scanner", D: "Plotter" },
      correct: "A",
      explanation: "KEY RULE: Webcam captures video. NOTE: Others different. REMEMBER: Video input uses webcam."
    }
  ],
    test12: [
    {
      id: 1, topic: "File Access Methods",
      question: "The file access method shown in the Figure is called",
      diagram: "assets/computer/test12/question1-3.png",
      options: { A: "hashed access", B: "indexed access", C: "random access", D: "sequential access" },
      correct: "D",
      explanation: "KEY RULE: Sequential access processes records one after another in order, as shown by the step-by-step movement in the diagram. NOTE: Random jumps directly, indexed uses pointers, and hashed uses keys. REMEMBER: One-after-another pattern indicates sequential access."
    },
    {
      id: 2, topic: "File Access Methods",
      question: "In the access method illustrated, to reach record 8, the system must",
      diagram: "assets/computer/test12/question1-3.png",
      options: { A: "jump directly to record 8", B: "scan records from the beginning up to 8", C: "use hashing algorithm", D: "use index pointer only" },
      correct: "B",
      explanation: "KEY RULE: Sequential access requires passing through earlier records before reaching a target. NOTE: Direct jump belongs to random access, while hashing and indexing use different mechanisms. REMEMBER: Sequential means step-by-step traversal."
    },
    {
      id: 3, topic: "File Access Methods",
      question: "Which storage medium commonly uses the access method shown in the Figure?",
      diagram: "assets/computer/test12/question1-3.png",
      options: { A: "Magnetic tape", B: "Hard disk", C: "RAM", D: "Flash memory" },
      correct: "A",
      explanation: "KEY RULE: Magnetic tapes use sequential access, requiring data to be read in order. NOTE: Hard disks and flash support random access. REMEMBER: Tape storage is sequential."
    },
    {
      id: 4, topic: "History of Computing",
      question: "Which early computing device used punched cards for input?",
      options: { A: "Hollerith machine", B: "Abacus", C: "Slide rule", D: "Napier's bones" },
      correct: "A",
      explanation: "KEY RULE: Hollerith machine used punched cards for data processing. NOTE: Others use manual methods. REMEMBER: Census processing used punched cards."
    },
    {
      id: 5, topic: "Computer Generations",
      question: "Which generation introduced transistors?",
      options: { A: "First", B: "Second", C: "Third", D: "Fourth" },
      correct: "B",
      explanation: "KEY RULE: Second generation computers used transistors. NOTE: First used vacuum tubes. REMEMBER: Transistors replaced tubes."
    },
    {
      id: 6, topic: "Computer Types",
      question: "A powerful computer used by many users simultaneously is called",
      options: { A: "Microcomputer", B: "Mainframe", C: "Tablet", D: "Laptop" },
      correct: "B",
      explanation: "KEY RULE: Mainframes support multiple users and large data processing. NOTE: Microcomputers are personal. REMEMBER: Many users = mainframe."
    },
    {
      id: 7, topic: "Computer Characteristics",
      question: "The ability of a computer to give correct results is called",
      options: { A: "Speed", B: "Accuracy", C: "Automation", D: "Storage" },
      correct: "B",
      explanation: "KEY RULE: Accuracy refers to correctness of output. NOTE: Speed is rate. REMEMBER: Correct result = accuracy."
    },
    {
      id: 8, topic: "Input Devices",
      question: "Which device inputs sound?",
      options: { A: "Microphone", B: "Printer", C: "Monitor", D: "Plotter" },
      correct: "A",
      explanation: "KEY RULE: Microphone captures audio input. NOTE: Others output. REMEMBER: Sound input uses mic."
    },
    {
      id: 9, topic: "Output Devices",
      question: "Which produces hard copy?",
      options: { A: "Printer", B: "Monitor", C: "Speaker", D: "Scanner" },
      correct: "A",
      explanation: "KEY RULE: Printer produces paper output. NOTE: Monitor is soft copy. REMEMBER: Paper = printer."
    },
    {
      id: 10, topic: "CPU",
      question: "The brain of computer is",
      options: { A: "CPU", B: "RAM", C: "Monitor", D: "Keyboard" },
      correct: "A",
      explanation: "KEY RULE: CPU controls all operations. NOTE: Others support. REMEMBER: CPU = brain."
    },
    {
      id: 11, topic: "Memory",
      question: "Which is volatile?",
      options: { A: "RAM", B: "ROM", C: "DVD", D: "Flash" },
      correct: "A",
      explanation: "KEY RULE: RAM loses data without power. NOTE: Others retain. REMEMBER: RAM is temporary."
    },
    {
      id: 12, topic: "Storage Units",
      question: "1 byte equals",
      options: { A: "4 bits", B: "8 bits", C: "16 bits", D: "32 bits" },
      correct: "B",
      explanation: "KEY RULE: 1 byte = 8 bits. NOTE: 4 bits = nibble. REMEMBER: Byte = 8."
    },
    {
      id: 13, topic: "Registers",
      question: "MAR stores",
      options: { A: "Data", B: "Address", C: "Instruction", D: "Program" },
      correct: "B",
      explanation: "KEY RULE: MAR stores memory addresses. NOTE: MDR stores data. REMEMBER: Address → MAR."
    },
    {
      id: 14, topic: "Logic Gates",
      question: "NOT gate does",
      options: { A: "Adds", B: "Inverts", C: "Multiplies", D: "Stores" },
      correct: "B",
      explanation: "KEY RULE: NOT gate reverses input. NOTE: Others different. REMEMBER: NOT = invert."
    },
    {
      id: 15, topic: "Operating Systems",
      question: "Which is OS?",
      options: { A: "Linux", B: "Excel", C: "Word", D: "CorelDraw" },
      correct: "A",
      explanation: "KEY RULE: Linux is OS. NOTE: others apps. REMEMBER: OS manages system."
    },
    {
      id: 16, topic: "Utility Software",
      question: "Antivirus is used for",
      options: { A: "Protection", B: "Drawing", C: "Typing", D: "Calculating" },
      correct: "A",
      explanation: "KEY RULE: Antivirus protects system. NOTE: others unrelated. REMEMBER: Security tool."
    },
    {
      id: 17, topic: "Data",
      question: "Raw facts are called",
      options: { A: "Data", B: "Info", C: "Byte", D: "File" },
      correct: "A",
      explanation: "KEY RULE: Data = raw facts. NOTE: Info processed. REMEMBER: Data first."
    },
    {
      id: 18, topic: "Number Base",
      question: "Binary of 5 is",
      options: { A: "101", B: "110", C: "111", D: "100" },
      correct: "A",
      explanation: "FORMULA: 5 = 101. NOTE: 4+1. REMEMBER: binary uses powers of 2."
    },
    {
      id: 19, topic: "Word Processing",
      question: "Spell check is used to",
      options: { A: "Correct errors", B: "Print", C: "Save", D: "Delete" },
      correct: "A",
      explanation: "KEY RULE: Spell check fixes errors. NOTE: others different. REMEMBER: Proofing tool."
    },
    {
      id: 20, topic: "Spreadsheet",
      question: "SUM does",
      options: { A: "Add", B: "Divide", C: "Sort", D: "Print" },
      correct: "A",
      explanation: "FORMULA: SUM adds values. NOTE: others not. REMEMBER: SUM = total."
    },
    {
      id: 21, topic: "Database",
      question: "Row is called",
      options: { A: "Field", B: "Record", C: "Query", D: "Form" },
      correct: "B",
      explanation: "KEY RULE: Row = record. NOTE: field is column. REMEMBER: row = record."
    },
    {
      id: 22, topic: "Graphics",
      question: "Used for drawing",
      options: { A: "CorelDraw", B: "Excel", C: "Access", D: "DOS" },
      correct: "A",
      explanation: "KEY RULE: CorelDraw is graphics. NOTE: others not. REMEMBER: design tool."
    },
    {
      id: 23, topic: "Presentation",
      question: "Slides created with",
      options: { A: "PowerPoint", B: "Word", C: "Excel", D: "Access" },
      correct: "A",
      explanation: "KEY RULE: PowerPoint creates slides. NOTE: others different. REMEMBER: presentation tool."
    },
    {
      id: 24, topic: "Web",
      question: "HTML is used for",
      options: { A: "Web pages", B: "Music", C: "Drawing", D: "Typing" },
      correct: "A",
      explanation: "KEY RULE: HTML builds web pages. NOTE: others not. REMEMBER: web language."
    },
    {
      id: 25, topic: "Security",
      question: "Encryption does",
      options: { A: "Hide data", B: "Delete data", C: "Print data", D: "Copy data" },
      correct: "A",
      explanation: "KEY RULE: Encryption secures data. NOTE: others different. REMEMBER: protection."
    },
    {
      id: 26, topic: "Booting",
      question: "Cold boot means",
      options: { A: "Start from off", B: "Restart", C: "Shutdown", D: "Sleep" },
      correct: "A",
      explanation: "KEY RULE: Cold boot starts system. NOTE: restart is warm. REMEMBER: from OFF."
    },
    {
      id: 27, topic: "Maintenance",
      question: "Cleaning prevents",
      options: { A: "Dust damage", B: "Speed", C: "Memory", D: "Typing" },
      correct: "A",
      explanation: "KEY RULE: cleaning removes dust. NOTE: others irrelevant. REMEMBER: clean system."
    },
    {
      id: 28, topic: "ICT",
      question: "ICT involves",
      options: { A: "Communication", B: "Cooking", C: "Driving", D: "Painting" },
      correct: "A",
      explanation: "KEY RULE: ICT = info + communication. NOTE: others not. REMEMBER: tech communication."
    },
    {
      id: 29, topic: "Internet",
      question: "WWW means",
      options: { A: "World Wide Web", B: "Wide Web World", C: "Web World Wide", D: "None" },
      correct: "A",
      explanation: "KEY RULE: WWW = World Wide Web. NOTE: others wrong. REMEMBER: internet service."
    },
    {
      id: 30, topic: "Email",
      question: "@ separates",
      options: { A: "User & domain", B: "Name & file", C: "Data & info", D: "CPU & RAM" },
      correct: "A",
      explanation: "KEY RULE: @ splits email. NOTE: others wrong. REMEMBER: user@domain."
    },
    {
      id: 31, topic: "Networking",
      question: "LAN covers",
      options: { A: "Small area", B: "City", C: "Country", D: "World" },
      correct: "A",
      explanation: "KEY RULE: LAN small area. NOTE: MAN city, WAN global. REMEMBER: local."
    },
    {
      id: 32, topic: "Devices",
      question: "Router does",
      options: { A: "Route data", B: "Print", C: "Scan", D: "Display" },
      correct: "A",
      explanation: "KEY RULE: router routes. NOTE: others not. REMEMBER: path selection."
    },
    {
      id: 33, topic: "Programming",
      question: "Binary is",
      options: { A: "Machine code", B: "English", C: "French", D: "Symbol" },
      correct: "A",
      explanation: "KEY RULE: binary is machine. NOTE: others not. REMEMBER: 0s and 1s."
    },
    {
      id: 34, topic: "Algorithm",
      question: "Algorithm must",
      options: { A: "End", B: "Loop forever", C: "Confuse", D: "Delay" },
      correct: "A",
      explanation: "KEY RULE: must end. NOTE: infinite loop bad. REMEMBER: finite steps."
    },
    {
      id: 35, topic: "Flowchart",
      question: "Decision is",
      options: { A: "Diamond", B: "Rectangle", C: "Oval", D: "Line" },
      correct: "A",
      explanation: "KEY RULE: diamond = decision. NOTE: others diff. REMEMBER: yes/no."
    },
    {
      id: 36, topic: "AI",
      question: "AI means",
      options: { A: "Artificial Intelligence", B: "Actual Info", C: "Auto Input", D: "None" },
      correct: "A",
      explanation: "KEY RULE: AI = artificial intelligence. NOTE: others wrong. REMEMBER: smart systems."
    },
    {
      id: 37, topic: "Robotics",
      question: "Sensor does",
      options: { A: "Detect", B: "Move", C: "Store", D: "Print" },
      correct: "A",
      explanation: "KEY RULE: sensors detect. NOTE: actuators move. REMEMBER: sense first."
    },
    {
      id: 38, topic: "Cybersecurity",
      question: "Virus is",
      options: { A: "Malware", B: "Hardware", C: "Software tool", D: "Data" },
      correct: "A",
      explanation: "KEY RULE: virus is malware. NOTE: harmful. REMEMBER: protect system."
    },
    {
      id: 39, topic: "Ethics",
      question: "Illegal copying is",
      options: { A: "Piracy", B: "Backup", C: "Encrypt", D: "Store" },
      correct: "A",
      explanation: "KEY RULE: piracy illegal. NOTE: others legal. REMEMBER: respect license."
    },
    {
      id: 40, topic: "ICT",
      question: "Video calls use",
      options: { A: "Webcam", B: "Printer", C: "Plotter", D: "Scanner" },
      correct: "A",
      explanation: "KEY RULE: webcam video input. NOTE: others not. REMEMBER: video capture."
    }
  ],
    test13: [
    {
      id: 1, topic: "History of Computing",
      question: "Which early computing device was mainly used for addition and subtraction by Blaise Pascal?",
      options: { A: "Abacus", B: "Pascal calculator", C: "Jacquard loom", D: "Slide rule" },
      correct: "B",
      explanation: "KEY RULE: Blaise Pascal developed the Pascal calculator, also called the Pascaline, for arithmetic operations. NOTE: The abacus is a counting frame, Jacquard loom controlled weaving with punched cards, and slide rule uses scales for calculation. REMEMBER: Pascal is directly linked with the Pascal calculator."
    },
    {
      id: 2, topic: "Computer Generations",
      question: "Which generation of computers is associated with integrated circuits?",
      options: { A: "First generation", B: "Second generation", C: "Third generation", D: "Fifth generation" },
      correct: "C",
      explanation: "KEY RULE: Third generation computers used integrated circuits, making them smaller and more efficient. NOTE: First generation used vacuum tubes, second generation used transistors, and later generations used microprocessors and AI concepts. REMEMBER: ICs define the third generation."
    },
    {
      id: 3, topic: "Computer Types",
      question: "Which type of computer is designed for only one specific purpose?",
      options: { A: "General-purpose computer", B: "Special-purpose computer", C: "Hybrid computer", D: "Microcomputer" },
      correct: "B",
      explanation: "KEY RULE: A special-purpose computer is built to carry out one dedicated task. NOTE: A general-purpose computer handles many tasks, while hybrid and microcomputer describe other forms of classification. REMEMBER: One task only means special-purpose."
    },
    {
      id: 4, topic: "Computer Characteristics",
      question: "Which characteristic of a computer refers to the ability to perform operations very quickly?",
      options: { A: "Versatility", B: "Accuracy", C: "Speed", D: "Diligence" },
      correct: "C",
      explanation: "KEY RULE: Speed refers to how fast a computer processes data and instructions. NOTE: Accuracy is correctness, diligence is repetition without fatigue, and versatility is handling different tasks. REMEMBER: Millions of operations per second demonstrate speed."
    },
    {
      id: 5, topic: "Input Devices",
      question: "Which device is commonly used to enter data by clicking and selecting items on the screen?",
      options: { A: "Mouse", B: "Printer", C: "Speaker", D: "Plotter" },
      correct: "A",
      explanation: "KEY RULE: A mouse is a pointing device used for clicking, dragging, and selecting onscreen items. NOTE: Printer, speaker, and plotter are output devices. REMEMBER: Pointing and clicking usually involve a mouse."
    },
    {
      id: 6, topic: "Output Devices",
      question: "Which output device is used mainly for producing paper copies of documents?",
      options: { A: "Monitor", B: "Speaker", C: "Printer", D: "Scanner" },
      correct: "C",
      explanation: "KEY RULE: A printer produces hard copy output on paper. NOTE: A monitor gives soft copy, speaker gives audio output, and scanner is an input device. REMEMBER: Paper output means printer."
    },
    {
      id: 7, topic: "Keyboard Keys",
      question: "Which group of keyboard keys is used mainly for moving the cursor around a document?",
      options: { A: "Function keys", B: "Cursor control keys", C: "Alphabetic keys", D: "Numeric keys" },
      correct: "B",
      explanation: "KEY RULE: Cursor control keys move the insertion point or pointer across the screen. NOTE: Function keys trigger commands, alphabetic keys type letters, and numeric keys type numbers. REMEMBER: Arrow keys are cursor control keys."
    },
    {
      id: 8, topic: "CPU Components",
      question: "Which part of the CPU performs arithmetic calculations?",
      options: { A: "Control Unit", B: "Arithmetic Logic Unit", C: "Motherboard", D: "ROM" },
      correct: "B",
      explanation: "KEY RULE: The Arithmetic Logic Unit performs arithmetic and logical operations. NOTE: The Control Unit coordinates system activities, while motherboard and ROM are not the CPU calculation unit. REMEMBER: ALU is the CPU's calculator."
    },
    {
      id: 9, topic: "Memory Types",
      question: "Which of the following is a volatile memory?",
      options: { A: "ROM", B: "RAM", C: "DVD", D: "Hard disk" },
      correct: "B",
      explanation: "KEY RULE: RAM is volatile because it loses its contents when power is switched off. NOTE: ROM, DVD, and hard disk are non-volatile storage types. REMEMBER: Working memory is temporary."
    },
    {
      id: 10, topic: "Storage Units",
      question: "Which of the following equals 8 bits?",
      options: { A: "Nibble", B: "Byte", C: "Kilobyte", D: "Megabyte" },
      correct: "B",
      explanation: "KEY RULE: One byte is made up of 8 bits. NOTE: A nibble is 4 bits, while kilobyte and megabyte are much larger units. REMEMBER: Two nibbles make one byte."
    },
    {
      id: 11, topic: "Registers",
      question: "Which register stores the address of the next instruction to be executed?",
      options: { A: "MDR", B: "MAR", C: "PC", D: "ACC" },
      correct: "C",
      explanation: "KEY RULE: The Program Counter stores the address of the next instruction to be executed. NOTE: MDR stores data, MAR stores addresses currently accessed, and ACC stores intermediate results. REMEMBER: PC tells the CPU what comes next."
    },
    {
      id: 12, topic: "Logic Gates",
      question: "Which logic gate produces an output of 1 only when all inputs are 1?",
      options: { A: "OR gate", B: "AND gate", C: "NOT gate", D: "NOR gate" },
      correct: "B",
      explanation: "KEY RULE: An AND gate outputs 1 only when every input is 1. NOTE: OR needs only one input as 1, NOT inverts, and NOR is the inverse of OR. REMEMBER: AND is the strict gate."
    },
    {
      id: 13, topic: "Operating Systems",
      question: "Which of the following is an example of an operating system?",
      options: { A: "MS Word", B: "Android", C: "CorelDraw", D: "PowerPoint" },
      correct: "B",
      explanation: "KEY RULE: Android is an operating system used mainly on mobile devices. NOTE: MS Word, CorelDraw, and PowerPoint are application packages. REMEMBER: Operating systems manage hardware and software resources."
    },
    {
      id: 14, topic: "Utility Software",
      question: "Which utility software is used to detect and remove harmful programs from a system?",
      options: { A: "Antivirus", B: "Spreadsheet", C: "Database package", D: "Presentation package" },
      correct: "A",
      explanation: "KEY RULE: Antivirus software helps detect, quarantine, and remove malware. NOTE: Spreadsheet, database, and presentation packages are application software for user tasks. REMEMBER: Protection against malware requires antivirus."
    },
    {
      id: 15, topic: "Translator Software",
      question: "Which translator converts a high-level program line by line during execution?",
      options: { A: "Compiler", B: "Assembler", C: "Interpreter", D: "Loader" },
      correct: "C",
      explanation: "KEY RULE: An interpreter translates and executes a program one line at a time. NOTE: A compiler translates the whole program before execution, assembler handles assembly language, and loader places programs in memory. REMEMBER: Line-by-line translation means interpreter."
    },
    {
      id: 16, topic: "Data and Information",
      question: "Raw unprocessed facts entered into a computer are known as",
      options: { A: "information", B: "records", C: "data", D: "output" },
      correct: "C",
      explanation: "KEY RULE: Data refers to raw facts before they are processed. NOTE: Information is processed data, records are organized entries, and output is a result produced after processing. REMEMBER: Facts first, meaning later."
    },
    {
      id: 17, topic: "Number Bases",
      question: "What is the decimal equivalent of binary 1010?",
      options: { A: "8", B: "9", C: "10", D: "12" },
      correct: "C",
      explanation: "FORMULA: 1010 base 2 = 1x8 + 0x4 + 1x2 + 0x1 = 10. NOTE: Wrong options usually result from incorrect place-value addition. REMEMBER: Binary place values are 1, 2, 4, 8 from right to left."
    },
    {
      id: 18, topic: "Word Processing",
      question: "Which feature of a word processor is used to check spelling errors in a document?",
      options: { A: "Spell check", B: "Mail merge", C: "Chart tool", D: "Slide sorter" },
      correct: "A",
      explanation: "KEY RULE: Spell check is used to identify and correct misspelled words in a document. NOTE: Mail merge personalizes letters, while chart tool and slide sorter belong to other applications. REMEMBER: Proofing text uses spell check."
    },
    {
      id: 19, topic: "Spreadsheet",
      question: "Which spreadsheet function is used to add numbers in a selected range of cells?",
      options: { A: "AVERAGE", B: "SUM", C: "COUNT", D: "MAX" },
      correct: "B",
      explanation: "FORMULA: The SUM function adds the values in a specified range. NOTE: AVERAGE finds the mean, COUNT counts entries, and MAX finds the largest value. REMEMBER: Total values with SUM."
    },
    {
      id: 20, topic: "Spreadsheet Terms",
      question: "In a worksheet, the meeting point of a row and a column is called a",
      options: { A: "record", B: "range", C: "cell", D: "sheet" },
      correct: "C",
      explanation: "KEY RULE: A cell is formed where a row and a column intersect. NOTE: A record is a database term, a range is a group of cells, and a sheet is the whole page. REMEMBER: Entries like A1 or B3 are cell references."
    },
    {
      id: 21, topic: "Database Terms",
      question: "A row in a database table is called a",
      options: { A: "field", B: "record", C: "report", D: "query" },
      correct: "B",
      explanation: "KEY RULE: A record is a row containing related information about one item. NOTE: A field is a column, while report and query are different database objects. REMEMBER: Row equals record."
    },
    {
      id: 22, topic: "Database Packages",
      question: "Which of the following is a database package?",
      options: { A: "MS Access", B: "PowerPoint", C: "CorelDraw", D: "Chrome" },
      correct: "A",
      explanation: "KEY RULE: MS Access is used for creating and managing databases. NOTE: PowerPoint handles presentations, CorelDraw is for graphics, and Chrome is a browser. REMEMBER: Tables, queries, forms, and reports point to Access."
    },
    {
      id: 23, topic: "Graphics Package",
      question: "Which package is mainly used for designing logos and invitation cards?",
      options: { A: "Spreadsheet package", B: "CorelDraw", C: "MS DOS", D: "Antivirus" },
      correct: "B",
      explanation: "KEY RULE: CorelDraw is a graphics package used for creative design tasks. NOTE: Spreadsheet packages handle tables and calculations, MS DOS is an operating environment, and antivirus provides protection. REMEMBER: Visual design belongs to graphics software."
    },
    {
      id: 24, topic: "Presentation Package",
      question: "Which package is best suited for preparing classroom slides for teaching?",
      options: { A: "MS Excel", B: "MS Word", C: "MS PowerPoint", D: "MS Access" },
      correct: "C",
      explanation: "KEY RULE: MS PowerPoint is designed for creating and displaying slides. NOTE: Word is for documents, Excel for spreadsheets, and Access for databases. REMEMBER: Slides point to PowerPoint."
    },
    {
      id: 25, topic: "Web Design",
      question: "Which of the following is an example of a web design package?",
      options: { A: "Dreamweaver", B: "Printer", C: "Speaker", D: "Joystick" },
      correct: "A",
      explanation: "KEY RULE: Dreamweaver is a web authoring and design package. NOTE: Printer, speaker, and joystick are hardware devices, not web design tools. REMEMBER: Website creation uses tools like Dreamweaver."
    },
    {
      id: 26, topic: "File Organization",
      question: "Which file organization stores records in the order they are received?",
      options: { A: "Serial", B: "Relational", C: "Hierarchical", D: "Network" },
      correct: "A",
      explanation: "KEY RULE: Serial file organization stores records one after another in the order of arrival. NOTE: Relational, hierarchical, and network are mainly database organization models. REMEMBER: Arrival order indicates serial organization."
    },
    {
      id: 27, topic: "File Operations",
      question: "Which of the following is a basic file handling operation?",
      options: { A: "Delete", B: "Compile", C: "Debug", D: "Broadcast" },
      correct: "A",
      explanation: "KEY RULE: Deleting is one of the standard file operations, along with create, open, copy, retrieve, and update. NOTE: Compile and debug belong to programming, while broadcast belongs to communication. REMEMBER: File operations directly manage stored files."
    },
    {
      id: 28, topic: "Data Security",
      question: "Which method provides an extra copy of data in case the original is lost or damaged?",
      options: { A: "Encryption", B: "Backup", C: "Formatting", D: "Compression" },
      correct: "B",
      explanation: "KEY RULE: Backup creates an additional copy of data for recovery after failure, deletion, or disaster. NOTE: Encryption hides data, formatting prepares storage, and compression reduces file size. REMEMBER: Recovery depends on backup."
    },
    {
      id: 29, topic: "Booting",
      question: "Restarting a running computer system is called",
      options: { A: "cold booting", B: "warm booting", C: "logging off", D: "spooling" },
      correct: "B",
      explanation: "KEY RULE: Warm booting means restarting the system without complete power-off. NOTE: Cold booting starts from full shutdown, while logging off and spooling are different actions. REMEMBER: Restart equals warm boot."
    },
    {
      id: 30, topic: "Computer Maintenance",
      question: "Which of the following is a good maintenance practice for a computer room?",
      options: { A: "Blocking ventilation", B: "Keeping liquids near systems", C: "Maintaining a dust-free environment", D: "Using broken sockets" },
      correct: "C",
      explanation: "KEY RULE: A dust-free environment helps prevent hardware damage and supports system longevity. NOTE: Blocking ventilation, keeping liquids near systems, and using broken sockets are unsafe. REMEMBER: Clean and safe surroundings protect equipment."
    },
    {
      id: 31, topic: "ICT",
      question: "ICT stands for",
      options: { A: "Internal Computer Training", B: "Information and Communication Technology", C: "Internet Communication Tool", D: "Integrated Control Technology" },
      correct: "B",
      explanation: "KEY RULE: ICT means Information and Communication Technology. NOTE: The other options are incorrect expansions. REMEMBER: ICT combines data handling with communication systems."
    },
    {
      id: 32, topic: "Internet Terms",
      question: "Which of the following is used to locate a webpage on the Internet?",
      options: { A: "URL", B: "CPU", C: "ROM", D: "ALU" },
      correct: "A",
      explanation: "KEY RULE: A URL identifies the address of a resource on the web. NOTE: CPU, ROM, and ALU are computer hardware or memory terms. REMEMBER: Web address equals URL."
    },
    {
      id: 33, topic: "Email",
      question: "In an e-mail address user@school.edu.ng, the part before the at-sign is the",
      options: { A: "domain name", B: "username", C: "protocol", D: "country code" },
      correct: "B",
      explanation: "KEY RULE: The part before the at-sign identifies the user's mailbox or username. NOTE: The domain name comes after the at-sign, while the others are different concepts. REMEMBER: user at domain is the standard e-mail pattern."
    },
    {
      id: 34, topic: "Network Types",
      question: "A network that covers a city is called a",
      options: { A: "LAN", B: "PAN", C: "MAN", D: "WAN" },
      correct: "C",
      explanation: "KEY RULE: MAN means Metropolitan Area Network and covers a city-scale area. NOTE: LAN is local, PAN is personal, and WAN covers much larger regions. REMEMBER: Metropolitan equals MAN."
    },
    {
      id: 35, topic: "Network Devices",
      question: "Which device is used to connect computers in a local network and forward data intelligently within that network?",
      options: { A: "Switch", B: "Scanner", C: "Plotter", D: "Projector" },
      correct: "A",
      explanation: "KEY RULE: A switch connects devices in a LAN and forwards data to the correct destination port. NOTE: Scanner, plotter, and projector are not network-connection devices. REMEMBER: LAN device connection usually uses a switch."
    },
    {
      id: 36, topic: "Programming Languages",
      question: "Which of the following is a low-level programming language?",
      options: { A: "Python", B: "Assembly language", C: "Java", D: "BASIC" },
      correct: "B",
      explanation: "KEY RULE: Assembly language is close to machine language and hardware operations. NOTE: Python, Java, and BASIC are high-level languages. REMEMBER: Low-level languages are hardware-near."
    },
    {
      id: 37, topic: "Algorithms",
      question: "A basic property of a good algorithm is that it must",
      options: { A: "be ambiguous", B: "run forever", C: "be finite", D: "avoid output" },
      correct: "C",
      explanation: "KEY RULE: A good algorithm must have finiteness, meaning it should stop after a limited number of steps. NOTE: Ambiguity and endless execution weaken an algorithm, and every valid algorithm should produce output. REMEMBER: A proper algorithm must end."
    },
    {
      id: 38, topic: "Flowchart Symbols",
      question: "Which flowchart symbol is used for decision making?",
      options: { A: "Rectangle", B: "Diamond", C: "Oval", D: "Parallelogram" },
      correct: "B",
      explanation: "KEY RULE: The diamond symbol represents a decision or branching point in a flowchart. NOTE: Rectangle is for process, oval is for start/stop, and parallelogram is for input/output. REMEMBER: Yes or no decisions go in a diamond."
    },
    {
      id: 39, topic: "Artificial Intelligence",
      question: "Which AI branch is concerned with helping computers understand human language?",
      options: { A: "Natural Language Processing", B: "Formatting", C: "Printing", D: "Booting" },
      correct: "A",
      explanation: "KEY RULE: Natural Language Processing focuses on understanding and processing human language. NOTE: Formatting, printing, and booting are not branches of AI. REMEMBER: Chatbots and translators depend on NLP."
    },
    {
      id: 40, topic: "Cybersecurity",
      question: "Using fake messages or fake websites to trick users into revealing confidential information is called",
      options: { A: "phishing", B: "formatting", C: "debugging", D: "spooling" },
      correct: "A",
      explanation: "KEY RULE: Phishing is a deceptive cyber-attack used to steal passwords, account details, and other sensitive data. NOTE: Formatting, debugging, and spooling are normal computing processes. REMEMBER: Fake urgent requests for credentials often indicate phishing."
    }
  ],
    test14: [
    {
      id: 1, topic: "Data Security",
      question: "All of the following are examples of real security and privacy risks EXCEPT",
      options: { A: "hackers", B: "spam", C: "viruses", D: "identity theft" },
      correct: "B",
      explanation: "KEY RULE: Spam is unwanted messages but not a direct security breach like hacking, viruses, or identity theft. NOTE: Hackers and viruses compromise systems, while identity theft targets personal data. REMEMBER: Not all nuisances are security threats."
    },
    {
      id: 2, topic: "Data Processing",
      question: "A process used by large retailers to study trends is called",
      options: { A: "data mining", B: "data selection", C: "data storage", D: "data sorting" },
      correct: "A",
      explanation: "KEY RULE: Data mining analyzes large datasets to find patterns and trends. NOTE: Other options involve handling data but not extracting patterns. REMEMBER: Business intelligence relies heavily on data mining."
    },
    {
      id: 3, topic: "Computer Systems",
      question: "POS terminals are commonly used for",
      options: { A: "gaming systems", B: "inventory and sales systems", C: "programming tasks", D: "data encryption" },
      correct: "B",
      explanation: "KEY RULE: Point-of-sale systems are used in retail for sales and inventory tracking. NOTE: They are not for gaming or encryption. REMEMBER: POS = sales transactions."
    },
    {
      id: 4, topic: "ICT Devices",
      question: "A handheld device that scans product tags and shows prices while shopping is known as",
      options: { A: "PSS", B: "POS", C: "GPS", D: "RFID reader" },
      correct: "A",
      explanation: "KEY RULE: Personal Shopping System (PSS) allows customers to scan and track items while shopping. NOTE: POS is used at checkout, RFID tracks items, GPS handles location. REMEMBER: PSS enhances shopping convenience."
    },
    {
      id: 5, topic: "Computer Forensics",
      question: "Recovering deleted or damaged files for legal investigation is called",
      options: { A: "robotics", B: "simulation", C: "computer forensics", D: "animation" },
      correct: "C",
      explanation: "KEY RULE: Computer forensics deals with retrieving and analyzing digital evidence. NOTE: Robotics and simulation are unrelated fields. REMEMBER: Crime investigation in computing uses forensics. :contentReference[oaicite:0]{index=0}"
    },
    {
      id: 6, topic: "Computer Functions",
      question: "Which of the following is NOT a major data processing function?",
      options: { A: "gathering data", B: "processing data", C: "analyzing data", D: "storing data" },
      correct: "C",
      explanation: "KEY RULE: The four functions are input, processing, output, and storage. NOTE: Analysis is not part of core processing cycle. REMEMBER: IPO + storage forms the core."
    },
    {
      id: 7, topic: "Tracking Technology",
      question: "Which technology uses tags to track movement of objects or animals?",
      options: { A: "POS", B: "RFID", C: "PSS", D: "GPS only" },
      correct: "B",
      explanation: "KEY RULE: RFID uses tags and scanners to track objects. NOTE: GPS tracks location globally but RFID is used in tagging systems. REMEMBER: RFID = tracking tags."
    },
    {
      id: 8, topic: "Robotics",
      question: "Performing surgery using computer-controlled devices is an application of",
      options: { A: "robotics", B: "simulation", C: "forecasting", D: "animation" },
      correct: "A",
      explanation: "KEY RULE: Robotics enables machines to perform tasks like surgery. NOTE: Simulation imitates processes, not actual execution. REMEMBER: Robots assist in precise operations."
    },
    {
      id: 9, topic: "Technology Terms",
      question: "Technology available to everyone without restriction is called",
      options: { A: "proprietary", B: "open", C: "restricted", D: "private" },
      correct: "B",
      explanation: "KEY RULE: Open technology is freely accessible to all users. NOTE: Proprietary systems are restricted. REMEMBER: Open means accessible."
    },
    {
      id: 10, topic: "Nanotechnology",
      question: "The study of extremely small structures between 1–100 nanometers is called",
      options: { A: "nanoscience", B: "robotics", C: "AI", D: "simulation" },
      correct: "A",
      explanation: "KEY RULE: Nanoscience focuses on structures at atomic and molecular levels. NOTE: Other fields operate at larger scales. REMEMBER: Nano means extremely small."
    },
    {
      id: 11, topic: "Artificial Intelligence",
      question: "The science of creating machines that mimic human intelligence is called",
      options: { A: "simulation", B: "nanotechnology", C: "AI", D: "robotics" },
      correct: "C",
      explanation: "KEY RULE: AI enables machines to simulate human thinking. NOTE: Robotics deals with machines, but AI focuses on intelligence. REMEMBER: Smart machines use AI."
    },
    {
      id: 12, topic: "Data and Information",
      question: "Data presented in meaningful form is called",
      options: { A: "software", B: "process", C: "information", D: "storage" },
      correct: "C",
      explanation: "KEY RULE: Information is processed data with meaning. NOTE: Data alone has no context. REMEMBER: Meaningful data = information."
    },
    {
      id: 13, topic: "Processing",
      question: "The transformation of data into information is called",
      options: { A: "storing", B: "processing", C: "inputting", D: "outputting" },
      correct: "B",
      explanation: "KEY RULE: Processing converts raw data into meaningful output. NOTE: Input collects data, output presents it. REMEMBER: Processing adds value."
    },
    {
      id: 14, topic: "Input Devices",
      question: "Computers gather data by allowing users to",
      options: { A: "store", B: "input", C: "output", D: "process" },
      correct: "B",
      explanation: "KEY RULE: Input means entering data into the computer. NOTE: Output displays results. REMEMBER: Data entry = input."
    },
    {
      id: 15, topic: "Output",
      question: "A printed photograph from a digital camera is considered",
      options: { A: "data", B: "input", C: "output", D: "process" },
      correct: "C",
      explanation: "KEY RULE: Output is the result produced after processing. NOTE: Data is input before processing. REMEMBER: Printed result = output."
    },
    {
      id: 16, topic: "Binary System",
      question: "Computers process data using which language?",
      options: { A: "English", B: "binary", C: "decimal", D: "hexadecimal only" },
      correct: "B",
      explanation: "KEY RULE: Computers use binary (0s and 1s) to process data. NOTE: Other systems are for human representation. REMEMBER: Machine language = binary."
    },
    {
      id: 17, topic: "Data Representation",
      question: "Computers process data into information using",
      options: { A: "words", B: "characters", C: "numbers", D: "pictures only" },
      correct: "C",
      explanation: "KEY RULE: Computers operate using numeric representation internally. NOTE: All data types are converted into numbers. REMEMBER: Everything becomes numbers."
    },
    {
      id: 18, topic: "Binary",
      question: "A combination of eight bits is called",
      options: { A: "byte", B: "bit", C: "kilobyte", D: "megabyte" },
      correct: "A",
      explanation: "KEY RULE: 8 bits form one byte. NOTE: Bit is a single digit. REMEMBER: Byte = 8 bits."
    },
    {
      id: 19, topic: "Bit Meaning",
      question: "The term bit is short for",
      options: { A: "binary number", B: "binary digit", C: "byte integer", D: "bit number" },
      correct: "B",
      explanation: "KEY RULE: Bit means binary digit. NOTE: It represents 0 or 1. REMEMBER: Smallest unit = bit."
    },
    {
      id: 20, topic: "Storage Units",
      question: "One gigabyte is approximately",
      options: { A: "1000 bytes", B: "1 million bytes", C: "1 billion bytes", D: "1 trillion bytes" },
      correct: "C",
      explanation: "KEY RULE: 1GB ≈ 1 billion bytes. NOTE: Smaller units include KB and MB. REMEMBER: Giga = billion."
    },
    {
      id: 21, topic: "Hardware",
      question: "Physical components of a computer are called",
      options: { A: "software", B: "hardware", C: "data", D: "instructions" },
      correct: "B",
      explanation: "KEY RULE: Hardware includes all tangible parts. NOTE: Software is intangible. REMEMBER: You can touch hardware."
    },
    {
      id: 22, topic: "System Unit",
      question: "The components that process data are found in the",
      options: { A: "input device", B: "output device", C: "system unit", D: "monitor" },
      correct: "C",
      explanation: "KEY RULE: Processing occurs in the system unit where CPU resides. NOTE: Input/output devices assist. REMEMBER: Processing core is system unit."
    },
    {
      id: 23, topic: "Input Devices",
      question: "Which is NOT an input device?",
      options: { A: "scanner", B: "mouse", C: "keyboard", D: "printer" },
      correct: "D",
      explanation: "KEY RULE: Printer produces output. NOTE: Others input data. REMEMBER: Printer = output device."
    },
    {
      id: 24, topic: "Storage Devices",
      question: "Which is NOT a storage device?",
      options: { A: "hard disk", B: "printer", C: "CD drive", D: "flash drive" },
      correct: "B",
      explanation: "KEY RULE: Printer outputs data, not stores it. NOTE: Others store data. REMEMBER: Storage keeps data."
    },
    {
      id: 25, topic: "CPU",
      question: "The brain of the computer is the",
      options: { A: "RAM", B: "CPU", C: "ROM", D: "monitor" },
      correct: "B",
      explanation: "KEY RULE: CPU controls processing operations. NOTE: RAM stores temporary data. REMEMBER: CPU = brain."
    },
    {
      id: 26, topic: "Motherboard",
      question: "CPU and memory are located on the",
      options: { A: "monitor", B: "motherboard", C: "keyboard", D: "printer" },
      correct: "B",
      explanation: "KEY RULE: Motherboard houses CPU and memory. NOTE: Other devices connect externally. REMEMBER: Central board = motherboard."
    },
    {
      id: 27, topic: "Software Types",
      question: "Word processing and spreadsheets are examples of",
      options: { A: "system software", B: "application software", C: "utility software", D: "firmware" },
      correct: "B",
      explanation: "KEY RULE: Application software performs user tasks. NOTE: System software runs system. REMEMBER: Apps do tasks."
    },
    {
      id: 28, topic: "Software",
      question: "A set of programs used to perform tasks is called",
      options: { A: "hardware", B: "software", C: "memory", D: "CPU" },
      correct: "B",
      explanation: "KEY RULE: Software is collection of programs. NOTE: Hardware is physical. REMEMBER: Programs = software."
    },
    {
      id: 29, topic: "System Software",
      question: "System software allows hardware and application software to",
      options: { A: "conflict", B: "work together", C: "shut down", D: "disconnect" },
      correct: "B",
      explanation: "KEY RULE: System software coordinates operations. NOTE: It ensures smooth interaction. REMEMBER: OS bridges hardware and apps."
    },
    {
      id: 30, topic: "Platforms",
      question: "PC and Mac are examples of different",
      options: { A: "applications", B: "platforms", C: "devices", D: "networks" },
      correct: "B",
      explanation: "KEY RULE: Platform refers to hardware + OS combination. NOTE: PC and Mac differ in architecture. REMEMBER: Platform defines environment."
    },
    {
      id: 31, topic: "Servers",
      question: "Servers provide resources to computers connected to a",
      options: { A: "network", B: "CPU", C: "printer", D: "RAM" },
      correct: "A",
      explanation: "KEY RULE: Servers serve clients over networks. NOTE: Not standalone. REMEMBER: Network = shared resources."
    },
    {
      id: 32, topic: "Supercomputers",
      question: "Computers designed for very complex calculations are",
      options: { A: "servers", B: "supercomputers", C: "laptops", D: "tablets" },
      correct: "B",
      explanation: "KEY RULE: Supercomputers handle extremely complex computations. NOTE: Others less powerful. REMEMBER: Fastest = supercomputers."
    },
    {
      id: 33, topic: "Internet",
      question: "DSL is an example of",
      options: { A: "slow connection", B: "wireless", C: "broadband", D: "offline" },
      correct: "C",
      explanation: "KEY RULE: DSL is a broadband internet connection. NOTE: It provides high-speed access. REMEMBER: DSL = broadband."
    },
    {
      id: 34, topic: "Digital Divide",
      question: "Difference between people with and without internet access is called",
      options: { A: "network gap", B: "digital divide", C: "web gap", D: "data gap" },
      correct: "B",
      explanation: "KEY RULE: Digital divide refers to unequal access to technology. NOTE: It affects education and economy. REMEMBER: Access inequality = digital divide."
    },
    {
      id: 35, topic: "Nanotechnology",
      question: "Nanotechnology deals with",
      options: { A: "large machines", B: "very small structures", C: "networks", D: "programming" },
      correct: "B",
      explanation: "KEY RULE: Nanotechnology works at atomic scale. NOTE: Extremely small size. REMEMBER: Nano = tiny."
    },
    {
      id: 36, topic: "Computer Functions",
      question: "Correct order of computer operations is",
      options: { A: "Process-Input-Output", B: "Input-Process-Output-Storage", C: "Output-Input-Process", D: "Storage-Input-Process" },
      correct: "B",
      explanation: "KEY RULE: IPO cycle includes storage. NOTE: Correct sequence essential. REMEMBER: Input → Process → Output → Storage."
    },
    {
      id: 37, topic: "Binary",
      question: "Binary language consists of",
      options: { A: "10 digits", B: "2 digits", C: "8 digits", D: "4 digits" },
      correct: "B",
      explanation: "KEY RULE: Binary uses 0 and 1 only. NOTE: Two digits system. REMEMBER: Base 2."
    },
    {
      id: 38, topic: "Operating System",
      question: "Software that controls computer operations is",
      options: { A: "application software", B: "operating system", C: "utility", D: "hardware" },
      correct: "B",
      explanation: "KEY RULE: OS manages hardware and software. NOTE: Central control. REMEMBER: OS = system manager."
    },
    {
      id: 39, topic: "Embedded Systems",
      question: "Computers inside devices like cars are called",
      options: { A: "mainframes", B: "embedded computers", C: "servers", D: "laptops" },
      correct: "B",
      explanation: "KEY RULE: Embedded systems are built into devices. NOTE: Perform specific functions. REMEMBER: Hidden computers."
    },
    {
      id: 40, topic: "Instructions",
      question: "Steps needed to process data are called",
      options: { A: "data", B: "instructions", C: "hardware", D: "output" },
      correct: "B",
      explanation: "KEY RULE: Instructions guide computer processing. NOTE: Without instructions, no task. REMEMBER: Programs = instructions."
    }
  ],
    test15: [
    {
      id: 1, topic: "History of Computing",
      question: "Which device used punched cards to control weaving patterns and later influenced computing?",
      options: { A: "Jacquard loom", B: "Abacus", C: "Slide rule", D: "Pascal calculator" },
      correct: "A",
      explanation: "KEY RULE: The Jacquard loom used punched cards, inspiring early computing concepts. NOTE: Other devices did not use punched instructions. REMEMBER: Punched cards trace back to Jacquard."
    },
    {
      id: 2, topic: "Computer Generations",
      question: "Microprocessors were first introduced in which generation of computers?",
      options: { A: "First", B: "Second", C: "Third", D: "Fourth" },
      correct: "D",
      explanation: "KEY RULE: Fourth generation computers are defined by microprocessors. NOTE: Earlier generations used tubes, transistors, and ICs. REMEMBER: Microprocessor = fourth generation."
    },
    {
      id: 3, topic: "Computer Types",
      question: "Which computer type is most suitable for scientific research requiring massive calculations?",
      options: { A: "Laptop", B: "Supercomputer", C: "Tablet", D: "Desktop" },
      correct: "B",
      explanation: "KEY RULE: Supercomputers perform complex calculations extremely fast. NOTE: Other systems lack such power. REMEMBER: Science and simulations need supercomputers."
    },
    {
      id: 4, topic: "Computer Characteristics",
      question: "The ability of a computer to work continuously without getting tired is called",
      options: { A: "speed", B: "accuracy", C: "diligence", D: "versatility" },
      correct: "C",
      explanation: "KEY RULE: Diligence refers to the ability to work continuously without fatigue. NOTE: Humans get tired, computers do not. REMEMBER: No tiredness = diligence."
    },
    {
      id: 5, topic: "Input Devices",
      question: "Which device is used for playing computer games by controlling movement?",
      options: { A: "Joystick", B: "Printer", C: "Scanner", D: "Monitor" },
      correct: "A",
      explanation: "KEY RULE: Joysticks control movement in games and simulations. NOTE: Others are not gaming input devices. REMEMBER: Gaming control = joystick."
    },
    {
      id: 6, topic: "Output Devices",
      question: "Which device produces visual output on a screen?",
      options: { A: "Monitor", B: "Keyboard", C: "Mouse", D: "Microphone" },
      correct: "A",
      explanation: "KEY RULE: Monitor displays output visually. NOTE: Others are input devices. REMEMBER: Screen output = monitor."
    },
    {
      id: 7, topic: "Keyboard Keys",
      question: "Which key is used to delete characters to the left of the cursor?",
      options: { A: "Delete key", B: "Backspace key", C: "Enter key", D: "Shift key" },
      correct: "B",
      explanation: "KEY RULE: Backspace removes characters to the left. NOTE: Delete removes right-side characters. REMEMBER: Backspace goes backward."
    },
    {
      id: 8, topic: "CPU Components",
      question: "Which part of the CPU directs all operations?",
      options: { A: "ALU", B: "Control Unit", C: "Register", D: "Cache" },
      correct: "B",
      explanation: "KEY RULE: Control Unit manages instructions and directs operations. NOTE: ALU performs calculations. REMEMBER: Control = CU."
    },
    {
      id: 9, topic: "Memory Types",
      question: "Which memory is used for temporary storage during processing?",
      options: { A: "ROM", B: "RAM", C: "Flash drive", D: "Hard disk" },
      correct: "B",
      explanation: "KEY RULE: RAM is temporary memory used during processing. NOTE: ROM stores permanent data. REMEMBER: RAM = working memory."
    },
    {
      id: 10, topic: "Storage Units",
      question: "Which unit is larger than a megabyte?",
      options: { A: "Kilobyte", B: "Byte", C: "Gigabyte", D: "Bit" },
      correct: "C",
      explanation: "KEY RULE: Gigabyte is larger than megabyte. NOTE: Units increase from KB → MB → GB. REMEMBER: GB is bigger."
    },
    {
      id: 11, topic: "Registers",
      question: "Which register stores intermediate results of calculations?",
      options: { A: "PC", B: "MAR", C: "Accumulator", D: "MDR" },
      correct: "C",
      explanation: "KEY RULE: Accumulator holds intermediate results. NOTE: PC stores next instruction. REMEMBER: Temporary results go to accumulator."
    },
    {
      id: 12, topic: "Logic Gates",
      question: "Which gate outputs 0 only when all inputs are 1?",
      options: { A: "AND", B: "NAND", C: "OR", D: "NOR" },
      correct: "B",
      explanation: "KEY RULE: NAND is NOT-AND, so output is 0 only when all inputs are 1. NOTE: AND outputs 1 in that case. REMEMBER: NAND = inverted AND."
    },
    {
      id: 13, topic: "Operating Systems",
      question: "Which OS is commonly used on desktop PCs?",
      options: { A: "Android", B: "Windows", C: "iOS", D: "Symbian" },
      correct: "B",
      explanation: "KEY RULE: Windows is widely used on PCs. NOTE: Android and iOS are mobile OS. REMEMBER: PC = Windows."
    },
    {
      id: 14, topic: "Utility Software",
      question: "Which utility checks disk for errors?",
      options: { A: "Disk checker", B: "Word processor", C: "Spreadsheet", D: "Browser" },
      correct: "A",
      explanation: "KEY RULE: Disk checker scans for errors. NOTE: Others are applications. REMEMBER: Maintenance tools detect faults."
    },
    {
      id: 15, topic: "Translator Software",
      question: "Which translates high-level language into machine code at once?",
      options: { A: "Interpreter", B: "Compiler", C: "Assembler", D: "Debugger" },
      correct: "B",
      explanation: "KEY RULE: Compiler translates entire program at once. NOTE: Interpreter is line-by-line. REMEMBER: Compile before run."
    },
    {
      id: 16, topic: "Data",
      question: "Which is an example of data?",
      options: { A: "Processed report", B: "Raw numbers", C: "Graph", D: "Summary" },
      correct: "B",
      explanation: "KEY RULE: Data is raw unprocessed facts. NOTE: Others are processed outputs. REMEMBER: Data is raw."
    },
    {
      id: 17, topic: "Number Bases",
      question: "Convert decimal 4 to binary",
      options: { A: "100", B: "101", C: "110", D: "111" },
      correct: "A",
      explanation: "FORMULA: 4 = 100 in binary. NOTE: 2^2 = 4. REMEMBER: Binary powers of 2."
    },
    {
      id: 18, topic: "Word Processing",
      question: "Which feature copies text?",
      options: { A: "Cut", B: "Copy", C: "Paste", D: "Delete" },
      correct: "B",
      explanation: "KEY RULE: Copy duplicates text without removing original. NOTE: Cut removes. REMEMBER: Copy keeps original."
    },
    {
      id: 19, topic: "Spreadsheet",
      question: "Which function returns lowest value?",
      options: { A: "MAX", B: "MIN", C: "SUM", D: "COUNT" },
      correct: "B",
      explanation: "KEY RULE: MIN returns smallest value. NOTE: MAX returns largest. REMEMBER: MIN = minimum."
    },
    {
      id: 20, topic: "Spreadsheet Terms",
      question: "A group of selected cells is called",
      options: { A: "Range", B: "Row", C: "Column", D: "Sheet" },
      correct: "A",
      explanation: "KEY RULE: Range is group of cells. NOTE: Row horizontal, column vertical. REMEMBER: Multiple cells = range."
    },
    {
      id: 21, topic: "Database",
      question: "Primary key is used to",
      options: { A: "duplicate records", B: "identify records uniquely", C: "delete records", D: "format data" },
      correct: "B",
      explanation: "KEY RULE: Primary key uniquely identifies records. NOTE: No duplicates allowed. REMEMBER: Unique identifier."
    },
    {
      id: 22, topic: "Database",
      question: "Which stores related data in rows and columns?",
      options: { A: "Table", B: "Form", C: "Report", D: "Query" },
      correct: "A",
      explanation: "KEY RULE: Tables store data. NOTE: Others display or retrieve. REMEMBER: Table = storage."
    },
    {
      id: 23, topic: "Graphics",
      question: "Zoom tool is used to",
      options: { A: "increase view size", B: "delete image", C: "print image", D: "store image" },
      correct: "A",
      explanation: "KEY RULE: Zoom enlarges view. NOTE: Does not change actual size. REMEMBER: Zoom = magnify."
    },
    {
      id: 24, topic: "Presentation",
      question: "Slide transition affects",
      options: { A: "text editing", B: "movement between slides", C: "data storage", D: "printing" },
      correct: "B",
      explanation: "KEY RULE: Transition controls slide change. NOTE: Animation is object-level. REMEMBER: Slide-to-slide effect."
    },
    {
      id: 25, topic: "Web",
      question: "Which browser is used to access web pages?",
      options: { A: "Chrome", B: "Excel", C: "Access", D: "CorelDraw" },
      correct: "A",
      explanation: "KEY RULE: Browsers display web pages. NOTE: Others are applications. REMEMBER: Internet uses browser."
    },
    {
      id: 26, topic: "File Organization",
      question: "Indexed file organization uses",
      options: { A: "order", B: "index", C: "hash", D: "random" },
      correct: "B",
      explanation: "KEY RULE: Indexed files use index for fast access. NOTE: Sequential uses order. REMEMBER: Index speeds search."
    },
    {
      id: 27, topic: "File Operations",
      question: "Which creates new file?",
      options: { A: "Open", B: "Create", C: "Delete", D: "Close" },
      correct: "B",
      explanation: "KEY RULE: Create generates new file. NOTE: Open accesses existing. REMEMBER: New file = create."
    },
    {
      id: 28, topic: "Security",
      question: "Which protects data from unauthorized access?",
      options: { A: "Encryption", B: "Formatting", C: "Deleting", D: "Printing" },
      correct: "A",
      explanation: "KEY RULE: Encryption secures data. NOTE: Others do not. REMEMBER: Security = encryption."
    },
    {
      id: 29, topic: "Booting",
      question: "Warm boot is",
      options: { A: "restart", B: "shutdown", C: "power off", D: "sleep" },
      correct: "A",
      explanation: "KEY RULE: Warm boot restarts system. NOTE: Cold boot starts fresh. REMEMBER: Restart = warm."
    },
    {
      id: 30, topic: "Maintenance",
      question: "UPS is used for",
      options: { A: "backup power", B: "printing", C: "storage", D: "networking" },
      correct: "A",
      explanation: "KEY RULE: UPS provides backup power. NOTE: Protects against outages. REMEMBER: Power safety."
    },
    {
      id: 31, topic: "ICT",
      question: "ICT improves",
      options: { A: "communication", B: "cooking", C: "farming only", D: "sleeping" },
      correct: "A",
      explanation: "KEY RULE: ICT enhances communication. NOTE: Core purpose. REMEMBER: tech connects people."
    },
    {
      id: 32, topic: "Internet",
      question: "Which is used to browse websites?",
      options: { A: "HTTP", B: "FTP", C: "SMTP", D: "RAM" },
      correct: "A",
      explanation: "KEY RULE: HTTP is web protocol. NOTE: FTP transfers files. REMEMBER: Web = HTTP."
    },
    {
      id: 33, topic: "Email",
      question: "Inbox stores",
      options: { A: "received mails", B: "sent mails", C: "drafts", D: "spam only" },
      correct: "A",
      explanation: "KEY RULE: Inbox holds received emails. NOTE: Sent folder holds sent. REMEMBER: Inbox = incoming."
    },
    {
      id: 34, topic: "Networking",
      question: "WAN covers",
      options: { A: "small area", B: "city", C: "large area", D: "room" },
      correct: "C",
      explanation: "KEY RULE: WAN covers wide area. NOTE: Larger than LAN. REMEMBER: WAN = global."
    },
    {
      id: 35, topic: "Network Devices",
      question: "Modem converts",
      options: { A: "digital to analog", B: "text to image", C: "sound to text", D: "data to power" },
      correct: "A",
      explanation: "KEY RULE: Modem modulates/demodulates signals. NOTE: Converts signals. REMEMBER: modem = modulator-demodulator."
    },
    {
      id: 36, topic: "Programming",
      question: "Which language is high-level?",
      options: { A: "Python", B: "Machine code", C: "Binary", D: "Assembly" },
      correct: "A",
      explanation: "KEY RULE: Python is high-level. NOTE: Others low-level. REMEMBER: human-friendly language."
    },
    {
      id: 37, topic: "Algorithm",
      question: "Algorithm must produce",
      options: { A: "output", B: "error", C: "loop", D: "delay" },
      correct: "A",
      explanation: "KEY RULE: Algorithm must output result. NOTE: No result = invalid. REMEMBER: output required."
    },
    {
      id: 38, topic: "Flowchart",
      question: "Oval represents",
      options: { A: "start/end", B: "process", C: "decision", D: "input" },
      correct: "A",
      explanation: "KEY RULE: Oval is terminal symbol. NOTE: Start/End. REMEMBER: beginning and end."
    },
    {
      id: 39, topic: "AI",
      question: "Chatbots use",
      options: { A: "AI", B: "CPU", C: "RAM", D: "ROM" },
      correct: "A",
      explanation: "KEY RULE: Chatbots rely on AI. NOTE: simulate conversation. REMEMBER: smart responses."
    },
    {
      id: 40, topic: "Cybersecurity",
      question: "Strong password should include",
      options: { A: "letters only", B: "numbers only", C: "letters, numbers, symbols", D: "name only" },
      correct: "C",
      explanation: "KEY RULE: Strong passwords combine characters. NOTE: increases security. REMEMBER: mix characters."
    }
  ],
    test16: [
    {
      id: 1, topic: "History of Computing",
      question: "Which invention introduced the concept of programmable machines using punched cards?",
      options: { A: "Jacquard loom", B: "Abacus", C: "Pascal calculator", D: "Difference engine" },
      correct: "A",
      explanation: "KEY RULE: The Jacquard loom used punched cards to control operations, influencing programmable computing. NOTE: Other devices performed calculations but were not programmable in this sense. REMEMBER: Punched cards began with Jacquard."
    },
    {
      id: 2, topic: "Computer Generations",
      question: "Which generation is associated with the use of transistors?",
      options: { A: "First", B: "Second", C: "Third", D: "Fourth" },
      correct: "B",
      explanation: "KEY RULE: Second generation computers replaced vacuum tubes with transistors. NOTE: First used tubes, third used ICs, fourth used microprocessors. REMEMBER: Transistors define second generation."
    },
    {
      id: 3, topic: "Computer Types",
      question: "Which type of computer is embedded within other devices to perform dedicated functions?",
      options: { A: "Supercomputer", B: "Embedded computer", C: "Mainframe", D: "Minicomputer" },
      correct: "B",
      explanation: "KEY RULE: Embedded computers are built into devices like cars and appliances. NOTE: Other types are standalone systems. REMEMBER: Hidden computers are embedded systems."
    },
    {
      id: 4, topic: "Computer Characteristics",
      question: "Which characteristic refers to performing repeated operations without error or fatigue?",
      options: { A: "Speed", B: "Accuracy", C: "Diligence", D: "Versatility" },
      correct: "C",
      explanation: "KEY RULE: Diligence means the computer can work continuously without fatigue. NOTE: Accuracy relates to correctness, speed to rate. REMEMBER: No tiredness = diligence."
    },
    {
      id: 5, topic: "Input Devices",
      question: "Which device converts physical documents into digital format?",
      options: { A: "Scanner", B: "Printer", C: "Monitor", D: "Speaker" },
      correct: "A",
      explanation: "KEY RULE: A scanner digitizes images or text from paper. NOTE: Printer outputs, monitor displays, speaker outputs sound. REMEMBER: Paper to digital uses scanner."
    },
    {
      id: 6, topic: "Output Devices",
      question: "Which device is used to produce large-scale engineering drawings?",
      options: { A: "Plotter", B: "Mouse", C: "Keyboard", D: "Microphone" },
      correct: "A",
      explanation: "KEY RULE: Plotters produce high-quality large drawings. NOTE: Others are input devices. REMEMBER: Engineering output uses plotter."
    },
    {
      id: 7, topic: "Keyboard Keys",
      question: "Which key combination is commonly used to copy selected text?",
      options: { A: "Ctrl + V", B: "Ctrl + C", C: "Ctrl + X", D: "Ctrl + Z" },
      correct: "B",
      explanation: "KEY RULE: Ctrl + C copies selected content. NOTE: Ctrl + V pastes, Ctrl + X cuts, Ctrl + Z undoes. REMEMBER: C = copy."
    },
    {
      id: 8, topic: "CPU Components",
      question: "Which component controls the sequence of operations in a computer?",
      options: { A: "ALU", B: "Control Unit", C: "Register", D: "Cache" },
      correct: "B",
      explanation: "KEY RULE: The Control Unit directs execution of instructions. NOTE: ALU performs calculations. REMEMBER: CU manages operations."
    },
    {
      id: 9, topic: "Memory Types",
      question: "Which memory is used to store frequently accessed data to improve performance?",
      options: { A: "ROM", B: "Cache", C: "Hard disk", D: "DVD" },
      correct: "B",
      explanation: "KEY RULE: Cache stores frequently used data for faster access. NOTE: ROM is permanent, disk is slower. REMEMBER: Cache speeds up CPU."
    },
    {
      id: 10, topic: "Storage Units",
      question: "Which unit is the smallest?",
      options: { A: "Bit", B: "Byte", C: "Kilobyte", D: "Megabyte" },
      correct: "A",
      explanation: "KEY RULE: Bit is the smallest data unit. NOTE: Byte = 8 bits. REMEMBER: Bit is the smallest."
    },
    {
      id: 11, topic: "Registers",
      question: "Which register holds memory addresses?",
      options: { A: "MDR", B: "MAR", C: "PC", D: "ACC" },
      correct: "B",
      explanation: "KEY RULE: MAR stores addresses. NOTE: MDR stores data. REMEMBER: Address = MAR."
    },
    {
      id: 12, topic: "Logic Gates",
      question: "Which gate outputs 1 when any input is 1?",
      options: { A: "AND", B: "OR", C: "NOT", D: "NAND" },
      correct: "B",
      explanation: "KEY RULE: OR outputs 1 if any input is 1. NOTE: AND needs all inputs. REMEMBER: OR = any true."
    },
    {
      id: 13, topic: "Operating Systems",
      question: "Which OS is open-source?",
      options: { A: "Windows", B: "Linux", C: "iOS", D: "MacOS" },
      correct: "B",
      explanation: "KEY RULE: Linux is open-source. NOTE: Others are proprietary. REMEMBER: Free OS = Linux."
    },
    {
      id: 14, topic: "Utility Software",
      question: "Which utility is used to organize files efficiently on disk?",
      options: { A: "Disk defragmenter", B: "Antivirus", C: "Browser", D: "Compiler" },
      correct: "A",
      explanation: "KEY RULE: Disk defragmenter reorganizes files. NOTE: Antivirus protects. REMEMBER: Organize disk = defragment."
    },
    {
      id: 15, topic: "Translator Software",
      question: "Which translates assembly language?",
      options: { A: "Assembler", B: "Compiler", C: "Interpreter", D: "Editor" },
      correct: "A",
      explanation: "KEY RULE: Assembler translates assembly. NOTE: Others differ. REMEMBER: Assembly → assembler."
    },
    {
      id: 16, topic: "Data",
      question: "Which represents processed data?",
      options: { A: "Data", B: "Information", C: "Bits", D: "Bytes" },
      correct: "B",
      explanation: "KEY RULE: Information is processed data. NOTE: Raw = data. REMEMBER: Meaningful = information."
    },
    {
      id: 17, topic: "Number Bases",
      question: "Binary equivalent of decimal 3 is",
      options: { A: "10", B: "11", C: "100", D: "101" },
      correct: "B",
      explanation: "FORMULA: 3 = 11 in binary. NOTE: 2+1. REMEMBER: binary conversion."
    },
    {
      id: 18, topic: "Word Processing",
      question: "Which aligns text evenly on both margins?",
      options: { A: "Left align", B: "Right align", C: "Justify", D: "Center" },
      correct: "C",
      explanation: "KEY RULE: Justify aligns both margins. NOTE: Others align differently. REMEMBER: full alignment."
    },
    {
      id: 19, topic: "Spreadsheet",
      question: "Which formula divides numbers?",
      options: { A: "=A1+B1", B: "=A1-B1", C: "=A1/B1", D: "=A1*B1" },
      correct: "C",
      explanation: "FORMULA: Division uses '/'. NOTE: Others add, subtract, multiply. REMEMBER: slash divides."
    },
    {
      id: 20, topic: "Spreadsheet",
      question: "Columns are labeled using",
      options: { A: "Numbers", B: "Letters", C: "Symbols", D: "Codes" },
      correct: "B",
      explanation: "KEY RULE: Columns use letters. NOTE: Rows use numbers. REMEMBER: A, B, C columns."
    },
    {
      id: 21, topic: "Database",
      question: "Query is used to",
      options: { A: "Store data", B: "Retrieve data", C: "Delete OS", D: "Compile code" },
      correct: "B",
      explanation: "KEY RULE: Query retrieves data. NOTE: Table stores. REMEMBER: search = query."
    },
    {
      id: 22, topic: "Graphics",
      question: "Crop tool is used to",
      options: { A: "Remove unwanted parts", B: "Zoom", C: "Draw", D: "Print" },
      correct: "A",
      explanation: "KEY RULE: Crop removes unwanted parts. NOTE: Editing tool. REMEMBER: trim image."
    },
    {
      id: 23, topic: "Presentation",
      question: "Slide show starts with",
      options: { A: "F5", B: "Ctrl", C: "Alt", D: "Shift" },
      correct: "A",
      explanation: "KEY RULE: F5 starts slide show. NOTE: standard shortcut. REMEMBER: F5 = presentation."
    },
    {
      id: 24, topic: "Web",
      question: "Which is a search engine?",
      options: { A: "Google", B: "Excel", C: "Word", D: "CorelDraw" },
      correct: "A",
      explanation: "KEY RULE: Google searches web. NOTE: others apps. REMEMBER: find info online."
    },
    {
      id: 25, topic: "File Organization",
      question: "Sequential access means",
      options: { A: "Direct access", B: "Random access", C: "Step-by-step", D: "Indexed" },
      correct: "C",
      explanation: "KEY RULE: Sequential = order. NOTE: one after another. REMEMBER: step-by-step."
    },
    {
      id: 26, topic: "File Operations",
      question: "Saving file does",
      options: { A: "Store data", B: "Delete data", C: "Print", D: "Open" },
      correct: "A",
      explanation: "KEY RULE: Save stores data. NOTE: ensures persistence. REMEMBER: save = keep."
    },
    {
      id: 27, topic: "Security",
      question: "Firewall protects against",
      options: { A: "Unauthorized access", B: "Printing", C: "Typing", D: "Storage" },
      correct: "A",
      explanation: "KEY RULE: Firewall blocks threats. NOTE: network protection. REMEMBER: digital barrier."
    },
    {
      id: 28, topic: "Booting",
      question: "Cold boot occurs when",
      options: { A: "Restart", B: "Start from off", C: "Sleep", D: "Shutdown" },
      correct: "B",
      explanation: "KEY RULE: cold boot = start fresh. NOTE: warm = restart. REMEMBER: power on."
    },
    {
      id: 29, topic: "Maintenance",
      question: "Ventilation prevents",
      options: { A: "Overheating", B: "Typing", C: "Storage", D: "Printing" },
      correct: "A",
      explanation: "KEY RULE: airflow cools system. NOTE: prevents heat damage. REMEMBER: cooling is key."
    },
    {
      id: 30, topic: "ICT",
      question: "ICT helps in",
      options: { A: "communication", B: "sleeping", C: "eating", D: "walking" },
      correct: "A",
      explanation: "KEY RULE: ICT improves communication. NOTE: main use. REMEMBER: connect people."
    },
    {
      id: 31, topic: "Internet",
      question: "WWW stands for",
      options: { A: "World Wide Web", B: "Web World Wide", C: "Wide Web World", D: "None" },
      correct: "A",
      explanation: "KEY RULE: WWW = World Wide Web. NOTE: internet service. REMEMBER: web access."
    },
    {
      id: 32, topic: "Email",
      question: "Sent folder contains",
      options: { A: "sent mails", B: "received", C: "spam", D: "drafts" },
      correct: "A",
      explanation: "KEY RULE: sent folder stores sent emails. NOTE: inbox receives. REMEMBER: sent = outgoing."
    },
    {
      id: 33, topic: "Networking",
      question: "Star topology uses",
      options: { A: "central hub", B: "loop", C: "single cable", D: "mesh" },
      correct: "A",
      explanation: "KEY RULE: star has central node. NOTE: hub connects all. REMEMBER: center = hub."
    },
    {
      id: 34, topic: "Devices",
      question: "Switch connects",
      options: { A: "network devices", B: "printer", C: "keyboard", D: "monitor" },
      correct: "A",
      explanation: "KEY RULE: switch connects LAN. NOTE: communication device. REMEMBER: network connection."
    },
    {
      id: 35, topic: "Programming",
      question: "Assembly is",
      options: { A: "low-level", B: "high-level", C: "binary", D: "none" },
      correct: "A",
      explanation: "KEY RULE: assembly is low-level. NOTE: closer to machine. REMEMBER: hardware-near."
    },
    {
      id: 36, topic: "Algorithm",
      question: "Algorithm should be",
      options: { A: "clear", B: "ambiguous", C: "endless", D: "unclear" },
      correct: "A",
      explanation: "KEY RULE: must be clear. NOTE: clarity ensures execution. REMEMBER: clear steps."
    },
    {
      id: 37, topic: "Flowchart",
      question: "Rectangle means",
      options: { A: "process", B: "decision", C: "start", D: "input" },
      correct: "A",
      explanation: "KEY RULE: rectangle = process. NOTE: action step. REMEMBER: task step."
    },
    {
      id: 38, topic: "AI",
      question: "Machine learning is part of",
      options: { A: "AI", B: "hardware", C: "CPU", D: "RAM" },
      correct: "A",
      explanation: "KEY RULE: ML is AI subset. NOTE: learning systems. REMEMBER: intelligent systems."
    },
    {
      id: 39, topic: "Cybersecurity",
      question: "Phishing targets",
      options: { A: "user data", B: "hardware", C: "CPU", D: "RAM" },
      correct: "A",
      explanation: "KEY RULE: phishing steals info. NOTE: fake messages. REMEMBER: protect credentials."
    },
    {
      id: 40, topic: "Ethics",
      question: "Respecting copyright means",
      options: { A: "no piracy", B: "copy freely", C: "delete software", D: "ignore rules" },
      correct: "A",
      explanation: "KEY RULE: copyright protects creators. NOTE: piracy illegal. REMEMBER: respect ownership."
    }
  ],
  test17: [
    {
      id: 1, topic: "History of Computing",
      question: "Which device was designed by Charles Babbage as a general-purpose mechanical computer?",
      options: { A: "Difference Engine", B: "Analytical Engine", C: "Pascaline", D: "Abacus" },
      correct: "B",
      explanation: "KEY RULE: The Analytical Engine was designed as a general-purpose programmable machine. NOTE: Difference Engine was for specific calculations. REMEMBER: Babbage's major vision was the Analytical Engine."
    },
    {
      id: 2, topic: "Computer Generations",
      question: "Which generation of computers used vacuum tubes?",
      options: { A: "First generation", B: "Second generation", C: "Third generation", D: "Fourth generation" },
      correct: "A",
      explanation: "KEY RULE: First generation computers used vacuum tubes. NOTE: Later generations replaced them with transistors and ICs. REMEMBER: Vacuum tubes = first generation."
    },
    {
      id: 3, topic: "Computer Types",
      question: "Which type of computer is used mainly for personal use?",
      options: { A: "Mainframe", B: "Supercomputer", C: "Microcomputer", D: "Minicomputer" },
      correct: "C",
      explanation: "KEY RULE: Microcomputers are personal computers used by individuals. NOTE: Others serve large organizations. REMEMBER: Personal system = microcomputer."
    },
    {
      id: 4, topic: "Computer Characteristics",
      question: "Which feature allows a computer to perform many tasks at once?",
      options: { A: "Accuracy", B: "Versatility", C: "Speed", D: "Storage" },
      correct: "B",
      explanation: "KEY RULE: Versatility refers to performing multiple tasks. NOTE: Speed relates to processing rate. REMEMBER: Multi-function = versatility."
    },
    {
      id: 5, topic: "Input Devices",
      question: "Which device is used to capture images directly into a computer?",
      options: { A: "Scanner", B: "Speaker", C: "Printer", D: "Plotter" },
      correct: "A",
      explanation: "KEY RULE: Scanner inputs images into the computer. NOTE: Others are output devices. REMEMBER: Image input = scanner."
    },
    {
      id: 6, topic: "Output Devices",
      question: "Which device produces audio output?",
      options: { A: "Monitor", B: "Speaker", C: "Keyboard", D: "Mouse" },
      correct: "B",
      explanation: "KEY RULE: Speakers output sound. NOTE: Monitor displays visuals. REMEMBER: Sound output = speaker."
    },
    {
      id: 7, topic: "Keyboard Keys",
      question: "Which key is used to execute a command or move to the next line?",
      options: { A: "Shift", B: "Enter", C: "Ctrl", D: "Alt" },
      correct: "B",
      explanation: "KEY RULE: Enter key executes commands or moves cursor to next line. NOTE: Shift modifies characters. REMEMBER: Enter confirms action."
    },
    {
      id: 8, topic: "CPU Components",
      question: "Which part of the CPU carries out logical comparisons?",
      options: { A: "Control Unit", B: "ALU", C: "Register", D: "Cache" },
      correct: "B",
      explanation: "KEY RULE: ALU performs arithmetic and logic operations. NOTE: CU controls operations. REMEMBER: Logic operations = ALU."
    },
    {
      id: 9, topic: "Memory Types",
      question: "Which memory permanently stores instructions needed to start the computer?",
      options: { A: "RAM", B: "ROM", C: "Cache", D: "Hard disk" },
      correct: "B",
      explanation: "KEY RULE: ROM stores permanent instructions like boot program. NOTE: RAM is temporary. REMEMBER: Startup instructions are in ROM."
    },
    {
      id: 10, topic: "Storage Units",
      question: "Which unit equals 1024 kilobytes?",
      options: { A: "1 byte", B: "1 megabyte", C: "1 gigabyte", D: "1 terabyte" },
      correct: "B",
      explanation: "KEY RULE: 1 megabyte = 1024 kilobytes. NOTE: Units increase progressively. REMEMBER: KB to MB conversion."
    },
    {
      id: 11, topic: "Registers",
      question: "Which register stores data temporarily during processing?",
      options: { A: "Accumulator", B: "MAR", C: "PC", D: "ROM" },
      correct: "A",
      explanation: "KEY RULE: Accumulator holds temporary data/results. NOTE: PC stores next instruction. REMEMBER: Temp data = accumulator."
    },
    {
      id: 12, topic: "Logic Gates",
      question: "Which gate produces an output of 0 only when both inputs are 1?",
      options: { A: "AND", B: "OR", C: "NAND", D: "NOR" },
      correct: "C",
      explanation: "KEY RULE: NAND outputs 0 only when both inputs are 1. NOTE: It is inverse of AND. REMEMBER: NAND = NOT AND."
    },
    {
      id: 13, topic: "Operating Systems",
      question: "Which of the following is NOT an operating system?",
      options: { A: "Windows", B: "Linux", C: "MS Word", D: "Android" },
      correct: "C",
      explanation: "KEY RULE: MS Word is application software. NOTE: Others are OS. REMEMBER: Word processes documents, not system operations."
    },
    {
      id: 14, topic: "Utility Software",
      question: "Which utility helps protect a computer from viruses?",
      options: { A: "Antivirus", B: "Spreadsheet", C: "Compiler", D: "Browser" },
      correct: "A",
      explanation: "KEY RULE: Antivirus detects and removes malware. NOTE: Others are not protection tools. REMEMBER: Security = antivirus."
    },
    {
      id: 15, topic: "Translator Software",
      question: "Which translator executes code line-by-line?",
      options: { A: "Compiler", B: "Interpreter", C: "Assembler", D: "Linker" },
      correct: "B",
      explanation: "KEY RULE: Interpreter executes line-by-line. NOTE: Compiler translates whole program. REMEMBER: Step execution = interpreter."
    },
    {
      id: 16, topic: "Data",
      question: "Which term refers to raw facts and figures?",
      options: { A: "Information", B: "Data", C: "Storage", D: "Output" },
      correct: "B",
      explanation: "KEY RULE: Data is unprocessed facts. NOTE: Information is processed data. REMEMBER: Raw facts = data."
    },
    {
      id: 17, topic: "Number Bases",
      question: "Convert decimal 2 to binary",
      options: { A: "10", B: "11", C: "01", D: "100" },
      correct: "A",
      explanation: "FORMULA: 2 = 10 in binary. NOTE: 2^1 = 2. REMEMBER: Binary conversion uses powers of 2."
    },
    {
      id: 18, topic: "Word Processing",
      question: "Which feature allows insertion of a prepared letter into multiple documents?",
      options: { A: "Mail merge", B: "Spell check", C: "Find", D: "Replace" },
      correct: "A",
      explanation: "KEY RULE: Mail merge automates document personalization. NOTE: Others handle editing. REMEMBER: Bulk letters = mail merge."
    },
    {
      id: 19, topic: "Spreadsheet",
      question: "Which function calculates average?",
      options: { A: "SUM", B: "COUNT", C: "AVERAGE", D: "MAX" },
      correct: "C",
      explanation: "FORMULA: AVERAGE computes mean. NOTE: Others perform different tasks. REMEMBER: Mean = average."
    },
    {
      id: 20, topic: "Spreadsheet",
      question: "Rows in spreadsheet are labeled using",
      options: { A: "Letters", B: "Numbers", C: "Symbols", D: "Codes" },
      correct: "B",
      explanation: "KEY RULE: Rows use numbers. NOTE: Columns use letters. REMEMBER: 1,2,3 rows."
    },
    {
      id: 21, topic: "Database",
      question: "Which ensures each record is unique?",
      options: { A: "Primary key", B: "Query", C: "Form", D: "Report" },
      correct: "A",
      explanation: "KEY RULE: Primary key uniquely identifies records. NOTE: No duplicates allowed. REMEMBER: Unique identifier."
    },
    {
      id: 22, topic: "Database",
      question: "Which object is used for data entry?",
      options: { A: "Form", B: "Table", C: "Report", D: "Query" },
      correct: "A",
      explanation: "KEY RULE: Forms allow input of data. NOTE: Tables store. REMEMBER: Entry interface = form."
    },
    {
      id: 23, topic: "Graphics",
      question: "Which tool draws freehand lines?",
      options: { A: "Pencil tool", B: "Zoom tool", C: "Crop tool", D: "Fill tool" },
      correct: "A",
      explanation: "KEY RULE: Pencil draws freehand. NOTE: Others perform different functions. REMEMBER: sketch = pencil."
    },
    {
      id: 24, topic: "Presentation",
      question: "Which feature controls movement between slides?",
      options: { A: "Animation", B: "Transition", C: "Insert", D: "Design" },
      correct: "B",
      explanation: "KEY RULE: Transition controls slide change. NOTE: Animation is object-level. REMEMBER: slide change = transition."
    },
    {
      id: 25, topic: "Web",
      question: "Which language is used to structure web pages?",
      options: { A: "HTML", B: "Python", C: "Java", D: "C++" },
      correct: "A",
      explanation: "KEY RULE: HTML structures web pages. NOTE: Others are programming languages. REMEMBER: web structure = HTML."
    },
    {
      id: 26, topic: "File Organization",
      question: "Random access allows",
      options: { A: "Sequential reading", B: "Direct access", C: "Indexed only", D: "No access" },
      correct: "B",
      explanation: "KEY RULE: Random access allows direct access to data. NOTE: Sequential requires order. REMEMBER: jump directly."
    },
    {
      id: 27, topic: "File Operations",
      question: "Which operation removes file permanently?",
      options: { A: "Delete", B: "Open", C: "Save", D: "Copy" },
      correct: "A",
      explanation: "KEY RULE: Delete removes file. NOTE: others manage file. REMEMBER: remove = delete."
    },
    {
      id: 28, topic: "Security",
      question: "Which ensures data confidentiality?",
      options: { A: "Encryption", B: "Deletion", C: "Formatting", D: "Printing" },
      correct: "A",
      explanation: "KEY RULE: Encryption protects confidentiality. NOTE: others not. REMEMBER: secure data."
    },
    {
      id: 29, topic: "Booting",
      question: "Warm boot is also called",
      options: { A: "Cold start", B: "Restart", C: "Shutdown", D: "Sleep" },
      correct: "B",
      explanation: "KEY RULE: Warm boot = restart. NOTE: cold boot = start fresh. REMEMBER: restart system."
    },
    {
      id: 30, topic: "Maintenance",
      question: "Which prevents power damage?",
      options: { A: "UPS", B: "Printer", C: "Mouse", D: "Scanner" },
      correct: "A",
      explanation: "KEY RULE: UPS protects against power failure. NOTE: hardware safety. REMEMBER: backup power."
    },
    {
      id: 31, topic: "ICT",
      question: "ICT is mainly concerned with",
      options: { A: "communication", B: "cooking", C: "travel", D: "sports" },
      correct: "A",
      explanation: "KEY RULE: ICT improves communication. NOTE: core purpose. REMEMBER: connect world."
    },
    {
      id: 32, topic: "Internet",
      question: "Which protocol transfers files?",
      options: { A: "HTTP", B: "FTP", C: "SMTP", D: "TCP" },
      correct: "B",
      explanation: "KEY RULE: FTP transfers files. NOTE: HTTP loads pages. REMEMBER: file transfer = FTP."
    },
    {
      id: 33, topic: "Email",
      question: "Draft folder contains",
      options: { A: "unsent emails", B: "received mails", C: "sent mails", D: "spam" },
      correct: "A",
      explanation: "KEY RULE: drafts store unsent emails. NOTE: saved before sending. REMEMBER: incomplete emails."
    },
    {
      id: 34, topic: "Networking",
      question: "Mesh topology means",
      options: { A: "all connected", B: "single cable", C: "ring", D: "hub" },
      correct: "A",
      explanation: "KEY RULE: mesh connects all nodes. NOTE: high redundancy. REMEMBER: full connection."
    },
    {
      id: 35, topic: "Devices",
      question: "Hub is",
      options: { A: "network device", B: "input", C: "output", D: "storage" },
      correct: "A",
      explanation: "KEY RULE: hub connects devices. NOTE: simple network device. REMEMBER: central connection."
    },
    {
      id: 36, topic: "Programming",
      question: "Which is machine language?",
      options: { A: "Binary", B: "Python", C: "Java", D: "BASIC" },
      correct: "A",
      explanation: "KEY RULE: machine language is binary. NOTE: 0s and 1s. REMEMBER: computer language."
    },
    {
      id: 37, topic: "Algorithm",
      question: "Algorithm must have",
      options: { A: "steps", B: "errors", C: "loop only", D: "delay" },
      correct: "A",
      explanation: "KEY RULE: algorithm is step-by-step. NOTE: clear sequence. REMEMBER: steps define algorithm."
    },
    {
      id: 38, topic: "Flowchart",
      question: "Parallelogram represents",
      options: { A: "input/output", B: "process", C: "decision", D: "start" },
      correct: "A",
      explanation: "KEY RULE: parallelogram = I/O. NOTE: shape defines role. REMEMBER: slanted sides."
    },
    {
      id: 39, topic: "AI",
      question: "AI is used in",
      options: { A: "voice recognition", B: "printing only", C: "storage only", D: "keyboard" },
      correct: "A",
      explanation: "KEY RULE: AI powers speech systems. NOTE: assistants use AI. REMEMBER: smart tech."
    },
    {
      id: 40, topic: "Cybersecurity",
      question: "Strong password should be",
      options: { A: "simple", B: "short", C: "complex", D: "name only" },
      correct: "C",
      explanation: "KEY RULE: complex passwords improve security. NOTE: mix characters. REMEMBER: strong protection."
    }
  ],
    test18: [
    {
      id: 1, topic: "Evolution of Computing",
      question: "Which device marked the beginning of automatic data processing using punched cards?",
      options: { A: "Hollerith machine", B: "Abacus", C: "Slide rule", D: "Pascal calculator" },
      correct: "A",
      explanation: "KEY RULE: Hollerith machine used punched cards for census data processing. NOTE: Others were manual devices. REMEMBER: Data processing automation began with Hollerith. :contentReference[oaicite:0]{index=0}"
    },
    {
      id: 2, topic: "Computer Fundamentals",
      question: "A computer is best described as a machine that",
      options: { A: "stores data only", B: "processes data into information", C: "displays output only", D: "types documents only" },
      correct: "B",
      explanation: "KEY RULE: A computer processes raw data into meaningful information. NOTE: Other options represent partial functions. REMEMBER: Input → Process → Output defines computing. :contentReference[oaicite:1]{index=1}"
    },
    {
      id: 3, topic: "Computer Characteristics",
      question: "Which characteristic ensures that a computer gives correct results when properly programmed?",
      options: { A: "Speed", B: "Diligence", C: "Accuracy", D: "Versatility" },
      correct: "C",
      explanation: "KEY RULE: Accuracy ensures correct results when data and instructions are correct. NOTE: Speed is rate, diligence is consistency. REMEMBER: Garbage in, garbage out affects accuracy."
    },
    {
      id: 4, topic: "Input Devices",
      question: "Which device captures images and stores them digitally?",
      options: { A: "Digital camera", B: "Printer", C: "Monitor", D: "Plotter" },
      correct: "A",
      explanation: "KEY RULE: Digital camera captures images directly into digital form. NOTE: Printer outputs, monitor displays. REMEMBER: Image capture = camera."
    },
    {
      id: 5, topic: "Output Devices",
      question: "Which device is used to produce graphical output on paper in large formats?",
      options: { A: "Plotter", B: "Speaker", C: "Keyboard", D: "Mouse" },
      correct: "A",
      explanation: "KEY RULE: Plotters produce large graphical outputs like engineering drawings. NOTE: Others are not graphic output devices. REMEMBER: Large drawings = plotter."
    },
    {
      id: 6, topic: "CPU",
      question: "Which component fetches, decodes and executes instructions?",
      options: { A: "CPU", B: "Hard disk", C: "Monitor", D: "Printer" },
      correct: "A",
      explanation: "KEY RULE: CPU performs instruction cycle operations. NOTE: Other devices do not process instructions. REMEMBER: CPU = processing unit."
    },
    {
      id: 7, topic: "Memory",
      question: "Which memory is used to store currently running programs?",
      options: { A: "ROM", B: "RAM", C: "DVD", D: "Flash drive" },
      correct: "B",
      explanation: "KEY RULE: RAM holds active programs temporarily. NOTE: ROM is permanent. REMEMBER: Running programs use RAM."
    },
    {
      id: 8, topic: "Storage Units",
      question: "Which unit is equal to 1024 megabytes?",
      options: { A: "Gigabyte", B: "Kilobyte", C: "Byte", D: "Bit" },
      correct: "A",
      explanation: "FORMULA: 1GB = 1024MB. NOTE: Units increase progressively. REMEMBER: Mega to Giga."
    },
    {
      id: 9, topic: "Software Types",
      question: "Which type of software controls the overall operation of a computer?",
      options: { A: "Application software", B: "System software", C: "Utility software", D: "Programming software" },
      correct: "B",
      explanation: "KEY RULE: System software manages hardware and system operations. NOTE: Application software performs user tasks. REMEMBER: OS is system software. :contentReference[oaicite:2]{index=2}"
    },
    {
      id: 10, topic: "Operating Systems",
      question: "Which of the following is NOT an operating system?",
      options: { A: "Linux", B: "Windows", C: "MS Excel", D: "Android" },
      correct: "C",
      explanation: "KEY RULE: Excel is application software. NOTE: Others are OS. REMEMBER: Excel is for spreadsheets."
    },
    {
      id: 11, topic: "Application Packages",
      question: "Which package is used for numerical analysis and calculations?",
      options: { A: "Spreadsheet", B: "Word processor", C: "Graphics", D: "Database" },
      correct: "A",
      explanation: "KEY RULE: Spreadsheet handles calculations and data analysis. NOTE: Others perform different tasks. REMEMBER: Numbers = spreadsheet."
    },
    {
      id: 12, topic: "Word Processing",
      question: "Which feature automatically checks spelling mistakes?",
      options: { A: "Spell check", B: "Mail merge", C: "Find", D: "Replace" },
      correct: "A",
      explanation: "KEY RULE: Spell check identifies incorrect words. NOTE: Other tools serve editing functions. REMEMBER: Proofing uses spell check."
    },
    {
      id: 13, topic: "Spreadsheet",
      question: "Which function counts numeric values?",
      options: { A: "COUNT", B: "SUM", C: "MAX", D: "MIN" },
      correct: "A",
      explanation: "KEY RULE: COUNT counts numbers only. NOTE: SUM adds values. REMEMBER: COUNT counts numeric cells."
    },
    {
      id: 14, topic: "Database",
      question: "A collection of related data stored together is called",
      options: { A: "File", B: "Database", C: "Field", D: "Record" },
      correct: "B",
      explanation: "KEY RULE: Database is organized collection of data. NOTE: File is part of database. REMEMBER: Data collection = database. :contentReference[oaicite:3]{index=3}"
    },
    {
      id: 15, topic: "Database",
      question: "Which field uniquely identifies each record?",
      options: { A: "Primary key", B: "Foreign key", C: "Record", D: "Table" },
      correct: "A",
      explanation: "KEY RULE: Primary key ensures uniqueness. NOTE: No duplicates allowed. REMEMBER: Unique ID."
    },
    {
      id: 16, topic: "File Management",
      question: "Which file organization allows direct access to records?",
      options: { A: "Sequential", B: "Random", C: "Serial", D: "Manual" },
      correct: "B",
      explanation: "KEY RULE: Random access allows direct retrieval. NOTE: Sequential follows order. REMEMBER: Jump directly."
    },
    {
      id: 17, topic: "Maintenance",
      question: "Which practice prevents overheating?",
      options: { A: "Ventilation", B: "Blocking vents", C: "Water cooling manually", D: "Closing tightly" },
      correct: "A",
      explanation: "KEY RULE: Proper ventilation dissipates heat. NOTE: Blocking vents increases heat. REMEMBER: airflow prevents damage."
    },
    {
      id: 18, topic: "ICT",
      question: "ICT involves the use of computers for",
      options: { A: "communication and information", B: "cooking only", C: "sports", D: "farming only" },
      correct: "A",
      explanation: "KEY RULE: ICT combines communication and information processing. NOTE: core function. REMEMBER: ICT = communication tech."
    },
    {
      id: 19, topic: "Internet",
      question: "Which protocol is used to send emails?",
      options: { A: "SMTP", B: "HTTP", C: "FTP", D: "TCP" },
      correct: "A",
      explanation: "KEY RULE: SMTP sends emails. NOTE: HTTP loads web pages. REMEMBER: Mail sending uses SMTP."
    },
    {
      id: 20, topic: "Internet",
      question: "Which protocol is used to access web pages?",
      options: { A: "HTTP", B: "FTP", C: "SMTP", D: "POP3" },
      correct: "A",
      explanation: "KEY RULE: HTTP is used for web browsing. NOTE: others serve different functions. REMEMBER: web = HTTP."
    },
    {
      id: 21, topic: "Networking",
      question: "A network covering a large geographical area is",
      options: { A: "LAN", B: "MAN", C: "WAN", D: "PAN" },
      correct: "C",
      explanation: "KEY RULE: WAN covers large areas. NOTE: LAN is local. REMEMBER: wide area network."
    },
    {
      id: 22, topic: "Network Devices",
      question: "Which device directs data between networks?",
      options: { A: "Router", B: "Switch", C: "Hub", D: "Repeater" },
      correct: "A",
      explanation: "KEY RULE: Router routes data between networks. NOTE: switch connects within LAN. REMEMBER: route = router."
    },
    {
      id: 23, topic: "Programming",
      question: "Which language is closest to machine language?",
      options: { A: "Assembly", B: "Python", C: "Java", D: "C++" },
      correct: "A",
      explanation: "KEY RULE: Assembly is low-level. NOTE: closer to machine code. REMEMBER: hardware-near language."
    },
    {
      id: 24, topic: "Algorithms",
      question: "An algorithm must have",
      options: { A: "clear steps", B: "errors", C: "loops only", D: "ambiguity" },
      correct: "A",
      explanation: "KEY RULE: Algorithm must be clear and finite. NOTE: ambiguity invalid. REMEMBER: step-by-step logic."
    },
    {
      id: 25, topic: "Flowchart",
      question: "Which symbol represents decision?",
      options: { A: "Diamond", B: "Rectangle", C: "Oval", D: "Circle" },
      correct: "A",
      explanation: "KEY RULE: Diamond is decision symbol. NOTE: branching occurs here. REMEMBER: yes/no symbol."
    },
    {
      id: 26, topic: "Artificial Intelligence",
      question: "Which field involves machines learning from data?",
      options: { A: "Machine learning", B: "Networking", C: "Storage", D: "Hardware" },
      correct: "A",
      explanation: "KEY RULE: Machine learning is AI subset. NOTE: learns patterns. REMEMBER: smart systems."
    },
    {
      id: 27, topic: "Robotics",
      question: "Which component detects environmental changes?",
      options: { A: "Sensor", B: "Actuator", C: "Controller", D: "Motor" },
      correct: "A",
      explanation: "KEY RULE: Sensors detect signals. NOTE: actuators act. REMEMBER: sensing first."
    },
    {
      id: 28, topic: "Cybersecurity",
      question: "Unauthorized access to computer systems is called",
      options: { A: "Hacking", B: "Printing", C: "Saving", D: "Formatting" },
      correct: "A",
      explanation: "KEY RULE: Hacking involves illegal access. NOTE: security threat. REMEMBER: protect systems."
    },
    {
      id: 29, topic: "Cybersecurity",
      question: "Which attack uses fake websites to steal information?",
      options: { A: "Phishing", B: "Formatting", C: "Booting", D: "Saving" },
      correct: "A",
      explanation: "KEY RULE: Phishing tricks users. NOTE: fake login pages. REMEMBER: do not click suspicious links."
    },
    {
      id: 30, topic: "Ethics",
      question: "Illegal copying of software is called",
      options: { A: "Piracy", B: "Encryption", C: "Backup", D: "Compression" },
      correct: "A",
      explanation: "KEY RULE: Piracy is illegal. NOTE: copyright violation. REMEMBER: respect software rights."
    },
    {
      id: 31, topic: "File Management",
      question: "Which operation duplicates a file?",
      options: { A: "Copy", B: "Delete", C: "Close", D: "Rename" },
      correct: "A",
      explanation: "KEY RULE: Copy duplicates file. NOTE: original remains. REMEMBER: duplicate = copy."
    },
    {
      id: 32, topic: "Booting",
      question: "Cold boot means",
      options: { A: "starting from off state", B: "restart", C: "sleep", D: "hibernate" },
      correct: "A",
      explanation: "KEY RULE: cold boot = power on. NOTE: warm boot = restart. REMEMBER: from OFF."
    },
    {
      id: 33, topic: "Data Processing",
      question: "Correct order of operations is",
      options: { A: "Input-Process-Output", B: "Output-Input-Process", C: "Process-Output-Input", D: "Input-Output-Process" },
      correct: "A",
      explanation: "KEY RULE: IPO cycle defines computing. NOTE: correct sequence important. REMEMBER: data flow."
    },
    {
      id: 34, topic: "Binary System",
      question: "Binary numbers use base",
      options: { A: "2", B: "8", C: "10", D: "16" },
      correct: "A",
      explanation: "KEY RULE: binary = base 2. NOTE: uses 0 and 1. REMEMBER: two digits."
    },
    {
      id: 35, topic: "Storage Devices",
      question: "Which device uses optical technology?",
      options: { A: "CD", B: "RAM", C: "CPU", D: "Keyboard" },
      correct: "A",
      explanation: "KEY RULE: CDs use lasers. NOTE: optical storage. REMEMBER: optical disc."
    },
    {
      id: 36, topic: "Web",
      question: "HTML is used for",
      options: { A: "creating web pages", B: "printing", C: "networking", D: "storage" },
      correct: "A",
      explanation: "KEY RULE: HTML structures web pages. NOTE: web design. REMEMBER: markup language."
    },
    {
      id: 37, topic: "Email",
      question: "Inbox stores",
      options: { A: "received messages", B: "sent messages", C: "deleted", D: "drafts" },
      correct: "A",
      explanation: "KEY RULE: inbox receives mails. NOTE: main folder. REMEMBER: incoming."
    },
    {
      id: 38, topic: "Network Topologies",
      question: "Bus topology uses",
      options: { A: "single cable", B: "central hub", C: "loop", D: "mesh" },
      correct: "A",
      explanation: "KEY RULE: bus uses backbone cable. NOTE: simple structure. REMEMBER: one cable."
    },
    {
      id: 39, topic: "Computer Ethics",
      question: "Using licensed software ensures",
      options: { A: "legal compliance", B: "virus infection", C: "data loss", D: "system crash" },
      correct: "A",
      explanation: "KEY RULE: licensing ensures legality. NOTE: piracy illegal. REMEMBER: follow rules."
    },
    {
      id: 40, topic: "ICT Applications",
      question: "E-learning is an example of",
      options: { A: "ICT application", B: "hardware", C: "network cable", D: "booting" },
      correct: "A",
      explanation: "KEY RULE: ICT supports online learning. NOTE: modern education tool. REMEMBER: digital learning."
    }
  ],
    test19: [
    {
      id: 1, topic: "Evolution of Computing",
      question: "Which invention is regarded as the first mechanical general-purpose computer concept?",
      options: { A: "Analytical Engine", B: "Abacus", C: "Slide Rule", D: "Napier’s Bones" },
      correct: "A",
      explanation: "KEY RULE: The Analytical Engine by Charles Babbage introduced programmability and general-purpose computing. NOTE: Others were manual or specific-purpose devices. REMEMBER: First general-purpose concept = Analytical Engine. :contentReference[oaicite:0]{index=0}"
    },
    {
      id: 2, topic: "Computer Fundamentals",
      question: "Which cycle best represents how a computer processes data?",
      options: { A: "Input-Process-Output", B: "Output-Input-Process", C: "Process-Output-Input", D: "Input-Output-Process" },
      correct: "A",
      explanation: "KEY RULE: IPO cycle defines how computers operate. NOTE: Incorrect sequences distort data flow. REMEMBER: Data enters, is processed, then output is produced. :contentReference[oaicite:1]{index=1}"
    },
    {
      id: 3, topic: "Computer Characteristics",
      question: "Which feature ensures that a computer performs tasks without human intervention once started?",
      options: { A: "Automation", B: "Accuracy", C: "Speed", D: "Versatility" },
      correct: "A",
      explanation: "KEY RULE: Automation allows computers to execute tasks automatically. NOTE: Accuracy relates to correctness, speed to rate. REMEMBER: Automatic execution = automation."
    },
    {
      id: 4, topic: "Input Devices",
      question: "Which device is used to input handwritten signatures into a computer?",
      options: { A: "Digitizer", B: "Printer", C: "Speaker", D: "Plotter" },
      correct: "A",
      explanation: "KEY RULE: Digitizers capture handwritten inputs. NOTE: Others are output devices. REMEMBER: Signature capture uses digitizer."
    },
    {
      id: 5, topic: "Output Devices",
      question: "Which output device produces both text and graphics on paper?",
      options: { A: "Printer", B: "Speaker", C: "Monitor", D: "Keyboard" },
      correct: "A",
      explanation: "KEY RULE: Printers produce hardcopy output including text and images. NOTE: Monitor shows soft copy only. REMEMBER: Paper output = printer."
    },
    {
      id: 6, topic: "CPU",
      question: "The fetch-decode-execute cycle is performed by the",
      options: { A: "CPU", B: "RAM", C: "ROM", D: "Hard disk" },
      correct: "A",
      explanation: "KEY RULE: CPU handles instruction cycle. NOTE: Memory stores data, not execute. REMEMBER: CPU = instruction processing."
    },
    {
      id: 7, topic: "Memory",
      question: "Which memory retains its content even when power is off?",
      options: { A: "ROM", B: "RAM", C: "Cache", D: "Register" },
      correct: "A",
      explanation: "KEY RULE: ROM is non-volatile. NOTE: RAM is volatile. REMEMBER: permanent memory = ROM."
    },
    {
      id: 8, topic: "Storage Units",
      question: "Which unit is equivalent to 1024 gigabytes?",
      options: { A: "Terabyte", B: "Megabyte", C: "Kilobyte", D: "Byte" },
      correct: "A",
      explanation: "FORMULA: 1TB = 1024GB. NOTE: Larger units follow hierarchy. REMEMBER: giga to tera."
    },
    {
      id: 9, topic: "Software Types",
      question: "Which software allows users to perform specific tasks like typing or calculations?",
      options: { A: "Application software", B: "System software", C: "Firmware", D: "Driver" },
      correct: "A",
      explanation: "KEY RULE: Application software is user-oriented. NOTE: System software manages operations. REMEMBER: user tasks = application."
    },
    {
      id: 10, topic: "Operating Systems",
      question: "Which OS supports multitasking and multi-user operations?",
      options: { A: "Linux", B: "MS DOS", C: "Calculator", D: "Paint" },
      correct: "A",
      explanation: "KEY RULE: Linux supports multi-user multitasking. NOTE: DOS is limited. REMEMBER: advanced OS = Linux."
    },
    {
      id: 11, topic: "Application Packages",
      question: "Which package is best for preparing reports and letters?",
      options: { A: "Word processor", B: "Spreadsheet", C: "Database", D: "Graphics" },
      correct: "A",
      explanation: "KEY RULE: Word processors handle text documents. NOTE: spreadsheets handle numbers. REMEMBER: writing = word processor."
    },
    {
      id: 12, topic: "Spreadsheet",
      question: "Which operator is used for multiplication in spreadsheets?",
      options: { A: "*", B: "+", C: "-", D: "/" },
      correct: "A",
      explanation: "FORMULA: '*' represents multiplication. NOTE: others represent different operations. REMEMBER: star = multiply."
    },
    {
      id: 13, topic: "Database",
      question: "A column in a database table is called a",
      options: { A: "Field", B: "Record", C: "File", D: "Query" },
      correct: "A",
      explanation: "KEY RULE: Field represents a column. NOTE: record is row. REMEMBER: vertical = field."
    },
    {
      id: 14, topic: "Database",
      question: "Which operation is used to extract specific data from a database?",
      options: { A: "Query", B: "Form", C: "Report", D: "Table" },
      correct: "A",
      explanation: "KEY RULE: Query retrieves specific data. NOTE: form inputs data. REMEMBER: search = query."
    },
    {
      id: 15, topic: "File Management",
      question: "Which method uses keys to locate records quickly?",
      options: { A: "Hashed access", B: "Sequential", C: "Serial", D: "Manual" },
      correct: "A",
      explanation: "KEY RULE: Hashing uses keys for fast access. NOTE: sequential is slower. REMEMBER: key-based access = hash."
    },
    {
      id: 16, topic: "Maintenance",
      question: "Which device protects against sudden power failure?",
      options: { A: "UPS", B: "Printer", C: "Scanner", D: "Router" },
      correct: "A",
      explanation: "KEY RULE: UPS provides backup power. NOTE: prevents data loss. REMEMBER: power safety = UPS."
    },
    {
      id: 17, topic: "ICT",
      question: "Which ICT tool allows real-time communication over the internet?",
      options: { A: "Video conferencing", B: "Printer", C: "Scanner", D: "Hard disk" },
      correct: "A",
      explanation: "KEY RULE: Video conferencing enables real-time communication. NOTE: others are hardware tools. REMEMBER: live communication."
    },
    {
      id: 18, topic: "Internet",
      question: "Which protocol retrieves emails from a server?",
      options: { A: "POP3", B: "SMTP", C: "HTTP", D: "FTP" },
      correct: "A",
      explanation: "KEY RULE: POP3 retrieves emails. NOTE: SMTP sends emails. REMEMBER: receiving = POP3."
    },
    {
      id: 19, topic: "Networking",
      question: "Which topology connects all devices to a central device?",
      options: { A: "Star", B: "Bus", C: "Ring", D: "Mesh" },
      correct: "A",
      explanation: "KEY RULE: Star uses central hub. NOTE: others differ. REMEMBER: central connection."
    },
    {
      id: 20, topic: "Networking",
      question: "Which device regenerates signals in a network?",
      options: { A: "Repeater", B: "Router", C: "Switch", D: "Hub" },
      correct: "A",
      explanation: "KEY RULE: Repeater boosts signals. NOTE: router directs data. REMEMBER: signal booster."
    },
    {
      id: 21, topic: "Programming",
      question: "Which is a high-level programming language?",
      options: { A: "Python", B: "Binary", C: "Assembly", D: "Machine code" },
      correct: "A",
      explanation: "KEY RULE: Python is high-level. NOTE: others are low-level. REMEMBER: human-friendly language."
    },
    {
      id: 22, topic: "Algorithms",
      question: "Which property ensures an algorithm produces a result?",
      options: { A: "Output", B: "Loop", C: "Ambiguity", D: "Delay" },
      correct: "A",
      explanation: "KEY RULE: Algorithm must produce output. NOTE: no output invalid. REMEMBER: result required."
    },
    {
      id: 23, topic: "Flowchart",
      question: "Which symbol represents a process?",
      options: { A: "Rectangle", B: "Diamond", C: "Oval", D: "Parallelogram" },
      correct: "A",
      explanation: "KEY RULE: Rectangle represents processing step. NOTE: diamond is decision. REMEMBER: action step."
    },
    {
      id: 24, topic: "Artificial Intelligence",
      question: "Which AI system mimics human expert decision making?",
      options: { A: "Expert system", B: "Spreadsheet", C: "Database", D: "Compiler" },
      correct: "A",
      explanation: "KEY RULE: Expert systems replicate human expertise. NOTE: others not AI. REMEMBER: decision system."
    },
    {
      id: 25, topic: "Robotics",
      question: "Which component performs actions in a robot?",
      options: { A: "Actuator", B: "Sensor", C: "Controller", D: "Program" },
      correct: "A",
      explanation: "KEY RULE: Actuator produces movement. NOTE: sensors detect. REMEMBER: action = actuator."
    },
    {
      id: 26, topic: "Cybersecurity",
      question: "Which software prevents unauthorized network access?",
      options: { A: "Firewall", B: "Word processor", C: "Spreadsheet", D: "Compiler" },
      correct: "A",
      explanation: "KEY RULE: Firewall blocks unauthorized access. NOTE: security layer. REMEMBER: digital barrier."
    },
    {
      id: 27, topic: "Cybersecurity",
      question: "Malicious software designed to damage systems is called",
      options: { A: "Malware", B: "Hardware", C: "Firmware", D: "Software" },
      correct: "A",
      explanation: "KEY RULE: Malware includes viruses and worms. NOTE: harmful programs. REMEMBER: malicious software."
    },
    {
      id: 28, topic: "Ethics",
      question: "Unauthorized use of computer resources is called",
      options: { A: "Cybercrime", B: "Processing", C: "Output", D: "Storage" },
      correct: "A",
      explanation: "KEY RULE: Cybercrime involves illegal computer use. NOTE: ethical violation. REMEMBER: illegal computing."
    },
    {
      id: 29, topic: "File Operations",
      question: "Which operation changes file name without altering content?",
      options: { A: "Rename", B: "Delete", C: "Copy", D: "Move" },
      correct: "A",
      explanation: "KEY RULE: Rename changes file identity only. NOTE: data unchanged. REMEMBER: rename only label."
    },
    {
      id: 30, topic: "Booting",
      question: "Which type of boot loads OS after restart?",
      options: { A: "Warm boot", B: "Cold boot", C: "Network boot", D: "Hard boot" },
      correct: "A",
      explanation: "KEY RULE: Warm boot = restart. NOTE: cold boot = initial start. REMEMBER: restart system."
    },
    {
      id: 31, topic: "Binary System",
      question: "Binary number 111 equals",
      options: { A: "7", B: "6", C: "5", D: "8" },
      correct: "A",
      explanation: "FORMULA: 111 = 4+2+1=7. NOTE: base 2 system. REMEMBER: sum powers."
    },
    {
      id: 32, topic: "Data Processing",
      question: "Which stage converts raw data into meaningful output?",
      options: { A: "Processing", B: "Input", C: "Output", D: "Storage" },
      correct: "A",
      explanation: "KEY RULE: Processing transforms data. NOTE: core stage. REMEMBER: value addition."
    },
    {
      id: 33, topic: "Storage Devices",
      question: "Which storage device is portable and uses flash memory?",
      options: { A: "Flash drive", B: "CD", C: "Hard disk", D: "Printer" },
      correct: "A",
      explanation: "KEY RULE: Flash drives are portable. NOTE: solid-state storage. REMEMBER: USB storage."
    },
    {
      id: 34, topic: "Web Design",
      question: "Which tag defines a hyperlink in HTML?",
      options: { A: "<a>", B: "<p>", C: "<h1>", D: "<img>" },
      correct: "A",
      explanation: "KEY RULE: <a> creates links. NOTE: anchor tag. REMEMBER: hyperlink tag."
    },
    {
      id: 35, topic: "Email",
      question: "Which part of email identifies organization?",
      options: { A: "Domain", B: "Username", C: "Protocol", D: "Password" },
      correct: "A",
      explanation: "KEY RULE: domain identifies server/organization. NOTE: after @. REMEMBER: domain name."
    },
    {
      id: 36, topic: "Network Types",
      question: "A network within a building is called",
      options: { A: "LAN", B: "WAN", C: "MAN", D: "PAN" },
      correct: "A",
      explanation: "KEY RULE: LAN covers small area. NOTE: building network. REMEMBER: local network."
    },
    {
      id: 37, topic: "Problem Solving",
      question: "Breaking a problem into smaller parts is called",
      options: { A: "Decomposition", B: "Iteration", C: "Looping", D: "Compilation" },
      correct: "A",
      explanation: "KEY RULE: decomposition simplifies problems. NOTE: core skill. REMEMBER: divide to solve."
    },
    {
      id: 38, topic: "Logic Circuits",
      question: "Which gate outputs 1 only when inputs differ?",
      options: { A: "XOR", B: "AND", C: "OR", D: "NOT" },
      correct: "A",
      explanation: "KEY RULE: XOR outputs 1 when inputs differ. NOTE: exclusive OR. REMEMBER: difference logic."
    },
    {
      id: 39, topic: "ICT Applications",
      question: "Online banking is an example of",
      options: { A: "ICT application", B: "hardware", C: "network cable", D: "booting" },
      correct: "A",
      explanation: "KEY RULE: ICT supports digital services. NOTE: banking uses ICT. REMEMBER: real-world application."
    },
    {
      id: 40, topic: "Career in Computing",
      question: "A person who designs software is called",
      options: { A: "Programmer", B: "Operator", C: "User", D: "Technician" },
      correct: "A",
      explanation: "KEY RULE: programmers develop software. NOTE: key computing career. REMEMBER: coding professional."
    }
  ],
    test20: [
    {
      id: 1, topic: "Evolution of Computing",
      question: "Which invention laid the foundation for modern programmable computers through the use of punched cards?",
      options: { A: "Jacquard loom", B: "Abacus", C: "Pascaline", D: "Slide rule" },
      correct: "A",
      explanation: "KEY RULE: The Jacquard loom used punched cards to control operations, introducing programmability. NOTE: Other devices performed calculations but lacked programmability. REMEMBER: Modern programming concepts trace back to punched-card control systems."
    },
    {
      id: 2, topic: "Computer Fundamentals",
      question: "A computer is defined as a device that",
      options: { A: "stores data permanently", B: "processes data into meaningful information", C: "only displays output", D: "only accepts input" },
      correct: "B",
      explanation: "KEY RULE: A computer processes data to produce information, which is its core function. NOTE: Input and output alone do not define computing. REMEMBER: Data becomes useful only after processing."
    },
    {
      id: 3, topic: "Computer Characteristics",
      question: "Which characteristic ensures computers can perform millions of operations per second?",
      options: { A: "Accuracy", B: "Automation", C: "Speed", D: "Versatility" },
      correct: "C",
      explanation: "KEY RULE: Speed refers to how fast a computer processes instructions. NOTE: Accuracy relates to correctness, automation to self-operation. REMEMBER: High-speed processing distinguishes computers from humans."
    },
    {
      id: 4, topic: "Input Devices",
      question: "Which device is most appropriate for capturing biometric data such as fingerprints?",
      options: { A: "Scanner", B: "Biometric sensor", C: "Keyboard", D: "Mouse" },
      correct: "B",
      explanation: "KEY RULE: Biometric sensors capture unique physical characteristics like fingerprints. NOTE: Scanners capture images, not biometric authentication data. REMEMBER: Security systems rely on biometric inputs."
    },
    {
      id: 5, topic: "Output Devices",
      question: "Which device provides visual soft-copy output?",
      options: { A: "Printer", B: "Monitor", C: "Plotter", D: "Speaker" },
      correct: "B",
      explanation: "KEY RULE: Monitor displays output electronically (soft copy). NOTE: Printer and plotter produce hard copy. REMEMBER: Screen output is soft copy."
    },
    {
      id: 6, topic: "CPU",
      question: "Which unit is responsible for performing both arithmetic and logical operations?",
      options: { A: "Control Unit", B: "ALU", C: "Memory Unit", D: "Bus" },
      correct: "B",
      explanation: "KEY RULE: ALU performs calculations and logical comparisons. NOTE: Control Unit only directs operations. REMEMBER: ALU = computation center."
    },
    {
      id: 7, topic: "Memory",
      question: "Which memory type is both fast and volatile, used for active processing?",
      options: { A: "ROM", B: "RAM", C: "Hard disk", D: "CD-ROM" },
      correct: "B",
      explanation: "KEY RULE: RAM is fast and volatile, storing currently used data. NOTE: ROM and disks are non-volatile. REMEMBER: Working memory is RAM."
    },
    {
      id: 8, topic: "Storage Units",
      question: "Which unit is equivalent to 1024 gigabytes?",
      options: { A: "Terabyte", B: "Megabyte", C: "Kilobyte", D: "Petabyte" },
      correct: "A",
      explanation: "FORMULA: 1 TB = 1024 GB. NOTE: Understanding hierarchy is essential. REMEMBER: Storage units grow exponentially."
    },
    {
      id: 9, topic: "Software Types",
      question: "Which type of software acts as an interface between user and hardware?",
      options: { A: "Application software", B: "System software", C: "Utility software", D: "Firmware" },
      correct: "B",
      explanation: "KEY RULE: System software, especially OS, bridges hardware and user. NOTE: Applications rely on system software. REMEMBER: OS is the backbone."
    },
    {
      id: 10, topic: "Operating Systems",
      question: "Which OS is widely used in enterprise servers and supports open-source customization?",
      options: { A: "Linux", B: "Windows XP", C: "MS DOS", D: "Paint" },
      correct: "A",
      explanation: "KEY RULE: Linux is open-source and widely used for servers. NOTE: Others lack flexibility or are outdated. REMEMBER: Servers favor Linux for stability."
    },
    {
      id: 11, topic: "Word Processing",
      question: "Which feature allows bulk creation of personalized documents?",
      options: { A: "Mail merge", B: "Spell check", C: "Find", D: "Replace" },
      correct: "A",
      explanation: "KEY RULE: Mail merge combines template with data source. NOTE: It automates repetitive document creation. REMEMBER: Used for letters, certificates, emails."
    },
    {
      id: 12, topic: "Spreadsheet",
      question: "Which function returns the highest value in a dataset?",
      options: { A: "MIN", B: "MAX", C: "SUM", D: "COUNT" },
      correct: "B",
      explanation: "FORMULA: MAX returns largest value. NOTE: MIN returns smallest. REMEMBER: Maximum = highest."
    },
    {
      id: 13, topic: "Database",
      question: "Which database object is used for summarizing and presenting data?",
      options: { A: "Table", B: "Form", C: "Report", D: "Query" },
      correct: "C",
      explanation: "KEY RULE: Reports present formatted output. NOTE: Tables store data. REMEMBER: Presentation = report."
    },
    {
      id: 14, topic: "Database",
      question: "Which ensures data integrity by preventing duplicate entries?",
      options: { A: "Foreign key", B: "Primary key", C: "Table", D: "Query" },
      correct: "B",
      explanation: "KEY RULE: Primary key uniquely identifies records. NOTE: Prevents duplication. REMEMBER: Unique constraint = primary key."
    },
    {
      id: 15, topic: "File Organization",
      question: "Which method allows fast data retrieval using a key transformation function?",
      options: { A: "Sequential", B: "Indexed", C: "Hashed", D: "Serial" },
      correct: "C",
      explanation: "KEY RULE: Hashing maps keys to addresses. NOTE: Faster than sequential search. REMEMBER: Direct mapping = hash."
    },
    {
      id: 16, topic: "Maintenance",
      question: "Which practice best protects hardware from electrical damage?",
      options: { A: "Using UPS", B: "Cleaning monitor", C: "Deleting files", D: "Installing apps" },
      correct: "A",
      explanation: "KEY RULE: UPS stabilizes power supply. NOTE: Prevents sudden shutdown. REMEMBER: Power safety is critical."
    },
    {
      id: 17, topic: "ICT",
      question: "Which technology enables real-time global communication and collaboration?",
      options: { A: "Internet", B: "Printer", C: "Scanner", D: "Plotter" },
      correct: "A",
      explanation: "KEY RULE: Internet connects people worldwide instantly. NOTE: Foundation of ICT applications. REMEMBER: Global connectivity."
    },
    {
      id: 18, topic: "Internet",
      question: "Which protocol ensures secure communication over the web?",
      options: { A: "HTTP", B: "HTTPS", C: "FTP", D: "SMTP" },
      correct: "B",
      explanation: "KEY RULE: HTTPS encrypts data for secure communication. NOTE: HTTP is unsecured. REMEMBER: 'S' means secure."
    },
    {
      id: 19, topic: "Networking",
      question: "Which topology offers highest fault tolerance?",
      options: { A: "Bus", B: "Star", C: "Ring", D: "Mesh" },
      correct: "D",
      explanation: "KEY RULE: Mesh connects all nodes, ensuring redundancy. NOTE: Failure of one link does not affect network. REMEMBER: reliability = mesh."
    },
    {
      id: 20, topic: "Networking",
      question: "Which device filters and forwards data based on MAC address?",
      options: { A: "Router", B: "Switch", C: "Hub", D: "Repeater" },
      correct: "B",
      explanation: "KEY RULE: Switch uses MAC addresses. NOTE: Router uses IP. REMEMBER: LAN traffic = switch."
    },
    {
      id: 21, topic: "Programming",
      question: "Which paradigm focuses on reusable objects?",
      options: { A: "Procedural", B: "Object-oriented", C: "Assembly", D: "Machine" },
      correct: "B",
      explanation: "KEY RULE: OOP uses objects and classes. NOTE: improves modularity. REMEMBER: reuse = OOP."
    },
    {
      id: 22, topic: "Algorithms",
      question: "Which property ensures an algorithm will terminate?",
      options: { A: "Finiteness", B: "Input", C: "Output", D: "Clarity" },
      correct: "A",
      explanation: "KEY RULE: Algorithm must end after finite steps. NOTE: Infinite loops are invalid. REMEMBER: termination is essential."
    },
    {
      id: 23, topic: "Flowchart",
      question: "Which symbol represents input/output?",
      options: { A: "Rectangle", B: "Diamond", C: "Parallelogram", D: "Oval" },
      correct: "C",
      explanation: "KEY RULE: Parallelogram = I/O. NOTE: Standard convention. REMEMBER: slanted shape = input/output."
    },
    {
      id: 24, topic: "Artificial Intelligence",
      question: "Which AI field enables computers to understand human language?",
      options: { A: "Machine Learning", B: "Natural Language Processing", C: "Robotics", D: "Simulation" },
      correct: "B",
      explanation: "KEY RULE: NLP processes human language. NOTE: used in chatbots and translators. REMEMBER: language understanding."
    },
    {
      id: 25, topic: "Robotics",
      question: "Which component controls robot operations?",
      options: { A: "Sensor", B: "Actuator", C: "Controller", D: "Motor" },
      correct: "C",
      explanation: "KEY RULE: Controller is robot brain. NOTE: sensors detect, actuators act. REMEMBER: control logic."
    },
    {
      id: 26, topic: "Cybersecurity",
      question: "Which technique disguises data to prevent unauthorized access?",
      options: { A: "Encryption", B: "Deletion", C: "Formatting", D: "Compression" },
      correct: "A",
      explanation: "KEY RULE: Encryption converts data into unreadable form. NOTE: ensures confidentiality. REMEMBER: security through coding."
    },
    {
      id: 27, topic: "Cybersecurity",
      question: "Which attack attempts to overwhelm a system with traffic?",
      options: { A: "Phishing", B: "DDoS", C: "Spoofing", D: "Sniffing" },
      correct: "B",
      explanation: "KEY RULE: DDoS floods system. NOTE: causes denial of service. REMEMBER: overload attack."
    },
    {
      id: 28, topic: "Ethics",
      question: "Using software without license violates",
      options: { A: "Ethics and law", B: "Hardware rules", C: "Input process", D: "Storage rules" },
      correct: "A",
      explanation: "KEY RULE: Software piracy is illegal. NOTE: ethical violation. REMEMBER: respect intellectual property."
    },
    {
      id: 29, topic: "File Management",
      question: "Which operation moves file to new location without duplication?",
      options: { A: "Copy", B: "Move", C: "Delete", D: "Rename" },
      correct: "B",
      explanation: "KEY RULE: Move relocates file. NOTE: no duplicate created. REMEMBER: transfer location."
    },
    {
      id: 30, topic: "Booting",
      question: "Which process initializes hardware during startup?",
      options: { A: "POST", B: "FTP", C: "SMTP", D: "HTTP" },
      correct: "A",
      explanation: "KEY RULE: POST checks hardware during boot. NOTE: essential startup process. REMEMBER: system check."
    },
    {
      id: 31, topic: "Binary System",
      question: "Binary 1001 equals",
      options: { A: "9", B: "8", C: "7", D: "10" },
      correct: "A",
      explanation: "FORMULA: 1001 = 8+1 = 9. NOTE: binary conversion. REMEMBER: sum powers."
    },
    {
      id: 32, topic: "Data Processing",
      question: "Which stage stores processed results for future use?",
      options: { A: "Input", B: "Processing", C: "Storage", D: "Output" },
      correct: "C",
      explanation: "KEY RULE: Storage saves data. NOTE: essential for retrieval. REMEMBER: memory keeps results."
    },
    {
      id: 33, topic: "Storage Devices",
      question: "Which device uses magnetic storage?",
      options: { A: "Hard disk", B: "CD", C: "Flash drive", D: "DVD" },
      correct: "A",
      explanation: "KEY RULE: HDD uses magnetic storage. NOTE: optical vs solid-state. REMEMBER: spinning disks."
    },
    {
      id: 34, topic: "Web Design",
      question: "Which HTML tag displays images?",
      options: { A: "<img>", B: "<a>", C: "<p>", D: "<h1>" },
      correct: "A",
      explanation: "KEY RULE: <img> displays images. NOTE: essential HTML tag. REMEMBER: image tag."
    },
    {
      id: 35, topic: "Email",
      question: "Which part identifies user's mailbox?",
      options: { A: "Username", B: "Domain", C: "Protocol", D: "Server" },
      correct: "A",
      explanation: "KEY RULE: Username identifies individual. NOTE: before @. REMEMBER: user identity."
    },
    {
      id: 36, topic: "Network Types",
      question: "PAN refers to",
      options: { A: "Personal Area Network", B: "Public Area Network", C: "Private Access Node", D: "Primary Access Network" },
      correct: "A",
      explanation: "KEY RULE: PAN is small personal network. NOTE: connects personal devices. REMEMBER: short-range network."
    },
    {
      id: 37, topic: "Problem Solving",
      question: "Which step involves testing a solution?",
      options: { A: "Evaluation", B: "Design", C: "Analysis", D: "Coding" },
      correct: "A",
      explanation: "KEY RULE: Evaluation tests solution effectiveness. NOTE: final stage. REMEMBER: verify correctness."
    },
    {
      id: 38, topic: "Logic Circuits",
      question: "Which gate outputs 1 only when both inputs are 1?",
      options: { A: "AND", B: "OR", C: "XOR", D: "NOR" },
      correct: "A",
      explanation: "KEY RULE: AND requires all inputs. NOTE: strict condition. REMEMBER: both true."
    },
    {
      id: 39, topic: "ICT Applications",
      question: "Telemedicine is an application of",
      options: { A: "ICT", B: "Hardware", C: "Storage", D: "Booting" },
      correct: "A",
      explanation: "KEY RULE: ICT supports healthcare delivery remotely. NOTE: modern application. REMEMBER: digital health."
    },
    {
      id: 40, topic: "Career in Computing",
      question: "Who is responsible for maintaining computer networks?",
      options: { A: "Network administrator", B: "Programmer", C: "Operator", D: "User" },
      correct: "A",
      explanation: "KEY RULE: Network admin manages networks. NOTE: ensures connectivity. REMEMBER: network expert."
    }
  ]
};