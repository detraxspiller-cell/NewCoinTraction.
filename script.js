import { supabase } from './supabase.js'

async function loadProjects() {
const { data, error } = await supabase
.from('projects')
.select('*')

console.log(data)
}

loadProjects()
