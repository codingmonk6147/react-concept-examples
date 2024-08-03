import React, { useState } from 'react';

const Accordion = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionStyles = {
        border: '1px solid #ddd',
        borderRadius: '4px',
        overflow: 'hidden'
    };

    const accordionItemStyles = {
        borderBottom: '1px solid #ddd'
    };

    const accordionHeaderStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 15px',
        cursor: 'pointer',
        backgroundColor: '#f7f7f7',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
    };

    const accordionHeaderHoverStyles = {
        backgroundColor: '#e1e1e1'
    };

    const accordionIconStyles = {
        fontSize: '18px'
    };

    const accordionContentStyles = {
        padding: '15px',
        backgroundColor: '#fff'
    };

    return (
        <div style={accordionStyles}>
            {sections.map((section, index) => (
                <div key={index} style={accordionItemStyles}>
                    <div
                        style={Object.assign({}, accordionHeaderStyles, activeIndex === index ? accordionHeaderHoverStyles : {})}
                        onClick={() => handleToggle(index)}
                    >
                        <h3>{section.title}</h3>
                        <span style={accordionIconStyles}>
                            {activeIndex === index ? '-' : '+'}
                        </span>
                    </div>
                    {activeIndex === index && (
                        <div style={accordionContentStyles}>
                            {section.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
