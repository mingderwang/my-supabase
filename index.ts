console.log("Hello via Bun!");
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dhayfcoyzngyiodlgceh.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
