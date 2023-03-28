import React, { useState } from 'react'


function Sum() {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");

    function manageV1(event) {
        setValue1(event.target.value);
    }

    function manageV2(event) {
        setValue2(event.target.value);
    }

    function result() {
        setValue3(parseInt(value1) + parseInt(value2));
    }

    return (
        <>
            <form>
                <label>Display First Number:</label>
                <input type='text' onChange={manageV1}>
                </input>
                <br />

                <label>Display Second Number:</label>
                <input type='text' onBlur={result} onChange={manageV2}>
                </input>
                <br />

                <label>Result</label>
                <input type='text' value={value3}  >
                </input>
            </form>
        </>
    )
}
export default Sum
