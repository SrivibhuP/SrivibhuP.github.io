const projects = {
  watch: {
    title: "W.A.T.C.H.",
    kicker: "Health Tech / Wearable",
    role: "Wearable Assessment for Tracking Cardiac Health",
    image: "assets/project-images/p02-02-Image4.jpg",
    alt: "W.A.T.C.H electronics and sensor prototype",
    summary: "A cost-effective wearable concept for early heart-failure screening through non-invasive lactate detection in sweat.",
    stats: [
      ["Non-invasive", "sweat lactate sensing"],
      ["Wearable", "wrist-mounted form"],
      ["Early signal", "cardiac health screening"]
    ],
    details: [
      "The goal is to catch cardiac risk earlier, before acute events. By reading lactate biomarkers through perspiration, the device avoids blood draws and hospital-only equipment.",
      "My work focuses on enclosure design, electronics integration, sensor placement, and prototype housings that can survive daily use while maintaining skin contact."
    ]
  },
  hexaer: {
    title: "HexAer",
    kicker: "Startup / Environmental Hardware",
    role: "Co-Founder & CEO",
    image: "assets/project-images/p03-03-Image9.jpg",
    alt: "Physical HexAer prototype mounted on a cart",
    summary: "A self-sustainable outdoor air-filtration system for hyper-local pollution, designed so municipalities can deploy cleaner air at the block level.",
    stats: [
      ["43", "team members"],
      ["Top 250", "Blue Ocean recognition"],
      ["LOIs", "municipal pilot partners"]
    ],
    details: [
      "HexAer uses a compact hexagonal architecture, active airflow, and replaceable activated-carbon filtration to target outdoor pollution where AQI spikes hit communities first.",
      "Beyond R&D, I run financial planning and lead engineering, outreach, and operations. The team has pursued pilot work with towns including Sharon and Foxborough."
    ]
  },
  vulcan: {
    title: "Vulcan Drone",
    kicker: "Aerospace / UAV",
    role: "Foldable fixed-wing UAV",
    image: "assets/project-images/p04-01-Image10.jpg",
    alt: "Vulcan custom flight-controller PCB layout",
    summary: "A field-deployable unmanned aircraft that folds toward suitcase size while targeting a one-meter wingspan and four-kilogram payload.",
    stats: [
      ["1 m", "deployed wingspan"],
      ["4 kg", "payload target"],
      ["Custom PCB", "flight-control layout"]
    ],
    details: [
      "The core design problem is portability without sacrificing lift. The hinge and spar architecture lets the wing fold along the fuselage while locking rigidly for flight.",
      "The airframe is paired with a custom controller concept using ESP8266-class processing, MPU6050 inertial sensing, and distributed motor-driver planning."
    ]
  },
  atlas: {
    title: "Atlas Rocket",
    kicker: "Aerospace / Club Founder",
    role: "Founder - Bald Eagle Rocketry",
    image: "assets/project-images/p05-01-Image11.jpg",
    alt: "Atlas autonomous rocket CAD render",
    summary: "An autonomous rocket platform developed through Sharon High School Bald Eagle Rocketry, built to connect CAD, avionics, recovery, and launch operations.",
    stats: [
      ["Founder", "SHS rocketry club"],
      ["Atlas", "autonomous platform"],
      ["CAD to launch", "end-to-end pipeline"]
    ],
    details: [
      "I founded the club to give students a hands-on aerospace path from design to launch pad, including OpenRocket, Onshape, fabrication, and safety-first launch procedures.",
      "Atlas pushes beyond kit rocketry with guidance, recovery, and telemetry goals so each flight produces usable engineering data."
    ]
  },
  ftc: {
    title: "FTC Robotics",
    kicker: "Competition Robotics / CAD Lead",
    role: "Team Unlimited - Decode season",
    image: "assets/project-images/p06-01-Image14.jpg",
    alt: "FTC robot CAD assembly",
    summary: "Mechanical and CAD leadership for a six-student FTC team building a competition robot around drivetrain, intake, vision, and serviceable packaging.",
    stats: [
      ["Mecanum", "omnidirectional drive"],
      ["Limelight", "vision targeting"],
      ["Road Runner", "motion profiling"]
    ],
    details: [
      "I own full-machine layout in Onshape and Inventor, including intake, shooter, odometry, and structure around REV control hubs.",
      "The design priority is serviceability under competition pressure, where fast repairs and clear subsystem access matter as much as performance."
    ]
  },
  frc: {
    title: "FRC 2024 - Hydra",
    kicker: "FRC / Alarm Robotics",
    role: "Mechanical Subteam - 2024 Crescendo",
    image: "assets/project-images/p07-01-Image17.jpg",
    alt: "FRC 2024 Hydra robot CAD",
    summary: "Mechanical contribution to Hydra, a worlds-qualifying robot for the 2024 FRC Crescendo season.",
    stats: [
      ["Worlds", "2024 qualifier"],
      ["Hydra", "Crescendo robot"],
      ["30+", "team members"]
    ],
    details: [
      "FRC taught me how to ship under weight budgets, chain and belt tolerances, and eight-week build-season deadlines.",
      "My work spanned subsystem design, fabrication, assembly, and iteration for high-throughput game-piece handling."
    ]
  },
  frc2025: {
    title: "FRC 2025",
    kicker: "FRC / Advanced Mechanisms",
    role: "Mechanical systems development",
    image: "assets/project-images/p08-01-Image18.jpg",
    alt: "FRC 2025 robot CAD assembly",
    summary: "Full-machine robotics development across drivetrain packaging, multi-stage lifts, intake geometry, and integrated sensing.",
    stats: [
      ["Swerve", "drive planning"],
      ["Lifts", "multi-stage mechanisms"],
      ["CAD", "full-machine assemblies"]
    ],
    details: [
      "The 2025 robot work builds on Hydra with more complex packaging, elevator architecture, and sensing integration.",
      "The design process emphasizes manufacturable CAD, field durability, and quick iteration during a short build cycle."
    ]
  },
};

const modal = document.querySelector("#project-modal");
const modalImage = document.querySelector("#modal-image");
const modalKicker = document.querySelector("#modal-kicker");
const modalTitle = document.querySelector("#modal-title");
const modalRole = document.querySelector("#modal-role");
const modalSummary = document.querySelector("#modal-summary");
const modalStats = document.querySelector("#modal-stats");
const modalDetails = document.querySelector("#modal-details");
const closeButton = document.querySelector("[data-close]");

function renderProject(project) {
  modalImage.src = project.image;
  modalImage.alt = project.alt;
  modalKicker.textContent = project.kicker;
  modalTitle.textContent = project.title;
  modalRole.textContent = project.role;
  modalSummary.textContent = project.summary;
  modalStats.innerHTML = project.stats
    .map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`)
    .join("");
  modalDetails.innerHTML = project.details.map((detail) => `<p>${detail}</p>`).join("");
}

document.querySelectorAll(".project-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.project];
    if (!project) return;
    renderProject(project);
    openModal();
  });
});

function openModal() {
  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
  document.body.classList.add("modal-open");
}

function closeModal() {
  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }
  document.body.classList.remove("modal-open");
}

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.open) {
    closeModal();
  }
});
