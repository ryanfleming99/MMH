import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "../styles/Home.module.css";
import Logo from "../content/logo.png";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase/firebase";
import Link from "next/link";
import ProfileDropdown from "../components/ProfileDropdown";

const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" }, // Updated href with proper path
    { name: "Admin", href: "/admin" }, // Updated href with proper path
    { name: "About", href: "/about" },
    { name: "Exercise", href: "/exercise" },
    { name: "Relationship", href: "/relationship" },
    { name: "Health", href: "/health" }
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <div className={styles.description}>
        {/* Optimized Logo usage */}
        <Image
          src={Logo}
          alt="MMH Logo"
          width={64}
          height={64}
          className="h-16 w-16"
        />

        {/* Navbar Start */}
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link href="/">
                <div className="-m-1.5 p-1.5">
                  <span className="sr-only">MMH</span>
                </div>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="lg:flex lg:min-w-4 lg:flex-1 lg:justify-center lg:gap-x-8">
              {navigation.map(item => (
                <Link key={item.name} href={item.href}>
                  <p className="font-semibold text-white hover:text-gray-400">
                    {item.name}
                  </p>
                </Link>
              ))}

              {/* Logged in State */}
              {user ? (
                <div className="sm:hidden lg:block">
                  <ProfileDropdown user={user} />
                </div>
              ) : (
                /* Logged out State */
                <Link href="/login">
                  <p className="text-white p-2 font-semibold border-white border-2 rounded-lg cursor-pointer hover:text-gray-400 hover:border-gray-400">
                    Login
                  </p>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Dialog */}
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto px-12 py-12 lg:hidden">
          <div className="flex h-9 items-center justify-between">
            <div className="flex">
              <Link href="/">
                <div className="-m-1.5 p-1.5">
                  <span className="sr-only">MMH</span>
                  <Image src={Logo} alt="MMH Logo" width={56} height={56} />
                </div>
              </Link>
            </div>
            <div className="flex">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200/10">
              <div className="space-y-2 py-6">
                {navigation.map(item => (
                  <Link key={item.name} href={item.href}>
                    <div className="-mx-3 text-center block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10">
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="py-6">
                <Link href="/login">
                  <div className="-mx-3 text-center block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-white hover:bg-gray-400/10">
                    Log in
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Navbar;
