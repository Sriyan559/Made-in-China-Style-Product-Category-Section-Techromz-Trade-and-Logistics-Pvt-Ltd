<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'title' => 'Green Travel',
                'slug' => 'green-travel',
                'image' => 'https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&w=600&q=80',
                'short_description' => 'Premium electric scooters, eco-friendly bikes, and smart urban mobility solutions for global markets.',
                'long_description' => 'Our Green Travel solutions represent the pinnacle of eco-friendly, urban B2B transport systems. Designed specifically for high-capacity metropolitan operations, these electric scooters and micro-mobility fleets feature aircraft-grade aluminum alloy structures, state-of-the-art dual braking configurations, and smart GPS tracking.',
                'features' => [
                    '45km Long-Range Battery Life',
                    'Dual EBS Braking Safety System',
                    'IP56 Waterproof Structural Protection',
                    'Smart GPS/GLONASS Fleet Integration'
                ],
                'category' => 'Vehicles & Transport',
            ],
            [
                'title' => 'Kitchen Electronics',
                'slug' => 'kitchen-electronics',
                'image' => 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=600&q=80',
                'short_description' => 'Advanced smart cookers, high-performance blenders, and commercial-grade kitchen food processors.',
                'long_description' => 'Commercial-grade intelligent kitchen electronics designed to support high-throughput restaurant, hotel, and catering environments. Equipped with precision thermal mapping, pressure control valves, and multi-tier energy conservation architecture, our cooking platforms offer automated meal preparation sequences.',
                'features' => [
                    'Precision Thermal Induction Controls',
                    'Commercial Grade Stainless Steel SUS304',
                    'Multi-Tier High Volume Capacity',
                    'Programmable LED Smart Control Hub'
                ],
                'category' => 'Home Appliances',
            ],
            [
                'title' => 'Global Holiday Gifts Festival',
                'slug' => 'global-holiday-gifts-festival',
                'image' => 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
                'short_description' => 'Festive decorations, customizable party ornaments, and high-quality premium gift sets.',
                'long_description' => 'Vibrant global festival and holiday ornament solutions designed for bulk wholesale retail, hospitality displays, and corporate gifts. Our festive product line features premium, eco-friendly materials engineered for outdoor weather resistance and brilliant visual impact.',
                'features' => [
                    'Vibrant Non-Toxic Shatterproof Materials',
                    'Weather Resistant UV-Coated Finish',
                    'Custom Bulk Packaging & Branding Optional',
                    'Eco-Friendly Biodegradable Cardboard Sets'
                ],
                'category' => 'Gifts & Crafts',
            ],
            [
                'title' => 'PV Energy & Clean Metallurgy',
                'slug' => 'pv-energy-clean-metallurgy',
                'image' => 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80',
                'short_description' => 'Monocrystalline solar panels, clean energy inverters, and sustainable metallurgical products.',
                'long_description' => 'Cutting-edge photovoltaic solar cells and premium clean metallurgy alloys built to power transition energy networks. Our silicon-doped solar panels optimize power output even in low-light environments, while our green-metallurgy steel and aluminum alloys undergo carbon-neutral refinement to lower raw supply chain emissions.',
                'features' => [
                    'High-Efficiency Monocrystalline Silicon',
                    '98.5% Energy Conversion Ratio Inverters',
                    'Green Low-Carbon Refining Standards',
                    'Anti-Reflective Hydrophobic Glass Shields'
                ],
                'category' => 'Energy',
            ],
            [
                'title' => 'Power & Generating Sets',
                'slug' => 'power-generating-sets',
                'image' => 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
                'short_description' => 'High-output diesel generator sets, industrial UPS power, and smart grid electricity solutions.',
                'long_description' => 'Heavy-duty commercial generating sets designed to support critical backup power systems, mining sites, hospitals, and manufacturing factories. Equipped with noise-reducing acoustic soundproofing enclosures, digital self-starting automation modules, and clean-combustion diesel engines.',
                'features' => [
                    'Industrial Turbocharged Clean Diesel Engine',
                    'Super-Silent Acoustic Soundproof Canopy (65dB)',
                    'SmartGen Digital Auto-Start Interface',
                    'High-Capacity Sub-Base Fuel Storage Tanks'
                ],
                'category' => 'Machinery',
            ],
            [
                'title' => 'Yiwu One-Stop Sourcing',
                'slug' => 'yiwu-one-stop-sourcing',
                'image' => 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80',
                'short_description' => 'Bulk wholesale daily commodities, fitness jump ropes, toys, and lifestyle accessories.',
                'long_description' => 'A comprehensive bulk category service that packages everyday accessories, home goods, premium jump ropes, and fitness supplies from the heart of the Yiwu wholesale market. We offer curated sourcing bundles, direct supplier factory audits, custom packaging, consolidated customs clearance.',
                'features' => [
                    'Direct Factory Sourcing & Consolidation',
                    'Rigorous Pre-Shipment Quality Inspections',
                    'Custom Print-on-Demand Logo Branding',
                    'Streamlined Customs Clearance Documentation'
                ],
                'category' => 'Consumer Goods',
            ],
            [
                'title' => 'Hiking Backpack',
                'slug' => 'hiking-backpack',
                'image' => 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
                'short_description' => 'Ergonomic waterproof outdoor backpacks, mountaineering gear, and heavy-duty travel luggage.',
                'long_description' => 'Our professional outdoor mountaineering and hiking backpacks are engineered for extreme durability and ergonomic load distribution. Featuring a high-tensile ripstop nylon exterior, integrated rain covers, and a customizable suspension frame system.',
                'features' => [
                    'High-Tensile Anti-Tear Ripstop Nylon',
                    'Ergonomic Adjustable Suspension Frame',
                    '3D Breathable Mesh Back Ventilation Panel',
                    'Integrated Deployable Waterproof Rain Cover'
                ],
                'category' => 'Sports & Outdoors',
            ],
            [
                'title' => 'Paper Gift Box',
                'slug' => 'paper-gift-box',
                'image' => 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
                'short_description' => 'Eco-friendly custom cardboard gift boxes, premium luxury packaging, and retail paper boxes.',
                'long_description' => 'Premium, eco-friendly rigid paper boxes designed to elevate luxury packaging for cosmetics, tech accessories, jewelry, and confectionery. Made from recycled structural card stock with a high-definition offset printing finish.',
                'features' => [
                    '100% Recyclable Eco-Friendly Card Stock',
                    'HD Offset Print Finish with Matte Coating',
                    'Rigid Magnetic Automatic Closing Seals',
                    'Custom Die-Cut Molded Velvet Inserts'
                ],
                'category' => 'Packaging & Printing',
            ],
            [
                'title' => 'Wearable Tech',
                'slug' => 'wearable-tech',
                'image' => 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80',
                'short_description' => 'High-fidelity smart audio sunglasses, fitness tracking smartwatches, and wireless sensors.',
                'long_description' => 'State-of-the-art wearable devices including high-fidelity smart audio sunglasses, Bluetooth biometric trackers, and smartwatches. Equipped with energy-efficient Bluetooth 5.2 modules, water-resistant chassis, and bone-conduction audio path technology.',
                'features' => [
                    'Bone-Conduction Audio Sound Delivery',
                    'UVA/UVB Polarized Anti-Glare Lens',
                    'Ultra-Lightweight Comfort TR90 Frame',
                    'Long-Lasting 8-Hour Battery Playback'
                ],
                'category' => 'Consumer Electronics',
            ],
            [
                'title' => 'Plastic Machinery',
                'slug' => 'plastic-machinery',
                'image' => 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
                'short_description' => 'High-precision plastic injection molding machines, film extruders, and waste recycling systems.',
                'long_description' => 'Industrial injection molding and extrusion machinery designed to mass-produce precision plastic containers, consumer goods, and automotive parts. Featuring automated PLC controller modules, energy-efficient servo-motors, and rapid mold-clamping mechanisms.',
                'features' => [
                    'Microprocessor PLC Automatic Controller Hub',
                    'High-Torque Energy-Efficient Servo Motors',
                    'Heavy-Duty Toggle Clamping Mechanism',
                    'Hardened Bimetallic Barrel and Screw Set'
                ],
                'category' => 'Manufacturing Machinery',
            ],
            [
                'title' => 'Pump & Vacuum Equipment',
                'slug' => 'pump-vacuum-equipment',
                'image' => 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80',
                'short_description' => 'Heavy-duty centrifugal water pumps, vacuum pumps, and liquid transfer engineering units.',
                'long_description' => 'Heavy-duty industrial centrifugal water pumps and deep vacuum systems designed for chemical processing, water purification, civil engineering, and agricultural irrigation. Engineered with corrosive-resistant stainless steel impellers.',
                'features' => [
                    'Corrosion-Resistant Stainless Steel SUS316 Impeller',
                    'Heavy-Duty Cast Iron Pump Body Casting',
                    'Double-Mechanical Silicon Carbide Shaft Seals',
                    'High-Efficiency Class-F Insulation Induction Motor'
                ],
                'category' => 'Industrial Equipment',
            ],
            [
                'title' => 'Machine Tools',
                'slug' => 'machine-tools',
                'image' => 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
                'short_description' => 'Industrial CNC machining centers, precision metal lathes, and heavy metal cutters.',
                'long_description' => 'High-precision vertical CNC machining centers and tooling lathes built to shape metals, carbon-fibers, and plastics. Operating on multi-axis configurations, our setups support precision spindle speeds up to 12,000 RPM.',
                'features' => [
                    'High-Speed Spindle (12,000 RPM Option)',
                    '16-Tool Carousel Automatic Tool Changer (ATC)',
                    'High-Precision Linear Guideways on 3 Axes',
                    'Industrial Fanuc-Compatible CNC Controller Panel'
                ],
                'category' => 'Machinery',
            ]
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
