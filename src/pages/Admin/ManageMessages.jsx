import React, { useEffect, useState } from "react";
import { FaEnvelope, FaSearch } from "react-icons/fa";

import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import AdminHeader from "../../components/AdminHeader/AdminHeader";

import "./ManageMessages.css";

function ManageMessages() {
const [messages, setMessages] = useState([]);
const [loading, setLoading] = useState(true);
const [search, setSearch] = useState("");

const fetchMessages = async () => {
try {
const response = await fetch(
"http://localhost:5000/api/contacts"
);


  const data = await response.json();

  setMessages(
    Array.isArray(data) ? data : []
  );
} catch (error) {
  console.error(
    "Error fetching messages:",
    error
  );
  setMessages([]);
} finally {
  setLoading(false);
}

};

useEffect(() => {
fetchMessages();
}, []);

const filteredMessages = messages.filter(
(message) =>
(message.full_name || "")
.toLowerCase()
.includes(search.toLowerCase()) ||
(message.email || "")
.toLowerCase()
.includes(search.toLowerCase()) ||
(message.subject || "")
.toLowerCase()
.includes(search.toLowerCase())
);

return ( <div className="admin-dashboard"> <AdminSidebar />


  <main className="admin-content">
    <AdminHeader
      title="Contact Messages"
      subtitle="View and manage all messages received through the contact form."
    />

    <div className="subscriber-stats">
      <div className="stat-card">
        <FaEnvelope />

        <div>
          <h2>{messages.length}</h2>

          <p>Total Messages</p>
        </div>
      </div>
    </div>

    <div className="search-box">
      <FaSearch />

      <input
        type="text"
        placeholder="Search messages..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </div>

    <div className="messages-card">
      {loading ? (
        <div className="empty-state">
          Loading Messages...
        </div>
      ) : filteredMessages.length === 0 ? (
        <div className="empty-state">
          No Messages Found
        </div>
      ) : (
        <table className="messages-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>

          <tbody>
            {filteredMessages.map(
              (message) => (
                <tr key={message.id}>
                  <td>{message.id}</td>

                  <td>
                    {message.full_name}
                  </td>

                  <td>
                    {message.email}
                  </td>

                  <td>
                    {message.subject}
                  </td>

                  <td>
                    {message.message}
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

export default ManageMessages;
