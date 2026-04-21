import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hgfkuyuwcuelwvgfnbjz.supabase.co'
const supabaseKey = 'sb_publishable_iunD7yw0kNeRThfH78WAdA_eg67ISWN'

export const supabase = createClient(supabaseUrl, supabaseKey)
