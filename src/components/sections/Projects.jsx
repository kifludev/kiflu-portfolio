import { FaGithub } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";
import application from "../../assets/images/Application.png";
import booking from "../../assets/images/booking.png";
import admin from "../../assets/images/AdminDashboard.png";
import vacancy from "../../assets/images/vacancy.png";
import users from "../../assets/images/users.png";
export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">E-Commerce App</h3>

              <p className="text-gray-400">
                A fully functional e-commerce application built using
                localStorage. Users can browse products, add items to cart, view
                total items in a dynamic cart counter, and manage cart items
                with real-time updates.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["React", "JavaScript", "LocalStorage", "Tailwindcss"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              <div className="flex items-center gap-4 mt-4">
                {/* GitHub Icon Link */}
                <a
                  href="https://kifludev.github.io/Ecommerce-App/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-white transition-colors"
                >
                  <div>
                    <span>View projects →</span> <FaGithub />
                  </div>
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              {/* PROJECT IMAGE */}
              <img
                src={application}
                alt="Atse Zeriakob Youth Center Project"
                className="w-full h-48 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Youth Center Management System
                </h3>

                <p className="text-gray-400 text-sm">
                  A full-featured system for Atse Zeriakob Youth Center
                  including hall, basketball, volleyball booking, vacancy
                  application, and admin dashboard for managing users and
                  reviewing CVs.
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {["React", "Node.js", "MySQL", "Tailwindcss"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-4 mt-4">
                  {/* GitHub */}
               <a
                  href="https://kifludev.github.io/AsteZeriakobDycenterwebProject/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-white transition-colors"
                >
                  <div>
                    <span>View projects →</span> <FaGithub />
                  </div>
                </a>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              {/* PROJECT IMAGE */}
              <img
                src={booking}
                alt="Atse Zeriakob Youth Center Project"
                className="w-full h-48 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Youth Center Management System
                </h3>

                <p className="text-gray-400 text-sm">
                  A full-featured system for Atse Zeriakob Youth Center
                  including hall, basketball, volleyball booking, vacancy
                  application, and admin dashboard for managing users and
                  reviewing CVs.
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {["React", "Node.js", "MYSQL", "TailwindCCS"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-4 mt-4">
                  {/* GitHub */}
                  <a
                  href="https://kifludev.github.io/AsteZeriakobDycenterwebProject/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-white transition-colors"
                >
                  <div>
                    <span>View projects →</span> <FaGithub />
                  </div>
                </a>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              {/* PROJECT IMAGE */}
              <img
                src={admin}
                alt="Atse Zeriakob Youth Center Project"
                className="w-full h-48 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Youth Center Management System
                </h3>

                <p className="text-gray-400 text-sm">
                  A full-featured system for Atse Zeriakob Youth Center
                  including hall, basketball, volleyball booking, vacancy
                  application, and admin dashboard for managing users and
                  reviewing CVs.
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {["React", "Node.js", "MySQL", "Tailwindcss"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-4 mt-4">
                  {/* GitHub */}
                   <a
                  href="https://kifludev.github.io/AsteZeriakobDycenterwebProject/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-white transition-colors"
                >
                  <div>
                    <span>View projects →</span> <FaGithub />
                  </div>
                </a>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              {/* PROJECT IMAGE */}
              <img
                src={users}
                alt="Atse Zeriakob Youth Center Project"
                className="w-full h-48 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Youth Center Management System
                </h3>

                <p className="text-gray-400 text-sm">
                  A full-featured system for Atse Zeriakob Youth Center
                  including hall, basketball, volleyball booking, vacancy
                  application, and admin dashboard for managing users and
                  reviewing CVs.
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {["React", "Node.js", "MySQL", "Tailwindcss"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-4 mt-4">
                  {/* GitHub */}
                  <a
                  href="https://kifludev.github.io/AsteZeriakobDycenterwebProject/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-white transition-colors"
                >
                  <div>
                    <span>View projects →</span> <FaGithub />
                  </div>
                </a>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              {/* PROJECT IMAGE */}
              <img
                src={vacancy}
                alt="Atse Zeriakob Youth Center Project"
                className="w-full h-48 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Youth Center Management System
                </h3>

                <p className="text-gray-400 text-sm">
                  A full-featured system for Atse Zeriakob Youth Center
                  including hall, basketball, volleyball booking, vacancy
                  application, and admin dashboard for managing users and
                  reviewing CVs.
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {["React", "Node.js", "MySQL", "Tailwindcss"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-4 mt-4">
                  {/* GitHub */}
                   <a
                  href="https://kifludev.github.io/AsteZeriakobDycenterwebProject/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-white transition-colors"
                >
                  <div>
                    <span>View projects →</span> <FaGithub />
                  </div>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
