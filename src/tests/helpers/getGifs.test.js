import { getGifs } from "../../helpers/getGifs";

describe("Pruebas getFifs", () => {
  test("Arreglo vacio", async () => {
    const arr = await getGifs("");
    expect(arr.length).toBe(0);
  });

  test("Arreglo Con data", async () => {
    const arr = await getGifs("");
    expect(arr.length).toBe(10);
  });
});
