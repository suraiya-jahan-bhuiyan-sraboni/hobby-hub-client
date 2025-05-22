import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContextProvider';
import { toast } from 'react-toastify';

const categories = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
    "others"
];
const UpdateGroups = () => {

    const { user, loading } = useContext(AuthContext)
    const { id } = useParams()
    const [group, setGroup] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3000/groups/${id}`)
            .then(res => res.json())
            .then(data => {
                setGroup(data)
                //console.log(data)
            })
    }, [id])

    const handleUpdateGroup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const description = form.description.value;
        const location = form.location.value;
        const maxMembers = form.maxMembers.value;
        const startDate = form.startDate.value;
        const imageURL = form.imageURL.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;

        const groupData = {
            name,
            category,
            description,
            location,
            maxMembers,
            startDate,
            imageURL,
            userName,
            userEmail
        };
        fetch(`http://localhost:3000/updateGroup/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(groupData)
        }).then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data?.modifiedCount > 0) {
                    toast.success('Group Updated successfully!');
                    navigate('/my-groups');
                } else {
                    toast.error('Failed to update group. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error('An error occurred. Please try again later.');
            });
        //console.log(groupData)
    }

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center flex-col">
            Loading...
            <progress className="progress w-56"></progress>
        </div>;
    }
    if (!user) {
        return <Navigate to={"/login"} replace />
    }

    return (
        <div className='w-11/12 mx-auto'>

            <div className="max-w-3xl mx-auto p-8 bg-base-200 rounded-lg shadow-md mt-12">
                <h2 className="text-2xl font-bold mb-8 text-center">Update Group</h2>
                <form onSubmit={
                    handleUpdateGroup
                } className="space-y-5">
                    <label htmlFor="name" className="label">Group Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Group Name"
                        value={group.name}
                        onChange={(e) => setGroup({ ...group, name: e.target.value })}
                        className="input input-bordered w-full"
                        required
                    />
                    <label htmlFor="category" className="label">Category:</label>
                    <select
                        name="category"
                        value={group.category}
                        onChange={(e) => setGroup({ ...group, category: e.target.value })}
                        className="select select-bordered w-full"
                        required
                    >
                        {categories.map((cat) => (
                            <option key={cat}>{cat}</option>
                        ))}
                    </select>
                    <label htmlFor="description" className="label">Description:</label>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={group.description}
                        onChange={(e) => setGroup({ ...group, description: e.target.value })}
                        className="textarea textarea-bordered w-full"
                        rows={4}
                        required
                    />
                    <label htmlFor="location" className="label">Location:</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Location (city or address)"
                        value={group.location}
                        onChange={(e) => setGroup({ ...group, location: e.target.value })}
                        className="input input-bordered w-full"
                        required
                    />
                    <label htmlFor="maxMembers" className="label">Maximum Members:</label>
                    <input
                        type="number"
                        name="maxMembers"
                        placeholder="Maximum Members"
                        value={group.maxMembers}
                        onChange={(e) => setGroup({ ...group, maxMembers: e.target.value })}
                        className="input input-bordered w-full"
                        min={1}
                        required
                    />
                    <label htmlFor="startDate" className="label">Start Date:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={group.startDate}
                        onChange={(e) => setGroup({ ...group, startDate: e.target.value })}
                        className="input input-bordered w-full"
                        required
                    />
                    <label htmlFor="imageURL" className="label">Image URL:</label>
                    <input
                        type="url"
                        name="imageURL"
                        placeholder="Image URL"
                        value={group.imageURL}
                        onChange={(e) => setGroup({ ...group, imageURL: e.target.value })}
                        className="input input-bordered w-full"
                        required
                    />
                    <label htmlFor="userName" className="label">User Name:</label>
                    <input
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        value={user?.displayName}
                        className="input input-bordered w-full"
                        readOnly
                    />
                    <label htmlFor="userEmail" className="label">User Email:</label>
                    <input
                        type="email"
                        name="userEmail"
                        placeholder="User Email"
                        value={user?.email}
                        className="input input-bordered w-full"
                        readOnly
                    />
                    <button
                        type="submit"
                        className={`btn btn-primary w-full`}
                    >
                        Update Group
                    </button>
                    <Link to="/my-groups">
                        <button
                            type="button"
                            className={`btn btn-primary w-full`}
                        >
                            Cancel
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default UpdateGroups