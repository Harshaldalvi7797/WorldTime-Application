import axios from "axios";
const url = "http://worldtimeapi.org/api/timezone";

export const fetchData = async country => {
    let changeableURL = url;

    if (country) {
        changeableURL = `${url}/${country}`;
    }
    try {
        const {
            data: { abbreviation, datetime, client_ip, day_of_week, day_of_year, dst, dst_from,
                dst_offset, dst_until, raw_offset, timezone, unixtime, utc_datetime, utc_offset, week_number }
        } = await axios.get(changeableURL);


        const modifiedData = {
            abbreviation, datetime, client_ip, day_of_week, day_of_year, dst, dst_from,
            dst_offset, dst_until, raw_offset, timezone, unixtime, utc_datetime, utc_offset, week_number
        };
        return modifiedData;
    } catch (ex) {
        throw ex;
        console.log(ex.message);
    }
};







