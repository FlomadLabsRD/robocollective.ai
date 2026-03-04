import { Activity, Eye, Layers, ShieldCheck, Cpu, Battery, Cog, Zap, Target } from "lucide-react";

export interface ProductFeature {
    title: string;
    description: string;
    icon: any; // ReactNode
    highlight: string;
}

export interface ProductSpec {
    label: string;
    value: string;
}

export interface ProductDetails {
    id: string;
    name: string;
    badge: string;
    subtitle: string;
    description: string;
    price?: string;
    themeColor: string; // e.g. "emerald", "sky", "orange", "purple", "pink"
    features: ProductFeature[];
    specs: ProductSpec[];
}

export const productsData: Record<string, ProductDetails> = {
    "g1": {
        id: "g1",
        name: "Humanoid G1",
        subtitle: "(Base / EDU)",
        badge: "Educational Lineup",
        description: "The Unitree G1 humanoid robot is a next-generation bipedal robotics platform that combines affordability, agility, and advanced performance up to 43 DOF.",
        themeColor: "emerald",
        features: [
            {
                title: "Dynamic Motion and Power",
                description: "The G1 features 120 Nm torque-dense joints and a lightweight frame (~35 kg), delivering smooth, stable locomotion across complex environments. Its design supports human-like dexterity and motion control, making it ideal for universities and innovation centers.",
                icon: 'activity',
                highlight: "120 Nm Joints"
            },
            {
                title: "Advanced Sensors and Perception",
                description: "Equipped with a 3D LiDAR sensor for 360° panoramic mapping, an Intel RealSense D435i depth camera, and integrated microphones/speakers. These enable AI-based navigation and adaptive behavior in real-time.",
                icon: 'eye',
                highlight: "3D LiDAR + Depth"
            },
            {
                title: "Modular Design and Flexibility",
                description: "The G1\\'s modular configurations (Base, Edu, Ultimate) make it suitable for entry-level robotics education to advanced AI-driven research. Quick-swap batteries provide ~2 hours of runtime ensuring uninterrupted learning.",
                icon: 'layers',
                highlight: "2Hr Quick-Swap"
            }
        ],
        specs: [
            { label: "Height", value: "~130 cm" },
            { label: "Weight", value: "~35 kg" },
            { label: "Degrees of Freedom", value: "43 DOF" },
            { label: "Max Joint Torque", value: "120 Nm" },
            { label: "Battery Life", value: "~2 hours (quick-swap system)" },
            { label: "Sensors", value: "3D LiDAR + Intel RealSense D435i" },
            { label: "Configurations", value: "Base, Edu, Ultimate" },
            { label: "Primary Use", value: "Research, Education, Light Industry" }
        ]
    }
    // other products will fall back to a generated template
};

// Generic factory for products not explicitly defined above
export function getProductDetails(id: string, name: string, description: string, categoryName: string, categoryColor: string, price?: string): ProductDetails {
    if (productsData[id]) return productsData[id];

    // Default theme colors based on category
    let themeColor = "emerald";
    if (categoryColor.includes("sky")) themeColor = "sky";
    if (categoryColor.includes("orange")) themeColor = "orange";
    if (categoryColor.includes("purple")) themeColor = "purple";
    if (categoryColor.includes("pink")) themeColor = "pink";

    return {
        id,
        name,
        subtitle: "",
        badge: categoryName,
        description,
        price,
        themeColor,
        features: [
            {
                title: "Precision Engineering",
                description: `The ${name} is built with industry-leading precision, utilizing state-of-the-art materials for maximum durability and performance in its intended environment.`,
                icon: 'cog',
                highlight: "High Precision"
            },
            {
                title: "Intelligent Control System",
                description: "Powered by advanced microcontrollers and real-time processing, ensuring ultra-low latency commands and stable autonomous operation.",
                icon: 'cpu',
                highlight: "Low-Latency"
            },
            {
                title: "Robust Reliability",
                description: "Designed to operate consistently under demanding conditions with built-in fail-safes and extended battery efficiency.",
                icon: 'shield',
                highlight: "Reliable"
            }
        ],
        specs: [
            { label: "Build Material", value: "Aerospace-grade Aluminum / Carbon Fiber" },
            { label: "Control Interface", value: "Wireless via App / API" },
            { label: "Power System", value: "High-Capacity LiPo" },
            { label: "Operating Temp", value: "-10°C to 45°C" },
            { label: "Connectivity", value: "Wi-Fi, Bluetooth 5.0, Custom Radio" },
            { label: "Warranty", value: "1 Year Standard" },
        ]
    };
}
