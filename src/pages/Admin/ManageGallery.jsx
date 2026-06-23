import React, { useEffect, useState } from "react";
import {
FaImages,
FaTrash,
FaPlus,
} from "react-icons/fa";

import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import AdminHeader from "../../components/AdminHeader/AdminHeader";

import "./ManageGallery.css";

function ManageGallery() {
const [gallery, setGallery] = useState([]);
const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
title: "",
image_url: "",
category: "",
});

const fetchGallery = async () => {
try {
setLoading(true);


  const response = await fetch(
    "http://localhost:5000/api/gallery"
  );

  const data = await response.json();

  setGallery(
    Array.isArray(data) ? data : []
  );
} catch (error) {
  console.error(error);
} finally {
  setLoading(false);
}


};

useEffect(() => {
fetchGallery();
}, []);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]:
e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();


try {
  const response = await fetch(
    "http://localhost:5000/api/gallery",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(
        formData
      ),
    }
  );

  if (response.ok) {
    alert("Image Added");

    setFormData({
      title: "",
      image_url: "",
      category: "",
    });

    fetchGallery();
  }
} catch (error) {
  console.error(error);
}


};

const deleteImage = async (id) => {
const confirmDelete =
window.confirm(
"Delete this image?"
);


if (!confirmDelete) return;

try {
  const response = await fetch(
    `http://localhost:5000/api/gallery/${id}`,
    {
      method: "DELETE",
    }
  );

  if (response.ok) {
    fetchGallery();
  }
} catch (error) {
  console.error(error);
}


};

return ( <div className="admin-dashboard">


  <AdminSidebar />

  <main className="admin-content">

    <AdminHeader
      title="Gallery Management"
      subtitle="Manage portfolio and event images."
    />

    <div className="gallery-stat-card">

      <FaImages />

      <div>
        <h2>
          {gallery.length}
        </h2>

        <p>
          Total Images
        </p>
      </div>

    </div>

    <form
      className="gallery-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        name="title"
        placeholder="Image Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image_url"
        placeholder="Image URL"
        value={formData.image_url}
        onChange={handleChange}
        required
      />

      <button type="submit">

        <FaPlus />

        Add Image

      </button>

    </form>

    {loading ? (

      <div className="loading">
        Loading Gallery...
      </div>

    ) : (

      <div className="gallery-grid">

        {gallery.map((image) => (

          <div
            key={image.id}
            className="gallery-card"
          >

            <img
              src={image.image_url}
              alt={image.title}
            />

            <div className="gallery-info">

              <h3>
                {image.title}
              </h3>

              <p>
                {image.category}
              </p>

              <button
                onClick={() =>
                  deleteImage(
                    image.id
                  )
                }
              >

                <FaTrash />

                Delete

              </button>

            </div>

          </div>
        ))}

      </div>

    )}

  </main>

</div>


);
}

export default ManageGallery;
