import React from 'react'

export const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <span>
            <select
                onChange={(e) => setFilter(e.target.value)}
                style={{ width: "100%" }}
                value={filter ? filter.value : "TDD"}
            >
                <option value="TDD">TDD</option>
                <option value="Mob Programming">Mob Programming</option>
            </select>
        </span>
    )
}