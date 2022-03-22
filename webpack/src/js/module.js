import { getJSON } from "./helper.js";
import { API_URL } from "./config.js";

export const getData = async function (search) {
  try {
    const data = await getJSON(API_URL + search);
    return data.data.recipes;
  } catch (error) {
    throw new Error(error);
  }
};

export const state = {
  recipes: {},
  bookmark: new Map(),
  search: {},
  activeRecipe: {},
};
