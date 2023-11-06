export const state = { loading: true, name: "", job: "" };

export function updateState(key,value){
    state[key]=value;
}
