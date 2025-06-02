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
                EcoSound Festival Travel Analysis
                </h1>

                {/* Overview Section */}
                <section className="mb-8">
                    <h2 className="text-3xl font-serif text-green-600 dark:text-green-400 leading-tight mb-4">Overview</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                    EcoSound Festival Travel Analysis is a government-recognized data science project designed to evaluate and reduce the environmental impact of attendee travel to the EcoSound Festival held at Heaton Park, Manchester. The aim was to generate data-driven insights to promote sustainable travel habits and influence eco-friendly festival planning in the UK and beyond.                    </p>
                </section>

                {/* Key Features Section */}
                <section className="mb-8">
                    <h2 className="text-3xl font-serif text-green-600 dark:text-green-400 leading-tight mb-4">Key Features</h2>
                    <ul className="list-disc list-inside space-y-3 text-lg text-gray-600 dark:text-gray-300">
                        <li className="hover:translate-x-2 transition-transform duration-200">
                            <span className="font-semibold">Data Acquisition & Preprocessing:</span> Travel data was gathered via surveys and external transport sources. The data underwent cleansing, normalization, and formatting using R and Python for compatibility with downstream analytics tools.
                        </li>
                        <li className="hover:translate-x-2 transition-transform duration-200">
                            <span className="font-semibold">Visualization with Power BI:</span> Interactive dashboards were built using Microsoft Power BI to visually represent travel behaviors, emissions per transport mode, and region-wise insights. These visuals allowed stakeholders to grasp complex sustainability metrics easily.
                        </li>
                        <li className="hover:translate-x-2 transition-transform duration-200">
                            <span className="font-semibold">Low-Carbon Recommendations:</span> Based on modeling outputs, the project generated real-world recommendations such as incentives for public transport, festival-arranged shuttle buses, and digital carpooling platforms.
                        </li>
                    </ul>
                </section>

                {/* Development Process Section */}
                <section className="mb-8">
                    <h2 className="text-3xl font-serif text-green-600 dark:text-green-400 leading-tight mb-4">Development Process</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                    The project was acknowledged by the UK Government as a case study for how festivals can lead environmental responsibility. It set a precedent for using machine learning in sustainability consulting and served as a blueprint for future festival planning with reduced carbon footprints.                    </p>
                </section>

                {/* Call to Action */}
                <div className="mt-6 flex justify-center">
                    <a
                        href="https://github.com"
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