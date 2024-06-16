/* eslint-disable-next-line */
import React from "react";
import PropsTypes from 'prop-types';

function Toolbar(props) {
    
    const {filters, selected, onSelectFilter} = props;

    return (
        <div className="filter-list">
            {filters.map((filter) => 
                <button onClick={(e) => onSelectFilter(e.target.value)} className={'filter-button ' + (selected === filter ? 'active' : '')} key={filter}  value={filter}>
                    {filter}
                </button>
            )}
        </div>
    );
}

Toolbar.propsTypes = {
    filters: PropsTypes.arrayOf(PropsTypes.string).isRequired,
    selected: PropsTypes.string.isRequired,
    onSelectFilter: PropsTypes.func.isRequired,
}

export default Toolbar;