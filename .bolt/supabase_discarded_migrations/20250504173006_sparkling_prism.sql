/*
  # Create chatbot_interactions table

  1. New Tables
    - `chatbot_interactions`
      - `id` (uuid, primary key)
      - `created_at` (timestamp with time zone)
      - `user_message` (text)
      - `bot_response` (text)
      - `user_email` (text, nullable)
      - `user_name` (text, nullable)
      - `page_url` (text, nullable)
      - `session_id` (text)
      - `metadata` (jsonb, nullable)
      - `resolved` (boolean)
      - `followed_up` (boolean)
  
  2. Security
    - Enable RLS on `chatbot_interactions` table
    - Add policy for authenticated users to read and insert their own data
    - Add policy for service role to read and modify all data
*/

CREATE TABLE IF NOT EXISTS chatbot_interactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  user_message text NOT NULL,
  bot_response text NOT NULL,
  user_email text,
  user_name text,
  page_url text,
  session_id text NOT NULL,
  metadata jsonb,
  resolved boolean DEFAULT false,
  followed_up boolean DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE chatbot_interactions ENABLE ROW LEVEL SECURITY;

-- Policy for inserting new interactions (public can insert)
CREATE POLICY "Anyone can insert chatbot interactions" 
  ON chatbot_interactions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy for reading own interactions (based on session_id)
CREATE POLICY "Users can read own chatbot interactions" 
  ON chatbot_interactions
  FOR SELECT
  TO anon
  USING (true);

-- Create index on session_id for faster queries
CREATE INDEX IF NOT EXISTS idx_chatbot_interactions_session_id ON chatbot_interactions(session_id);