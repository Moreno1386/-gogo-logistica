import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://axcdhglnkksqvsiggpvp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y2RoZ2xua2tzcXZzaWdncHZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1NjMzNTEsImV4cCI6MjA5MzEzOTM1MX0.UE-ftdP4gRqLeCmnjEf0xlfMwuR1GQjhTXmnh7A45gc'

export const supabase = createClient(supabaseUrl, supabaseKey)
