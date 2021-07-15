import React from 'react';

const SearchPanel = () => {
    const searchText = 'Type here to search';
    return (
        <div>
            <input
                type="text"
                placeholder={searchText}
                className="form-control search-input"
            />
        </div>
    );
};

export default SearchPanel;
