import { create } from 'zustand';

interface IsClickState {
  label: string;
  value: boolean;
}

interface UtilityStore {
  count: number;
  isClick: IsClickState;
  setIsClick: (state: IsClickState) => void;
  resetIsClick: () => void;
}

export const useUtilityStore = create<UtilityStore>((set) => ({
  count: 0,
  isClick: {
    label: '',
    value: false
  },
  setIsClick: (state: IsClickState) => 
    set({ 
      isClick: state 
    }),
  resetIsClick: () => 
    set({ 
      isClick: { label: '', value: false } 
    })
}));