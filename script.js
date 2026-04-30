function selectCourse(courseKey) {
    // 1. Force a check to see if the key actually exists
    if (!courseData[courseKey]) {
        alert("CRITICAL ERROR: Could not find '" + courseKey + "' in your data list. Check spelling!");
        return;
    }

    // 2. Assign the data
    currentCourseQuestions = courseData[courseKey];
    selectedCourseName = courseKey;
    index = 0; // Reset index to first question
    
    // 3. Force UI Update
    document.getElementById('quiz-container').classList.remove('hidden');
    loadQuestion(); 
    
    // 4. Close the menu if it's open (in case you used the hamburger menu)
    const nav = document.getElementById("side-nav");
    if(nav) nav.classList.remove("open");
}
// --- 1. DATA SECTION ---
const courseData = {
    "COS101": [
        { q: "Which data type is used to store a sequence of characters in Python?", options: ["int", "float", "str", "bool"], answer: 2, hint: "It's short for 'string'." },
        { q: "What is the output of print(10 % 3)?", options: ["3", "1", "0.33", "3.33"], answer: 1, hint: "The % operator gives the remainder of a division." },
        { q: "Which function is used to get user input in Python 3?", options: ["scanf()", "get()", "input()", "read()"], answer: 2, hint: "It literally asks for what the user 'puts in'." },
        { q: "In Python, how do you indicate a block of code (like inside a loop)?", options: ["Curly braces {}", "Parentheses ()", "Indentation (Spaces)", "Semicolons ;"], answer: 2, hint: "Python uses whitespace to keep code clean." },
        
    { q: "What is the brain of the computer system?", options: ["RAM", "CPU", "Hard Drive", "Monitor"], answer: 1, hint: "It stands for Central Processing Unit." },
    { q: "Which of the following is volatile memory?", options: ["ROM", "Hard Disk", "RAM", "Flash Drive"], answer: 2, hint: "It loses data when the power is turned off." },
    { q: "A collection of 8 bits is called a:", options: ["Nibble", "Word", "Byte", "Kilobit"], answer: 2, hint: "It is the standard unit for one character of text." },
    { q: "Which part of the CPU performs addition and logic?", options: ["Control Unit", "ALU", "Registers", "Cache"], answer: 1, hint: "ALU stands for Arithmetic Logic Unit." },
    { q: "Which generation of computers used Integrated Circuits (ICs)?", options: ["1st", "2nd", "3rd", "4th"], answer: 2, hint: "This followed the transistor era." },
    { q: "What does 'URL' stand for?", options: ["Uniform Resource Locator", "Universal Radio Line", "Unified Resource Link", "User Remote Log"], answer: 0, hint: "It is the web address you type in a browser." },
    { q: "Which of these is a permanent storage device?", options: ["RAM", "Cache", "SSD", "Registers"], answer: 2, hint: "Solid State Drive." },
    { q: "Which language is considered a 'low-level' language?", options: ["Python", "C++", "Assembly", "Java"], answer: 2, hint: "It is very close to machine code." },
    { q: "What is the primary function of the BIOS?", options: ["Run apps", "Initialize hardware", "Browse web", "Edit photos"], answer: 1, hint: "It starts when you first press the power button." },
    { q: "Which protocol is used for sending emails?", options: ["HTTP", "FTP", "SMTP", "IP"], answer: 2, hint: "Simple Mail Transfer Protocol." },
    { q: "What does 'HTML' stand for?", options: ["HyperText Markup Language", "High Tech Multi Language", "Hyperlink Text Management", "Home Tool Markup Language"], answer: 0, hint: "The standard language for web pages." },
    { q: "A 'Nibble' consists of how many bits?", options: ["2", "4", "8", "16"], answer: 1, hint: "Exactly half of a byte." },
    { q: "Which OS component schedules processes?", options: ["File Manager", "Kernel", "Shell", "GUI"], answer: 1, hint: "The core manager of the system." },
    { q: "Who is credited as the first computer programmer?", options: ["Charles Babbage", "Ada Lovelace", "Alan Turing", "Bill Gates"], answer: 1, hint: "She wrote an algorithm for the Analytical Engine." },
    { q: "Which of these is an input device?", options: ["Printer", "Monitor", "Scanner", "Speaker"], answer: 2, hint: "It converts paper documents into digital images." },
    { q: "What is the shortcut key for 'Undo' in Windows?", options: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + Y"], answer: 2, hint: "Go back one step." },
    { q: "In networking, what does 'LAN' stand for?", options: ["Local Area Network", "Large Access Node", "Link Area Net", "Logical Access Number"], answer: 0, hint: "Connects computers in a small area like a room." },
    { q: "Which decimal number represents the binary '111'?", options: ["3", "5", "7", "9"], answer: 2, hint: "4 + 2 + 1." },
    { q: "What is the full form of 'PDF'?", options: ["Personal Data File", "Portable Document Format", "Printed Digital File", "Public Data Form"], answer: 1, hint: "Adobe created this for sharing documents." },
    { q: "Which logic gate outputs '1' only if both inputs are '1'?", options: ["OR", "NOT", "AND", "XOR"], answer: 2, hint: "Think of it as 'Condition A' AND 'Condition B'." },
    { q: "Which company developed the Java programming language?", options: ["Microsoft", "Apple", "Sun Microsystems", "IBM"], answer: 2, hint: "It was later acquired by Oracle." },
    { q: "What does 'HTTP' stand for?", options: ["HyperText Transfer Protocol", "High Tension Tech Process", "Hyperlink Text Tool", "Home Tool Transfer Path"], answer: 0, hint: "The foundation of data exchange on the Web." },
    { q: "Which type of software is 'Linux'?", options: ["Proprietary", "Shareware", "Open Source", "Adware"], answer: 2, hint: "Anyone can view and change the source code." },
    { q: "What is the main circuit board of a computer called?", options: ["CPU", "Motherboard", "Sound Card", "Power Supply"], answer: 1, hint: "All other components plug into it." },
    { q: "Which of these is a valid IP address?", options: ["192.168.1.1", "256.0.0.1", "12.34.56", "www.google.com"], answer: 0, hint: "Values must be between 0 and 255." },
    { q: "What is 'Phishing'?", options: ["Fishing for data", "Speeding up CPU", "Deleting files", "A fraudulent attempt to get info"], answer: 3, hint: "Usually involves fake emails." },
    { q: "Which port is commonly used for video output?", options: ["USB-A", "HDMI", "Ethernet", "SATA"], answer: 1, hint: "High-Definition Multimedia Interface." },
    { q: "What does 'GUI' stand for?", options: ["Graphical User Interface", "Global Unit Integration", "General Utility Icon", "Gaming User Interface"], answer: 0, hint: "It lets you use a mouse to click icons." },
    { q: "Which part of a file path is '.docx'?", options: ["The Name", "The Directory", "The Extension", "The Protocol"], answer: 2, hint: "It tells the OS what kind of file it is." },
    { q: "What is 1024 Gigabytes equivalent to?", options: ["1 Megabyte", "1 Terabyte", "1 Petabyte", "1 Kilobyte"], answer: 1, hint: "TB." }
    ],
    "PHY101": [
    { q: "Which of the following is a scalar quantity?", options: ["Force", "Velocity", "Energy", "Acceleration"], answer: 2, hint: "It has magnitude but no specific direction." },
    { q: "What is the unit of luminous intensity?", options: ["Mole", "Candela", "Kelvin", "Ampere"], answer: 1, hint: "One of the seven SI base units." },
    { q: "The rate of change of momentum is equal to:", options: ["Work", "Impulse", "Force", "Power"], answer: 2, hint: "This is a statement of Newton's Second Law." },
    { q: "A body is in 'Stable Equilibrium' if its center of gravity:", options: ["Is at the highest point", "Is at the lowest point", "Is outside the body", "Is moving"], answer: 1, hint: "Think of a ball at the bottom of a bowl." },
    { q: "Which law states that the extension of a spring is proportional to the force applied?", options: ["Newton's Law", "Hooke's Law", "Pascal's Law", "Boyle's Law"], answer: 1, hint: "F = ke." },
    { q: "What is the dimension of Pressure?", options: ["[ML⁻¹T⁻²]", "[MLT⁻²]", "[ML²T⁻²]", "[ML⁻²T⁻²]"], answer: 0, hint: "Pressure = Force / Area." },
    { q: "The friction between two surfaces in relative motion is called:", options: ["Static friction", "Dynamic friction", "Limiting friction", "Rolling friction"], answer: 1, hint: "Also known as kinetic friction." },
    { q: "What is the escape velocity from the Earth's surface approximately?", options: ["7.2 km/s", "11.2 km/s", "9.8 km/s", "15.0 km/s"], answer: 1, hint: "The speed needed to break free from Earth's gravity." },
    { q: "Which of these is the unit of Viscosity?", options: ["Pascal", "Newton", "Poise", "Joule"], answer: 2, hint: "Named after a French physician." },
    { q: "Archimedes' Principle deals with:", options: ["Buoyancy", "Elasticity", "Surface Tension", "Viscosity"], answer: 0, hint: "Think of objects floating in water." },
    { q: "The temperature at which molecular motion ceases is:", options: ["0°C", "100°C", "273K", "0K"], answer: 3, hint: "This is Absolute Zero." },
    { q: "The heat required to change the state of a substance without temperature change is:", options: ["Specific heat", "Latent heat", "Heat capacity", "Molar heat"], answer: 1, hint: "It is 'hidden' heat." },
    { q: "Which gas law states that P1V1 = P2V2 at constant temperature?", options: ["Charles's Law", "Boyle's Law", "Pressure Law", "Avogadro's Law"], answer: 1, hint: "Pressure is inversely proportional to volume." },
    { q: "The process of heat transfer in fluids (liquids/gases) is called:", options: ["Conduction", "Convection", "Radiation", "Evaporation"], answer: 1, hint: "Involves the actual movement of particles." },
    { q: "What is the speed of light in a vacuum?", options: ["3 x 10^8 m/s", "3 x 10^6 m/s", "1.5 x 10^8 m/s", "3 x 10^10 m/s"], answer: 0, hint: "A universal physical constant." },
    { q: "A converging lens is also known as a:", options: ["Concave lens", "Convex lens", "Biconcave lens", "Plane lens"], answer: 1, hint: "It bulges outward in the middle." },
    { q: "The ratio of the speed of light in vacuum to the speed in a medium is:", options: ["Refractive Index", "Magnification", "Critical Angle", "Diffraction"], answer: 0, hint: "Symbolized by 'n'." },
    { q: "Sound waves are examples of:", options: ["Transverse waves", "Longitudinal waves", "Electromagnetic waves", "Matter waves"], answer: 1, hint: "They travel as compressions and rarefactions." },
    { q: "The human ear can typically hear frequencies between:", options: ["2Hz - 200Hz", "20Hz - 20,000Hz", "100Hz - 100kHz", "1Hz - 1MHz"], answer: 1, hint: "Known as the audible range." },
    { q: "What is the unit of Capacitance?", options: ["Ohm", "Farad", "Henry", "Tesla"], answer: 1, hint: "Named after Michael Faraday." },
    { q: "According to Ohm's Law, V is equal to:", options: ["I / R", "I + R", "I * R", "R / I"], answer: 2, hint: "Voltage = Current x Resistance." },
    { q: "A device that converts mechanical energy into electrical energy is a:", options: ["Motor", "Transformer", "Generator", "Capacitor"], answer: 2, hint: "Think of an alternator." },
    { q: "Which instrument measures current in a circuit?", options: ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"], answer: 1, hint: "It is connected in series." },
    { q: "The phenomenon where light ejects electrons from a metal surface is:", options: ["Compton effect", "Photoelectric effect", "Thermionic emission", "X-ray production"], answer: 1, hint: "Einstein won a Nobel prize for this." },
    { q: "What is the charge of an electron?", options: ["+1.6 x 10^-19 C", "-1.6 x 10^-19 C", "9.1 x 10^-31 C", "0 C"], answer: 1, hint: "It is a negative fundamental charge." },
    { q: "The time taken for half the atoms in a radioactive sample to decay is:", options: ["Mean life", "Decay constant", "Half-life", "Activity"], answer: 2, hint: "T 1/2." },
    { q: "Which subatomic particle has no electric charge?", options: ["Proton", "Electron", "Neutron", "Positron"], answer: 2, hint: "Found in the nucleus with protons." },
    { q: "The energy of a photon is given by the formula:", options: ["E = mc^2", "E = hf", "E = ½mv^2", "E = mgh"], answer: 1, hint: "Planck's constant times frequency." },
    { q: "Which mirror always forms a virtual, erect, and diminished image?", options: ["Concave", "Convex", "Plane", "Parabolic"], answer: 1, hint: "Used as side-view mirrors in cars." },
    { q: "Young's Modulus is the ratio of:", options: ["Stress to Strain", "Strain to Stress", "Force to Area", "Extension to Length"], answer: 0, hint: "Measures the stiffness of a solid material." },

        { q: "Which of these is a vector quantity?", options: ["Mass", "Temperature", "Displacement", "Time"], answer: 2, hint: "A vector has both magnitude and a specific direction." },
        { q: "If two vectors of 3N and 4N act perpendicularly, what is the resultant?", options: ["7N", "1N", "5N", "12N"], answer: 2, hint: "Use the Pythagorean theorem: √(3² + 4²)." },
        { q: "What is the formula for Newton's Second Law of Motion?", options: ["F = mv", "F = ma", "F = m/a", "F = ½mv²"], answer: 1, hint: "Force equals Mass times Acceleration." },
        { q: "In a Metre Bridge, what is the total length of the wire?", options: ["50cm", "100cm", "200cm", "10cm"], answer: 1, hint: "It's a 'Metre' bridge because the wire is exactly 100cm." }
    ],
    "MTH101": [
    { q: "If Set A = {1, 2, 3} and Set B = {3, 4, 5}, what is A ∩ B?", options: ["{1, 2, 3, 4, 5}", "{3}", "{1, 2, 4, 5}", "Ø"], answer: 1, hint: "The ∩ symbol stands for Intersection (common elements)." },
    { q: "The number of subsets in a set with 'n' elements is given by:", options: ["n²", "2n", "2ⁿ", "n!"], answer: 2, hint: "This is the formula for the Power Set." },
    { q: "Which of these represents a 'Null Set'?", options: ["{0}", "{Ø}", "Ø", "{ }"], answer: 2, hint: "A set with no elements at all." },
    { q: "If A ⊂ B, it means A is a ___ of B:", options: ["Superset", "Subset", "Intersection", "Complement"], answer: 1, hint: "Every element in A is also in B." },
    { q: "What is the complement of the Universal Set (U')?", options: ["U", "{0}", "Ø", "1"], answer: 2, hint: "Everything NOT in the Universal set is nothing." },
    { q: "In the polynomial ax² + bx + c, 'a' cannot be:", options: ["1", "0", "-1", "c"], answer: 1, hint: "If a = 0, it is no longer a quadratic equation." },
    { q: "What are the factors of x² - 9?", options: ["(x-3)(x-3)", "(x+3)(x+3)", "(x-9)(x+1)", "(x-3)(x+3)"], answer: 3, hint: "Use the 'Difference of Two Squares' rule." },
    { q: "The Remainder Theorem states that if f(x) is divided by (x - c), the remainder is:", options: ["f(0)", "f(c)", "f(-c)", "0"], answer: 1, hint: "Plug the value of 'c' directly into the function." },
    { q: "If a + bi = 3 + 4i, then 'a' and 'b' are:", options: ["a=4, b=3", "a=3, b=4", "a=7, b=0", "a=0, b=7"], answer: 1, hint: "Compare the real part to the real part and imaginary to imaginary." },
    { q: "What is the result of (2 + 3i) + (1 - 2i)?", options: ["3 + 5i", "3 + i", "1 + i", "3 - i"], answer: 1, hint: "Add real numbers together and 'i' numbers together." },
    { q: "The polar form of a complex number uses which two variables?", options: ["x and y", "r and θ", "a and b", "sin and cos"], answer: 1, hint: "Radius (modulus) and the Argument (angle)." },
    { q: "What is the value of i⁴?", options: ["i", "-i", "1", "-1"], answer: 2, hint: "i² is -1, and -1 times -1 is..." },
    { q: "In a Geometric Progression (GP), the ratio between terms is:", options: ["Common difference", "Common ratio", "Arithmetic mean", "Sum"], answer: 1, hint: "You multiply by this number to get the next term." },
    { q: "Find the 5th term of the sequence: 2, 4, 8, 16...", options: ["20", "24", "32", "64"], answer: 2, hint: "This is a GP where r = 2." },
    { q: "The sum of an infinite GP exists only if |r| is:", options: ["> 1", "= 1", "< 1", "0"], answer: 2, hint: "The common ratio must be a fraction between -1 and 1." },
    { q: "What is the common difference (d) in the AP: 10, 7, 4, 1...?", options: ["3", "-3", "1.5", "0"], answer: 1, hint: "Subtract the first term from the second (7 - 10)." },
    { q: "The sum of the first 'n' natural numbers is:", options: ["n²", "n(n+1)/2", "n(n-1)/2", "2n"], answer: 1, hint: "Try it for n=3 (1+2+3=6)." },
    { q: "Which trigonometric ratio is adjacent/hypotenuse?", options: ["Sine", "Cosine", "Tangent", "Cotangent"], answer: 1, hint: "Remember SOH CAH TOA." },
    { q: "tanθ is equal to:", options: ["cos/sin", "sin/cos", "1/cos", "1/sin"], answer: 1, hint: "It is the ratio of Sine to Cosine." },
    { q: "What is the value of sin(90°)?", options: ["0", "1", "0.5", "Undefined"], answer: 1, hint: "The maximum value of the sine wave." },
    { q: "In which quadrant are both sin and cos negative?", options: ["1st", "2nd", "3rd", "4th"], answer: 2, hint: "Remember the CAST rule." },
    { q: "secθ is the reciprocal of:", options: ["sinθ", "cosθ", "tanθ", "cosecθ"], answer: 1, hint: "Secant is 1 over Cosine." },
    { q: "A function where f(x) = f(-x) is called:", options: ["Odd function", "Even function", "Inverse function", "Linear function"], answer: 1, hint: "Think of x²; (-2)² is the same as 2²." },
    { q: "The domain of f(x) = 1/x is all real numbers except:", options: ["1", "-1", "0", "π"], answer: 2, hint: "You cannot divide by this number." },
    { q: "What is the slope (m) of the line y = 3x + 5?", options: ["5", "3", "3/5", "-3"], answer: 1, hint: "The coefficient of x in y = mx + c." },
    { q: "Two lines are perpendicular if the product of their slopes is:", options: ["1", "0", "-1", "Infinity"], answer: 2, hint: "m1 * m2 = -1." },
    { q: "Which of these is a unit of angular measurement?", options: ["Degree", "Radian", "Both", "Neither"], answer: 2, hint: "Scientists use both 360° and 2π." },
    { q: "What is the log₁₀(100)?", options: ["1", "2", "10", "100"], answer: 1, hint: "10 raised to what power equals 100?" },
    { q: "The 'Range' of a function is the set of all possible:", options: ["Inputs (x)", "Outputs (y)", "Constants", "Roots"], answer: 1, hint: "Domain is the input, Range is the output." },
    { q: "In a Venn Diagram, the rectangle represents:", options: ["The Subset", "The Union", "The Universal Set", "The Intersection"], answer: 2, hint: "It contains everything in the discussion." },

        { q: "In Mathematical Induction, what is the first step called?", options: ["The Logic Step", "The Basis Step", "The Final Step", "The Inductive Leap"], answer: 1, hint: "You must prove the statement is true for n = 1 first." },
        { q: "What is the value of i² in complex numbers?", options: ["1", "-1", "0", "√-1"], answer: 1, hint: "By definition, the square root of -1 squared is -1." },
        { q: "Which identity is equal to sin²θ + cos²θ?", options: ["0", "2", "tanθ", "1"], answer: 3, hint: "This is the most fundamental Pythagorean identity." },
        { q: "In ax² + bx + c = 0, what is the formula for the discriminant (D)?", options: ["b - 4ac", "b² + 4ac", "b² - 4ac", "√b² - 4ac"], answer: 2, hint: "It's the part inside the square root." }
    ],
    "GST111": [
    { q: "In the SQ3R study method, what does the first 'R' stand for?", options: ["Read", "Recite", "Review", "Recall"], answer: 0, hint: "You do this after you've turned headings into questions." },
    { q: "Which of these is a 'Primary' source of information?", options: ["Textbook", "Encyclopedia", "Original Research Paper", "Newspaper Summary"], answer: 2, hint: "It is firsthand evidence or direct results." },
    { q: "What is the main purpose of 'Scanning' a text?", options: ["General overview", "Finding a specific fact", "Critical analysis", "Memorization"], answer: 1, hint: "Like looking for a name in a phonebook." },
    { q: "A 'Bibliography' usually appears in which part of a report?", options: ["The Front", "The Middle", "The Back", "The Title Page"], answer: 2, hint: "It's part of the end-matter." },
    { q: "Which library system uses letters A-Z to classify subjects?", options: ["Dewey Decimal", "Library of Congress", "Universal Decimal", "Oxford System"], answer: 1, hint: "Widely used in university libraries." },
    { q: "What is 'Plagiarism'?", options: ["Writing too fast", "Using someone's work without credit", "Buying used books", "Losing library cards"], answer: 1, hint: "It is a form of academic theft." },
    { q: "In communication, 'Noise' refers to:", options: ["Only loud sounds", "Any interference in the message", "Speaking too softly", "Radio signals"], answer: 1, hint: "It can be physical, mental, or technical." },
    { q: "Which note-taking method uses a 'Cue Column' on the left?", options: ["The Mapping Method", "The Cornell Method", "The Sentence Method", "The Charting Method"], answer: 1, hint: "Named after a famous Ivy League university." },

        { q: "Which of these is the 'Receiver's' response to a message?", options: ["Encoding", "Decoding", "Feedback", "Channel"], answer: 2, hint: "It tells the sender if the message was understood." },
        { q: "What is the primary goal of a Physiotherapist?", options: ["Surgery", "Prescribing Drugs", "Restoring Movement", "Nursing Care"], answer: 2, hint: "Think about 'Physical' therapy and rehabilitation." },
        { q: "What is the standard 'Anatomical Position'?", options: ["Sitting", "Lying face down", "Standing upright, palms forward", "Running"], answer: 2, hint: "It's the universal reference position for medical study." },
        { q: "Empathy in a clinical setting means:", options: ["Feeling sorry for the patient", "Understanding the patient's perspective", "Ignoring the patient", "Curing the patient instantly"], answer: 1, hint: "It's about understanding their feelings and situation." }
    ],
    "BIO101": [
    { q: "What is the 'powerhouse' of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], answer: 2, hint: "Where cellular respiration produces ATP." },
    { q: "Which organelle is responsible for protein synthesis?", options: ["Lysosome", "Ribosome", "Vacuole", "Mitochondria"], answer: 1, hint: "They can be found on the rough ER." },
    { q: "What is the primary function of DNA?", options: ["Energy production", "Storing genetic information", "Digesting food", "Structural support"], answer: 1, hint: "The 'source code' of a living organism." },
    { q: "In which part of the cell is the DNA primarily found?", options: ["Cytoplasm", "Ribosome", "Nucleus", "Cell membrane"], answer: 2, hint: "The control center of the cell." },
    { q: "Which of these is NOT found in animal cells?", options: ["Cell wall", "Mitochondria", "Nucleus", "Ribosomes"], answer: 0, hint: "Plants have this for rigidity, animals don't." },
    { q: "What is the process by which a cell divides into two identical daughter cells?", options: ["Meiosis", "Mitosis", "Fertilization", "Osmosis"], answer: 1, hint: "Standard cell replication." },
    { q: "Which molecule provides the energy for most cellular processes?", options: ["DNA", "ATP", "Glucose", "RNA"], answer: 1, hint: "Adenosine Triphosphate." },
    { q: "What is the movement of water across a semi-permeable membrane called?", options: ["Diffusion", "Osmosis", "Active transport", "Endocytosis"], answer: 1, hint: "Passive movement of water." },
    { q: "Which structure controls what enters and leaves the cell?", options: ["Cell wall", "Cell membrane", "Cytoskeleton", "Nucleus"], answer: 1, hint: "The phospholipid bilayer." },
    { q: "What is the role of an enzyme?", options: ["Store energy", "Catalyze reactions", "Build cell walls", "Transport oxygen"], answer: 1, hint: "They speed up chemical processes." },
    { q: "What is the basic unit of life?", options: ["Atom", "Tissue", "Cell", "Organ"], answer: 2, hint: "The fundamental building block." },
    { q: "Which process uses light to produce glucose in plants?", options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"], answer: 1, hint: "The chloroplast is the site of this." },
    { q: "Where does photosynthesis occur in a plant cell?", options: ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"], answer: 1, hint: "Contains chlorophyll." },
    { q: "How many chromosomes are in a normal human somatic cell?", options: ["23", "46", "48", "24"], answer: 1, hint: "23 pairs." },
    { q: "What type of reproduction results in genetically identical offspring?", options: ["Sexual", "Asexual", "Fertilization", "Cross-pollination"], answer: 1, hint: "No genetic recombination." },
    { q: "What is the shape of a DNA molecule?", options: ["Single helix", "Double helix", "Sphere", "Rectangle"], answer: 1, hint: "Watson and Crick." },
    { q: "Which of the following is a prokaryotic cell?", options: ["Human cell", "Bacteria", "Plant cell", "Fungal cell"], answer: 1, hint: "They lack a defined nucleus." },
    { q: "What is the function of the vacuole in plant cells?", options: ["Photosynthesis", "Storage of water/nutrients", "DNA replication", "Protein synthesis"], answer: 1, hint: "Keeps the plant turgid." },
    { q: "Which process creates gametes (sperm and egg) with half the chromosome count?", options: ["Mitosis", "Meiosis", "Binary fission", "Budding"], answer: 1, hint: "Used for sexual reproduction." },
    { q: "What are the four bases in DNA?", options: ["A, T, C, G", "A, U, C, G", "A, T, C, U", "A, B, C, D"], answer: 0, hint: "Adenine, Thymine, Cytosine, Guanine." },
    { q: "Which organelle modifies and packages proteins?", options: ["Golgi apparatus", "Ribosome", "Nucleus", "Mitochondria"], answer: 0, hint: "The 'Post Office' of the cell." },
    { q: "What is the term for a group of similar cells working together?", options: ["Organ", "System", "Tissue", "Organism"], answer: 2, hint: "Level of organization above a cell." },
    { q: "What does an 'autotroph' do?", options: ["Eats other organisms", "Produces its own food", "Decomposes waste", "Lives as a parasite"], answer: 1, hint: "Usually via photosynthesis." },
    { q: "Which component of blood is responsible for fighting infections?", options: ["Red blood cells", "Platelets", "White blood cells", "Plasma"], answer: 2, hint: "Part of the immune system." },
    { q: "What is the main purpose of mitosis in multicellular organisms?", options: ["Growth and repair", "Creating gametes", "Digestion", "Protein production"], answer: 0, hint: "Replacing old cells." },
    { q: "What is the genetic makeup of an organism called?", options: ["Phenotype", "Genotype", "Allele", "Mutation"], answer: 1, hint: "The internal 'code'." },
    { q: "What is the physical expression of a gene called?", options: ["Genotype", "Phenotype", "Dominant", "Recessive"], answer: 1, hint: "What you actually see." },
    { q: "Which organ in the human body filters the blood?", options: ["Heart", "Liver", "Kidney", "Stomach"], answer: 2, hint: "Produces urine." },
    { q: "What is the process of breaking down food into nutrients?", options: ["Respiration", "Digestion", "Circulation", "Excretion"], answer: 1, hint: "Occurs in the gastrointestinal tract." },
    { q: "Which gas is released as a byproduct of photosynthesis?", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], answer: 1, hint: "We need this to breathe." }
]
};

// --- 2. LOGIC SECTION ---
let currentCourseQuestions = [];
let index = 0;
let score = 0;
let selectedCourseName = "";

// Sidebar Menu Toggle
function toggleNav() {
    const nav = document.getElementById("side-nav");
    nav.classList.toggle("open");
}

// Name Update Logic
function changeName() {
    let newName = prompt("Enter your name:");
    if (newName) {
        document.getElementById('nav-user-name').innerText = newName;
        alert("Name updated to: " + newName);
    }
}

// Theme Change Logic (Debugged)
function setTheme(themeName) {
    if (themeName === 'dark') {
        document.body.style.backgroundColor = '#1a1a1b';
        document.body.style.color = 'white';
    } else if (themeName === 'study') {
        document.body.style.backgroundColor = '#fdf6e3';
        document.body.style.color = '#333';
    } else {
        document.body.style.backgroundColor = '#f0f2f5';
        document.body.style.color = 'black';
    }
    toggleNav(); // Close menu after selecting
}

// Start Quiz
function selectCourse(courseKey) {
    if (!courseData[courseKey]) {
        alert("Course not found!");
        return;
    }
    currentCourseQuestions = [...courseData[courseKey]]; 
    selectedCourseName = courseKey;
    
    // Shuffle questions
    currentCourseQuestions.sort(() => Math.random() - 0.5);
    
    document.getElementById('start-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result-container').classList.add('hidden');
    
    index = 0;
    score = 0;
    document.getElementById('score-display').innerText = score;
    loadQuestion();
}

// Load Question Data
function loadQuestion() {
    const current = currentCourseQuestions[index];
    const grid = document.getElementById('answer-grid');
    const hintText = document.getElementById('hint-text');

    document.getElementById('question-number').innerText = `${selectedCourseName} - Question ${index + 1}/${currentCourseQuestions.length}`;
    document.getElementById('question-text').innerText = current.q;
    
    if (hintText) {
        hintText.classList.add('hidden');
        hintText.innerText = current.hint || "Think carefully!";
    }

    grid.innerHTML = '';
    current.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(i);
        grid.appendChild(btn);
    });
}

// Verify Answer
function checkAnswer(selected) {
    if (selected === currentCourseQuestions[index].answer) {
        score++;
        document.getElementById('score-display').innerText = score;
    }
    index++;
    if (index < currentCourseQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Toggle Hint
function showHint() {
    const hint = document.getElementById('hint-text');
    if (hint) hint.classList.toggle('hidden');
}

// End Screen
function showResults() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    const percentage = Math.round((score / currentCourseQuestions.length) * 100);
    document.getElementById('final-score').innerText = `You scored ${score}/${currentCourseQuestions.length} (${percentage}%)`;
}

// Main Menu Return
function returnToMenu() {
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('start-container').classList.remove('hidden');
    
    index = 0;
    score = 0;
    document.getElementById('score-display').innerText = "0";
}
function setTheme(t) {
    document.body.className = t + "-theme";
    
    // Optional: Log it for debugging
    console.log("Theme changed to: " + t);
    
    // Close the menu automatically after selecting a theme
    toggleNav();
}
function setTheme(t) {
    // This adds the class "dark-theme" to the <body>
    document.body.className = t + "-theme"; 
    
    // Save the preference so it remembers next time
    localStorage.setItem('theme', t);
    
    toggleNav();
}
function goNext() {
    // 1. Increase the index
    if (index < currentCourseQuestions.length - 1) {
        index++;
        loadQuestion(); // This refreshes the text and updates the buttons
    }
}

function goBack() {
    // 1. Decrease the index
    if (index > 0) {
        index--;
        loadQuestion(); // This refreshes the text and updates the buttons
    }
}

// IMPORTANT: Ensure your loadQuestion function looks like this 
// to automatically enable/disable the buttons:
function loadQuestion() {
    // 1. Get the current question data
    const current = currentCourseQuestions[index];
    
    // 2. Set the Question Text
    document.getElementById('question-text').innerText = current.q;
    document.getElementById('question-number').innerText = `Question ${index + 1}/${currentCourseQuestions.length}`;

    // 3. Clear ONLY the answer area, not the whole container
    const answerGrid = document.getElementById('answer-grid');
    answerGrid.innerHTML = ""; 

    // 4. Create the option buttons
    current.options.forEach((option, i) => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.className = "main-btn"; // Keeps your styling consistent
        btn.onclick = () => checkAnswer(i);
        answerGrid.appendChild(btn);
    });

    // 5. Update Navigation Button States
    // This is the "Engine" that locks the buttons at start/end
    const backBtn = document.getElementById('back-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (backBtn) backBtn.disabled = (index === 0);
    if (nextBtn) nextBtn.disabled = (index === currentCourseQuestions.length - 1);
}

