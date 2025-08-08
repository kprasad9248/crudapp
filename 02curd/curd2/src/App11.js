// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const api = 'http://localhost:4200/products';

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({ name: '', price: '', category: '' });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const res = await axios.get(api);
//     setProducts(res.data);
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (form.name && +form.price > 0 && form.category) {
//       await axios.post(api, { ...form, price: +form.price });
//       fetchProducts();
//       setForm({ name: '', price: '', category: '' });
//     } else {
//       alert('Invalid input');
//     }
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`${api}/${id}`);
//     fetchProducts();
//   };

//   const handleUpdate = async (id) => {
//     const newName = prompt("Enter new name:");
//     const newPrice = prompt("Enter new price:");
//     const newCategory = prompt("Enter new category:");

//     if (newName && +newPrice > 0 && newCategory) {
//       await axios.put(`${api}/${id}`, {
//         name: newName,
//         price: +newPrice,
//         category: newCategory
//       });
//       fetchProducts();
//     } else {
//       alert("Invalid update input");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Product CRUD</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
//         <input name="price" value={form.price} onChange={handleChange} placeholder="Price" required type="number" />
//         <input name="category" value={form.category} onChange={handleChange} placeholder="Category" required />
//         <button type="submit">Add Product</button>
//       </form>

//       <h3>Product List</h3>
//       <ul>
//         {products.map(p => (
//           <li key={p.id}>
//             {p.name} - ₹{p.price} - ({p.category})
//             <button onClick={() => handleUpdate(p.id)}>Edit</button>
//             <button onClick={() => handleDelete(p.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
