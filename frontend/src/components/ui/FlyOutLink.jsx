import React, { useState } from "react";

const FlyOutLink = ({ children, FlyOutContent, currentLanguage, setCurrentLanguage }) => {
    const [open, setOpen] = useState(false);
    const showFlyout = open && FlyOutContent;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="group relative h-fit w-fit"
        >
            <button
                type="button"
                className="flex flex-row items-center text-black dark:text-neutral-100 gap-x-2 hover:text-gray-500 transition-all duration-200 ease-in-out"
            >
                {children}
            </button>
            {showFlyout && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 bg-white dark:bg-neutral-800 text-black dark:text-neutral-100">
                    <FlyOutContent
                        currentLanguage={currentLanguage}
                        setCurrentLanguage={setCurrentLanguage}
                    />
                </div>
            )}
        </div>
    );
};

export default FlyOutLink;
