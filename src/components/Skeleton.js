import classNames from "classnames";

function Skeleton({ times }){ // times is going to be a number of the gray boxes that we want to show on the screen.
    const  boxes = [];
    
    for (let i = 0; i < times; i++){
        boxes.push(<div key={i}/>)
    }
    return boxes;
};

export default Skeleton;