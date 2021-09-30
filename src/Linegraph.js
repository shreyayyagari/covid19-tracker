import React, { useState, useEffect } from 'react';
import {Line} from "react-chartjs-2";

function Linegraph() {
    const [data, setData] = useState({})
    useEffect(() => {
      fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
      .then(response => response.json())
      .then(data => {

      })
    }, [])
    return (
        <div>
            <Line 
            data
            options/>
        </div>
    )
}

export default Linegraph;

