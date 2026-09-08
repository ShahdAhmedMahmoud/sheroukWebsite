// import {
//   HardHat,
//   ClipboardList,
//   Building2,
//   Hammer,
//   Route,
//   Wrench,
// } from "lucide-react";
// import ServiceCard from "../ServiceCard/ServiceCard";

// // ==== البيانات: array فيه object لكل خدمة ====
// // لاحظي: Icon هنا مش نص، هو الـ component نفسه بتاع lucide-react
// // direction بتحدد الكارت ده هيدخل من فين (top / right / left / bottom)
// const services = [
//   {
//     Icon: HardHat,
//     title: "General Contracting",
//     description:
//       "End-to-end construction management for residential, commercial, and industrial projects.",
//     direction: "top",
//   },
//   {
//     Icon: ClipboardList,
//     title: "Project Management",
//     description:
//       "Professional oversight ensuring on-time, on-budget delivery with rigorous quality standards.",
//     direction: "right",
//   },
//   {
//     Icon: Building2,
//     title: "Design & Build",
//     description:
//       "Integrated design-build solutions from concept to completion under one roof.",
//     direction: "bottom",
//   },
//   {
//     Icon: Hammer,
//     title: "Renovation & Restoration",
//     description:
//       "Expert restoration of heritage buildings and modern renovation of existing structures.",
//     direction: "left",
//   },
//   {
//     Icon: Route,
//     title: "Infrastructure",
//     description:
//       "Roads, bridges, utilities, and large-scale civil engineering projects across Egypt.",
//     direction: "top",
//   },
//   {
//     Icon: Wrench,
//     title: "MEP Systems",
//     description:
//       "Complete mechanical, electrical, and plumbing engineering and installation.",
//     direction: "right",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="bg-[#F8F9FD] py-16">
//       <div className="container m-auto px-4 md:px-8 lg:px-16">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-[#1E2432]">
//             Our <span className="text-[#1F3888]">Services</span>
//           </h2>
//           <p className="text-[#6C757D] mt-2">
//             Comprehensive construction solutions tailored to every project
//           </p>
//         </div>

//         {/* ==== هنا الـ .map() اللي أجّلناه ====
//             بندوّر على كل عنصر في services، وبنحوّله لـ ServiceCard
//             index هنا بتاعة .map() نفسها - بنستخدمها لحساب الـ stagger delay */}
//         <div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//           style={{ perspective: "1500px" }}
//         >
//           {services.map((service, index) => (
//             <ServiceCard
//               key={service.title}
//               Icon={service.Icon}
//               title={service.title}
//               description={service.description}
//               index={index}
//               direction={service.direction}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import {
  HardHat,
  ClipboardList,
  Building2,
  Hammer,
  Route,
  Wrench,
} from "lucide-react";
import ServiceCard from "../ServiceCard/ServiceCard";

// ==== البيانات: array فيه object لكل خدمة ====
// لاحظي: Icon هنا مش نص، هو الـ component نفسه بتاع lucide-react
// direction بتحدد الكارت ده هيدخل من فين (top / right / left / bottom)
const services = [
  {
    Icon: HardHat,
    title: "General Contracting",
    description:
      "End-to-end construction management for residential, commercial, and industrial projects.",
    direction: "top",
    image:
      "https://images.unsplash.com/photo-1653280662710-1cac52cde6d7?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    Icon: ClipboardList,
    title: "Project Management",
    description:
      "Professional oversight ensuring on-time, on-budget delivery with rigorous quality standards.",
    direction: "right",
    image:
      "https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    Icon: Building2,
    title: "Design & Build",
    description:
      "Integrated design-build solutions from concept to completion under one roof.",
    direction: "bottom",
    image:
      "https://images.unsplash.com/photo-1773637779568-8bf920d848e6?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    Icon: Hammer,
    title: "Renovation & Restoration",
    description:
      "Expert restoration of heritage buildings and modern renovation of existing structures.",
    direction: "left",
    image:
      "https://images.unsplash.com/photo-1690122254245-f85d6e738705?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    Icon: Route,
    title: "Infrastructure",
    description:
      "Roads, bridges, utilities, and large-scale civil engineering projects across Egypt.",
    direction: "top",
    image:
      "https://images.unsplash.com/photo-1715199399795-73deba5bee63?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    Icon: Wrench,
    title: "MEP Systems",
    description:
      "Complete mechanical, electrical, and plumbing engineering and installation.",
    direction: "right",
    image:
      "https://images.unsplash.com/photo-1744113439895-14529bb2f6e6?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F8F9FD] py-16">
      <div className="container m-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E2432]">
            Our <span className="text-[#1F3888]">Services</span>
          </h2>
          <p className="text-[#6C757D] mt-2">
            Comprehensive construction solutions tailored to every project
          </p>
        </div>

        {/* ==== هنا الـ .map() اللي أجّلناه ====
            بندوّر على كل عنصر في services، وبنحوّله لـ ServiceCard
            index هنا بتاعة .map() نفسها - بنستخدمها لحساب الـ stagger delay */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: "1500px" }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              Icon={service.Icon}
              title={service.title}
              description={service.description}
              index={index}
              direction={service.direction}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}