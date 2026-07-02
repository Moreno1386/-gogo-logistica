import { create } from 'zustand';
import { supabase } from '../lib/supabase';

const toUser = (authUser) => ({
  id: authUser.id,
  email: authUser.email,
  role: 'admin',
  nombre: authUser.email.split('@')[0],
});

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isAuthLoading: true,

  // Restaura la sesión guardada por Supabase al abrir la app
  init: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    set({
      user: session?.user ? toUser(session.user) : null,
      isAuthenticated: !!session?.user,
      isAuthLoading: false,
    });
    supabase.auth.onAuthStateChange((_event, newSession) => {
      set({
        user: newSession?.user ? toUser(newSession.user) : null,
        isAuthenticated: !!newSession?.user,
        isAuthLoading: false,
      });
    });
  },

  login: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data?.user) return false;
    set({ user: toUser(data.user), isAuthenticated: true });
    return true;
  },

  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null, isAuthenticated: false });
  },
}));

export default useAuthStore;
