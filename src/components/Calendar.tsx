import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';
import { ChevronLeft, ChevronRight, X, Save } from 'lucide-react';

interface Note {
  id: string;
  date: string;
  content: string;
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNote, setCurrentNote] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log('Fetching notes from API...');
        
        const response = await fetch('/api/notes');
        if (!response.ok) throw new Error('Failed to fetch notes');
        
        const notesArray = await response.json();
        console.log('Found notes:', notesArray.length);
        setNotes(notesArray);
      } catch (error) {
        console.error('Error loading notes:', error);
        setError(`Failed to load notes: ${error instanceof Error ? error.message : String(error)}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const existingNote = notes.find(note => note.date === format(date, 'yyyy-MM-dd'));
    setCurrentNote(existingNote?.content || '');
    setIsEditing(true);
    setError(null);
  };

  const handleSaveNote = async () => {
    if (!selectedDate || !currentNote.trim()) return;

    try {
      setIsSaving(true);
      setError(null);
      console.log('Saving note for date:', selectedDate);

      const dateStr = format(selectedDate, 'yyyy-MM-dd');
      const noteId = crypto.randomUUID();
      const newNote: Note = {
        id: noteId,
        date: dateStr,
        content: currentNote
      };

      // Save to API
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote)
      });

      if (!response.ok) throw new Error('Failed to save note');
      
      const updatedNotes = await response.json();
      console.log('Notes updated successfully:', updatedNotes.length);
      setNotes(updatedNotes);

      setIsEditing(false);
      setSelectedDate(null);
      setCurrentNote('');
    } catch (error) {
      console.error('Error saving note:', error);
      setError('Failed to save note. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary"></div>
      </div>
    );
  }

  const handleClearNotes = async () => {
    if (window.confirm('Are you sure you want to clear all notes? This cannot be undone.')) {
      try {
        const response = await fetch('/api/notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ clear: true })
        });

        if (!response.ok) throw new Error('Failed to clear notes');
        
        setNotes([]);
        setError(null);
        console.log('All notes cleared');
      } catch (error) {
        console.error('Error clearing notes:', error);
        setError('Failed to clear notes. Please try again.');
      }
    }
  };

  return (
    <div className="paper-texture p-6 rounded-lg">
      {/* Debug button - only visible in development */}
      {process.env.NODE_ENV === 'development' && (
        <button
          onClick={handleClearNotes}
          className="mb-4 px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200"
        >
          Clear All Notes
        </button>
      )}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handlePrevMonth}
          className="p-2 hover:bg-primary/10 rounded-full transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        
        <h3 className="font-headline text-xl text-secondary">
          {format(currentDate, 'MMMM yyyy')}
        </h3>
        
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-primary/10 rounded-full transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-handwritten text-text-light text-sm py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {monthDays.map((day, index) => {
          const dateStr = format(day, 'yyyy-MM-dd');
          const hasNote = notes.some(note => note.date === dateStr);
          
          return (
            <button
              key={day.toString()}
              onClick={() => handleDateClick(day)}
              className={`
                aspect-square p-1 rounded-lg relative
                ${!isSameMonth(day, currentDate) ? 'text-text-light/30' : 'text-text'}
                ${hasNote ? 'bg-primary/20' : 'hover:bg-primary/10'}
                ${selectedDate && isSameDay(day, selectedDate) ? 'ring-2 ring-secondary' : ''}
              `}
            >
              <span className="font-handwritten">{format(day, 'd')}</span>
              {hasNote && (
                <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-secondary rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {isEditing && selectedDate && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsEditing(false)}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-full max-w-md"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-headline text-lg text-secondary">
                  {format(selectedDate, 'MMMM d, yyyy')}
                </h4>
                <button
                  onClick={() => setIsEditing(false)}
                  className="text-text-light hover:text-text"
                >
                  <X size={20} />
                </button>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg font-handwritten">
                  {error}
                </div>
              )}

              <textarea
                value={currentNote}
                onChange={(e) => setCurrentNote(e.target.value)}
                className="w-full p-3 border border-primary/30 rounded-lg font-handwritten text-text resize-none focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary mb-4"
                rows={4}
                placeholder="Write your note here..."
                autoFocus
                disabled={isSaving}
              />

              <div className="flex justify-end">
                <button
                  onClick={handleSaveNote}
                  disabled={isSaving}
                  className={`btn inline-flex items-center gap-2 ${
                    isSaving ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSaving ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save size={16} />
                      <span>Save Note</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Calendar;