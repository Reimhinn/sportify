import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ApiCalls() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://172.17.0.2:3000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
    } )
}

export default ApiCalls