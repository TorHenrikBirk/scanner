import { useStoreState } from "easy-peasy";

function Output() {
  const items = useStoreState((State) => State.items);

  return (
    <div style={{ flex: 1, padding: 8, backgroundColor: "LightBlue"}}>
      <table style={{border: '1px solid black', width: '100%'}}>
        <tr>
            <th>ID</th>
            <th>MAC</th>
            <th>SN</th>
            <th>Location</th>
        </tr>
        {items.map(item=><tr>
            <td>{item.id}</td>
            <td>{item.mac}</td>
            <td>{item.sn}</td>
            <td>{item.location}</td>
        </tr>)}
      </table>
    </div>
  );
}
export default Output;
