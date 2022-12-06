// import "./ListItem.module.css";
function ListItem({ id, make, model, year, transmission }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{make}</td>
      <td>{model}</td>
      <td>{year}</td>
      <td>{transmission}</td>
      <td>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={() => {
            console.log("tetestest");
          }}
        >
          Edit
        </button>
      </td>
    </tr>
  );
}

export default ListItem;
