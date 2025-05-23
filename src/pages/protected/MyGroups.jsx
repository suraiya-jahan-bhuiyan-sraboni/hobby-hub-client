import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContextProvider';
import { Link, Navigate } from 'react-router';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

const MyGroups = () => {
  const { user, loading } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const userEmail = user?.email

  useEffect(() => {
    fetch(`https://hobbyhub-server-ebon.vercel.app/groups?email=${userEmail}`)
      .then(res => res.json())
      .then(data => setGroups(data))
  }, [userEmail]);

  if (loading) {
    return <div className="min-h-screen flex justify-center items-center flex-col">
      Loading...
      <progress className="progress w-56"></progress>
    </div>;
  }
  if (!user) {
    return <Navigate to={"/login"} />
  }
  const handleDeleteGroup = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this group?");
    if (confirmDelete) {
      fetch(`https://hobbyhub-server-ebon.vercel.app/groups/${id}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {

            setGroups(groups.filter(group => group._id !== id));
            toast.success("Group deleted successfully");
          }
        });
    }

  }

  //console.log(groups)

  return (
    <div className="w-11/12 mx-auto my-10 min-h-screen">
      <Helmet>
        <title>My Groups</title>
      </Helmet>
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <h2 className="text-2xl font-bold">My Groups</h2>
        <Link
          to="/create-group"
          className="bg-purple-600 text-white px-3 py-1 rounded-md text-xs sm:px-4 sm:py-2 sm:text-base"
        >
          Create New Group
        </Link>
      </div>

      <div className="rounded-lg shadow">
        <table className="w-full bg-white text-xs sm:text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-1 py-1 sm:px-2 sm:py-4">Group Name</th>
              <th className="px-1 py-1 sm:px-2 sm:py-4 hidden sm:table-cell">Category</th>
              <th className="px-1 py-1 sm:px-2 sm:py-4">Members</th>
              <th className="px-1 py-1 sm:px-2 sm:py-4 hidden sm:table-cell">Created Date</th>
              <th className="px-1 py-1 sm:px-2 sm:py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <tr key={group._id} className="border-t hover:bg-gray-50">
                <td className="px-1 py-2 sm:px-2 sm:py-4 font-medium break-words">{group.name}</td>
                <td className="px-1 py-2 sm:px-2 sm:py-4 break-words hidden sm:table-cell">{group.category}</td>
                <td className="px-1 py-2 sm:px-2 sm:py-4 break-words">{group.maxMembers} members</td>
                <td className="px-1 py-2 sm:px-2 sm:py-4 hidden sm:table-cell">{group.startDate}</td>
                <td className="px-1 py-2 sm:px-2 sm:py-4 flex gap-2">
                  <Link to={`/update-group/${group._id}`} className="bg-indigo-600 text-white px-2 py-1 rounded-md text-xs sm:px-3 sm:text-sm">
                    Update
                  </Link>
                  <button onClick={() => handleDeleteGroup(group._id)} className="bg-red-500 text-white px-2 py-1 rounded-md text-xs sm:px-3 sm:text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {groups.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center text-3xl py-3 text-gray-400 break-words "
                >
                  No groups found. Create New Groups!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default MyGroups