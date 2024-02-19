import React from 'react'

const HighlightText = ({ text, highlight, color, backgroundColor }: {
    text: string,
    highlight: string,
    color?: string,
    backgroundColor?: string
}) => {

    const highlightTextWrapper = (text: string, highlight: string): JSX.Element => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <span>
                {parts.map((part: string, index: number) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <span key={index} style={{ backgroundColor: backgroundColor ?? 'red', color: color ?? 'white' }}>
                            {part}
                        </span>
                    ) : (
                        <span key={index}>{part}</span>
                    )
                )}
            </span>
        );
    };

    return (
        <span>{highlightTextWrapper(text, highlight)}</span>
    )
}

export default HighlightText