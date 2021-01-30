import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Card, Spinner } from "react-bootstrap"
import { Typography } from "@material-ui/core"

export default function CardDetails({ data: { abbreviation, datetime, client_ip, day_of_week, day_of_year, dst, dst_from,
    dst_offset, dst_until, raw_offset, timezone, unixtime, utc_datetime, utc_offset, week_number } }) {


    if (!timezone) {
        return (<div>
            <>
                <Spinner animation="border" size="sm" />
                <Spinner animation="border" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
            </>
        </div>);
    }

    return (
        <div>
            <Card style={{ width: '60rem' }}>

                <Card.Body>
                    <h3>TimeZone:-{timezone}</h3>
                    <h3>Abbreviation:-{abbreviation}</h3>
                    <h3>DateTime:-{datetime}</h3>

                    <h3>Day of week:-{day_of_week}</h3>
                    <h3>Day of year:-{day_of_year}</h3>
                    <h3>UTC-Offset:-{utc_offset}</h3>
                    <h3>Week-Number:-{week_number}</h3>
                    <Card.Text>

                    </Card.Text>

                </Card.Body>
            </Card>


        </div>
    )
}