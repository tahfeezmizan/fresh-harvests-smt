"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiBox, FiList, FiUsers, FiSettings, FiLogOut } from "react-icons/fi";

export default function LeftSideBar() {
  const pathname = usePathname();

  const handleLogout = () => {
    // Clear token (or auth state) from storage
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");

    // Redirect to login (optional)
    window.location.href = "/login"; // Or use Next.js Router if needed
  };

  const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: FiHome },
    { name: "Products", href: "/products", icon: FiBox },
    { name: "Categories", href: "/categories", icon: FiList },
    { name: "Users", href: "/users", icon: FiUsers },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      {/* Website Logo */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">MyDashboard</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow">
        <ul className="space-y-4">
          {navLinks.map(({ name, href, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center space-x-2 p-2 rounded-md ${
                  pathname === href ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                <Icon className="text-xl" />
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout & Settings */}
      <div className="mt-auto">
        <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
          <FiSettings className="text-xl" />
          <span>Settings</span>
        </button>
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-2 p-2 hover:bg-red-600 rounded-md mt-2"
        >
          <FiLogOut className="text-xl" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
