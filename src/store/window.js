import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { WINDOW_CONFIG, INITIAL_Z_INDEX } from "#constants";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowsKey, data = null) =>
      set((state) => {
        const win = state.windows[windowsKey];
        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),
    closeWindow: (windowsKey) =>
      set((state) => {
        const win = state.windows[windowsKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),
    focusWindow: (windowsKey) =>
      set((state) => {
        const win = state.windows[windowsKey];
        if (!win) return;
        win.zIndex = state.nextZIndex++;
      }),
  })),
);

export default useWindowStore;
