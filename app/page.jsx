'use client';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [story, setStory] = useState('');
  const [genre, setGenre] = useState('');
  const [setting, setSetting] = useState('');
  const [character, setCharacter] = useState('');
  const [loading, setLoading] = useState(false);

  const generateStory = async () => {
    setLoading(true);
    try {
      const res = await axios.post('/api/generate', {
        genre,
        setting,
        character
      });
      setStory(res.data.story);
    } catch (err) {
      setStory("Failed to generate story. Please try again.");
    }
    setLoading(false);
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem' }}>📝 Sofiverse Story Generator</h1>

      <input placeholder="Genre (e.g. enemies to lovers)" value={genre} onChange={e => setGenre(e.target.value)} style={{ display: 'block', marginTop: '1rem', width: '100%' }} />
      <input placeholder="Setting (e.g. fantasy castle)" value={setting} onChange={e => setSetting(e.target.value)} style={{ display: 'block', marginTop: '1rem', width: '100%' }} />
      <input placeholder="Main character traits (e.g. sarcastic prince)" value={character} onChange={e => setCharacter(e.target.value)} style={{ display: 'block', marginTop: '1rem', width: '100%' }} />

      <button onClick={generateStory} disabled={loading} style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#000', color: '#fff' }}>
        {loading ? 'Generating...' : 'Generate Story'}
      </button>

      {story && (
        <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap', background: '#f4f4f4', padding: '1rem', borderRadius: '8px' }}>
          {story}
        </div>
      )}
    </main>
  );
}
