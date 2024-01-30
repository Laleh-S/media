import classNames from "classnames";
// className prop allows us to set the height and width of the boxes.
function Skeleton({ times, className }){ // times is going to be a number of the gray boxes that we want to show on the screen.
    const outerClassNames = classNames(
        'relative', // To position the inner element absolutely,
        'overlow-hidden',
        'bg-gray-200', // Hides the inner element if they are not overlapping.
        'rounded', // Rounded corners
        'mb-2.5', // Margin bottom
        className
    );

    const innerClassNames = classNames(
        'animate-shimmer', // Applies that little animation
        'absolute', // To position absolutely,
        'inset-0', // Make it expand to fill the outer div.
        '-translate-x-full', // Moves the inner div off to the far left hand side of the outer div.
        'bg-gradient-to-r', // Set up a gradient that's gonna change colors in the X direction towards the right hand side.
        'from-gray-200', // Start the gradient with a gray of 200
        'via-white', //  Transition to a white color
        'to-gray-200', // Go back to a gray 200 on the far right hand side.
    );

    const  boxes = Array(times)
    .fill(0)
    .map((_, i) => { // _ means we don't care about that argument.
        return <div key={i} className={outerClassNames}>
            <div className={innerClassNames} />
        </div>;
    });
    return boxes
};

export default Skeleton;