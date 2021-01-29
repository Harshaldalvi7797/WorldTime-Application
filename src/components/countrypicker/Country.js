import React, { useState, useEffect } from 'react'
import axios from "axios";
import { NativeSelect, FormControl } from "@material-ui/core";
export default function Country({ handleCountryChange }) {

    const [countries, setCountries] = useState([]);
    const url = "http://worldtimeapi.org/api/timezone"
    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setCountries(data)
    }
    console.log(countries)


    return (
        <div>
            <FormControl

                style={{ marginLeft: "25px" }}
            >
                <NativeSelect
                    defaultValue="Global"
                    onChange={e => handleCountryChange(e.target.value)}
                >
                    <option value="">global</option>
                    {countries.map((country, i) => (
                        <option key={i} value={country}>
                            {country}
                        </option>
                    ))}
                </NativeSelect>
            </FormControl>

        </div>
    )
}
