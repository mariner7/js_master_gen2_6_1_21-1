import { FormControl, InputLabel, Select } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ countries = [], onChange = () => {}, selected }) =>
        <div className="dropdown">
            <FormControl variant="filled">
                <InputLabel htmlFor="filled-age-native-simple">Países</InputLabel>
                <Select
                    native
                    value={selected}
                    onChange={onChange}
                >
                    <option aria-label="None" value=""/>
                    {
                        countries.map(({Country, Slug}, index) => (
                            <option key={`country-${index}`} value={Slug}>{Country}</option>
                        ))
                    }
                </Select>
            
            </FormControl>
        </div>

export default Dropdown;

Dropdown.propTypes = {
    countries: PropTypes.array,
}

Dropdown.defaultProps = {
    countries: [],
}