// import { motion } from "motion/react";
// import { Star, Quote } from "lucide-react";


// const testimonials = [
//   {
//     text: "Shorouq delivered our commercial tower ahead of schedule without compromising on quality. Their engineering team was responsive at every stage.",
//     image: "https://i.pravatar.cc/100?img=12",
//     name: "Ahmed El-Sayed",
//     role: "Real Estate Developer",
//   },
//   {
//     text: "From the first site visit to handover, communication was clear and professional. Highly recommend for large-scale projects.",
//     image: "https://i.pravatar.cc/100?img=32",
//     name: "Mona Farid",
//     role: "Project Owner, New Capital",
//   },
//   {
//     text: "The quality of concrete work and structural finishing exceeded our expectations. A team that truly understands precision.",
//     image: "https://i.pravatar.cc/100?img=5",
//     name: "Karim Abdallah",
//     role: "Facility Manager",
//   },
//   {
//     text: "Safety standards on site were impressive throughout. It's rare to find a contractor this disciplined about site management.",
//     image: "https://i.pravatar.cc/100?img=15",
//     name: "Sara Hamdy",
//     role: "Investor",
//   },
//   {
//     text: "We trusted Shorouq with our infrastructure expansion, and they handled the complexity of the project with real expertise.",
//     image: "https://i.pravatar.cc/100?img=8",
//     name: "Youssef Adel",
//     role: "Operations Director",
//   },
//   {
//     text: "Their design-build approach saved us months of coordination. One team, one clear plan, and a result we're proud of.",
//     image: "https://i.pravatar.cc/100?img=45",
//     name: "Nourhan Tarek",
//     role: "Client, Midtown Solo",
//   },
//   {
//     text: "Professional, punctual, and transparent about costs from day one. Exactly what you want in a construction partner.",
//     image: "https://i.pravatar.cc/100?img=22",
//     name: "Tamer Fathy",
//     role: "Business Owner",
//   },
//   {
//     text: "The renovation of our facility was handled with great care to minimize disruption to our daily operations.",
//     image: "https://i.pravatar.cc/100?img=51",
//     name: "Rania Ezzat",
//     role: "Property Manager",
//   },
//   {
//     text: "A reliable partner for our government infrastructure contract — delivered to spec and within budget.",
//     image: "https://i.pravatar.cc/100?img=60",
//     name: "Hossam Nabil",
//     role: "Government Liaison",
//   },
// ];

// const firstColumn = testimonials.slice(0, 3);
// const secondColumn = testimonials.slice(3, 6);
// const thirdColumn = testimonials.slice(6, 9);

// const headingContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };
// const wordVariant = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };



// function TestimonialCard({ text, image, name, role }) {
//   return (
//     <div className="p-8 rounded-2xl border border-[#6C757D]/15 bg-white shadow-md shadow-[#1F3888]/5 max-w-xs w-full">
//       <Quote className="w-6 h-6 text-[#D98A2B] mb-3" />
//       <div className="flex gap-0.5 mb-3">
//         {Array.from({ length: 5 }).map((_, i) => (
//           <Star key={i} className="w-3.5 h-3.5 fill-[#D98A2B] text-[#D98A2B]" />
//         ))}
//       </div>
//       <p className="text-[#1E2432] text-sm leading-relaxed">{text}</p>
//       <div className="flex items-center gap-3 mt-5">
//         <img
//           width={40}
//           height={40}
//           src={image}
//           alt={name}
//           className="h-10 w-10 rounded-full object-cover"
//         />
//         <div className="flex flex-col">
//           <div className="font-semibold text-[#1E2432] text-sm tracking-tight leading-5">
//             {name}
//           </div>
//           <div className="text-xs text-[#6C757D] leading-5 tracking-tight">
//             {role}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// function TestimonialsColumn({ testimonials, duration = 15, className = "" }) {
//   return (
//     <div className={className}>
//       <motion.div
//         animate={{ translateY: "-50%" }}
//         transition={{
//           duration,
//           repeat: Infinity,
//           ease: "linear",
//           repeatType: "loop",
//         }}
//         className="flex flex-col gap-6 pb-6"
//       >
//         {[0, 1].map((copy) => (
//           <div key={copy} className="flex flex-col gap-6">
//             {testimonials.map((t, i) => (
//               <TestimonialCard key={`${copy}-${i}`} {...t} />
//             ))}
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }



// export default function TestimonialsSection() {
//   return (
//     <section className="bg-[#F8F9FD] py-20 relative" id="testimonials">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={headingContainer}
//           className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
//         >
//           <motion.div variants={wordVariant} className="flex justify-center">
//             <span className="border border-[#1F3888]/30 text-[#1F3888] py-1 px-4 rounded-full text-sm font-medium">
//               Testimonials
//             </span>
//           </motion.div>

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E2432] tracking-tight mt-5 text-center overflow-hidden">
//             <motion.span variants={wordVariant} className="inline-block mr-2">
//               What Our
//             </motion.span>
//             <motion.span variants={wordVariant} className="inline-block text-[#1F3888]">
//               Clients Say
//             </motion.span>
//           </h2>

