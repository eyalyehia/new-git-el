import React, { useState } from 'react'

function Gallery() {
  let [ar,arSet] = useState([]);

    const restApi = async() => {
        let url = "https://forbes400.herokuapp.com/api/forbes400/?limit=10"
        let rsp = await fetch(url)
        let data = await rsp.json();
        console.log(data);
        arSet(data)

    }

  return (
    <div>
        <ul>
            {ar}
        </ul>
    </div>
  )
}

export default Gallery