import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
//import api from "./middleware/api";
//import formValidation from "./middleware/formValidation";

export default function store() {
  return configureStore({ reducer, middleware: [...getDefaultMiddleware()] });
}