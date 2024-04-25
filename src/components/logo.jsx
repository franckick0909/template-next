import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="text-2xl font-bold bg-black text-white rounded-full shadow-lg">
      <Link href="/" className="w-12 h-12 flex items-center justify-center">
        FK
      </Link>
    </div>
  );
};

export default Logo;
