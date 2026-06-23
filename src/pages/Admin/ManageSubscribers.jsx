
import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import "./AdminDashboard.css";

function ManageSubscribers() {

  const [subscribers, setSubscribers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchSubscribers();

  }, []);

  const fetchSubscribers =
    async () => {

      try {

        const response =
          await fetch(
            "http://localhost:5000/api/newsletter"
          );

        const data =
          await response.json();

        setSubscribers(data);

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
          Newsletter Subscribers
        </h1>

        <p>
          Manage and view all
          newsletter subscribers.
        </p>

      </div>

      <div className="subscribers-card">

        {loading ? (

          <h3>
            Loading Subscribers...
          </h3>

        ) : subscribers.length === 0 ? (

          <h3>
            No Subscribers Found
          </h3>

        ) : (

          <table className="subscribers-table">

            <thead>

              <tr>
                <th>ID</th>
                <th>Email</th>
              </tr>

            </thead>

            <tbody>

              {subscribers.map(
                (subscriber) => (

                  <tr
                    key={subscriber.id}
                  >

                    <td>
                      {subscriber.id}
                    </td>

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

    </div>
  );
}

export default ManageSubscribers;
