// src/components/PrayerScheduler.js
import React, { useState, useEffect } from 'react';
import { db } from '../Firebase';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';

function PrayerScheduler() {
  const [schedule, setSchedule] = useState([]);
  const [newSession, setNewSession] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'prayerSessions'), (snapshot) => {
      const sessions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSchedule(sessions);
    });

    return () => unsubscribe();
  }, []);

  const addSession = async () => {
    await addDoc(collection(db, 'prayerSessions'), { session: newSession });
    setNewSession('');
  };

  return (
    <div>
      <h2>Real-Time Prayer and Meditation Scheduling</h2>
      <input
        value={newSession}
        onChange={(e) => setNewSession(e.target.value)}
        placeholder="Add new session"
      />
      <button onClick={addSession}>Add Session</button>
      <ul>
        {schedule.map((item) => (
          <li key={item.id}>{item.session}</li>
        ))}
      </ul>
    </div>
  );
}

export default PrayerScheduler;
