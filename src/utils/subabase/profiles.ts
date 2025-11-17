import {supabase} from './supabaseClient';

export const createUserProfile = async (profileData: any) => {
  const {data, error} = await supabase
    .from('user_profiles')
    .insert(profileData);

  if (error) throw error;
  return data;
};

export const getUserProfile = async (userId: string) => {
  const {data, error} = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
};
