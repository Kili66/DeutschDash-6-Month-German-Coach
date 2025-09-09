import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Flashcard, ClipboardList, Calendar } from "lucide-react";

function App() {
  const [tab, setTab] = useState("dashboard");

  const lessons = [
    { title: "Week 1: Basics", content: "Learn greetings, numbers, and essential verbs." },
    { title: "Week 2: Daily Life", content: "Practice food, family, and simple sentences." },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🇩🇪 DeutschDash</h1>
      <div className="flex justify-around mb-6">
        <button onClick={() => setTab("dashboard")} className="px-3 py-2 rounded-xl bg-blue-100 hover:bg-blue-200">Dashboard</button>
        <button onClick={() => setTab("lessons")} className="px-3 py-2 rounded-xl bg-green-100 hover:bg-green-200">Lessons</button>
        <button onClick={() => setTab("flashcards")} className="px-3 py-2 rounded-xl bg-yellow-100 hover:bg-yellow-200">Flashcards</button>
        <button onClick={() => setTab("planner")} className="px-3 py-2 rounded-xl bg-purple-100 hover:bg-purple-200">Planner</button>
      </div>

      {tab === "dashboard" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <h2 className="text-xl font-semibold mb-2">Welcome to DeutschDash!</h2>
          <p>Learn German in 6 months with daily lessons, flashcards, and quizzes.</p>
        </motion.div>
      )}

      {tab === "lessons" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-xl font-semibold mb-4">Lessons</h2>
          {lessons.map((lesson, i) => (
            <div key={i} className="p-4 mb-3 rounded-xl shadow bg-white">
              <h3 className="font-bold">{lesson.title}</h3>
              <p>{lesson.content}</p>
            </div>
          ))}
        </motion.div>
      )}

      {tab === "flashcards" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-xl font-semibold mb-4">Flashcards</h2>
          <p>Coming soon: Interactive flashcards to practice vocabulary.</p>
        </motion.div>
      )}

      {tab === "planner" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-xl font-semibold mb-4">6-Month Planner</h2>
          <p>Track your weekly progress and stay consistent!</p>
        </motion.div>
      )}
    </div>
  );
}

export default App;
