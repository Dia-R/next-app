import React from 'react'

const Sidebar = () => {
    return (
        <div className="drawer " style={{ zIndex: 1000 /* or any value higher than your background video's z-index */ }}>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content " style={{ zIndex: 1000 /* or any value higher than your background video's z-index */ }}>
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn drawer-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </label>
            </div>
            <div className="drawer-side" style={{ zIndex: 1000 /* or any value higher than your background video's z-index */ }}>
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>


                </ul>
            </div>
        </div>
    )
}

export default Sidebar
