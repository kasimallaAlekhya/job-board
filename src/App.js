import React, { useState, useMemo } from "react";
import { Search, MapPin, Briefcase, Clock, X, Pin } from "lucide-react";

const JOBS = [
  {
    id: "JB-2201",
    title: "Frontend Engineer",
    company: "Northbeam Labs",
    location: "Hyderabad, IN",
    type: "Full-time",
    mode: "Onsite",
    posted: "2 days ago",
    tags: ["React", "TypeScript", "CSS"],
    rotate: "rotate-1",
  },
  {
    id: "JB-2202",
    title: "Backend Engineer",
    company: "Riverstone Systems",
    location: "Bengaluru, IN",
    type: "Full-time",
    mode: "Hybrid",
    posted: "5 days ago",
    tags: ["Java", "Spring", "SQL"],
    rotate: "-rotate-2",
  },
  {
    id: "JB-2203",
    title: "Data Analyst",
    company: "Cobalt & Finch",
    location: "Remote",
    type: "Full-time",
    mode: "Remote",
    posted: "1 day ago",
    tags: ["Python", "SQL", "Tableau"],
    rotate: "rotate-2",
  },
  {
    id: "JB-2204",
    title: "ML Engineer, Entry Level",
    company: "Orchid Analytics",
    location: "Hyderabad, IN",
    type: "Full-time",
    mode: "Onsite",
    posted: "3 days ago",
    tags: ["Python", "PyTorch", "ML"],
    rotate: "-rotate-1",
  },
  {
    id: "JB-2205",
    title: "QA Engineer",
    company: "Marlin Software",
    location: "Pune, IN",
    type: "Contract",
    mode: "Hybrid",
    posted: "1 week ago",
    tags: ["Selenium", "Testing", "API"],
    rotate: "rotate-3",
  },
  {
    id: "JB-2206",
    title: "Full-Stack Developer",
    company: "Amberline Tech",
    location: "Hyderabad, IN",
    type: "Full-time",
    mode: "Onsite",
    posted: "4 days ago",
    tags: ["Java", "React", "AWS"],
    rotate: "-rotate-3",
  },
  {
    id: "JB-2207",
    title: "Junior DevOps Engineer",
    company: "Hearthfire Cloud",
    location: "Remote",
    type: "Full-time",
    mode: "Remote",
    posted: "6 days ago",
    tags: ["CI/CD", "Docker", "AWS"],
    rotate: "rotate-1",
  },
  {
    id: "JB-2208",
    title: "Product Support Engineer",
    company: "Windmark Co.",
    location: "Chennai, IN",
    type: "Full-time",
    mode: "Onsite",
    posted: "2 weeks ago",
    tags: ["SQL", "Support", "APIs"],
    rotate: "-rotate-1",
  },
];

const MODES = ["All", "Onsite", "Hybrid", "Remote"];

function ModeBadge({ mode }) {
  const styles = {
    Onsite: "bg-[#B5502D] text-[#F5EFE0]",
    Hybrid: "bg-[#D9A441] text-[#232323]",
    Remote: "bg-[#3E5C4A] text-[#F5EFE0]",
  };
  return (
    <span
      className={`inline-block px-2 py-0.5 text-[11px] font-mono tracking-wide uppercase ${styles[mode]}`}
      style={{ transform: "rotate(-2deg)" }}
    >
      {mode}
    </span>
  );
}

function JobCard({ job, onOpen }) {
  return (
    <button
      onClick={() => onOpen(job)}
      className={`relative text-left bg-[#F5EFE0] ${job.rotate} hover:rotate-0 hover:-translate-y-1 transition-transform duration-200 shadow-[3px_4px_0_rgba(0,0,0,0.25)] p-5 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A441]`}
    >
      <Pin
        className="absolute -top-2 left-1/2 -translate-x-1/2 text-[#B5502D] drop-shadow"
        size={18}
        fill="#B5502D"
      />
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-serif text-lg leading-tight text-[#232323]">
          {job.title}
        </h3>
        <ModeBadge mode={job.mode} />
      </div>
      <p className="text-sm text-[#4A4A44] font-medium mb-3">{job.company}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#5B5B52] mb-3">
        <span className="flex items-center gap-1">
          <MapPin size={12} /> {job.location}
        </span>
        <span className="flex items-center gap-1">
          <Briefcase size={12} /> {job.type}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} /> {job.posted}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {job.tags.map((t) => (
          <span
            key={t}
            className="text-[10px] font-mono px-1.5 py-0.5 border border-[#232323]/30 text-[#232323]/70"
          >
            {t}
          </span>
        ))}
      </div>
      <p className="mt-3 text-[10px] font-mono text-[#232323]/40">{job.id}</p>
    </button>
  );
}

