import {create} from 'zustand';

export const useUtilityStore = create((set) => ({
  count: 0,
}))