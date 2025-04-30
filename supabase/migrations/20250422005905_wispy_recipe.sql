/*
  # Create calendar notes table

  1. New Tables
    - `calendar_notes`
      - `id` (uuid, primary key)
      - `date` (date, not null)
      - `content` (text, not null)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `calendar_notes` table
    - Add policy to allow all operations
*/

CREATE TABLE IF NOT EXISTS calendar_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE calendar_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable all access to calendar_notes"
  ON calendar_notes
  FOR ALL
  USING (true)
  WITH CHECK (true);