import {supabase} from './supabaseClient';

export const loginWithEmail = async (email: string, password: string) => {
  const {data, error} = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

export const loginWithPhone = async (phone: string, password: string) => {
  const {data, error} = await supabase.auth.signInWithPassword({
    phone,
    password,
  });
  return {data, error};
};

export const signUpWithEmail = async (email: string, password: string) => {
  const {data, error} = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;
  return data;
};
