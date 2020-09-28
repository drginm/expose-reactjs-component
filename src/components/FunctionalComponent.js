import React, { useState, forwardRef, useImperativeHandle } from 'react';

const FunctionalComponent = forwardRef((props, ref) => {
    const [modelState, setModelState] = useState({
        name: 'Who?',
    });

    useImperativeHandle(ref, () => ({
        changeName(name) {
            setModelState({
                name: name,
            });
        }
    }));

    return (
        <div>
            Hello {modelState.name} from FunctionalComponent!
        </div>
    );
});

export default FunctionalComponent;
