import React from "react";

export default function TitleSection({
  title,
  link,
  icon,
}: {
  title: string;
  link: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-start gap-3 w-full">
      <div className="bg-white p-3 border border-gray-300 rounded-xl shadow-sm">
        {icon}
      </div>
      <div className="flex items-start justify-center flex-col gap-1">
        <h3 className="font-[16px] md:text-2xl font-bold">{title}</h3>
        <span className="text-[11px] text-gray-400">{link}</span>
      </div>
    </div>
  );
}
