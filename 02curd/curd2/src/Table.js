function Table(props) {
    return (
        <table className="table m-3">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Order Number</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.products.map((data, index) => (
                        <tr key={data.id}>
                            <td>{index + 1}</td> {/* Serial Number */}
                            <td>{data.id}</td> { /* order number */ }
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                            <td>{data.category}</td>
                            <td>
                                <button className="btn btn-primary m-1"
                                    onClick={() => props.edit(data)}
                                >
                                    Edit
                                </button>
                                <button className="btn btn-danger m-1"
                                    onClick={() => props.delete(data.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default Table;






