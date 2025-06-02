"use client"
import React, { useEffect, useState } from "react";



const VehicleProjectPage = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
    }, []);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <main className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} flex p-5 justify-center transition-colors duration-300`}>
            <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 md:p-12">
                {/* Theme Toggle Button */}
                <div className="flex justify-end mb-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                        aria-label="Toggle theme"
                    >
                        {darkMode ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Header */}
                <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400">
                Record Manager
                </h1>

                {/* Overview Section */}
                <section className="mb-8">
                    <h2 className="text-3xl font-serif text-green-600 dark:text-green-400 leading-tight mb-4">Overview</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                    Built atop the Storage and Buffer Managers, this module manages tables with fixed schemas. It supports core database operations like insertion, deletion, scanning, and updating of records.                    </p>
                </section>

                {/* Key Features Section */}
                <section className="mb-8">
                    <h2 className="text-3xl font-serif text-green-600 dark:text-green-400 leading-tight mb-4">Key Features</h2>
                    <ul className="list-disc list-inside space-y-3 text-lg text-gray-600 dark:text-gray-300">
                        <li className="hover:translate-x-2 transition-transform duration-200">
                            <span className="font-semibold">Fixed Schema Records:</span> Each table schema defines fixed-size records, optimizing for storage alignment and read performance.
                        </li>
                        <li className="hover:translate-x-2 transition-transform duration-200">
                            <span className="font-semibold">Tombstone Mechanism:</span> Instead of physically removing records, deleted entries are marked with tombstones. This improves performance and enables undo/redo operations later.
                        </li>
                        <li className="hover:translate-x-2 transition-transform duration-200">
                            <span className="font-semibold">Integration Ready:</span> The Record Manager was designed to integrate with indexing (like B+ Trees), query execution layers, and transaction managers.``
                        </li>
                    </ul>
                </section>

                {/* Development Process Section */}
                <section className="mb-8">
                    <h2 className="text-3xl font-serif text-green-600 dark:text-green-400 leading-tight mb-4">Development Process</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        The development process adopted a user-centered design approach, prioritizing an intuitive and responsive interface. Flutter's hot reload feature accelerated development and testing cycles. The team conducted regular code reviews and rigorous testing to ensure the app's stability, performance, and cross-platform compatibility.
                    </p>
                </section>

                {/* Call to Action */}
                <div className="mt-6 flex justify-center">
                    <a
                        href="https://github.com/ApurvGaikwad0/Record_Manager"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-green-500 dark:bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-600 dark:hover:bg-green-700 transition-transform transform hover:scale-105"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>
        </main>
    );
};
export default VehicleProjectPage;