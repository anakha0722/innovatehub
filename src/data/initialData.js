// Mock Data for InnovateHub — SDG 9 Innovation Platform

export const SDG9_TARGETS = [
  {
    code: "9.1",
    title: "Resilient Infrastructure",
    description: "Develop quality, reliable, sustainable and resilient infrastructure to support economic development and human well-being.",
    icon: "Building2",
    color: "from-blue-600 to-cyan-600"
  },
  {
    code: "9.2",
    title: "Inclusive & Sustainable Industrialization",
    description: "Promote inclusive and sustainable industrialization and significantly raise industry's share of employment and GDP.",
    icon: "Factory",
    color: "from-amber-600 to-orange-600"
  },
  {
    code: "9.4",
    title: "Clean Industrial Retrofitting",
    description: "Upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and clean technologies.",
    icon: "Leaf",
    color: "from-emerald-600 to-teal-600"
  },
  {
    code: "9.5",
    title: "Scientific Research & Innovation",
    description: "Enhance scientific research, upgrade technological capabilities of industrial sectors and encourage innovation.",
    icon: "Cpu",
    color: "from-indigo-600 to-purple-600"
  },
  {
    code: "9.c",
    title: "Universal ICT Access",
    description: "Significantly increase access to information and communications technology and strive to provide universal and affordable access to the internet.",
    icon: "Wifi",
    color: "from-rose-600 to-pink-600"
  }
];

export const INITIAL_USERS = [
  {
    id: "user-current",
    username: "alexrivera",
    name: "Alex Rivera",
    role: "Sustainable Tech Researcher",
    organization: "Global Infrastructure Institute",
    location: "Zurich, Switzerland",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    bio: "Passionate about combining edge AI, clean materials, and smart microgrids to advance SDG 9. Building open-source resilient infrastructure prototypes.",
    followersCount: 1420,
    followingCount: 388,
    isFollowing: false,
    impactScore: 94,
    skills: ["IoT Architecture", "Edge AI", "Sustainable Materials", "SDG 9 Policy", "Smart Grids"],
    interests: ["#SmartCities", "#GreenTech", "#CleanEnergy", "#ResilientInfrastructure"],
    achievements: [
      "UN Youth Innovation Fellow 2024",
      "Lead Author: Low-Carbon Concrete Guidelines",
      "12 Collaborative Projects Shipped"
    ]
  },
  {
    id: "elena-rostova",
    username: "elenarostova",
    name: "Dr. Elena Rostova",
    role: "Lead CleanTech Systems Architect",
    organization: "Nordic CleanTech Laboratory",
    location: "Stockholm, Sweden",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    bio: "Specializing in decentralized smart grids and industrial heat recovery. Advancing SDG target 9.4 through machine learning optimization of renewable microgrids.",
    followersCount: 3890,
    followingCount: 412,
    isFollowing: true,
    impactScore: 98,
    skills: ["Decentralized Energy", "Smart Grids", "Rust", "Industrial IoT", "Life Cycle Assessment"],
    interests: ["#CleanEnergy", "#SmartGrids", "#IndustrialEcology", "#SDG9"],
    achievements: [
      "European Green Tech Pioneer 2023",
      "5 Registered Patents in Microgrid Balancing",
      "Advisory Board — Clean Infrastructure Alliance"
    ]
  },
  {
    id: "marcus-adebayo",
    username: "marcusadebayo",
    name: "Marcus Adebayo",
    role: "Materials & Structural Engineer",
    organization: "AfriInfratech Solutions",
    location: "Nairobi, Kenya",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    bio: "Pioneering zero-clinker geopolymer concrete using industrial slag and rice husk ash. Creating earthquake-resilient, climate-neutral civil infrastructure.",
    followersCount: 2650,
    followingCount: 310,
    isFollowing: false,
    impactScore: 92,
    skills: ["Geopolymer Concrete", "Seismic Engineering", "Circular Economy", "BIM Modeling"],
    interests: ["#SustainableMaterials", "#ResilientInfrastructure", "#CircularEconomy", "#AfricaInnovation"],
    achievements: [
      "Global Infrastructure Breakthrough Award 2024",
      "Built 40 Climate-Resilient Rural Bridges",
      "Co-founder, Geocycle Materials"
    ]
  },
  {
    id: "sophia-chen",
    username: "sophiachen",
    name: "Sophia Chen",
    role: "Robotics & Computer Vision Specialist",
    organization: "SkySense Autonomous Dynamics",
    location: "Singapore",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1600&q=80",
    bio: "Developing autonomous UAV sensing systems for real-time factory emissions tracking and pipeline structural integrity. AI for transparent industrial monitoring.",
    followersCount: 4210,
    followingCount: 520,
    isFollowing: true,
    impactScore: 96,
    skills: ["Autonomous UAVs", "Computer Vision", "ROS 2", "PyTorch", "Environmental Telemetry"],
    interests: ["#AI", "#Robotics", "#GreenTech", "#CleanAir"],
    achievements: [
      "Forbes 30 Under 30 Asia (Industry)",
      "Deployed across 120 industrial facilities worldwide",
      "MIT Technology Review Innovator Under 35"
    ]
  },
  {
    id: "arjun-patel",
    username: "arjunpatel",
    name: "Arjun Patel",
    role: "Civil Systems & Sensor Networks Lead",
    organization: "StructuraSafe Technologies",
    location: "Bengaluru, India",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1600&q=80",
    bio: "Designing low-cost fiber-optic sensor mesh for aging bridges and railway viaducts. Making disaster-preventative infrastructure monitoring affordable globally.",
    followersCount: 1980,
    followingCount: 245,
    isFollowing: false,
    impactScore: 89,
    skills: ["Fiber Optic Sensors", "Structural Health Monitoring", "Edge Analytics", "Signal Processing"],
    interests: ["#SmartCities", "#Infrastructure", "#Sensors", "#DisasterResilience"],
    achievements: [
      "National Smart Infrastructure Innovation Medal",
      "Monitored over 500 kilometers of high-traffic transit corridors",
      "Open Sensor Consortium Chair"
    ]
  }
];

