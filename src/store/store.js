import { action, createStore } from "easy-peasy";
import { persist } from "easy-peasy";

export const store = createStore(
  persist(
    {
      items: [],
      refresh: action((state, payload) => {
        state.items = payload.split("\n");
      }),
      addItem: action((state, payload) => {
        if (payload.length < 11 || payload.length > 12)
          return alert("Da va kje heilt rett, prøv igjen....homo");
        state.items.push({
          id: calcID(state.items),
          mac: payload.length === 12 ? payload : undefined,
          sn: payload.length === 11 ? payload : undefined,
          location: "In Storage",
        });
      }),
      updateItem: action((state, payload) => {
        if (payload.length === 12)
          state.items[state.items.length - 1].mac = payload;
        else if (payload.length === 11)
          state.items[state.items.length - 1].sn = payload;
        else alert("Scan bedre, homo");
      }),
    },
    {
      allow: ["items"],
      storage: localStorage,
    }
  )
);

function calcID(array) {
  const number = 900 + array.length; //"fiksa da"
  return "SRP-CWBS" + number.toString();
}
