import { test, expect } from "vitest";
import {updateState , state} from '../src/state'


test('updateState is ok',()=>{
    updateState('loading',false);
    updateState('name','Jim');
    updateState('job','j1');

    expect(state.loading).toBe(false)
})