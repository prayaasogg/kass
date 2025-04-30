import { Handler } from '@netlify/functions';

interface Note {
  id: string;
  date: string;
  content: string;
}

// In-memory store for development. In production, use a proper database
let notes: Note[] = [];

export const handler: Handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    };
  }

  try {
    if (event.httpMethod === 'GET') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(notes),
      };
    }

    if (event.httpMethod === 'POST' && event.body) {
      const note = JSON.parse(event.body) as Note;
      
      // Remove any existing note for the same date
      notes = notes.filter(n => n.date !== note.date);
      notes.push(note);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(notes),
      };
    }

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: 'Invalid request' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
