import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xxzdlvdiqopfoyepioqg.supabase.co";
const supabaseKey = "sb_publishable_Ei5Gp5wvreuKU_TW-dU_RQ_DyMHfo2V";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