//           <motion.p variants={wordVariant} className="text-center mt-5 text-[#6C757D]">
//             Trusted by developers, investors, and businesses across Egypt.
//           </motion.p>
//         </motion.div>

//         <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
//           <TestimonialsColumn testimonials={firstColumn} duration={15} />
//           <TestimonialsColumn
//             testimonials={secondColumn}
//             duration={19}
//             className="hidden md:block"
//           />
//           <TestimonialsColumn
//             testimonials={thirdColumn}
//             duration={17}
//             className="hidden lg:block"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Shorouq delivered our commercial tower ahead of schedule without compromising on quality. Their engineering team was responsive at every stage.",
    image: "https://i.pravatar.cc/100?img=12",
    name: "Ahmed El-Sayed",
    role: "Real Estate Developer",
  },
  {
    text: "From the first site visit to handover, communication was clear and professional. Highly recommend for large-scale projects.",
    image: "https://i.pravatar.cc/100?img=32",
    name: "Mona Farid",
    role: "Project Owner, New Capital",
  },
  {
    text: "The quality of concrete work and structural finishing exceeded our expectations. A team that truly understands precision.",
    image: "https://i.pravatar.cc/100?img=5",
    name: "Karim Abdallah",
    role: "Facility Manager",
  },
  {
    text: "Safety standards on site were impressive throughout. It's rare to find a contractor this disciplined about site management.",
    image: "https://i.pravatar.cc/100?img=15",
    name: "Sara Hamdy",
    role: "Investor",
  },
  {
    text: "We trusted Shorouq with our infrastructure expansion, and they handled the complexity of the project with real expertise.",
    image: "https://i.pravatar.cc/100?img=8",
    name: "Youssef Adel",
    role: "Operations Director",
  },
  {
    text: "Their design-build approach saved us months of coordination. One team, one clear plan, and a result we're proud of.",
    image: "https://i.pravatar.cc/100?img=45",
    name: "Nourhan Tarek",
    role: "Client, Midtown Solo",
  },
  {
    text: "Professional, punctual, and transparent about costs from day one. Exactly what you want in a construction partner.",
    image: "https://i.pravatar.cc/100?img=22",
    name: "Tamer Fathy",
    role: "Business Owner",
  },
  {
    text: "The renovation of our facility was handled with great care to minimize disruption to our daily operations.",
    image: "https://i.pravatar.cc/100?img=51",
    name: "Rania Ezzat",
    role: "Property Manager",
  },
  {
    text: "A reliable partner for our government infrastructure contract — delivered to spec and within budget.",
    image: "https://i.pravatar.cc/100?img=60",
    name: "Hossam Nabil",
    role: "Government Liaison",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const wordVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// =========================================================
// TESTIMONIAL CARD
// =========================================================

function TestimonialCard({
  text,
  image,
  name,
  role,
}) {
  return (
    <div className="w-full max-w-xs rounded-2xl border border-[#3C3C3B]/15 bg-white p-8 shadow-md shadow-black/5">
      {/* Quote */}
      <Quote className="mb-3 h-6 w-6 text-[#2A317A]" />

      {/* Stars */}
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-[#2A317A] text-[#2A317A]"
          />
        ))}
      </div>

      {/* Testimonial */}
      <p className="text-sm leading-relaxed text-black">
        {text}
      </p>

      {/* Client */}
      <div className="mt-5 flex items-center gap-3">
        <img
          width={40}
          height={40}
          src={image}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <div className="text-sm font-semibold leading-5 tracking-tight text-black">
            {name}
          </div>

          <div className="text-xs leading-5 tracking-tight text-[#3C3C3B]">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================
// TESTIMONIAL COLUMN
// =========================================================

function TestimonialsColumn({
  testimonials,
  duration = 15,
  className = "",
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex flex-col gap-6"
          >
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={`${copy}-${i}`}
                {...t}
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// =========================================================
// TESTIMONIALS SECTION
// =========================================================

export default function TestimonialsSection() {
  return (
    <section
      className="relative bg-white py-20"
      id="testimonials"
    >
      <div className="container mx-auto px-4">
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={headingContainer}
          className="mx-auto flex max-w-[540px] flex-col items-center justify-center"
        >
          {/* Label */}
          <motion.div
            variants={wordVariant}
            className="flex justify-center"
          >
            <span className="rounded-full border border-[#2A317A]/30 px-4 py-1 text-sm font-medium text-[#2A317A]">
              Testimonials
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="mt-5 overflow-hidden text-center text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
            <motion.span
              variants={wordVariant}
              className="mr-2 inline-block"
            >
              What Our
            </motion.span>

            <motion.span
              variants={wordVariant}
              className="inline-block text-[#2A317A]"
            >
              Clients Say
            </motion.span>
          </h2>

          {/* Description */}
          <motion.p
            variants={wordVariant}
            className="mt-5 text-center text-[#3C3C3B]"
          >
            Trusted by developers, investors, and
            businesses across Egypt.
          </motion.p>
        </motion.div>

        {/* ===================================================
            TESTIMONIAL COLUMNS
        =================================================== */}

        <div className="mt-12 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={15}
          />

          <TestimonialsColumn
            testimonials={secondColumn}
            duration={19}
            className="hidden md:block"
          />

          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={17}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}