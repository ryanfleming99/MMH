import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import styles from "../styles/Home.module.css";
import Logo from "../content/logo.png"
import Image from "next/image"




const Navbar = () => {
    const navigation = [
        { name: 'Product', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Marketplace', href: '#' },
        { name: 'Company', href: '#' },
    ]

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <div className={styles.description}>
                <Image src={Logo} alt="" className="h-16 w-16 " />


                {/* Navbar Start */}
                <div className="">
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                            </a>
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
                        <div className="hidden lg:flex lg:min-w-4 lg:flex-1 lg:justify-center lg:gap-x-8">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="font-semibold text-white hover:text-gray-400">
                                    {item.name}
                                </a>
                            ))}
                            <div className="text-white p-2 font-semibold border-white border-2 rounded-lg cursor-pointer hover:text-gray-400 hover:border-gray-400">
                                <a>Login</a>
                            </div>
                        </div>

                    </nav>
                </div>
            </div>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-gray-700 px-12 py-12 lg:hidden">
                    <div className="flex h-9 items-center justify-between">
                        <div className="flex">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <Image src={Logo} alt="" className="h-14 w-14" />
                            </a>
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
                        <div className="-my-6 divide-y divide-gray-200/10 ">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 text-center block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 text-center block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-white hover:bg-gray-400/10"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    )
}

export default Navbar