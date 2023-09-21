import { useEffect, useState } from "react";
function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/abhiraj-ku")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl flex justify-between">
      <img src={data.avatar_url} alt="" width="300px" />
      Github Followers:{data.followers} is what you have got baby !
    </div>
  );
}

export default Github;
