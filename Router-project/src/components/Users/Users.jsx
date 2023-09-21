import { useParams } from "react-router-dom";

function Users() {
  const { id } = useParams();
  return <div className="bg-gray-600 text-white text-3xl p-4">Users{id}</div>;
}

export default Users;
