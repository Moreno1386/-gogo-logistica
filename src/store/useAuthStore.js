import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: (email, password) => {
        if (password === 'gogo2026') {
          const user = {
            id: email,
            email,
            role: 'admin',
            nombre: email.split('@')[0],
          };
          set({ user, isAuthenticated: true });
          return true;
        }
        return false;
      },

      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    { name: 'gogo-auth-storage' }
  )
);

export default useAuthStore;
