import { useState } from "react";

function Accordion({title, content}){
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
      };

      return(
        <div className="infoSection">
        <h3 onClick={toggleExpanded}>
          {title}
          {expanded ? '-' : '+'}
        </h3>
        {expanded && <div>{content}</div>}
      </div>
      )
    
}

export default Accordion