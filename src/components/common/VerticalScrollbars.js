import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

function VerticalScrollbars (props, ...rest) {

    const renderThumb = ({ style, ...props }) => {
        const thumbStyle = {
            backgroundColor: `#BDBDBD`,
            borderRadius: 2
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props}/>
        );
    }

    const renderTrackVertical = ({ style, ...props }) => {
        const trackStyle = {
            backgroundColor: `#F2F2F2`,
            color: 'yellow',
            right: 2,
            borderRadius: 2,
            height: '100%'
        };
        return (
            <div
                style={{ ...style, ...trackStyle }}
                {...props}/>
        );
    }

    return (
        <Scrollbars
            renderThumb={renderThumb}
            renderTrackVertical={renderTrackVertical}
            {...props}/>
    );
}

export default VerticalScrollbars;