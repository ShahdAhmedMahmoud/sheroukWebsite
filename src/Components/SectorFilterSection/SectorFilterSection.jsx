

import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  HardHat,
  Building2,
  Route,
  Boxes,
  ChevronLeft,
  ChevronRight,
  Search,
  LayoutGrid,
  Map as MapIcon,
  MapPin,
  Calendar,
  X,
  Plus,
  Minus,
  Crosshair,
  Layers,
} from "lucide-react";
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { normalizeStatus, projectsWithDetails } from "../../data/projectsData";

const categories = [
  { label: "All", icon: Boxes },
  { label: "Infrastructure", icon: HardHat },
  { label: "Commercial Buildings", icon: Building2 },
  { label: "Road And Generalist", icon: Route },
];

const statusFilters = ["All", "Ongoing", "Finished"];

const ITEMS_PER_PAGE = 6;

const MAP_DEFAULT_CENTER = [26.8206, 30.8025];
const MAP_DEFAULT_ZOOM = 6;

/**
 * Basemaps — no CARTO API key required.
 *
 * Streets:
 * Real OpenStreetMap tiles.
 *
 * Light:
 * Same real OpenStreetMap tiles with a light visual filter.
 *
 * Satellite:
 * Real Esri World Imagery.
 *
 * No CARTO tiles are used anywhere.
 */
const BASEMAPS = {
  streets: {
    label: "Streets",
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19,
  },

  light: {
    label: "Light",
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19,
    className: "light-basemap",
  },

  satellite: {
    label: "Satellite",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "Imagery &copy; Esri, Maxar, Earthstar Geographics",
    maxZoom: 19,
  },
};

// const projects = [
//   {
//     id: 1,
//     title: "THE GENERAL LOCATION OF THE FINANCIAL DISTRICT SQUARE",
//     status: "ongoing",
//     category: "Infrastructure",
//     src: "src/assets/images/THE_GENERAL_LOCATION_OF_THE FINANCIAL_DISTRICT_SQUARE.png",
//   },
//   {
//     id: 2,
//     title: "SALLUM LAND PORT",
//     status: "ongoing",
//     category: "Infrastructure",
//     src: "src/assets/images/SALLUM_LAND_PORT.png",
//   },
//   {
//     id: 3,
//     title: "THE GENERAL SITE OF BIN ZAYED AXIS",
//     status: "Finished",
//     category: "Infrastructure",
//     src: "src/assets/images/THE_GENERAL_SITE_OF_BIN_ZAYED_AXIS.png",
//   },
//   {
//     id: 4,
//     title: "MIDTOWN CONDO",
//     status: "ongoing",
//     category: "Infrastructure",
//     src: "src/assets/images/MIDTOWN_CONDO.png",
//   },
//   {
//     id: 5,
//     title: "MIDTOWN SOLO",
//     status: "ongoing",
//     category: "Infrastructure",
//     src: "src/assets/images/MIDTOWN_SOLO.png",
//   },
//   {
//     id: 6,
//     title: "FUSTAT PARK",
//     status: "Finished",
//     category: "Infrastructure",
//     src: "src/assets/images/Fustat_Park.png",
//   },
//   {
//     id: 7,
//     title: "GALALA TOURIST RESORT",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/1.png",
//   },
//   {
//     id: 8,
//     title: "THE ROYAL COMPOUND TOURIST RESORT",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/2.png",
//   },
//   {
//     id: 9,
//     title: "20 THOUSAND BUILDINGS IN THE NEW CAPITAL",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/3.png",
//   },
//   {
//     id: 10,
//     title: "Shebin El-Qanater Hospital",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/4.png",
//   },
//   {
//     id: 11,
//     title: "R3 RESIDENTIAL COMPOUND",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/5.png",
//   },
//   {
//     id: 12,
//     title: "GAL-DABAA NUCLEAR POWER PLANT",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/6.png",
//   },
//   {
//     id: 13,
//     title: "WADI ABU AL-DARAJ CITY",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/7.png",
//   },
//   {
//     id: 14,
//     title: "Dabaa residential areas",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/8.png",
//   },
//   {
//     id: 15,
//     title: "GALALA TOURIST RESORT",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/9.png",
//   },
//   {
//     id: 16,
//     title: "TOLIP EL ALAMEIN CITY HOTEL",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/10.png",
//   },
//   {
//     id: 17,
//     title: "THE GALALA'S PLATEAU",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/11.png",
//   },
//   {
//     id: 18,
//     title: "Administrative commercial buildings next to the family garden",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/12.png",
//   },
//   {
//     id: 19,
//     title: "ADMINISTRATIVE BUILDING (CS 10)",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/13.png",
//   },
//   {
//     id: 20,
//     title: "THE MAIN BUS STATION OF NEW ADMIN.CAPITAL",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/14.png",
//   },
//   {
//     id: 21,
//     title: "ARAB INTERNATIONAL BANK HEADQUARTERS",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/15.png",
//   },
//   {
//     id: 22,
//     title: "AMERICAN UNIVERSITY MALL",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/16.png",
//   },
//   {
//     id: 23,
//     title: "STRIP MALL & FASHION HUB",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/17.png",
//   },
//   {
//     id: 24,
//     title: "ALMAZA MALL",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/18.png",
//   },
//   {
//     id: 25,
//     title: "THE CULTURAL CENTER IN THE MOSQUE OF EGYPT",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/19.png",
//   },
//   {
//     id: 26,
//     title: "SHEBEEN EL KOM MALL",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/20.png",
//   },
//   {
//     id: 27,
//     title: "ADMINISTRATIVE BUILDINGS IN (90) SOUTH",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/21.png",
//   },
//   {
//     id: 28,
//     title: "TRUE GYM BUILDING",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/22.png",
//   },
//   {
//     id: 29,
//     title: "CAIRO GATE COMPOUND MOSQUE",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/23.png",
//   },
//   {
//     id: 30,
//     title: "ADMINISTRATIVE BUILDING (CS 20)",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/24.png",
//   },
//   {
//     id: 31,
//     title: "FAIR ZONE",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/25.png",
//   },
//   {
//     id: 32,
//     title: "NEW DAR GROUP HEADQUARTERS",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/26.png",
//   },
//   {
//     id: 33,
//     title: "LOTUS MALL",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/27.png",
//   },
//   {
//     id: 34,
//     title: "DURRAT ALKARAZ RESORT",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/28.png",
//   },
//   {
//     id: 35,
//     title: "DORRA ALKARZ MALL 2",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/29.png",
//   },
//   {
//     id: 36,
//     title: "MILITARY SIGNAL INSTITUTE",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/30.png",
//   },
//   {
//     id: 37,
//     title: "ASSIUT NATIONAL UNIVERSITY",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/31.png",
//   },
//   {
//     id: 38,
//     title: "DORRA ALKARZ MALL 2",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/32.png",
//   },
//   {
//     id: 39,
//     title: "EGYPT JAPAN UNIVERSITY",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/33.png",
//   },
//   {
//     id: 40,
//     title: "ASSIUT UNIVERSITY OF TECHNOLOGY",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/34.png",
//   },
//   {
//     id: 41,
//     title: "Port Said University",
//     status: "Ongoing",
//     category: "Commercial Buildings",
//     src: "src/assets/images/commerical/35.png",
//   },
// ];


