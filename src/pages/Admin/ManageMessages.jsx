
import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import "./AdminDashboard.css";

function ManageMessages() {

  const [messages, setMessages] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchMessages();

  }, []);

  const fetchMessages =
    async () => {

      try {

        const response =
          await fetch(
            "http://localhost:5000/api/contacts"
          );

        const data =
          await response.json();

        setMessages(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    };

  return (
    <div className="admin-content">

      <div className="admin-header">

        <h1>
          Contact Messages
        </h1>

        <p>
          View all messages
          received through the
          contact form.
        </p>

      </div>

      <div className="messages-card">

        {loading ? (

          <h3>
            Loading Messages...
          </h3>

        ) : messages.length === 0 ? (

          <h3>
            No Messages Found
          </h3>

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

              {messages.map(
                (message) => (

                  <tr
                    key={message.id}
                  >

                    <td>
                      {message.id}
                    </td>

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

    </div>
  );
}

export default ManageMessages;

