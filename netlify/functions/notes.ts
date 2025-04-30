import { Handler } from '@netlify/functions';
import { getStore } from '@netlify/blobs';

interface Note {
  id: string;
  date: string;
  content: string;
  clear?: boolean;
}

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

  const store = getStore('notes');

  try {
    if (event.httpMethod === 'GET') {
      // Get all notes from the store
      const notesData = await store.get('all-notes');
      const notes = notesData ? JSON.parse(notesData as string) : [];
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(notes),
      };
    }

    if (event.httpMethod === 'POST' && event.body) {
      // Get existing notes
      const notesData = await store.get('all-notes');
      let notes: Note[] = notesData ? JSON.parse(notesData as string) : [];
      
      const note = JSON.parse(event.body) as Note;
      
      if (note.clear === true) {
        // Clear all notes
        notes = [];
      } else {
        // Remove any existing note for the same date
        notes = notes.filter(n => n.date !== note.date);
        notes.push(note);
      }

      // Save updated notes
      await store.set('all-notes', JSON.stringify(notes));

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
    console.error('Error handling request:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
