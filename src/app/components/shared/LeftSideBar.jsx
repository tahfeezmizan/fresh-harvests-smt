"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiBox, FiList, FiUsers, FiSettings, FiLogOut } from "react-icons/fi";

export default function LeftSideBar() {
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");

    window.location.href = "/login";
  };

  const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: FiHome },
    { name: "Products", href: "/products", icon: FiBox },
    { name: "Categories", href: "/categories", icon: FiList },
    { name: "Users", href: "/dashboard/users", icon: FiUsers },
  ];

  return (
    <aside className="w-full h-screen bg-[#749B3F] text-white flex flex-col p-4">
      <div className="text-center mb-6">
        <Link href="/">
          <Image src="/assets/logo-white.png" alt="Logo" width={225} height={40} priority />
        </Link>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-4">
          {navLinks.map(({ name, href, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center space-x-2 p-2 rounded-md ${pathname === href ? "bg-[#FF6A1A]" : "hover:bg-[#FF6A1A]"
                  }`}
              >
                <Icon className="text-xl" />
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

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