function JobModal({ job, onClose }) {
  if (!job) return null;
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#F5EFE0] max-w-md w-full p-6 relative shadow-2xl rotate-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#232323]/60 hover:text-[#232323]"
        >
          <X size={20} />
        </button>
        <Pin
          className="absolute -top-2 left-1/2 -translate-x-1/2 text-[#B5502D]"
          size={20}
          fill="#B5502D"
        />
        <ModeBadge mode={job.mode} />
        <h2 className="font-serif text-2xl mt-3 mb-1 text-[#232323]">
          {job.title}
        </h2>
        <p className="text-sm text-[#4A4A44] font-medium mb-4">
          {job.company}
        </p>
        <div className="space-y-1.5 text-sm text-[#5B5B52] mb-4">
          <p className="flex items-center gap-2">
            <MapPin size={14} /> {job.location}
          </p>
          <p className="flex items-center gap-2">
            <Briefcase size={14} /> {job.type}
          </p>
          <p className="flex items-center gap-2">
            <Clock size={14} /> Posted {job.posted}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {job.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2 py-0.5 border border-[#232323]/30 text-[#232323]/70"
            >
              {t}
            </span>
          ))}
        </div>
        <button
          className="w-full bg-[#B5502D] text-[#F5EFE0] font-serif text-base py-2.5 hover:bg-[#9c4325] transition-colors"
          onClick={onClose}
        >
          Apply
        </button>
        <p className="mt-2 text-center text-[10px] font-mono text-[#232323]/40">
          Ref {job.id}
        </p>
      </div>
    </div>
  );
}

export default function JobBoard() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return JOBS.filter((j) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q) ||
        j.tags.some((t) => t.toLowerCase().includes(q));
      const matchesMode = mode === "All" || j.mode === mode;
      return matchesQuery && matchesMode;
    });
  }, [query, mode]);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: "#2F3B2E",
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
        backgroundSize: "18px 18px",
      }}
    >
      <div className="max-w-5xl mx-auto px-5 py-10">
        <header className="mb-8">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#D9A441] mb-2">
            Notice Board — Open Roles
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#F5EFE0] leading-tight">
            Find a role worth
            <br />
            pinning down.
          </h1>
        </header>

        <div className="bg-[#F5EFE0]/95 p-4 mb-8 shadow-[3px_4px_0_rgba(0,0,0,0.25)] flex flex-col sm:flex-row gap-3">
          <div className="flex items-center gap-2 flex-1 border border-[#232323]/20 px-3 py-2 bg-white/40">
            <Search size={16} className="text-[#232323]/50" />
            <input
              type="text"
              placeholder="Search title, company, or skill..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent outline-none text-sm w-full text-[#232323] placeholder:text-[#232323]/40"
            />
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {MODES.map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`text-xs font-mono uppercase px-3 py-2 border transition-colors ${
                  mode === m
                    ? "bg-[#232323] text-[#F5EFE0] border-[#232323]"
                    : "border-[#232323]/30 text-[#232323]/70 hover:border-[#232323]"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <p className="font-mono text-xs text-[#F5EFE0]/60 mb-4">
          {filtered.length} role{filtered.length !== 1 ? "s" : ""} pinned
        </p>

        {filtered.length === 0 ? (
          <div className="bg-[#F5EFE0] p-8 text-center shadow-[3px_4px_0_rgba(0,0,0,0.25)]">
            <p className="font-serif text-lg text-[#232323]">
              Nothing matches yet.
            </p>
            <p className="text-sm text-[#5B5B52] mt-1">
              Try a different search term or filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 pt-2">
            {filtered.map((job) => (
              <JobCard key={job.id} job={job} onOpen={setSelected} />
            ))}
          </div>
        )}
      </div>

      <JobModal job={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