// const projectDetails = {
//   1: {
//     location: "Central Business District, New Administrative Capital",
//     year: 2023,
//     lat: 30.0281,
//     lng: 31.7361,
//   },
//   2: {
//     location: "Salloum border crossing, Matrouh",
//     year: 2021,
//     lat: 31.5645,
//     lng: 25.1483,
//   },
//   3: {
//     location: "Mohamed Bin Zayed Axis, New Cairo",
//     year: 2022,
//     lat: 30.0397,
//     lng: 31.5083,
//   },
//   4: {
//     location: "District R7, New Administrative Capital",
//     year: 2023,
//     lat: 30.0035,
//     lng: 31.6913,
//   },
//   5: {
//     location: "District R8, New Administrative Capital",
//     year: 2024,
//     lat: 29.9972,
//     lng: 31.7032,
//   },
//   6: {
//     location: "Ain El Sira, Old Cairo",
//     year: 2024,
//     lat: 30.009,
//     lng: 31.2427,
//   },
//   7: {
//     location: "El Galala City, Suez",
//     year: 2022,
//     lat: 29.4703,
//     lng: 32.3453,
//   },
//   8: {
//     location: "Ain Sokhna, Suez",
//     year: 2023,
//     lat: 29.5842,
//     lng: 32.3199,
//   },
//   9: {
//     location: "District R3, New Administrative Capital",
//     year: 2021,
//     lat: 30.01,
//     lng: 31.71,
//   },
//   10: {
//     location: "Shebin El-Qanater, Qalyubia",
//     year: 2022,
//     lat: 30.3092,
//     lng: 31.3233,
//   },
//   11: {
//     location: "District R3, New Administrative Capital",
//     year: 2023,
//     lat: 30.0125,
//     lng: 31.7189,
//   },
//   12: {
//     location: "El Dabaa, Matrouh",
//     year: 2020,
//     lat: 31.0281,
//     lng: 28.4653,
//   },
//   13: {
//     location: "Wadi Abu Daraj, Suez",
//     year: 2023,
//     lat: 29.3145,
//     lng: 32.5347,
//   },
//   14: {
//     location: "El Dabaa, Matrouh",
//     year: 2022,
//     lat: 31.0186,
//     lng: 28.4831,
//   },
//   15: {
//     location: "El Galala City, Suez",
//     year: 2021,
//     lat: 29.4822,
//     lng: 32.3311,
//   },
//   16: {
//     location: "New Alamein City, Matrouh",
//     year: 2022,
//     lat: 30.8306,
//     lng: 28.9611,
//   },
//   17: {
//     location: "El Galala Plateau, Suez",
//     year: 2020,
//     lat: 29.4905,
//     lng: 32.3169,
//   },
//   18: {
//     location: "Family Park, Fifth Settlement, New Cairo",
//     year: 2024,
//     lat: 30.0179,
//     lng: 31.4602,
//   },
//   19: {
//     location: "Government District, New Administrative Capital",
//     year: 2023,
//     lat: 30.0245,
//     lng: 31.7472,
//   },
//   20: {
//     location: "Capital Bus Terminal, New Administrative Capital",
//     year: 2022,
//     lat: 30.0043,
//     lng: 31.8137,
//   },
//   21: {
//     location: "Fifth Settlement, New Cairo",
//     year: 2021,
//     lat: 30.0296,
//     lng: 31.4711,
//   },
//   22: {
//     location: "AUC area, New Cairo",
//     year: 2020,
//     lat: 30.0206,
//     lng: 31.4996,
//   },
//   23: {
//     location: "Sheikh Zayed City, Giza",
//     year: 2023,
//     lat: 30.0469,
//     lng: 30.9743,
//   },
//   24: {
//     location: "Almaza, Heliopolis, Cairo",
//     year: 2022,
//     lat: 30.0894,
//     lng: 31.3699,
//   },
//   25: {
//     location: "Misr Mosque, New Administrative Capital",
//     year: 2024,
//     lat: 30.0148,
//     lng: 31.7803,
//   },
//   26: {
//     location: "Shebeen El Kom, Menoufia",
//     year: 2021,
//     lat: 30.5526,
//     lng: 31.0083,
//   },
//   27: {
//     location: "90th Street South, New Cairo",
//     year: 2022,
//     lat: 30.0142,
//     lng: 31.4413,
//   },
//   28: {
//     location: "Sheikh Zayed City, Giza",
//     year: 2023,
//     lat: 30.0391,
//     lng: 30.9765,
//   },
//   29: {
//     location: "Cairo Gate, Cairo-Alexandria Desert Road, Sheikh Zayed",
//     year: 2022,
//     lat: 30.0546,
//     lng: 31.0002,
//   },
//   30: {
//     location: "Government District, New Administrative Capital",
//     year: 2024,
//     lat: 30.0262,
//     lng: 31.7545,
//   },
//   31: {
//     location:
//       "Egypt International Exhibition Center, New Administrative Capital",
//     year: 2023,
//     lat: 30.0562,
//     lng: 31.7318,
//   },
//   32: {
//     location: "Fifth Settlement, New Cairo",
//     year: 2021,
//     lat: 30.0255,
//     lng: 31.4864,
//   },
//   33: {
//     location: "First Settlement, New Cairo",
//     year: 2020,
//     lat: 30.0001,
//     lng: 31.4485,
//   },
//   34: {
//     location: "Ain Sokhna, Suez",
//     year: 2022,
//     lat: 29.5581,
//     lng: 32.3541,
//   },
//   35: {
//     location: "Ain Sokhna, Suez",
//     year: 2023,
//     lat: 29.5612,
//     lng: 32.3505,
//   },
//   36: {
//     location: "Nasr City, Cairo",
//     year: 2021,
//     lat: 30.0761,
//     lng: 31.3477,
//   },
//   37: {
//     location: "Assiut",
//     year: 2023,
//     lat: 27.2043,
//     lng: 31.1687,
//   },
//   38: {
//     location: "Ain Sokhna, Suez",
//     year: 2024,
//     lat: 29.5535,
//     lng: 32.3612,
//   },
//   39: {
//     location: "New Borg El Arab, Alexandria",
//     year: 2020,
//     lat: 30.8659,
//     lng: 29.569,
//   },
//   40: {
//     location: "Assiut",
//     year: 2024,
//     lat: 27.1843,
//     lng: 31.1547,
//   },
//   41: {
//     location: "Port Said",
//     year: 2022,
//     lat: 31.2585,
//     lng: 32.2841,
//   },
// };

