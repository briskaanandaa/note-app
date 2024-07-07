"use client";

import { ChangeEvent, FormEvent, useState } from 'react';

interface Note {
  id: number;
  title: string;
  content: string;
}

const CreateArea = () => {
  const [note, setNote] = useState<Omit<Note, 'id'>>({
    title: "",
    content: ""
  });

  const [notes, setNotes] = useState<Note[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setNotes(prevNotes => [
      ...prevNotes,
      { id: Date.now(), ...note }
    ]);
    setNote({
      title: "",
      content: ""
    });
  };

  const handleDelete = (id: number) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  return (
    <div className="flex flex-col items-start gap-4 md:flex-row">
      <form
        className="flex flex-col gap-1 p-2 border-slate-100 border-2 rounded-md items-end w-full"
        onSubmit={handleSubmit}
      >
        <input
          className="p-2 focus:outline-none text-2xl font-semibold w-full"
          type="text"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          className="p-2 focus:outline-none resize-none h-[50vh] w-full"
          name="content"
          placeholder="Take a Note..."
          value={note.content}
          onChange={handleChange}
        />
        <button
          className="mt-2 py-2 px-4 rounded-sm bg-slate-900 max-w-fit text-white font-medium hover:bg-slate-800"
          type="submit"
        >
          Add Note
        </button>
      </form>
      
      <div className="flex flex-col gap-4 w-full">
        {notes.map(note => (
          <div key={note.id} className="p-4 border-slate-200 border-2 rounded-md flex flex-col items-end">
            <h2 className="p-2 focus:outline-none text-2xl font-semibold w-full">{note.title}</h2>
            <p className='p-2 focus:outline-none resize-none w-full'>{note.content}</p>
            <button
              className="mt-2 py-2 px-4 rounded-sm bg-slate-900 max-w-fit text-white font-medium hover:bg-slate-800"
              onClick={() => handleDelete(note.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateArea;
