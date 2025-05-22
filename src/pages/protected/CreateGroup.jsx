import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContextProvider';
import { useNavigate } from 'react-router';

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
const CreateGroup = () => {
  const { user } = useContext(AuthContext);
  const handleCreateGroup = (e) => {
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

    console.log(groupData);
  }

  return (
    <div>
      
      <div className="max-w-3xl mx-auto p-8 bg-base-200 rounded-lg shadow-md mt-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Create New Group</h2>
        <form onSubmit={handleCreateGroup} className="space-y-5">
          <label htmlFor="name" className="label">Group Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Group Name"
           
            className="input input-bordered w-full"
            required
          />
          <label htmlFor="category" className="label">Category:</label>
          <select
            name="category"
            
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
          
            className="textarea textarea-bordered w-full"
            rows={4}
            required
          />
          <label htmlFor="location" className="label">Location:</label>
          <input
            type="text"
            name="location"
            placeholder="Location (city or address)"
           
            className="input input-bordered w-full"
            required
          />
          <label htmlFor="maxMembers" className="label">Maximum Members:</label>
          <input
            type="number"
            name="maxMembers"
            placeholder="Maximum Members"
            
            className="input input-bordered w-full"
            min={1}
            required
          />
          <label htmlFor="startDate" className="label">Start Date:</label>
          <input
            type="date"
            name="startDate"
            className="input input-bordered w-full"
            required
          />
          <label htmlFor="imageURL" className="label">Image URL:</label>
          <input
            type="url"
            name="imageURL"
            placeholder="Image URL"
            
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
          />
          <label htmlFor="userEmail" className="label">User Email:</label>
          <input
            type="email"  
            name="userEmail"
            placeholder="User Email"
            value={user?.email}
            className="input input-bordered w-full"
            
          />
          <button
            type="submit"
            className={`btn btn-primary w-full`}
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateGroup