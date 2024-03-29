import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel ({ header, children }) {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center">
                <div className="flex flex-row items-center justify-between">
                    {header}
                </div>
                <div onClick={handleClick} className="cursor-pointer">
                    {/* If expanded is true, then show the GoChevronDown icon. Else, GoChevronLeft icon */}
                    {expanded ? <GoChevronDown /> : <GoChevronLeft />}
                </div>
                
            </div>
                {/* if expanded is true, we show the children div and everything inside of it */}
                {expanded && <div className="p-2 border-t">{children}</div>}   
        </div>
    );
};

export default ExpandablePanel;