// const projectsWithDetails = projects.map((p) => ({
//   ...p,
//   ...(projectDetails[p.id] || {}),
// }));

// function normalizeStatus(status) {
//   const s = status.toLowerCase();

//   if (s === "finished") return "Finished";

//   return "Ongoing";
// }

function ProjectCard({ project }) {
  return (


    <Link to={`/projects/${project.id}`} className="block">

    <motion.div
      layout
      initial={{ opacity: 0, y: 40, rotate: -1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      exit={{ opacity: 0, y: -20, rotate: 1.5 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[#1F3888]/10 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {[
        "top-2 left-2",
        "top-2 right-2",
        "bottom-2 left-2",
        "bottom-2 right-2",
      ].map((pos) => (
        <span
          key={pos}
          className={`absolute ${pos} w-1.5 h-1.5 rounded-full bg-[#1E2432]/20 z-20`}
        />
      ))}

      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.src}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,191,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,191,0,0.25) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        <span
          className={`absolute top-3 right-3 z-20 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${
            normalizeStatus(project.status) === "Finished"
              ? "bg-[#FFBF00] text-[#1E2432]"
              : "bg-[#1E2432]/80 text-white backdrop-blur-sm"
          }`}
        >
          {normalizeStatus(project.status)}
        </span>

        {project.year && (
          <span className="absolute top-3 left-3 z-20 flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/85 text-[#1E2432] backdrop-blur-sm">
            <Calendar className="w-3 h-3" />
            {project.year}
          </span>
        )}
      </div>

      <div className="p-4">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1F3888]">
          {project.category}
        </span>

        <h3 className="text-sm font-bold text-[#1E2432] uppercase leading-snug mt-1">
          {project.title}
        </h3>

        {(project.location || project.year) && (
          <div className="flex items-center flex-wrap gap-x-4 gap-y-1 mt-3 pt-3 border-t border-[#6C757D]/15 text-xs text-[#6C757D]">
            {project.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#1F3888]" />
                {project.location}
              </span>
            )}

            {project.year && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#1F3888]" />
                {project.year}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>

    </Link>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const windowSize = 5;

  let start = Math.max(
    1,
    currentPage - Math.floor(windowSize / 2)
  );

  const end = Math.min(
    totalPages,
    start + windowSize - 1
  );

  start = Math.max(
    1,
    end - windowSize + 1
  );

  const pageNumbers = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-10 sm:mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-[#6C757D]/20 text-[#6C757D] transition-colors hover:border-[#1F3888]/40 hover:text-[#1F3888] disabled:opacity-30 disabled:pointer-events-none"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {start > 1 && (
        <span className="px-1 text-[#6C757D]">
          …
        </span>
      )}

      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          aria-label={`Go to page ${num}`}
          aria-current={num === currentPage}
          className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${
            num === currentPage
              ? "bg-[#1F3888] text-white"
              : "bg-white text-[#6C757D] border border-[#6C757D]/20 hover:border-[#1F3888]/40"
          }`}
        >
          {num}
        </button>
      ))}

      {end < totalPages && (
        <span className="px-1 text-[#6C757D]">
          …
        </span>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-[#6C757D]/20 text-[#6C757D] transition-colors hover:border-[#1F3888]/40 hover:text-[#1F3888] disabled:opacity-30 disabled:pointer-events-none"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

const mapStyles = `
.sector-map .leaflet-container {
  background: #eef1f7;
  font-family: inherit;
}

.sector-map .leaflet-tile.light-basemap {
  filter: grayscale(0.8) brightness(1.08) contrast(0.92);
}

.sector-map .leaflet-control-attribution {
  background: rgba(255, 255, 255, 0.88);
  color: #6C757D;
  font-size: 10px;
  border-radius: 6px 0 0 0;
}

.sector-map .leaflet-control-attribution a {
  color: #1F3888;
}

.sector-map .leaflet-tooltip.sector-tooltip {
  background: #1E2432;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(30, 36, 50, 0.25);
  white-space: normal;
  max-width: 180px;
}

.sector-map .leaflet-tooltip.sector-tooltip::before {
  border-top-color: #1E2432;
}








.sector-marker {
  position: relative;
  width: 34px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.sector-marker__pin {
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50% 50% 50% 0;
  background: var(--marker-color);
  border: 3px solid #ffffff;
  box-shadow:
    0 2px 6px rgba(30, 36, 50, 0.35),
    0 5px 14px rgba(30, 36, 50, 0.25);
  transform: rotate(-45deg);
  transition: all 0.2s ease;
}

.sector-marker__pin-inner {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ffffff;
  z-index: 2;
  transition: transform 0.2s ease;
}

.sector-marker:hover .sector-marker__pin {
  transform: rotate(-45deg) scale(1.12);
}

.sector-marker.is-selected .sector-marker__pin {
  transform: rotate(-45deg) scale(1.18);
  box-shadow:
    0 3px 8px rgba(30, 36, 50, 0.4),
    0 0 0 4px rgba(31, 56, 136, 0.18);
}






.sector-cluster {
  position: relative;
  width: 54px;
  height: 64px;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  cursor: pointer;
}



.sector-cluster__pin {
  position: absolute;

  top: 0;
  left: 50%;

  width: 48px;
  height: 48px;

  transform: translateX(-50%) rotate(-45deg);

  border-radius: 50% 50% 50% 0;

  background: #1F3888;

  border: 4px solid #ffffff;

  box-shadow:
    0 4px 10px rgba(30, 36, 50, 0.35),
    0 6px 16px rgba(30, 36, 50, 0.22);

  transition:
    transform 0.2s ease,
    background 0.2s ease;
}




.sector-cluster__content {
  position: absolute;

  top: 12px;
  left: 50%;

  transform: translateX(-50%);

  z-index: 2;

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #ffffff;

  color: #1F3888;

  font-size: 15px;
  font-weight: 800;

  line-height: 1;

  box-shadow:
    0 1px 4px rgba(30, 36, 50, 0.2);

  transition: transform 0.2s ease;
}




.sector-cluster:hover .sector-cluster__pin {
  transform: translateX(-50%) rotate(-45deg) scale(1.08);

  background: #162b6d;
}

.sector-cluster:hover .sector-cluster__content {
  transform: translateX(-50%) scale(1.05);
}




.sector-cluster.is-large {
  width: 62px;
  height: 72px;
}

.sector-cluster.is-large .sector-cluster__pin {
  width: 56px;
  height: 56px;
}

.sector-cluster.is-large .sector-cluster__content {
  top: 14px;

  width: 34px;
  height: 34px;

  font-size: 17px;
}




.sector-cluster.is-xl {
  width: 70px;
  height: 80px;
}

.sector-cluster.is-xl .sector-cluster__pin {
  width: 64px;
  height: 64px;
}

.sector-cluster.is-xl .sector-cluster__content {
  top: 16px;

  width: 38px;
  height: 38px;

  font-size: 19px;
}




@media (prefers-reduced-motion: reduce) {
  .sector-cluster__pin,
  .sector-cluster__content {
    transition: none;
  }
}













@keyframes sector-pulse {
  0% {
    transform: scale(0.7);
    opacity: 0.5;
  }

  70% {
    transform: scale(1.6);
    opacity: 0;
  }

  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sector-marker__pulse {
    animation: none;
  }
}
`;

function FlyToMarker({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(
        position,
        Math.max(map.getZoom(), 11),
        {
          duration: 0.9,
        }
      );
    }
  }, [position, map]);

  return null;
}

function FitToProjects({ points }) {
  const map = useMap();

  const key = points
    .map((p) => p.join(","))
    .join("|");

  useEffect(() => {
    if (!points.length) return;

    if (points.length === 1) {
      map.setView(
        points[0],
        14,
        {
          animate: true,
        }
      );

      return;
    }

    map.fitBounds(
      points,
      {
        padding: [50, 50],
        maxZoom: 13,
      }
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, map]);

  return null;
}

function MapControls() {
  const map = useMap();
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    L.DomEvent.disableClickPropagation(
      ref.current
    );

    L.DomEvent.disableScrollPropagation(
      ref.current
    );
  }, []);

  const btn =
    "flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/95 text-[#1E2432] shadow-md border border-[#1E2432]/10 hover:bg-[#1F3888] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBF00]";

  return (
    <div
      ref={ref}
      className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[1000] flex flex-col gap-1.5 sm:gap-2"
    >
      <button
        onClick={() => map.zoomIn()}
        aria-label="Zoom in"
        className={btn}
      >
        <Plus className="w-4 h-4" />
      </button>

      <button
        onClick={() => map.zoomOut()}
        aria-label="Zoom out"
        className={btn}
      >
        <Minus className="w-4 h-4" />
      </button>

      <button
        onClick={() =>
          map.setView(
            MAP_DEFAULT_CENTER,
            MAP_DEFAULT_ZOOM,
            {
              animate: true,
            }
          )
        }
        aria-label="Reset the map view"
        className={btn}
      >
        <Crosshair className="w-4 h-4" />
      </button>
    </div>
  );
}

function MapBasemapSwitcher({ value, onChange }) {
  return (
    <div className="flex items-center gap-1 rounded-lg bg-white/95 p-1 shadow-md border border-[#1E2432]/10">
      <Layers className="w-3.5 h-3.5 ml-1 text-[#6C757D] shrink-0" />

      {Object.entries(BASEMAPS).map(
        ([key, map]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            aria-pressed={value === key}
            className={`px-2 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold transition-colors ${
              value === key
                ? "bg-[#1F3888] text-white"
                : "text-[#6C757D] hover:text-[#1F3888]"
            }`}
          >
            {map.label}
          </button>
        )
      )}
    </div>
  );
}

function createMarkerIcon(isFinished, isSelected) {
  const color = isFinished ? "#FEC419" : "#1F3888";

  return L.divIcon({
    className: "",
    html: `
      <div
        class="sector-marker ${isSelected ? "is-selected" : ""}"
        style="--marker-color:${color}"
      >
        <span class="sector-marker__pin"></span>
        <span class="sector-marker__pin-inner"></span>
      </div>
    `,
    iconSize: [34, 44],
    iconAnchor: [17, 42],
    tooltipAnchor: [0, -34],
  });
}

// function createClusterIcon(count) {
//   let sizeClass = "";

//   if (count >= 15) {
//     sizeClass = "is-xl";
//   } else if (count >= 8) {
//     sizeClass = "is-large";
//   }

//   return L.divIcon({
//     className: "",
//     html: `
//       <div class="sector-cluster ${sizeClass}">
//         <span class="sector-cluster__count">${count}</span>
//       </div>
//     `,
//     iconSize: count >= 15 ? [70, 70] : count >= 8 ? [62, 62] : [54, 54],
//     iconAnchor:
//       count >= 15
//         ? [35, 35]
//         : count >= 8
//           ? [31, 31]
//           : [27, 27],
//   });
// }


function createClusterIcon(count) {
  let sizeClass = "";

  if (count >= 15) {
    sizeClass = "is-xl";
  } else if (count >= 8) {
    sizeClass = "is-large";
  }

  const size =
    count >= 15
      ? 70
      : count >= 8
        ? 62
        : 54;

  return L.divIcon({
    className: "",
    html: `
      <div class="sector-cluster ${sizeClass}">
        <span class="sector-cluster__pin"></span>

        <span class="sector-cluster__content">
          ${count}
        </span>
      </div>
    `,
    iconSize: [size, size + 10],
    iconAnchor: [size / 2, size],
  });
}


function ProjectClusters({
  projects,
  selectedProject,
  onSelectProject,
}) {
  const map = useMap();
  const [mapZoom, setMapZoom] = useState(map.getZoom());

  useEffect(() => {
    const updateZoom = () => {
      setMapZoom(map.getZoom());
    };

    map.on("zoomend", updateZoom);
    map.on("moveend", updateZoom);

    return () => {
      map.off("zoomend", updateZoom);
      map.off("moveend", updateZoom);
    };
  }, [map]);

  const clusters = useMemo(() => {
    if (!projects.length) return [];

    /*
      Cluster radius is in SCREEN PIXELS.

      This is important:
      When we zoom out, nearby projects occupy fewer pixels
      and naturally become one cluster.

      When we zoom in, they become farther apart in pixels
      and automatically split.
    */
    const CLUSTER_RADIUS = 55;

    const result = [];

    projects.forEach((project) => {
      const point = map.latLngToLayerPoint([
        project.lat,
        project.lng,
      ]);

      let foundCluster = null;

      for (const cluster of result) {
        const dx = point.x - cluster.pixel.x;
        const dy = point.y - cluster.pixel.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= CLUSTER_RADIUS) {
          foundCluster = cluster;
          break;
        }
      }

      if (foundCluster) {
        foundCluster.projects.push(project);

        /*
          Recalculate cluster center
          so the cluster sits between its projects.
        */
        const count = foundCluster.projects.length;

        const avgLat =
          foundCluster.projects.reduce(
            (sum, item) => sum + item.lat,
            0
          ) / count;

        const avgLng =
          foundCluster.projects.reduce(
            (sum, item) => sum + item.lng,
            0
          ) / count;

        foundCluster.center = [avgLat, avgLng];

        foundCluster.pixel = map.latLngToLayerPoint(
          foundCluster.center
        );
      } else {
        result.push({
          projects: [project],
          center: [project.lat, project.lng],
          pixel: point,
        });
      }
    });

    return result;
  }, [projects, map, mapZoom]);

  return (
    <>
      {clusters.map((cluster) => {
        const clusterProjects = cluster.projects;

        /*
          Only ONE project in this area:
          show the normal pin.
        */
        if (clusterProjects.length === 1) {
          const project = clusterProjects[0];

          return (
            <Marker
              key={`project-${project.id}`}
              position={[project.lat, project.lng]}
              icon={createMarkerIcon(
                normalizeStatus(project.status) === "Finished",
                selectedProject?.id === project.id
              )}
              eventHandlers={{
                click: () => onSelectProject(project),
              }}
            >
              <Tooltip
                direction="top"
                offset={[0, -35]}
                className="sector-tooltip"
              >
                {project.title}
                {project.location
                  ? ` — ${project.location}`
                  : ""}
              </Tooltip>
            </Marker>
          );
        }

        /*
          Multiple projects in same area:
          show COUNT.
        */
        return (
          <Marker
            key={`cluster-${clusterProjects
              .map((p) => p.id)
              .join("-")}`}
            position={cluster.center}
            icon={createClusterIcon(clusterProjects.length)}
            eventHandlers={{
              click: () => {
                const bounds = L.latLngBounds(
                  clusterProjects.map((project) => [
                    project.lat,
                    project.lng,
                  ])
                );

                /*
                  Zoom into the cluster.

                  If projects are spread out,
                  fitBounds will separate them.

                  If they are extremely close,
                  increase zoom by a few levels.
                */
                const currentZoom = map.getZoom();

                if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
                  map.flyTo(
                    cluster.center,
                    Math.min(currentZoom + 3, 18),
                    {
                      duration: 0.7,
                    }
                  );
                } else {
                  map.flyToBounds(bounds, {
                    padding: [70, 70],
                    maxZoom: Math.min(currentZoom + 4, 16),
                    duration: 0.7,
                  });
                }
              },
            }}
          >
            <Tooltip
              direction="top"
              offset={[0, -25]}
              className="sector-tooltip"
            >
              {clusterProjects.length} projects in this area
            </Tooltip>
          </Marker>
        );
      })}
    </>
  );
}

function MapView({
  projects,
  selectedProject,
  onSelectProject,
}) {
  const [
    basemapKey,
    setBasemapKey,
  ] = useState("streets");

  const basemap =
    BASEMAPS[basemapKey];

  const geoProjects = projects.filter(
    (p) =>
      typeof p.lat === "number" &&
      typeof p.lng === "number"
  );

  const points = geoProjects.map(
    (p) => [p.lat, p.lng]
  );

  return (
    <div className="sector-map relative w-full h-[380px] sm:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden border border-[#1F3888]/10 shadow-sm">
      <style>
        {mapStyles}
      </style>

      <MapContainer
        center={MAP_DEFAULT_CENTER}
        zoom={MAP_DEFAULT_ZOOM}
        minZoom={5}
        maxZoom={basemap.maxZoom}
        scrollWheelZoom
        doubleClickZoom
        zoomControl={false}
        className="w-full h-full"
      >
        <TileLayer
          key={basemapKey}
          attribution={
            basemap.attribution
          }
          url={basemap.url}
          maxZoom={basemap.maxZoom}
          className={
            basemap.className || ""
          }
        />

        <FitToProjects
          points={points}
        />

        <MapControls />

       <ProjectClusters
  projects={geoProjects}
  selectedProject={selectedProject}
  onSelectProject={onSelectProject}
/>

        {selectedProject && (
          <FlyToMarker
            position={[
              selectedProject.lat,
              selectedProject.lng,
            ]}
          />
        )}
      </MapContainer>

      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-[1000] flex flex-col items-start gap-1.5 sm:gap-2 max-w-[calc(100%-4.5rem)]">
        <span className="pointer-events-none rounded-lg bg-white/95 px-2.5 py-1.5 text-[10px] sm:text-[11px] font-semibold text-[#1E2432] shadow-md border border-[#1E2432]/10">
          {geoProjects.length} projects on the map
        </span>

        <MapBasemapSwitcher
          value={basemapKey}
          onChange={setBasemapKey}
        />

        <div className="pointer-events-none hidden sm:flex items-center gap-3 rounded-lg bg-white/95 px-2.5 py-1.5 text-[11px] text-[#1E2432] shadow-md border border-[#1E2432]/10">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1F3888] border border-white shadow" />
            Ongoing
          </span>

          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBF00] border border-white shadow" />
            Finished
          </span>
        </div>
      </div>

      {geoProjects.length === 0 && (
        <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-[#1E2432]/90 px-8 text-center text-sm text-white">
          No project in this filter has
          map coordinates yet. Add lat and
          lng in projectDetails to place it
          on the map.
        </div>
      )}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 24,
            }}
            className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto sm:w-80 z-[1000] max-h-[75%] overflow-y-auto bg-white rounded-xl shadow-2xl"
          >
            <button
              onClick={() =>
                onSelectProject(null)
              }
              aria-label="Close project details"
              className="absolute top-2 right-2 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-white/90 text-[#1E2432] hover:bg-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-[16/7] sm:aspect-[16/10] overflow-hidden rounded-t-xl">
              <img
                src={selectedProject.src}
                alt={
                  selectedProject.title
                }
                className="w-full h-full object-cover"
              />

              <span
                className={`absolute bottom-2 left-2 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                  normalizeStatus(
                    selectedProject.status
                  ) === "Finished"
                    ? "bg-[#FFBF00] text-[#1E2432]"
                    : "bg-[#1E2432]/85 text-white backdrop-blur-sm"
                }`}
              >
                {normalizeStatus(
                  selectedProject.status
                )}
              </span>
            </div>

            <div className="p-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1F3888]">
                {
                  selectedProject.category
                }
              </span>

              <h4 className="text-sm font-bold text-[#1E2432] uppercase leading-snug mt-1">
                {
                  selectedProject.title
                }
              </h4>

              <div className="flex items-center flex-wrap gap-3 mt-2 text-xs text-[#6C757D]">
                {selectedProject.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#1F3888]" />
                    {
                      selectedProject.location
                    }
                  </span>
                )}

                {selectedProject.year && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#1F3888]" />
                    {
                      selectedProject.year
                    }
                  </span>
                )}
              </div>

              <Link
                to={`/projects/${selectedProject.id}`}
                className="mt-4 flex items-center justify-center gap-2 w-full bg-[#1F3888] text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-[#1F3888]/90 transition-colors"
              >
                View project details
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SectorFilterSection() {
  const [
    activeCategory,
    setActiveCategory,
  ] = useState("All");

  const [
    activeStatus,
    setActiveStatus,
  ] = useState("All");

  const [
    searchTerm,
    setSearchTerm,
  ] = useState("");

  const [
    viewMode,
    setViewMode,
  ] = useState("grid");

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  const [
    selectedProject,
    setSelectedProject,
  ] = useState(null);

  const sectionRef =
    useRef(null);

  const filteredProjects = useMemo(
    () => {
      return projectsWithDetails.filter(
        (p) => {
          const matchesCategory =
            activeCategory === "All" ||
            p.category ===
              activeCategory;

          const matchesStatus =
            activeStatus === "All" ||
            normalizeStatus(
              p.status
            ) === activeStatus;

          const matchesSearch =
            p.title
              .toLowerCase()
              .includes(
                searchTerm
                  .trim()
                  .toLowerCase()
              );

          return (
            matchesCategory &&
            matchesStatus &&
            matchesSearch
          );
        }
      );
    },
    [
      activeCategory,
      activeStatus,
      searchTerm,
    ]
  );

  const totalPages =
    Math.ceil(
      filteredProjects.length /
        ITEMS_PER_PAGE
    );

  useEffect(() => {
    setCurrentPage(1);
  }, [
    activeCategory,
    activeStatus,
    searchTerm,
  ]);

  useEffect(() => {
    if (
      selectedProject &&
      !filteredProjects.some(
        (p) =>
          p.id ===
          selectedProject.id
      )
    ) {
      setSelectedProject(null);
    }
  }, [
    filteredProjects,
    selectedProject,
  ]);

  const startIndex =
    (currentPage - 1) *
    ITEMS_PER_PAGE;

  const paginatedProjects =
    filteredProjects.slice(
      startIndex,
      startIndex +
        ITEMS_PER_PAGE
    );

  const handlePageChange = (
    page
  ) => {
    if (
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);

    sectionRef.current?.scrollIntoView(
      {
        behavior: "smooth",
        block: "start",
      }
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F8F9FD] py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
      id="sectors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[#FFBF00] font-semibold tracking-[0.2em] text-xs uppercase">
            Explore By Sector
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2432] mt-2">
            Our Work, Organized
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map(
            ({
              label,
              icon: Icon,
            }) => {
              const isActive =
                activeCategory ===
                label;

              return (
                <button
                  key={label}
                  onClick={() =>
                    setActiveCategory(
                      label
                    )
                  }
                  className={`relative flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-300 overflow-hidden ${
                    isActive
                      ? "bg-[#1F3888] text-white"
                      : "bg-white text-[#6C757D] border border-[#6C757D]/20 hover:border-[#1F3888]/40"
                  }`}
                >
                  <motion.span
                    animate={{
                      rotate: isActive
                        ? 360
                        : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.span>

                  {label}

                  {isActive && (
                    <motion.span
                      layoutId="active-sector-stripe"
                      className="absolute bottom-0 left-0 right-0 h-[3px]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(-45deg, #FFBF00 0 6px, #1E2432 6px 12px)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            }
          )}
        </div>

        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6C757D]" />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#6C757D]/20 bg-white text-sm text-[#1E2432] placeholder:text-[#6C757D]/70 focus:outline-none focus:border-[#1F3888]/50 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 bg-white border border-[#6C757D]/20 rounded-lg p-1">
            {statusFilters.map(
              (status) => {
                const isActive =
                  activeStatus ===
                  status;

                return (
                  <button
                    key={status}
                    onClick={() =>
                      setActiveStatus(
                        status
                      )
                    }
                    className={`relative px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-[#6C757D] hover:text-[#1F3888]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-status-pill"
                        className="absolute inset-0 bg-[#1F3888] rounded-md"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10">
                      {status}
                    </span>
                  </button>
                );
              }
            )}
          </div>

          <div className="flex items-center gap-2 bg-white border border-[#6C757D]/20 rounded-lg p-1">
            <button
              onClick={() =>
                setViewMode("grid")
              }
              aria-label="Grid view"
              className={`flex items-center justify-center w-9 h-9 rounded-md transition-colors ${
                viewMode === "grid"
                  ? "bg-[#1F3888] text-white"
                  : "text-[#6C757D] hover:text-[#1F3888]"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>

            <button
              onClick={() =>
                setViewMode("map")
              }
              aria-label="Map view"
              className={`flex items-center justify-center w-9 h-9 rounded-md transition-colors ${
                viewMode === "map"
                  ? "bg-[#1F3888] text-white"
                  : "text-[#6C757D] hover:text-[#1F3888]"
              }`}
            >
              <MapIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid-view"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              {filteredProjects.length ===
              0 ? (
                <p className="text-center text-[#6C757D] py-16">
                  No projects match your
                  search.
                </p>
              ) : (
                <>
                  <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    <AnimatePresence mode="popLayout">
                      {paginatedProjects.map(
                        (project) => (
                          <ProjectCard
                            key={
                              project.id
                            }
                            project={
                              project
                            }
                          />
                        )
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <Pagination
                    currentPage={
                      currentPage
                    }
                    totalPages={
                      totalPages
                    }
                    onPageChange={
                      handlePageChange
                    }
                  />
                </>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="map-view"
              initial={{
                opacity: 0,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <MapView
                projects={
                  filteredProjects
                }
                selectedProject={
                  selectedProject
                }
                onSelectProject={
                  setSelectedProject
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}