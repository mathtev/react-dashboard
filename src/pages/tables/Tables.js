import React, { useEffect, useState } from 'react'

const Tables = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/repos/mathtev/react-dashboard/stats/participation");
      const data = await response.json();

      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data && <div>lol</div>};
    </div>
  )
}

export default Tables
