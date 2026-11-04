"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Users, CheckCircle2, Award } from "lucide-react";
import { coreTeamMembers } from "@/data/team";

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function TeamSection() {
  const [team, setTeam] = useState<any[]>(coreTeamMembers);

  useEffect(() => {
    fetch("/api/content/team")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data && Array.isArray(data.data) && data.data.length > 0) {
          setTeam(data.data);
        }
      })
      .catch(() => {});
  }, []);
  return (
    <section className="py-24 bg-gradient-to-b from-white via-primary-50/25 to-slate-50 relative overflow-hidden border-t border-slate-200/80">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Users className="w-3.5 h-3.5 text-brand-yellow" />
            <span>ENGINEERING LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Led by Experienced Software Engineers & Architects.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our engineering leaders bring decades of combined technical experience delivering mission-critical platforms, distributed cloud architectures, and digital transformations.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white/95 rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-xl hover:border-primary-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Avatar initials & Socials */}
                <div className="flex items-start justify-between mb-5">
                  {member.avatarUrl ? (
                    <img
                      src={member.avatarUrl}
                      alt={member.name}
                      className="w-14 h-14 rounded-2xl object-cover shadow-md border border-slate-200"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 flex items-center justify-center text-white font-extrabold text-xl shadow-md border border-primary-500/20">
                      {member.initials}
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary-50 hover:text-primary-600 flex items-center justify-center text-slate-600 transition-colors shadow-xs"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedInIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary-600 hover:text-white flex items-center justify-center text-slate-600 transition-colors shadow-xs"
                        aria-label={`${member.name} GitHub`}
                      >
                        <GitHubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-1">
                  {member.department}
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-1">
                  {member.name}
                </h3>
                <div className="text-sm font-semibold text-slate-700 mb-4">
                  {member.role}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Skills tags */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Core Competencies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(member.skills || []).map((skill: string, sIdx: number) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center max-w-2xl mx-auto space-y-3">
          <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 mx-auto flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-lg">
            Want to Join Our Senior Engineering Squad?
          </h4>
          <p className="text-sm text-slate-600">
            We are actively recruiting passionate Next.js, Node.js, Laravel, Flutter, and QA engineers for our Mirpur-10 engineering hub.
          </p>
          <div className="pt-2">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700"
            >
              <span>Explore Open Positions</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
