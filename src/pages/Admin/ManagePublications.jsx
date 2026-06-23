import React, { useState } from "react";

import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import AdminHeader from "../../components/AdminHeader/AdminHeader";

import "./ManagePublications.css";

function ManagePublications() {
const [formData, setFormData] = useState({
title: "",
description: "",
category: "",
image_url: "",
content: "",
publication_year: "",
pages: "",
status: "Published",
featured: false,
});

const [loading, setLoading] = useState(false);

const API_URL =
import.meta.env.VITE_API_URL ||
"http://localhost:5000";

const handleChange = (e) => {
const {
name,
value,
type,
checked,
} = e.target;

```
setFormData((prev) => ({
  ...prev,
  [name]:
    type === "checkbox"
      ? checked
      : value,
}));
```

};

const resetForm = () => {
setFormData({
title: "",
description: "",
category: "",
image_url: "",
content: "",
publication_year: "",
pages: "",
status: "Published",
featured: false,
});
};

const handleSubmit = async (e) => {
e.preventDefault();


try {
  setLoading(true);

  const response = await fetch(
    `${API_URL}/api/publications`,
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

  const data =
    await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
        "Failed to create publication"
    );
  }

  alert(
    "Publication created successfully!"
  );

  resetForm();

} catch (error) {
  console.error(error);

  alert(
    error.message ||
      "Something went wrong."
  );
} finally {
  setLoading(false);
}


};

return ( <div className="admin-dashboard">


  <AdminSidebar />

  <main className="admin-content">

    <AdminHeader
      title="Manage Publications"
      subtitle="Publish legal research, articles and academic work."
    />

    <form
      className="publication-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        name="title"
        placeholder="Publication Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <div className="form-row">

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="publication_year"
          placeholder="Publication Year"
          value={
            formData.publication_year
          }
          onChange={handleChange}
        />

      </div>

      <div className="form-row">

        <input
          type="text"
          name="image_url"
          placeholder="Cover Image URL"
          value={formData.image_url}
          onChange={handleChange}
        />

        <input
          type="number"
          name="pages"
          placeholder="Pages"
          value={formData.pages}
          onChange={handleChange}
        />

      </div>

      <textarea
        name="description"
        placeholder="Short Description"
        value={formData.description}
        onChange={handleChange}
        rows="4"
        required
      />

      <textarea
        name="content"
        placeholder="Full Publication Content"
        value={formData.content}
        onChange={handleChange}
        rows="12"
        required
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="Published">
          Published
        </option>

        <option value="Draft">
          Draft
        </option>
      </select>

      <label className="checkbox-label">

        <input
          type="checkbox"
          name="featured"
          checked={
            formData.featured
          }
          onChange={handleChange}
        />

        Featured Publication

      </label>

      <button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Publishing..."
          : "Publish Publication"}
      </button>

    </form>

  </main>

</div>


);
}

export default ManagePublications;
