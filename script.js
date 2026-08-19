const educationData = [
  {
    degree: "Bachelor of Science (B.Sc) in Software Engineering",
    institution: "Daffodil International University",
    duration: "January 2022 - December 2025",
    cgpa: "3.25",
    project: "Shadcn-Dashboard-Starter Dashboard UI with features based folder structure",
  },
];

const experienceData = [
  {
    title: "Chief Technology Officer (CTO)",
    company: "Gadgetaloy",
    duration: "April 2025 - December 2025",
    responsibilities: [
      "Managed technical operations of the website and digital platforms.",
      "Architected Inventory Grid backbone to the business system.",
      "Responsible for software development, support and system maintenance.",
    ],
  },
  {
    title: "Intern",
    company: "FN Software & Institute",
    duration: "August 2020 - December 2021",
    responsibilities: [
      "Translated UI mockups (Figma/PSD) into pixel-perfect and cross-browser compatible web pages.",
      "Handled minor backend tasks and collaborated with the team to optimize web performance.",
    ],
    certificate: "https://drive.google.com/file/d/172okFcIuAEl2KrM_jrtnUSGiUnzVjR2J/view?usp=sharing",
  },
];

const projects = [
  {
    title: "Shadcn Dashboard Starter",
    category: "web-dev",
    icon: "🚀",
    description: "Production-ready dashboard UI built with Next.js 16, Shadcn UI, TypeScript and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Shadcn"],
    github: "https://github.com/iamSayeduzzman/shadcn-dashboard-starter-react-typescript-python-html-css-js-dockerfile.git",
  },
  {
    title: "E-Commerce Platform",
    category: "web-dev",
    icon: "🛒",
    description: "Full-stack e-commerce platform using Payload CMS and Next.js with complete backend support.",
    tags: ["Payload CMS", "Next.js", "TypeScript"],
    github: "https://github.com/iamSayeduzzman/e-commerce.git",
  },
  {
    title: "Attendance Management System",
    category: "web-dev",
    icon: "📊",
    description: "Laravel based employee attendance and time tracking management system.",
    tags: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/iamSayeduzzman/attendance-managegent-system.git",
  },
  {
    title: "Admin Dashboard Template",
    category: "web-design",
    icon: "📈",
    description: "React + DaisyUI admin dashboard template with Redux Toolkit and Tailwind CSS.",
    tags: ["React", "Redux", "Tailwind"],
    github: "https://github.com/iamSayeduzzman/admin-dashboard-template-react-typescript.git",
  },
  {
    title: "Support Palestine JS",
    category: "app-dev",
    icon: "🇵🇸",
    description: "Simple JavaScript banner package for websites supporting Palestine.",
    tags: ["JavaScript", "Open Source"],
    github: "https://github.com/iamSayeduzzman/support-palestine-js.git",
  },
];

const certificates = [
  {
    org: "OSTAD",
    title: "Full Stack Web Development with PHP, Laravel & Vue.js",
    date: "2024",
    icon: "🏆",
    link: "https://drive.google.com/file/d/1aSy3L-bF4LMXUA3vR83gJpElbyNo2R5b/view?usp=sharing",
  },
  {
    org: "Canva Design School",
    title: "Graphic Design Essentials",
    date: "2024",
    icon: "🎨",
    link: "https://drive.google.com/file/d/12aZfGC-mHiQ1T05X78bvYu-fVDKrVJ0i/view?usp=sharing",
  },
  {
    org: "HP LIFE",
    title: "Agile Project Management",
    date: "2024",
    icon: "📋",
    link: "https://drive.google.com/file/d/1lTNZWpI9Ag1yT1XO7kIFUNalhKtCePzv/view?usp=sharing",
  },
  {
    org: "GoEdu.ac",
    title: "Optimization Using Artificial Intelligence",
    date: "2024",
    icon: "🤖",
    link: "https://drive.google.com/file/d/1ALqsWWjU90WL_iCCik2M9bkPgZSufFyu/view?usp=sharing",
  },
  {
    org: "The Open University",
    title: "Network Security",
    date: "2024",
    icon: "🔐",
    link: "https://drive.google.com/file/d/1x5_eSC--_cwAe_aKzNjeINMTCdj9ssgI/view?usp=sharing",
  },
];
const frontendSkills = [
  { name: "HTML5", pct: 95 },
  { name: "CSS3", pct: 92 },
  { name: "JavaScript", pct: 90 },
  { name: "React", pct: 90 },
  { name: "Next.js", pct: 88 },
  { name: "Vue.js", pct: 82 },
  { name: "Tailwind CSS", pct: 92 },
  { name: "Bootstrap", pct: 88 },
];

