import { motion } from "motion/react";
import { Target, History } from "lucide-react";
import Counter from "../Counter/Counter";

// ==== Variants: حالات الأنيميشن بأسماء، بيشتركوا فيها الأب والأولاد ====
// الأب بيحدد التوقيت (staggerChildren)، كل ابن بيحدد شكل حركته هو بس
const headingContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const wordVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <section className="bg-[#F8F9FD] py-12">
     
      <div className="container flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-8 lg:px-16 m-auto">
        
        <motion.div
          className="content-side w-0 md:w-1/2 md:pr-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold mb-4 text-[#1E2432] overflow-hidden">
            
            <motion.span
              className="inline-block"
              variants={headingContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={wordVariant} className="inline-block mr-2">
                About
              </motion.span>
              <motion.span
                variants={wordVariant}
                className="inline-block text-[#1F3888]"
              >
                Us
              </motion.span>
            </motion.span>
          </h1>
          <p className="text-lg mb-6 text-[#6C757D]">
            We are a leading construction company with a commitment to
            excellence and innovation. Our team of experts is dedicated to
            delivering high-quality projects that exceed client expectations.
          </p>

         
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div
              className="bg-white rounded-xl shadow-md p-4"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Target className="w-6 h-6 text-[#FFBF00] mb-2" />
              <h4 className="font-bold text-[#1E2432] mb-1">Our Mission</h4>
              <p className="text-sm text-[#6C757D]">
                Building the future with precision and integrity.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-md p-4"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <History className="w-6 h-6 text-[#1F3888] mb-2" />
              <h4 className="font-bold text-[#1E2432] mb-1">Our History</h4>
              <p className="text-sm text-[#6C757D]">
                Years of experience shaping Egypt's skyline.
              </p>
            </motion.div>
          </div>

         
          <a
            href="/about"
            className="inline-block bg-[#FFBF00] text-[#1E2432] font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
           learn more
          </a>
        </motion.div>

        {/* الصورة - كولاج من 3 صور، كل واحدة بتقع من فوق بحركة فيها ارتداد (spring) */}
        <motion.div
          className="image-side relative w-0 md:w-1/2 h-[400px] md:h-[450px]"
          style={{ perspective: "1200px" }}
        >
         
          <motion.img
            src="/src/assets/images/DSC_3583.JPG"
            alt="مشروع الشروق الرئيسي"
            className="absolute top-0 left-0 w-4/5 h-4/5 object-cover rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: -250, rotate: -8 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 80, damping: 11, delay: 0 }}
            whileHover={{ scale: 1.03, zIndex: 20 }}
          />

         
          <motion.img
            src="/src/assets/images/27.jpg"
            alt="تفاصيل مشروع"
            className="absolute bottom-0 right-0 w-2/3 h-1/2 object-cover rounded-lg shadow-lg border-4 border-[#F8F9FD] cursor-pointer"
            initial={{ opacity: 0, y: -250, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 80, damping: 11, delay: 0.18 }}
            whileHover={{ scale: 1.05, zIndex: 20 }}
          />

          
          <motion.img
            src="/src/assets/images/freepik__take-the-angle-of-the-first-refrence-brthe-buildin__78631.png"
            alt="فريق العمل"
            className="absolute top-1/3 right-4 w-1/3 h-1/3 object-cover rounded-lg shadow-lg border-4 border-[#F8F9FD] cursor-pointer"
            initial={{ opacity: 0, y: -250, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 80, damping: 11, delay: 0.34 }}
            whileHover={{ scale: 1.08, zIndex: 20 }}
          />
        </motion.div>
      </div>

     
      <div className="container px-4 md:px-8 lg:px-16 m-auto mt-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {/* كارت 1 */}
          <motion.div
            className="number-item bg-white rounded-xl shadow-md py-6 px-3 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <Counter target={5000} suffix="+" />
            <p className="text-sm md:text-base text-[#6C757D] mt-2">
              MANPOWER
            </p>
          </motion.div>

          {/* كارت 2 */}
          <motion.div
            className="number-item bg-white rounded-xl shadow-md py-6 px-3 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Counter target={500} suffix="+" />
            <p className="text-sm md:text-base text-[#6C757D] mt-2">
              HEAVY EQUIPMENT
            </p>
          </motion.div>

          {/* كارت 3 */}
          <motion.div
            className="number-item bg-white rounded-xl shadow-md py-6 px-3 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Counter target={1} suffix="M" />
            <p className="text-sm md:text-base text-[#6C757D] mt-2">
              CONCRETE
            </p>
          </motion.div>

          {/* كارت 4 */}
          <motion.div
            className="number-item bg-white rounded-xl shadow-md py-6 px-3 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Counter target={63} suffix="+" />
            <p className="text-sm md:text-base text-[#6C757D] mt-2">
              ACTIVE PROJECTS
            </p>
          </motion.div>

          {/* كارت 5 */}
          <motion.div
            className="number-item bg-white rounded-xl shadow-md py-6 px-3 text-center col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Counter target={42} suffix="" />
            <p className="text-sm md:text-base text-[#6C757D] mt-2">
              DELIVERED PROJECTS
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}