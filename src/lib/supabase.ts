
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ucnthhdpilmpfssrodtt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjbnRoaGRwaWxtcGZzc3JvZHR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwMDM5NjEsImV4cCI6MjA1NTU3OTk2MX0.EUiam0BQOdkQOQFQkxCBPkQGoYPLA_BKI4SY-jP2Iyc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
