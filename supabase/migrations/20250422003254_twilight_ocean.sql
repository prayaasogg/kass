/*
  # Create calendar notes table

  1. New Tables
    - `calendar_notes`
      - `id` (uuid, primary key)
      - `date` (date, not null)
      - `content` (text, not null)
      - `created_at` (timestamptz)
      - `user_id` (uuid, references auth.users)

  2. Security
    - Enable RLS on `calendar_notes` table
    - Add policies for authenticated users to:
      - Read their own notes
      - Create new notes
      - Update their own notes
*/

CREATE TABLE IF NOT EXISTS calendar_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users NOT NULL
);

ALTER TABLE calendar_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own notes"
  ON calendar_notes
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own notes"
  ON calendar_notes
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own notes"
  ON calendar_notes
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);