export const INITIAL_PROJECTS = [
  {
    id: "proj-1",
    title: "HyperGrid: Autonomous Microgrid for Renewable Industrial Zones",
    subtitle: "AI-governed decentralized power distribution reducing industrial grid blackout risks by 94%",
    category: "Clean Energy",
    sdgTarget: "9.4",
    status: "Field Tested",
    creatorId: "elena-rostova",
    creatorName: "Dr. Elena Rostova",
    creatorRole: "Lead CleanTech Systems Architect",
    creatorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80"
    ],
    problem: "Industrial parks consume massive amounts of centralized fossil-fuel power and experience costly outages during peak hours, causing significant production delays and carbon penalties under emerging climate directives.",
    solution: "HyperGrid installs localized solar/wind battery nodes governed by high-speed predictive AI algorithms. The system autonomously balances local demand, redirects surplus clean energy, and provides millisecond islanding during grid failures.",
    techStack: ["Rust", "Edge AI (TensorRT)", "LoRaWAN Mesh", "SCADA Integration", "Digital Twin"],
    sdgImpact: {
      metrics: [
        { label: "CO2 Emissions Reduced", value: "3,400 Tons/year" },
        { label: "Grid Resilience Gain", value: "94% Outage Prevention" },
        { label: "Energy Cost Savings", value: "32% Monthly" },
        { label: "SDG 9 Target", value: "9.4 Clean Industrial Retrofitting" }
      ],
      description: "Directly implements SDG 9.4 by upgrading industrial energy distribution systems to be clean, resource-efficient, and resilient against extreme weather events."
    },
    likesCount: 342,
    isLiked: false,
    bookmarksCount: 128,
    isBookmarked: false,
    collaboratorsCount: 8,
    tags: ["#CleanEnergy", "#SmartGrids", "#EdgeAI", "#SDG9", "#IndustrialIoT"]
  },
  {
    id: "proj-2",
    title: "Geocycle: Zero-Clinker Geopolymer Concrete from Industrial Byproducts",
    subtitle: "80% carbon-reduced structural material utilizing steel slag and fly ash for extreme durability",
    category: "Sustainable Infrastructure",
    sdgTarget: "9.2",
    status: "Production Ready",
    creatorId: "marcus-adebayo",
    creatorName: "Marcus Adebayo",
    creatorRole: "Materials & Structural Engineer",
    creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
    ],
    problem: "Traditional Portland cement accounts for roughly 8% of global greenhouse emissions. Rapid urbanization in developing regions faces soaring material costs and severe carbon bottlenecks.",
    solution: "Geocycle replaces standard cement with an alkaline-activated binder formulated entirely from industrial slag and agricultural ash. It cures at ambient temperature, resists chemical corrosion 3x longer than ordinary concrete, and cuts embodied carbon by over 80%.",
    techStack: ["Alkali Activation", "Spectroscopy", "BIM Integration", "Life Cycle Assessment", "Compressive Sensors"],
    sdgImpact: {
      metrics: [
        { label: "Embodied Carbon Cut", value: "82% vs OPC" },
        { label: "Industrial Waste Diverted", value: "18,000 Tons" },
        { label: "Lifespan Increase", value: "+45 Years" },
        { label: "SDG 9 Target", value: "9.2 Sustainable Industrialization" }
      ],
      description: "Addresses SDG 9.2 & 9.4 by turning hazardous industrial byproducts into high-grade resilient construction materials for affordable civil works."
    },
    likesCount: 289,
    isLiked: false,
    bookmarksCount: 94,
    isBookmarked: false,
    collaboratorsCount: 5,
    tags: ["#SustainableMaterials", "#CircularEconomy", "#GreenConcrete", "#Infrastructure"]
  },
  {
    id: "proj-3",
    title: "AeroFilter: Autonomous Drone Fleet for Industrial Emissions Telemetry",
    subtitle: "Real-time laser spectroscopy drone monitoring verifying factory clean-air compliance",
    category: "AI & Robotics",
    sdgTarget: "9.5",
    status: "Seeking Collaborators",
    creatorId: "sophia-chen",
    creatorName: "Sophia Chen",
    creatorRole: "Robotics & Computer Vision Specialist",
    creatorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    ],
    problem: "Ground-based emission sensors have limited spatial range, enabling unmonitored chimney gas leaks, fugitive VOC emissions, and inaccurate reporting in petrochemical and manufacturing zones.",
    solution: "AeroFilter deploys autonomous sensor-equipped UAV swarms that execute automated perimeter inspection flights. Equipped with tunable laser absorption spectrometers, they generate live 3D emission dispersion plumes mapped directly into a cloud regulatory dashboard.",
    techStack: ["ROS 2", "YOLOv10 Computer Vision", "TDLAS Gas Sensors", "Python / PyTorch", "AWS IoT Core"],
    sdgImpact: {
      metrics: [
        { label: "Gas Leak Detection Speed", value: "3.2 Minutes" },
        { label: "Industrial Facilities Monitored", value: "140+" },
        { label: "Methane Plumes Identified", value: "850+ Sites" },
        { label: "SDG 9 Target", value: "9.5 Scientific Research & Innovation" }
      ],
      description: "Empowers environmental regulators and factory operators with transparent, precision data to enforce sustainable industrialization and safety standards."
    },
    likesCount: 512,
    isLiked: true,
    bookmarksCount: 204,
    isBookmarked: true,
    collaboratorsCount: 12,
    tags: ["#Robotics", "#AI", "#CleanAir", "#IndustrialInspection", "#SDG9"]
  },
  {
    id: "proj-4",
    title: "TerraTrack: Low-Cost Satellite & IoT Structural Health Bridge Network",
    subtitle: "Continuous vibration and tilt telemetry protecting critical transport corridors from collapse",
    category: "Smart Cities",
    sdgTarget: "9.1",
    status: "Field Tested",
    creatorId: "arjun-patel",
    creatorName: "Arjun Patel",
    creatorRole: "Civil Systems & Sensor Networks Lead",
    creatorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80"
    ],
    problem: "Millions of bridges and highway overpasses worldwide are past their designed lifespan. Manual visual inspections are infrequent, subjective, and unable to detect micro-strain beneath the surface.",
    solution: "TerraTrack installs solar-harvested piezoelectric sensors along bridge spans that transmit micro-vibrations via NB-IoT to an anomaly detection engine. It combines local vibration data with millimeter-precision InSAR satellite radar.",
    techStack: ["NB-IoT", "Piezoelectric Accelerometers", "InSAR Satellite Data", "FastAPI", "InfluxDB"],
    sdgImpact: {
      metrics: [
        { label: "Early Hazard Warning", value: "3 Weeks Prior" },
        { label: "Inspection Cost Reduction", value: "70%" },
        { label: "Monitored Structures", value: "48 Bridges" },
        { label: "SDG 9 Target", value: "9.1 Resilient Infrastructure" }
      ],
      description: "Directly fulfills SDG 9.1 by guaranteeing the safety, resilience, and longevity of regional transit infrastructure for remote and urban populations."
    },
    likesCount: 195,
    isLiked: false,
    bookmarksCount: 67,
    isBookmarked: false,
    collaboratorsCount: 6,
    tags: ["#SmartCities", "#StructuralHealth", "#IoT", "#Resilience", "#PublicSafety"]
  },
  {
    id: "proj-5",
    title: "AquaLoop: Zero-Liquid-Discharge Industrial Water Recycling Unit",
    subtitle: "Closed-loop membrane distillation recovering 98% of process water for textile mills",
    category: "Green Technology",
    sdgTarget: "9.4",
    status: "Prototype",
    creatorId: "user-current",
    creatorName: "Alex Rivera",
    creatorRole: "Sustainable Tech Researcher",
    creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
    ],
    problem: "Textile manufacturing consumes up to 200 liters of fresh water per kilogram of fabric and expels toxic dye effluents into local rivers, contaminating agricultural drinking water.",
    solution: "AquaLoop combines low-temperature vacuum membrane distillation powered by factory waste heat with electrochemical oxidation. It purifies effluent back to potable purity while extracting concentrated salts for dye reuse.",
    techStack: ["Membrane Distillation", "Waste Heat Exchangers", "Electrochemical Oxidation", "C++ Embedded PLC"],
    sdgImpact: {
      metrics: [
        { label: "Water Reused", value: "98.2%" },
        { label: "Thermal Energy Saved", value: "45% (Waste Heat)" },
        { label: "Toxic Effluent Prevented", value: "1.2M Liters/day" },
        { label: "SDG 9 Target", value: "9.4 Clean Tech Retrofitting" }
      ],
      description: "Accelerates sustainable manufacturing in high-impact regions by eliminating toxic wastewater discharges and slashing freshwater usage."
    },
    likesCount: 420,
    isLiked: true,
    bookmarksCount: 165,
    isBookmarked: false,
    collaboratorsCount: 9,
    tags: ["#GreenTech", "#CircularWater", "#CleanIndustry", "#WasteToResource"]
  },
  {
    id: "proj-6",
    title: "OptiRail: Predictive AI Maintenance for High-Speed Freight Logistics",
    subtitle: "Acoustic bearing telemetry preventing rail freight derailments across trans-continental corridors",
    category: "AI & Robotics",
    sdgTarget: "9.1",
    status: "Field Tested",
    creatorId: "marcus-adebayo",
    creatorName: "Marcus Adebayo",
    creatorRole: "Materials & Structural Engineer",
    creatorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    ],
    problem: "Catastrophic freight train derailments caused by overheated axle bearings or rail fractures cost billions and cause toxic chemical spills, severing vital supply chains.",
    solution: "Wayside microphone arrays paired with deep convolutional audio neural nets listen to passing wheelsets at full speed. Microscopic spalls and bearing cracks are detected weeks before thermal failure.",
    techStack: ["Beamforming Microphones", "Audio CNNs", "PyTorch", "Rust Edge", "Rail SCADA"],
    sdgImpact: {
      metrics: [
        { label: "Derailment Risk Reduction", value: "88%" },
        { label: "Freight Uptime", value: "+18%" },
        { label: "Wayside Stations", value: "32 Deployed" },
        { label: "SDG 9 Target", value: "9.1 Resilient Infrastructure" }
      ],
      description: "Enhances trans-regional sustainable freight logistics by guaranteeing zero-interruption, safe transit of essential food, materials, and goods."
    },
    likesCount: 231,
    isLiked: false,
    bookmarksCount: 88,
    isBookmarked: false,
    collaboratorsCount: 4,
    tags: ["#RailTransit", "#AcousticAI", "#SmartCities", "#LogisticsResilience"]
  }
];

