import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPAURL;
const supabseKey = import.meta.env.VITE_SUPAKEY;

export const supabase = createClient(supabaseUrl, supabseKey);
