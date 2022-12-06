// import "./ListItem.module.css";
function ListItem({ id, make, model, year, transmission, onClickEdit }) {
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
          onClick={onClickEdit}
        >
          Edit
        </button>
      </td>
    </tr>
  );
}

export default ListItem;
