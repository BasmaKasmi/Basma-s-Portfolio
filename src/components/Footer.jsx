import React from 'react';
import logo from '../assets/logo.png';

const contactInfos = [
  { id: 1, href: "#", text: "0634267644" },
  { id: 2, href: "mailto:kasmi_b@etna-alternance.net", text: "kasmi_b@etna-alternance.net" }
];

const resources = [
  { id: 1, href: "https://tailwindcss.com/", text: "Tailwind CSS" },
  { id: 2, href: "https://www.manypixels.co/gallery", text: "Many pixels" }
];

const socialLinks = [
  { id: 1, href: "https://github.com/BasmaKasmi", text: "GitHub account", svgPath: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 ...", svgViewBox: "0 0 24 24" },
  { id: 2, href: "https://www.linkedin.com/in/basma-kasmi-38aba923b/", text: "LinkedIn page", svgPath: "M19 0h-14c-1.1 0-2 .9-2 2v20c1.1 0 2-.9 2-2h14 ...", svgViewBox: "0 0 24 24" },
  { id: 3, href: "https://www.instagram.com/itsbasmawhat/", text: "Instagram page", svgPath: "M12.315 2c2.43 0 2.784.013 3.808.06 ...", svgViewBox: "0 0 24 24" },
];

const Footer = () => {
    return (
        <footer className="p-4 sm:p-6 bg-zinc-200">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="/" className="flex items-center">
                        <img src={logo} className="h-9 mr-3 hover:scale-110 transition-transform duration-150" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Basma KASMI</span>
                    </a>
                </div>
                <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Contact me</h2>
                        <ul className="text-gray-600">
                            {contactInfos.map(info => (
                                <li key={info.id}>
                                    <a href={info.href} className="hover:underline">{info.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                        <ul className="text-gray-600">
                            {resources.map(resource => (
                                <li key={resource.id}>
                                    <a target="_blank" rel="noopener noreferrer" href={resource.href} className="hover:underline">{resource.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow me</h2>
                        <ul className="text-gray-600">
                            {socialLinks.map(link => (
                                <li key={link.id}>
                                    <a target="_blank" rel="noopener noreferrer" href={link.href} className="hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox={link.svgViewBox} aria-hidden="true">
                                            <path d={link.svgPath}></path>
                                        </svg>
                                        <span className="sr-only">{link.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">© 2023 BK. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;
