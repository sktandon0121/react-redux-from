import * as actionsType from "./actionsType";

const addUserData = data => ({ type: actionsType.CREATE_DATA, payload: data });

export { addUserData };
