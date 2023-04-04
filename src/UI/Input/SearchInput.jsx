import React from 'react';
import s from "./SearchInput.module.css";
import {ReactComponent as Glass} from "../../assets/image/glass.svg";

const SearchInput = ({searchQuery,setSearchQuery}) => {
    return (
        <div className={s.input__wrapper}>
            <Glass className={s.glass} />
            <input
                type="text"
                style={{ color: "#919191" }}
                placeholder="Поиск..."
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                }}
            />
        </div>
    );
};

export default SearchInput;