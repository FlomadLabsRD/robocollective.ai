export const categories = [
    { id: "all", title: "All Products", color: "from-neutral-400 to-neutral-600" },
    { id: "humanoid", title: "Humanoid Robots", color: "from-violet-400 to-purple-600" },
    { id: "robodog", title: "Robodogs", color: "from-amber-400 to-orange-600" },
    { id: "industrial", title: "Industrial Robots", color: "from-orange-400 to-red-600" },
    { id: "service", title: "Service Robots", color: "from-purple-400 to-indigo-600" },
    { id: "specialty", title: "Specialty Robots", color: "from-pink-400 to-rose-600" },
    { id: "educational", title: "Educational Robots", color: "from-emerald-400 to-teal-600" },
    { id: "drones", title: "Nimble Drones", color: "from-sky-400 to-blue-600" },
    { id: "accessories", title: "Accessories", color: "from-neutral-400 to-neutral-600" },
];

export const catalogData: Record<string, { id: string, title: string, products: any[] }[]> = {
    humanoid: [
        {
            id: "robots", title: "Humanoid Robots", products: [
                { id: "h1", name: "Humanoid G1 (Base/EDU)", description: "Next-generation bipedal platform with up to 43 DOF, 120 Nm joints, and modular configurations for education and research.", price: "Quote" },
                { id: "h2", name: "Humanoid H1", description: "High-performance full-size humanoid robot with 3D LiDAR, depth cameras, and whole-body motion control for advanced research.", price: "Quote" },
                { id: "h3", name: "Humanoid Oli", description: "Compact humanoid designed for human-robot interaction research and social robotics applications.", price: "Quote" },
                { id: "h4", name: "Humanoid R1", description: "Versatile humanoid platform built for manipulation tasks and real-world deployment in structured environments.", price: "Quote" },
                { id: "h5", name: "Humanoid Mini Hi", description: "Miniature humanoid robot ideal for educational settings, algorithm testing, and lightweight locomotion research.", price: "Quote" },
            ]
        },
    ],

    robodog: [
        {
            id: "robots", title: "Quadruped Robots", products: [
                { id: "r1", name: "Robodog Go1", description: "Agile quadruped robot with AI-powered navigation, ideal for education, research, and inspection tasks.", price: "Quote" },
                { id: "r2", name: "Robodog B2", description: "Industrial-grade quadruped with high payload capacity and rugged all-terrain mobility for demanding environments.", price: "Quote" },
                { id: "r3", name: "Robodog AlienGo", description: "Advanced quadruped research platform with high-DOF legs and full ROS support for locomotion experiments.", price: "Quote" },
                { id: "r4", name: "Robodog (B2/B2-W)", description: "Wheeled-leg hybrid quadruped combining the stability of wheels with the versatility of legged locomotion.", price: "Quote" },
                { id: "r5", name: "Robodog (Go2/Go2-W)", description: "Next-gen Go2 series with enhanced AI, better terrain adaptability, and optional wheeled configuration.", price: "Quote" },
            ]
        },
    ],

    industrial: [
        {
            id: "arms", title: "Robotic Arms", products: [
                { id: "i1", name: "Robotic Arm RM65-6F", description: "6-axis force-sensing arm with 5kg payload, 0.05mm repeatability, and integrated controller.", price: "Quote" },
                { id: "i2", name: "Robotic Arm RM65-B", description: "Standard 6-axis robotic arm with 5kg payload and drag-and-drop teaching for flexible automation.", price: "Quote" },
                { id: "i3", name: "Robotic Arm RM75-6F", description: "Heavy-duty 6-axis force arm with 7.5kg payload and 6-axis force sensing for precision tasks.", price: "Quote" },
                { id: "i4", name: "Robotic Arm RM75-B", description: "High-payload 6-axis arm with 7.5kg capacity and wide workspace for industrial automation.", price: "Quote" },
                { id: "i5", name: "Robotic Arm RML63-6F", description: "Lightweight 6-axis force arm with 5kg payload optimized for compact workspaces.", price: "Quote" },
                { id: "i6", name: "Robotic Arm RML63-B", description: "Slim-profile 6-axis arm designed for tight spaces and collaborative automation scenarios.", price: "Quote" },
                { id: "i7", name: "Robotic Arm ECO62-B", description: "Cost-effective 6-axis arm with 2kg payload for light assembly and educational use.", price: "Quote" },
                { id: "i8", name: "Robotic Arm ECO65-6F", description: "Economy 6-axis force arm balancing affordability and force-sensing capability.", price: "Quote" },
                { id: "i9", name: "Robotic Arm ECO65-B", description: "Entry-level 6-axis arm with 5kg payload for budget-conscious automation deployments.", price: "Quote" },
                { id: "i10", name: "Robotic Arm GEN72-B", description: "Next-generation 7-axis arm with 2kg payload and extended dexterity for complex manipulation.", price: "Quote" },
            ]
        },
        {
            id: "compound", title: "Compound and Mobile Arms", products: [
                { id: "i11", name: "Single Arm Compound Robot Precision", description: "Mobile arm robot combining precision manipulation with autonomous navigation for flexible factory tasks.", price: "Quote" },
                { id: "i12", name: "Single Arm Compound Robot Compact", description: "Compact mobile arm designed for intelligent automation in space-constrained environments.", price: "Quote" },
                { id: "i13", name: "Single Arm Lifting Compound Robot", description: "Mobile arm with integrated lifting capability for material handling and assembly lines.", price: "Quote" },
                { id: "i14", name: "Dual Arm Compound Robot", description: "Dual-arm mobile robot for bimanual manipulation tasks requiring human-like dexterity.", price: "Quote" },
            ]
        },
        {
            id: "amr", title: "AMRs and Chassis", products: [
                { id: "i15", name: "Heavy Load AMR", description: "Autonomous mobile robot engineered for heavy payload transport across warehouse floors.", price: "Quote" },
                { id: "i16", name: "L Lift AMR", description: "AMR with integrated lifting mechanism for pallet-level logistics and automated storage.", price: "Quote" },
                { id: "i17", name: "Smart Forklift", description: "Autonomous forklift robot for warehouse automation and heavy goods movement.", price: "Quote" },
                { id: "i18", name: "Sub Lift Robot", description: "Low-profile sub-lift AMR for moving shelves and racks without human intervention.", price: "Quote" },
                { id: "i19", name: "Conveyor Robot", description: "Autonomous conveyor-integrated robot for streamlined production line material flow.", price: "Quote" },
                { id: "i20", name: "Base Chassis", description: "Versatile wheeled base chassis for custom robot development and rapid prototyping.", price: "Quote" },
                { id: "i21", name: "Hermes Chassis", description: "High-speed wheeled chassis platform designed for agile indoor navigation and research.", price: "Quote" },
            ]
        },
        {
            id: "grippers", title: "Grippers and End Effectors", products: [
                { id: "i22", name: "Gripper AG-160-95", description: "Electric parallel gripper with 160mm stroke for versatile industrial pick and place.", price: "Quote" },
                { id: "i23", name: "Gripper EG2-SF16", description: "Slim electric gripper optimized for small part handling and precision assembly tasks.", price: "Quote" },
                { id: "i24", name: "Gripper ERG32-150", description: "Rotary electric gripper with 150mm jaw width for complex manipulation scenarios.", price: "Quote" },
                { id: "i25", name: "Gripper EVS08", description: "Vacuum suction gripper for handling flat and curved surfaces in pick and place tasks.", price: "Quote" },
                { id: "i26", name: "Gripper RG52-050", description: "Compact electric gripper with 52mm stroke for tight-space robotic manipulation.", price: "Quote" },
                { id: "i27", name: "Gripper RGI-100-30", description: "Internal gripper for gripping hollow objects and tubes from the inside.", price: "Quote" },
                { id: "i28", name: "Flexible Gripper RM-SFG", description: "Soft flexible gripper for handling delicate, irregular, and fragile objects safely.", price: "Quote" },
                { id: "i29", name: "Dex Hand RM56S2B 2L2R", description: "Dexterous robotic hand with 56 degrees of freedom for human-like manipulation research.", price: "Quote" },
            ]
        },
        {
            id: "cameras", title: "Cameras and Sensors", products: [
                { id: "i30", name: "Camera RM-MVQ", description: "High-resolution vision module for robot perception, quality inspection, and machine vision.", price: "Quote" },
                { id: "i31", name: "Camera D435C", description: "Intel RealSense D435C depth camera for 3D perception and spatial awareness.", price: "Quote" },
                { id: "i32", name: "Camera DaBai DCW", description: "Binocular depth camera with wide field of view for robot navigation and obstacle avoidance.", price: "Quote" },
            ]
        },
    ],

    service: [
        {
            id: "hospitality", title: "Hospitality and Delivery", products: [
                { id: "s1", name: "Hotel Robot", description: "Friendly autonomous robot optimized for hotel delivery, guest services, and concierge tasks.", price: "Quote" },
                { id: "s2", name: "Delivery Robot Closed Type", description: "Secure enclosed delivery robot for food, parcels, and contactless handoff in buildings.", price: "Quote" },
                { id: "s3", name: "Factory Delivery Robot", description: "Robust autonomous delivery robot designed for factory floor material transport.", price: "Quote" },
                { id: "s4", name: "Mars Smartbot", description: "All-terrain autonomous smartbot for outdoor navigation, logistics, and last-mile delivery.", price: "Quote" },
            ]
        },
        {
            id: "sanitation", title: "Cleaning and Sanitation", products: [
                { id: "s5", name: "Disinfectant Mini Robot", description: "Autonomous UV-C and spray disinfection robot for hospitals, hotels, and public spaces.", price: "Quote" },
                { id: "s6", name: "Healthcare Robot", description: "Intelligent healthcare assistant robot for patient support, medication delivery, and hospital logistics.", price: "Quote" },
                { id: "s7", name: "Water 2", description: "Autonomous floor-cleaning robot with smart navigation and multi-surface scrubbing capability.", price: "Quote" },
            ]
        },
    ],

    specialty: [
        {
            id: "bipedal", title: "Multi-Modal and Specialty", products: [
                { id: "sp1", name: "Tron 1", description: "The world's first multi-modal biped platform with point-foot, sole, and wheeled modes in one robot.", price: "Quote" },
            ]
        },
    ],

    educational: [
        {
            id: "robots", title: "Educational and Bipedal Robots", products: [
                { id: "e1", name: "Mini Pi Bipedal Robot", description: "Compact bipedal research platform for locomotion and AI experiments in academic environments.", price: "Quote" },
                { id: "g1", name: "Humanoid G1 Base EDU", description: "The Unitree G1 humanoid robot, a next-generation bipedal platform with up to 43 DOF.", price: "Quote" },
            ]
        },
    ],

    drones: [
        {
            id: "kits", title: "Kits and Bundles", products: [
                { id: "d1", name: "Nimble Base Kit", description: "Flight-ready Nimble drone with charger and spare wings. Perfect for live demos, outreach, and immediate takeoff.", price: "$350" },
                { id: "d2", name: "Nimble Starter Kit", description: "Everything in the base kit plus more wings and shells so teams can experiment longer between maintenance cycles.", price: "$500" },
                { id: "d3", name: "Nimble Lighthouse Bundle", description: "Complete bundle with Lighthouse deck and base stations for precise indoor positioning and repeatable trajectories.", price: "$850" },
            ]
        },
        {
            id: "fleets", title: "Scale to Fleets", products: [
                { id: "d4", name: "Base Multi Kit 2x", description: "Two flight-ready Nimbles with spare wings, chargers, and shells so pairs can prototype quickly.", price: "$650" },
                { id: "d9", name: "Base Multi Kit 3x", description: "Three drones, spare wings, and chargers for small teams and formation trials.", price: "$950" },
                { id: "d5", name: "Nimble Swarm Bundle x4", description: "Four Nimbles, Lighthouse positioning gear, radios, and spares for swarm choreographies and indoor fleets.", price: "$1,200" },
            ]
        },
        {
            id: "spares", title: "Accessories and Spares", products: [
                { id: "d6", name: "Crazyradio 2.0", description: "Low-latency radio link for commanding single drones or swarms.", price: "$40" },
                { id: "d10", name: "Lighthouse Base Station", description: "Indoor positioning beacons for centimeter-level tracking." },
                { id: "d11", name: "Lighthouse Support Kit", description: "Mounts, plates, and wiring to attach Lighthouse decks securely." },
                { id: "d7", name: "Nimble Battery", description: "Stock up on extra flight packs to extend sorties.", price: "$15" },
                { id: "d8", name: "Wing Set", description: "Replacement wings to keep every airframe ready for flight.", price: "$20" },
                { id: "d12", name: "2.4 GHz Transmitter", description: "EdgeTX handheld transmitter for manual flight and training." },
                { id: "d13", name: "FrSky Receiver", description: "Bind to your preferred transmitter for manual modes." },
                { id: "d14", name: "Nimble Shells", description: "Fresh shells to refresh fleets after heavy use." },
            ]
        },
    ],
};

export const productById: Record<string, any> = Object.fromEntries(
    Object.entries(catalogData).flatMap(([categoryId, subs]) =>
        subs.flatMap(sub =>
            sub.products.map(p => [p.id, {
                ...p,
                categoryId,
                subCategoryTitle: sub.title,
                categoryColor: categories.find(c => c.id === categoryId)?.color ?? ""
            }])
        )
    )
);
