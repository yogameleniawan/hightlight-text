import React from 'react';

const highlightText = (text: string, highlight: string): JSX.Element => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
        <span>
            {parts.map((part: string, index: number) =>
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <span key={index} style={{ backgroundColor: 'red', color: 'white' }}>
                        {part}
                    </span>
                ) : (
                    <span key={index}>{part}</span>
                )
            )}
        </span>
    );
};

export default highlightText;
