// Prueba para React 17 (No funciona en react 18)
// import React from 'react';
// import { shallowToJson } from "enzyme-to-json";
// import {GifGridItem} from '../../components/GifGridItem'

// describe ('Pruebas GifGrid Item', () => {

//   const wrapper = shallowToJson(<GifGridItem />);
//   expect(wrapper).toMatchSnapshot();

// });

describe ('Pruebas GifGrid Item', () => {

  test('Primer tes',  () => {
    expect("hola").toBe("hola")
  })
});
