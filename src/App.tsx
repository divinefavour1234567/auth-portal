/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

export default function App() {
  const [view, setView] = useState<'login' | 'register'>('login');

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-stretch">
      {/* Sidebar/Illustration area */}
      <div className="hidden md:flex flex-1 bg-slate-900 text-white p-12 items-center justify-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-6">Task Flow</h1>
          <p className="text-slate-300 text-lg">Your intuitive hub for managing and assigning tasks with ease and efficiency.</p>
        </div>
      </div>
      
      {/* Auth Form Area */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-sm">
          <AnimatePresence mode="wait">
            {view === 'login' ? (
              <motion.div
                key="login"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <LoginForm onSwitch={() => setView('register')} />
              </motion.div>
            ) : (
              <motion.div
                key="register"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <RegistrationForm onSwitch={() => setView('login')} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
