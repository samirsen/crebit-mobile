import {createClient} from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setupURLPolyfill} from 'react-native-url-polyfill';
import {Platform} from 'react-native';

if (Platform.OS !== 'web') {
  setupURLPolyfill(); // needed for supabase for following https url protocol
}

const SUPABASE_URL = 'https://udzmxstrkhesiantlods.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkem14c3Rya2hlc2lhbnRsb2RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3ODUyMDksImV4cCI6MjA3NTM2MTIwOX0.041Qu2_RkVnwVFL6Du21g6YK_QrR6qS7KuM8cW2vzaM';

export const supabase = createClient(SUPABASE_URL, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // RN does not use URL redirects
  },
});
