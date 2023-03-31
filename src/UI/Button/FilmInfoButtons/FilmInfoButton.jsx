import React from 'react';
const FilmInfoButton = ({children,...props}) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};

export default FilmInfoButton;