const backendSkills = [
  { name: "PHP", pct: 90 },
  { name: "Laravel", pct: 88 },
  { name: "Express.js", pct: 85 },
  { name: "Python", pct: 80 },
  { name: "Java", pct: 75 },
  { name: "REST API", pct: 90 },
];

const databaseSkills = [
  { name: "MySQL", pct: 88 },
];

const toolsSkills = [
  { name: "Git", pct: 92 },
  { name: "GitHub", pct: 92 },
  { name: "Postman", pct: 90 },
  { name: "Vercel", pct: 85 },
  { name: "Netlify", pct: 85 },
  { name: "VS Code", pct: 95 },
];

const roles = [
  "Full Stack Developer",
  "Software Engineer",
  "React Developer",
  "Next.js Developer",
  "Laravel Developer",
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
  if (!typewriter) return; // Prevent error if element is missing
  
  const current = roles[roleIndex];

  if (!deleting) {
    typewriter.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typewriter.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

// --- RENDERING FUNCTIONS (HTML STRUCTURE FIXED) ---

function createSkillBar(skill) {
  return `
    <div class="skill-bar-wrap">
      <div class="skill-bar-header">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-pct">${skill.pct}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-fill" style="width:${skill.pct}%"></div>
      </div>
    </div>
  `;
}

function renderSkills() {
  document.getElementById("frontendBars").innerHTML = frontendSkills.map(createSkillBar).join("");
  document.getElementById("backendBars").innerHTML = backendSkills.map(createSkillBar).join("");
  document.getElementById("databaseBars").innerHTML = databaseSkills.map(createSkillBar).join("");
  document.getElementById("toolsBars").innerHTML = toolsSkills.map(createSkillBar).join("");
}

function renderProjects(filter = "all") {
  const grid = document.getElementById("projectsGrid");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  grid.innerHTML = filtered.map((project) => `
    <article class="project-card" style="background: rgba(255,255,255,0.04); padding: 20px; border-radius: 15px; margin-bottom: 20px;">
      <div style="font-size: 2rem;">${project.icon}</div>
      <div style="color: var(--clr-cyan); margin-bottom: 10px; font-size: 0.8rem; text-transform: uppercase;">${project.category}</div>
      <div class="project-content">
        <h3 class="project-title" style="margin-bottom: 10px;">${project.title}</h3>
        <p class="project-desc" style="margin-bottom: 15px; color: #aaa;">${project.description}</p>
        <div class="project-tags" style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 15px;">
          ${project.tags.map((tag) => `<span class="tag" style="background: rgba(255,255,255,0.1); padding: 5px 10px; border-radius: 5px; font-size: 0.8rem;">${tag}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="${project.github}" target="_blank" class="project-link primary-link" style="color: #00d4ff; text-decoration: none;">GitHub ➔</a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCertificates() {
  const grid = document.getElementById("certsGrid");

  grid.innerHTML = certificates.map((cert) => `
    <article class="cert-card" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; overflow: hidden;">
      <div class="cert-thumb" style="height: 180px; display: flex; align-items: center; justify-content: center; font-size: 4rem; background: linear-gradient(135deg, rgba(124,58,237,0.25), rgba(0,212,255,0.15));">
        ${cert.icon}
      </div>
      <div class="cert-info" style="padding: 1.5rem;">
        <p class="cert-org" style="color: #00d4ff; font-size: 0.75rem; text-transform: uppercase; margin-bottom: 0.75rem;">${cert.org}</p>
        <h3 class="cert-title" style="margin-bottom: 1rem;">${cert.title}</h3>
        <a href="${cert.link}" target="_blank" class="cert-btn" style="display: inline-block; padding: 0.5rem 1rem; background: #00d4ff; color: #000; border-radius: 20px; text-decoration: none; font-weight: bold;">View Certificate</a>
      </div>
    </article>
  `).join("");
}

function renderExperience() {
  const timeline = document.getElementById("experienceTimeline");

  timeline.innerHTML = experienceData.map((job) => `
    <div class="timeline-item" style="margin-bottom: 30px; padding: 20px; background: rgba(255,255,255,0.02); border-left: 3px solid #00d4ff;">
      <h3 style="color: #fff;">${job.title}</h3>
      <h4 style="color: #00d4ff; margin: 5px 0;">${job.company}</h4>
      <p style="color: #aaa; font-size: 0.9rem;">${job.duration}</p>
      <ul style="margin-top: 15px; padding-left: 20px; color: #ccc;">
        ${job.responsibilities.map((item) => `<li style="margin-bottom: 8px;">${item}</li>`).join("")}
      </ul>
      ${job.certificate ? `<a href="${job.certificate}" target="_blank" style="display: inline-block; margin-top: 15px; color: #00d4ff; text-decoration: none;">View Internship Certificate ➔</a>` : ""}
    </div>
  `).join("");
}

function renderEducation() {
  const educationGrid = document.getElementById("educationGrid");

  educationGrid.innerHTML = educationData.map((edu) => `
    <div class="edu-card" style="display: flex; flex-direction: column; gap: 10px; padding: 30px; background: rgba(230, 126, 34, 0.96); border: 1px solid #00d4ff; border-radius: 20px; width: 100%; max-width: 750px; margin: 0 auto; box-shadow: 0 10px 30px rgba(230, 126, 34, 0.2);">
      
      <h3 style="color: #ffffff; font-size: 1.6rem; margin: 0;">${edu.degree}</h3>
      
      <h4 style="color: #000000; font-size: 1.2rem; margin: 0;">${edu.institution}</h4>
      
      <div style="display: inline-block; background: rgba(255, 255, 255, 0.2); color: #ffffff; padding: 6px 15px; border-radius: 20px; font-size: 0.9rem; width: fit-content; margin: 5px 0;">
        📅 ${edu.duration}
      </div>
      
      <p style="margin: 5px 0 0 0; color: #000000; font-size: 1.1rem;">
        <strong>CGPA:</strong> <span style="color: #ffffff; font-weight: bold;">${edu.cgpa}</span>
      </p>
      
      <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.3);">
        <strong style="color: #ffffff; display: block; margin-bottom: 8px; font-size: 1.1rem;">Final Year Project:</strong>
        <p style="margin: 0; color: #000000; line-height: 1.6; font-size: 1rem;">${edu.project}</p>
      </div>

    </div>
  `).join("");
}
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

// Initialize all sections
renderProjects();
renderSkills();
renderCertificates();
renderExperience();
renderEducation();
// Navbar Scroll Effect
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// --- THEME TOGGLE (DARK/LIGHT MODE) ---
const themeToggle = document.getElementById("themeToggle");
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");

// Check local storage for saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  sunIcon.style.display = "block";
  moonIcon.style.display = "none";
}

themeToggle.addEventListener("click", () => {
  let currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme = "light";

  if (currentTheme === "light") {
    // Switch to Dark
    targetTheme = "dark";
    document.documentElement.removeAttribute("data-theme");
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  } else {
    // Switch to Light
    document.documentElement.setAttribute("data-theme", "light");
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }

  // Save preference
  localStorage.setItem("theme", targetTheme);
});
