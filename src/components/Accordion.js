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
          <button
          type="button"
          aria-expanded={expanded}
          onClick={toggleExpanded}
          className={`accordionButton ${expanded ? 'expanded' : 'collapsed'}`}
        >
          <span className="accordionIcon" aria-hidden="true">
            {expanded ? '-' : '+'}
          </span>
          <span className="sr-only">{expanded ? 'Hide' : 'Show more'}</span>
        </button>
      </h3>
      {expanded && <div className="accordionContent">{content}</div>}
    </div>
      )
    
}

export default Accordion