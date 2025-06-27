import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { MdGroups } from "react-icons/md";
import { Helmet } from 'react-helmet';

const AllGroups = () => {
  const [groups, setGroups] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("https://hobbyhub-server-ebon.vercel.app/groups")
      .then(res => res.json())
      .then(data => {
        setGroups(data)
        setLoading(false)

      })
  }, [])
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = ['all', ...new Set(groups.map(g => g.category))];

  const filteredGroups = groups
    .filter(group => filterCategory === 'all' || group.category === filterCategory)
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.name.localeCompare(b.name);
      else return b.name.localeCompare(a.name);
    });
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center flex-col">
        Loading...
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <div className='w-11/12 mx-auto my-10'>
      <Helmet>
        <title>All Groups</title>
      </Helmet>
      <h1 className='text-center text-2xl pb-6 font-bold'>All Groups</h1>
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <select
          className="select select-bordered"
          value={filterCategory}
          onChange={e => setFilterCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
          ))}
        </select>
        <select
          className="select select-bordered"
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort: A-Z</option>
          <option value="desc">Sort: Z-A</option>
        </select>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {
          filteredGroups.map(group => {
            return (
              <div key={group._id} className='flex flex-col justify-between gap-4 shadow-2xl'>
                <img className='h-1/2' src={group.imageURL} alt={`${group.name} image`} />
                <div className='flex flex-col gap-4 w-11/12 mx-auto'>
                  <h1 className='text-xl font-bold'>{group.name}</h1>
                  <div className='text-xs label'>{group.category}
                    <p className='flex items-center gap-1 ml-2'><MdGroups className='text-xl text-blue-400' />{group.maxMembers} members</p>
                  </div>
                  <p className='text-xs'><span className='text-blue-400 font-bold'>Creator:</span> {group.userName}</p>
                  <p className='text-xs'>
                    <span className='text-blue-400 font-bold'>Start Date: </span>
                    {group.startDate}
                  </p>
                </div>

                <div className='flex justify-between items-center w-11/12 mx-auto my-2 '>
                  <Link to={`/group-details/${group._id}`} className='w-full btn bg-blue-800 text-white font-semibold'>See More</Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllGroups