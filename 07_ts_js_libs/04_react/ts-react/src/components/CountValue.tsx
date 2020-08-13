import React from 'react';

interface CountValueProps {
    count: number
}
export default (props: CountValueProps) => {
    return (
        <p>{props.count}</p>
    );
};