import React, { useEffect, useState } from "react";
import { FaUsers, FaSearch } from "react-icons/fa";

import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import AdminHeader from "../../components/AdminHeader/AdminHeader";

import "./ManageSubscribers.css";

function ManageSubscribers() {
const [subscribers, setSubscribers] = useState([]);
const [loading, setLoading] = useState(true);
const [search, setSearch] = useState("");

const fetchSubscribers = async () => {
try {
const response = await fetch(
"http://localhost:5000/api/newsletter"
);


  const data = await response.json();

  setSubscribers(
    Array.isArray(data) ? data : []
  );
} catch (error) {
  console.error(
    "Error fetching subscribers:",
    error
  );
  setSubscribers([]);
} finally {
  setLoading(false);
}


};

useEffect(() => {
fetchSubscribers();
}, []);

const filteredSubscribers = subscribers.filter(
(subscriber) =>
(subscriber.email || "")
.toLowerCase()
.includes(search.toLowerCase())
);

return ( <div className="admin-dashboard"> <AdminSidebar />

```
  <main className="admin-content">
    <AdminHeader
      title="Newsletter Subscribers"
      subtitle="Manage and view all newsletter subscribers."
    />

    <div className="subscriber-stats">
      <div className="stat-card">
        <FaUsers />

        <div>
          <h2>{subscribers.length}</h2>

          <p>Total Subscribers</p>
        </div>
      </div>
    </div>

    <div className="search-box">
      <FaSearch />

      <input
        type="text"
        placeholder="Search subscriber..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </div>

    <div className="subscribers-card">
      {loading ? (
        <div className="empty-state">
          Loading Subscribers...
        </div>
      ) : filteredSubscribers.length === 0 ? (
        <div className="empty-state">
          No Subscribers Found
        </div>
      ) : (
        <table className="subscribers-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email Address</th>
            </tr>
          </thead>

          <tbody>
            {filteredSubscribers.map(
              (subscriber) => (
                <tr key={subscriber.id}>
                  <td>{subscriber.id}</td>

                  <td>
                    {subscriber.email}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  </main>
</div>


);
}

export default ManageSubscribers;