export const INITIAL_POSTS = [
  {
    id: "post-1",
    authorId: "elena-rostova",
    authorName: "Dr. Elena Rostova",
    authorRole: "Lead CleanTech Systems Architect",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    authorOrg: "Nordic CleanTech Laboratory",
    timestamp: "2 hours ago",
    content: "Excited to share that our #HyperGrid prototype just completed its 30-day continuous stress test at the Gothenburg Heavy Industrial Park! We demonstrated 99.98% microgrid uptime while dynamically absorbing 4.2 MW of erratic offshore wind power. This is proof that decentralized smart grids can make industrial facilities completely resilient against catastrophic main-grid failures. #SmartCities #CleanEnergy #SDG9 #GreenTech",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    sdgTarget: "9.4",
    hashtags: ["#SmartCities", "#CleanEnergy", "#SDG9", "#GreenTech"],
    likesCount: 142,
    isLiked: false,
    bookmarksCount: 38,
    isBookmarked: false,
    comments: [
      {
        id: "c1",
        authorId: "marcus-adebayo",
        authorName: "Marcus Adebayo",
        authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        authorRole: "Materials Engineer",
        content: "Outstanding benchmark, Elena! What was the latency on the islanding switch when simulating the abrupt grid disconnect?",
        timestamp: "1 hour ago"
      },
      {
        id: "c2",
        authorId: "elena-rostova",
        authorName: "Dr. Elena Rostova",
        authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
        authorRole: "Lead CleanTech Systems Architect",
        content: "Under 14 milliseconds! The solid-state bidirectional transfer switch coupled with the Rust micro-controller triggered before any CNC machine lost sync.",
        timestamp: "45 mins ago"
      }
    ]
  },
  {
    id: "post-2",
    authorId: "marcus-adebayo",
    authorName: "Marcus Adebayo",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    authorOrg: "AfriInfratech Solutions",
    timestamp: "4 hours ago",
    content: "Why are we still pouring high-carbon traditional concrete when industrial slag and volcanic pozzolan are readily available in almost every manufacturing corridor? Here are the 28-day compression test results from our #Geocycle batch: 68 MPa compressive strength with 82% less embodied carbon. Sustainable infrastructure is no longer a future hypothesis; it's a present engineering choice. #ResilientInfrastructure #Innovation #GreenTech #SDG9",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80",
    sdgTarget: "9.2",
    hashtags: ["#ResilientInfrastructure", "#Innovation", "#GreenTech", "#SDG9"],
    likesCount: 218,
    isLiked: true,
    bookmarksCount: 65,
    isBookmarked: true,
    comments: [
      {
        id: "c3",
        authorId: "user-current",
        authorName: "Alex Rivera",
        authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        authorRole: "Sustainable Tech Researcher",
        content: "Marcus, this is groundbreaking. Are you looking for collaboration on testing curing rates in high-humidity tropical microclimates? We have test rigs ready.",
        timestamp: "2 hours ago"
      }
    ]
  },
  {
    id: "post-3",
    authorId: "sophia-chen",
    authorName: "Sophia Chen",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    authorOrg: "SkySense Autonomous Dynamics",
    timestamp: "7 hours ago",
    content: "Transparent environmental accounting requires real-time telemetry. Today we launched our open-source computer vision model for automated flare-efficiency tracking in chemical manufacturing hubs. Running directly on low-power edge drones, it flags incomplete combustion within seconds. Check out the project repo and join our working group! #AI #Robotics #CleanAir #SDG9 #SmartCities",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80",
    sdgTarget: "9.5",
    hashtags: ["#AI", "#Robotics", "#CleanAir", "#SDG9", "#SmartCities"],
    likesCount: 310,
    isLiked: false,
    bookmarksCount: 89,
    isBookmarked: false,
    comments: []
  },
  {
    id: "post-4",
    authorId: "arjun-patel",
    authorName: "Arjun Patel",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    authorOrg: "StructuraSafe Technologies",
    timestamp: "12 hours ago",
    content: "A quick update from the field: our wireless strain gauge network just prevented what could have been a catastrophic structural failure on the Sabarmati overpass. Micro-vibrations alerted city engineers to hidden shear crack propagation 18 days before any visible surface defect appeared. Resilient infrastructure saves lives and billions in emergency rebuilds. #SmartCities #Infrastructure #Resilience #IoT",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    sdgTarget: "9.1",
    hashtags: ["#SmartCities", "#Infrastructure", "#Resilience", "#IoT"],
    likesCount: 184,
    isLiked: false,
    bookmarksCount: 42,
    isBookmarked: false,
    comments: []
  }
];

export const INITIAL_CONVERSATIONS = [
  {
    id: "conv-1",
    participantId: "elena-rostova",
    participantName: "Dr. Elena Rostova",
    participantAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    participantRole: "Lead CleanTech Systems Architect",
    online: true,
    lastMessage: "The microgrid synchronization data is ready for your team's review!",
    lastTimestamp: "10:24 AM",
    unreadCount: 1,
    projectRef: "HyperGrid: Autonomous Microgrid",
    messages: [
      {
        id: "m1",
        senderId: "elena-rostova",
        text: "Hi Alex! I saw your work on the AquaLoop closed-loop water unit. It looks like an incredible engineering design.",
        timestamp: "Yesterday 4:15 PM"
      },
      {
        id: "m2",
        senderId: "user-current",
        text: "Thank you Dr. Rostova! We've been following HyperGrid closely. We actually have waste-heat steam generators that could feed back into your microgrid bus.",
        timestamp: "Yesterday 4:30 PM"
      },
      {
        id: "m3",
        senderId: "elena-rostova",
        text: "That would be a perfect synergy for industrial ecology (SDG 9.4)! Let's co-author a demonstration paper.",
        timestamp: "Yesterday 5:00 PM"
      },
      {
        id: "m4",
        senderId: "elena-rostova",
        text: "The microgrid synchronization data is ready for your team's review!",
        timestamp: "10:24 AM"
      }
    ]
  },
  {
    id: "conv-2",
    participantId: "marcus-adebayo",
    participantName: "Marcus Adebayo",
    participantAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    participantRole: "Materials & Structural Engineer",
    online: true,
    lastMessage: "I would love to send you sample geopolymer test cylinders for stress testing.",
    lastTimestamp: "Yesterday",
    unreadCount: 0,
    projectRef: "Geocycle: Zero-Clinker Concrete",
    messages: [
      {
        id: "m20",
        senderId: "user-current",
        text: "Hi Marcus, loved your presentation on industrial slag binders. We are setting up accelerated weathering tests next week.",
        timestamp: "2 days ago"
      },
      {
        id: "m21",
        senderId: "marcus-adebayo",
        text: "I would love to send you sample geopolymer test cylinders for stress testing.",
        timestamp: "Yesterday"
      }
    ]
  },
  {
    id: "conv-3",
    participantId: "sophia-chen",
    participantName: "Sophia Chen",
    participantAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    participantRole: "Robotics & Computer Vision Specialist",
    online: false,
    lastMessage: "Collab request received! Excited to integrate the drone spectral SDK.",
    lastTimestamp: "Oct 24",
    unreadCount: 0,
    projectRef: "AeroFilter: Drone Emissions Telemetry",
    messages: [
      {
        id: "m30",
        senderId: "sophia-chen",
        text: "Collab request received! Excited to integrate the drone spectral SDK.",
        timestamp: "Oct 24"
      }
    ]
  },
  {
    id: "conv-4",
    participantId: "arjun-patel",
    participantName: "Arjun Patel",
    participantAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    participantRole: "Civil Systems & Sensor Networks Lead",
    online: false,
    lastMessage: "Our sensor firmware v2.1 has been published on GitHub.",
    lastTimestamp: "Oct 21",
    unreadCount: 0,
    projectRef: "TerraTrack: Bridge Sensor Network",
    messages: [
      {
        id: "m40",
        senderId: "arjun-patel",
        text: "Our sensor firmware v2.1 has been published on GitHub.",
        timestamp: "Oct 21"
      }
    ]
  }
];

export const SDG9_STATS = {
  innovatorsCount: "14,850+",
  activeProjects: "2,420+",
  countriesRepresented: "96",
  carbonReducedTons: "185,000+",
  collaborationsFormed: "5,300+"
};
