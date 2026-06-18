export interface SubProduct {
  id: string;
  categorySlug: string;
  title: string;
  image: string;
  price: string;
  moq: string;
}

export const subProducts: SubProduct[] = [
  // 1. Green Travel
  { id: "g1", categorySlug: "green-travel", title: "Foldable Electric Scooter 350W", image: "/images/products/scooter.png", price: "$150.00 - $200.00", moq: "50 Units" },
  { id: "g2", categorySlug: "green-travel", title: "Urban Electric Bicycle 500W", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=600&fit=crop", price: "$350.00 - $450.00", moq: "20 Units" },

  // 2. Kitchen Electronics
  { id: "k1", categorySlug: "kitchen-electronics", title: "Commercial Rice Cooker 10L", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&h=600&fit=crop", price: "$45.00 - $60.00", moq: "100 Units" },
  { id: "k2", categorySlug: "kitchen-electronics", title: "High-Speed Countertop Blender", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&h=600&fit=crop", price: "$25.00 - $35.00", moq: "200 Units" },

  // 3. Global Holiday Gifts Festival
  { id: "gf1", categorySlug: "gifts", title: "Luxury Glass Christmas Ornaments", image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=600&h=600&fit=crop", price: "$1.50 - $3.00", moq: "1000 Pieces" },
  { id: "gf2", categorySlug: "gifts", title: "Premium Scented Candle Set", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&h=600&fit=crop", price: "$5.00 - $8.00", moq: "500 Sets" },

  // 4. PV Energy & Clean Metallurgy
  { id: "pv1", categorySlug: "solar", title: "400W Monocrystalline Solar Panel", image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=600&fit=crop", price: "$85.00 - $110.00", moq: "100 Panels" },
  { id: "pv2", categorySlug: "solar", title: "Hybrid Solar Power Inverter 5kW", image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&h=600&fit=crop", price: "$250.00 - $300.00", moq: "50 Units" },

  // 5. Power & Generating Sets
  { id: "pg1", categorySlug: "generators", title: "Silent Diesel Generator 50kVA", image: "/images/products/generator.png", price: "$3,500.00", moq: "1 Set" },
  { id: "pg2", categorySlug: "generators", title: "Portable Gasoline Inverter Generator", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop", price: "$300.00 - $450.00", moq: "20 Sets" },

  // 6. Yiwu One-Stop Sourcing
  { id: "yw1", categorySlug: "yiwu", title: "Professional Speed Jump Rope", image: "/images/products/jump_rope.png", price: "$0.80 - $1.50", moq: "2000 Pieces" },
  { id: "yw2", categorySlug: "yiwu", title: "Eco-Friendly TPE Yoga Mat", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop", price: "$3.50 - $5.00", moq: "500 Pieces" },

  // 7. Hiking Backpack
  { id: "bp1", categorySlug: "backpack", title: "50L Waterproof Trekking Backpack", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop", price: "$18.00 - $25.00", moq: "300 Pieces" },
  { id: "bp2", categorySlug: "backpack", title: "Tactical Outdoor Daypack", image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=600&h=600&fit=crop", price: "$15.00 - $22.00", moq: "500 Pieces" },

  // 8. Paper Gift Box
  { id: "gb1", categorySlug: "packaging", title: "Custom Corrugated Mailer Box", image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=600&h=600&fit=crop", price: "$0.20 - $0.50", moq: "5000 Pieces" },
  { id: "gb2", categorySlug: "packaging", title: "Luxury Magnetic Closure Gift Box", image: "/images/products/gift_box.png", price: "$1.50 - $2.50", moq: "1000 Pieces" },

  // 9. Wearable Tech
  { id: "w1", categorySlug: "wearable-tech", title: "Smart Watch with Heart Rate Monitor", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=600&fit=crop", price: "$15.00 - $25.00", moq: "100 Pieces" },
  { id: "w2", categorySlug: "wearable-tech", title: "Wireless Bluetooth Earbuds Pro", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop", price: "$8.50 - $12.00", moq: "500 Pieces" },

  // 10. Plastic Machinery
  { id: "pm1", categorySlug: "plastic", title: "High-Speed Injection Molding Machine", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=600&fit=crop", price: "$15,000.00", moq: "1 Set" },
  { id: "pm2", categorySlug: "plastic", title: "Twin Screw Plastic Extruder", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop", price: "$22,500.00", moq: "1 Set" },

  // 11. Pump & Vacuum Equipment
  { id: "pu1", categorySlug: "pumps", title: "Industrial Centrifugal Water Pump", image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=600&fit=crop", price: "$450.00 - $600.00", moq: "10 Sets" },
  { id: "pu2", categorySlug: "pumps", title: "Heavy Duty Rotary Vane Vacuum Pump", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=600&fit=crop", price: "$850.00", moq: "5 Sets" },

  // 12. Machine Tools
  { id: "m1", categorySlug: "machine-tools", title: "Industrial CNC Milling Machine", image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&h=600&fit=crop", price: "$12,500.00", moq: "1 Set" },
  { id: "m2", categorySlug: "machine-tools", title: "High Precision CNC Lathe", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=600&fit=crop", price: "$8,500.00", moq: "1 Set" },
  { id: "m3", categorySlug: "machine-tools", title: "Hydraulic Press Brake Machine", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop", price: "$22,000.00", moq: "1 Set" },
  { id: "m4", categorySlug: "machine-tools", title: "Heavy Duty Laser Cutting Machine", image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=600&h=600&fit=crop", price: "$35,000.00", moq: "1 Set" }
];
