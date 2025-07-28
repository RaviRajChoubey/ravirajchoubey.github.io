# ravirajchoubey.github.io
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Ravi Raj Choubey | Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #005f99;
      --accent: #00b4d8;
      --bg-light: #f4f7fc;
      --text-dark: #1a1a1a;
      --text-light: #ffffff;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-light);
      color: var(--text-dark);
      line-height: 1.6;
    }

    header {
      background: linear-gradient(to right, #003366, #005f99);
      color: white;
      padding: 4rem 1rem 3rem;
      text-align: center;
    }

    header h1 {
      font-size: 2.8rem;
      margin-bottom: 0.5rem;
    }

    header p {
      font-size: 1.2rem;
      color: #e0f0ff;
    }

    nav {
      margin-top: 1.5rem;
    }

    nav a {
      color: #aee1ff;
      text-decoration: none;
      margin: 0 1rem;
      font-weight: 600;
      transition: 0.3s;
    }

    nav a:hover {
      color: #ffffff;
      border-bottom: 2px solid #ffffff;
    }

    section {
      max-width: 1100px;
      margin: 3rem auto;
      padding: 0 1rem;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 1.2rem;
      color: var(--primary);
      border-left: 5px solid var(--accent);
      padding-left: 10px;
    }

    .card {
      background: #ffffff;
      border-radius: 10px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .skills-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }

    ul {
      list-style: none;
      padding-left: 0;
    }

    ul li {
      margin-bottom: 0.8rem;
      background: #e6f0ff;
      padding: 0.8rem;
      border-radius: 6px;
    }

    .contact-info p, .contact-info a {
      margin-bottom: 0.5rem;
    }

    .btn {
      display: inline-block;
      background: var(--accent);
      color: white;
      padding: 0.6rem 1.2rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      transition: background 0.3s ease;
    }

    .btn:hover {
      background: #0096c7;
    }

    footer {
      background: var(--primary);
      color: white;
      text-align: center;
      padding: 1rem;
      margin-top: 3rem;
    }

    a {
      color: var(--primary);
    }

    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <header>
    <h1>Ravi Raj Choubey</h1>
    <p>Data Science Undergraduate | Full Stack Developer | Problem Solver</p>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="about">
    <h2>About Me</h2>
    <div class="card">
      <p>
        I’m an enthusiastic Data Science undergraduate at VIT Chennai, passionate about full-stack development, data analysis, and competitive programming. As Marketing Head of the MMC Club, I bring leadership, creativity, and communication to every initiative I lead.
      </p>
    </div>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <div class="card">
      <h3>MediConnect – Online Appointment System</h3>
      <p>Built a doctor-patient scheduling platform with secure routing, real-time booking, and a responsive UI.</p>
      <p><strong>Tech Stack:</strong> React, Node.js, MongoDB, Express</p>
    </div>
    <div class="card">
      <h3>Market Basket Analysis</h3>
      <p>Used Apriori algorithm on retail data to derive product associations and support business decisions.</p>
      <p><strong>Tech Stack:</strong> Python, Pandas, mlxtend, Jupyter</p>
    </div>
    <div class="card">
      <h3>DSA Visualizer</h3>
      <p>Developed a Tkinter-based tool to animate and explain sorting algorithms step-by-step.</p>
      <p><strong>Tech Stack:</strong> Python, Tkinter</p>
    </div>
  </section>

  <section id="skills">
    <h2>Skills</h2>
    <div class="skills-container">
      <div class="card"><strong>Languages:</strong><br> Python, C++, Java, JavaScript</div>
      <div class="card"><strong>Web:</strong><br> React, Node.js, Bootstrap, HTML, CSS</div>
      <div class="card"><strong>Databases:</strong><br> MySQL, MongoDB</div>
      <div class="card"><strong>Tools:</strong><br> Git, Jupyter, VS Code, Pandas, NumPy</div>
      <div class="card"><strong>Core:</strong><br> DSA, OOP, OS, DBMS, CN</div>
    </div>
  </section>

  <section id="education">
    <h2>Education</h2>
    <div class="card">
      <ul>
        <li><strong>B.Tech in Data Science</strong> – VIT Chennai (2023–2027)</li>
        <li><strong>Class 12 (Science)</strong> – Sunbeam Academy, Varanasi (2022)</li>
      </ul>
    </div>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <div class="card contact-info">
      <p><strong>Email:</strong> <a href="mailto:raviraj.choubey2023@vitstudent.ac.in">raviraj.choubey2023@vitstudent.ac.in</a></p>
      <p><strong>Phone:</strong> +91 8707073894</p>
      <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/ravi-raj-choubey-b458a628b" target="_blank">linkedin.com/in/ravi-raj-choubey</a></p>
      <br>
      <a href="#" class="btn">Download Resume</a>
    </div>
  </section>

  <footer>
    <p>© 2025 Ravi Raj Choubey. All rights reserved.</p>
  </footer>
</body>
</html>
