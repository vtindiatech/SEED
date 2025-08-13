import { useEffect, useState } from 'react';
import ngoLogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const [state, setState] = useState(false);

    // const navigation = [
    //     { title: "About Us", path: "/#about" },
    //     { title: "Projects", path: "/#projects" },
    //     { title: "Events", path: "/#events" },
    //     { title: "Blog", path: "/#blog" },
    // ];

    const navigation = [
        { title: "Home", path: "/" },
        {
            title: "About Us",
            submenu: [
                { title: "Overview", path: "/about/overview" },
                { title: "Vision & Mission", path: "/about/vision-mission" },
                { title: "Registration Details", path: "/about/registration" },
                { title: "Team & Members", path: "/about/team" }
            ]
        },
        {
            title: "Programs & Activities",
            submenu: [
                { title: "Human Rights Awareness", path: "/programs/human-rights" },
                { title: "Swachh Bharat Abhiyan", path: "/programs/swachh-bharat" },
                { title: "Women Empowerment", path: "/programs/women" },
                { title: "Skill Development", path: "/programs/skill" },
                { title: "Cultural Programs", path: "/programs/cultural" },
                { title: "Education for SC/ST Girls", path: "/programs/education" },
                { title: "Environment Awareness", path: "/programs/environment" },
                { title: "Sports Development", path: "/programs/sports" },
                { title: "Health Camps", path: "/programs/health" }
            ]
        },
        { title: "Annual Reports", path: "/annual-reports" },
        {
            title: "Gallery",
            submenu: [
                { title: "Photos", path: "/gallery/photos" },
                { title: "Videos", path: "/gallery/videos" }
            ]
        },
        { title: "News & Events", path: "/news-events" },
        {
            title: "Get Involved",
            submenu: [
                { title: "Volunteer", path: "/get-involved/volunteer" },
                { title: "Donate", path: "/get-involved" },
                { title: "Partnership", path: "/get-involved/partnership" }
            ]
        },
        { title: "Contact Us", path: "/contact" }
    ];

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, []);

    const handleToggleMenu = () => {
        setState(!state);
    };

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <Link to="/">
                <img
                    src={ngoLogo}
                    width={120}
                    height={50}
                    alt="NGO Logo"
                />
            </Link>
            <div className="md:hidden">
                <button className="menu-btn text-gray-500 hover:text-gray-800" onClick={handleToggleMenu}>
                    {state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );

    return (
        <header>
            <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                <Brand />
            </div>
            <nav className={`pb-5 md:text-sm ${state ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                    <Brand />
                    <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                        <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {/* {navigation.map((item, idx) => (
                                <li key={idx} className="text-gray-700">
                                    <a
                                        href={item.path}
                                        className="block font-medium hover:text-gray-900 hover:border-b-2 hover:border-blue-600"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))} */}
                            {/* {navigation.map((item, idx) => (
                                <li key={idx} className="relative group text-gray-700">
                                    {item.submenu ? (
                                        <>
                                            <span className="cursor-pointer block font-medium hover:text-gray-900">
                                                {item.title} ▼
                                            </span>
                                            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-56 z-50 md:group-hover:block">
                                                {item.submenu.map((sub, subIdx) => (
                                                    <li key={subIdx}>
                                                        <Link to={sub.path} className="block px-4 py-2 hover:bg-blue-100">
                                                            {sub.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <Link to={item.path} className="block font-medium hover:text-gray-900 hover:border-b-2 hover:border-blue-600">
                                            {item.title}
                                        </Link>
                                    )}
                                </li>
                            ))} */}
                            <ul className="flex-1 flex-col md:flex-row md:flex md:space-x-6 space-y-6 md:space-y-0">
                                {navigation.map((item, idx) => (
                                    <li key={idx} className="text-gray-700 w-full">
                                        <div className="flex justify-between items-center">
                                            <a
                                                href={item.path}
                                                className="block font-medium hover:text-gray-900"
                                            >
                                                {item.title}
                                            </a>
                                            {item.submenu && (
                                                <button
                                                    className="md:hidden"
                                                    onClick={() =>
                                                        setOpenMenuIndex(openMenuIndex === idx ? null : idx)
                                                    }
                                                >
                                                    ▼
                                                </button>
                                            )}
                                        </div>

                                        {item.submenu && openMenuIndex === idx && (
                                            <ul className="pl-4 mt-2 space-y-2 md:hidden">
                                                {item.submenu.map((sub, subIdx) => (
                                                    <li key={subIdx}>
                                                        <a
                                                            href={sub.path}
                                                            className="block px-2 py-1 hover:bg-gray-100 rounded"
                                                        >
                                                            {sub.title}
                                                        </a>
                                                    </li>
                                                ))}                                               
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </ul>
                        <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                            <Link
                                to="/get-involved"
                                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-blue-600 duration-150 hover:bg-blue-500 active:bg-blue-700 rounded-full md:inline-flex"
                            >
                                Donate
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
