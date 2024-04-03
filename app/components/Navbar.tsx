"use client";

import { Popover } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
	let pathname = usePathname();
	return (
		<Popover as="nav">
			{({ open }) => (
				<>
					<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between h-16">
							<div className="flex justify-between w-full">
								<div className="flex items-center">
									<Link href="/">
										<h1 className="text-2xl font-medium">
											Dmitry<span className="text-teal-500">Pligin</span>
										</h1>
									</Link>
								</div>

								<div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
									<Link
										href="/"
										prefetch
										className={`${
											pathname === "/"
												? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
												: "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
										}`}
									>
										Home
									</Link>
									<Link
										href="/guestbook"
										prefetch
										className={`${
											pathname === "/guestbook"
												? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
												: "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
										}`}
									>
										Guestbook
									</Link>
									<Link
										href="/projects"
										prefetch
										className={`${
											pathname === "/projects"
												? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
												: "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
										}`}
									>
										Projects
									</Link>
									<ThemeButton />
								</div>
							</div>
							<div className="-mr-2 flex items-center sm:hidden">
								<ThemeButton />
								<Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-800">
									{open ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M6 18 18 6M6 6l12 12"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
											/>
										</svg>
									)}
								</Popover.Button>
							</div>
						</div>
					</div>
					<Popover.Panel className="sm:hidden">
						<Popover>
							{({ open }) => (
								<>
									<Popover.Button className="mt-1 flex w-full justify-between bg-gray-400 dark:bg-gray-800 px-4 py-2 text-left text-sm font-medium text-white dark:text-gray-300 hover:bg-gray-600 dark:hover:text-white focus:outline-none transition-colors duration-200 ease">
										<span>Home</span>
										{open ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="m19.5 8.25-7.5 7.5-7.5-7.5"
												/>
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="m4.5 15.75 7.5-7.5 7.5 7.5"
												/>
											</svg>
										)}
									</Popover.Button>
									<Popover.Panel className="px-4 pb-2 pt-4 text-sm">
										<div>
											<Link
												href="/"
												prefetch
												className={`${
													pathname === "/"
														? "text-teal-500"
														: "text-black dark:text-gray-300"
												}`}
											>
												<span className="hover:text-teal-500">Home</span>
											</Link>
										</div>
									</Popover.Panel>
								</>
							)}
						</Popover>
						<Popover>
							{({ open }) => (
								<>
									<Popover.Button className="mt-1 flex w-full justify-between bg-gray-400 dark:bg-gray-800 px-4 py-2 text-left text-sm font-medium text-white dark:text-gray-300 hover:bg-gray-600 dark:hover:text-white focus:outline-none transition-colors duration-200 ease">
										<span>Guestbook</span>
										{open ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="m19.5 8.25-7.5 7.5-7.5-7.5"
												/>
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="m4.5 15.75 7.5-7.5 7.5 7.5"
												/>
											</svg>
										)}
									</Popover.Button>
									<Popover.Panel className="px-4 pb-2 pt-4 text-sm">
										<div>
											<Link
												href="/guestbook"
												prefetch
												className={`${
													pathname === "/guestbook"
														? "text-teal-500"
														: "text-black dark:text-gray-300"
												}`}
											>
												<span className="hover:text-teal-500">Guestbook</span>
											</Link>
										</div>
									</Popover.Panel>
								</>
							)}
						</Popover>
						<Popover>
							{({ open }) => (
								<>
									<Popover.Button className="mt-1 flex w-full justify-between bg-gray-400 dark:bg-gray-800 px-4 py-2 text-left text-sm font-medium text-white dark:text-gray-300 hover:bg-gray-600 dark:hover:text-white focus:outline-none transition-colors duration-200 ease">
										<span>Projects</span>
										{open ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="m19.5 8.25-7.5 7.5-7.5-7.5"
												/>
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="m4.5 15.75 7.5-7.5 7.5 7.5"
												/>
											</svg>
										)}
									</Popover.Button>
									<Popover.Panel className="px-4 pb-2 pt-4 text-sm">
										<div>
											<Link
												href="/projects"
												prefetch
												className={`${
													pathname === "/projects"
														? "text-teal-500"
														: "text-black dark:text-gray-300"
												}`}
											>
												<span className="hover:text-teal-500">Projects</span>
											</Link>
										</div>
									</Popover.Panel>
								</>
							)}
						</Popover>
					</Popover.Panel>
				</>
			)}
		</Popover>
	);
}
