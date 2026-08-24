'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Save, Check, RefreshCw, AlertCircle } from 'lucide-react'

export default function ContentEditor() {
  const [activeTab, setActiveTab] = useState<'about' | 'hero' | 'general'>('about')
  const [isSaving, setIsSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }, 1200)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4xl"
    >
      
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex bg-white dark:bg-navy border border-gray-200 dark:border-white/10 p-1 overflow-x-auto">
          {['about', 'hero', 'general'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-gold text-navy'
                  : 'text-navy/50 dark:text-white/50 hover:text-navy dark:hover:text-white'
              }`}
            >
              {tab === 'about' ? 'About Section' : tab === 'hero' ? 'Hero Slogan' : 'General Settings'}
            </button>
          ))}
        </div>
        
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex justify-center items-center gap-2 bg-navy dark:bg-white text-white dark:text-navy px-6 py-3 text-sm font-bold tracking-widest uppercase hover:bg-gold dark:hover:bg-gold dark:hover:text-navy transition-colors shrink-0 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSaving ? (
            <RefreshCw size={16} className="animate-spin" />
          ) : saved ? (
            <Check size={16} />
          ) : (
            <Save size={16} />
          )}
          {isSaving ? 'Saving...' : saved ? 'Saved' : 'Save Changes'}
        </button>
      </div>

      {/* Notice */}
      <motion.div variants={item} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-500/20 p-4 mb-8 flex items-start gap-3">
        <AlertCircle size={20} className="text-blue-500 mt-0.5 shrink-0" />
        <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">
          Changes made here will override the `en.json` translation files. (Currently running in UI-only mockup mode. Connect a database to persist changes.)
        </p>
      </motion.div>

      {/* Form Content */}
      <motion.div variants={item} className="bg-white dark:bg-navy border border-gray-100 dark:border-white/5 p-6 lg:p-8 space-y-8">
        
        {activeTab === 'about' && (
          <div className="space-y-6">
            <h2 className="font-display font-bold text-xl text-navy dark:text-white border-b border-gray-100 dark:border-white/10 pb-4">
              Edit 'Meet Muyiwa' Content
            </h2>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Section Eyebrow</label>
              <input 
                type="text" 
                defaultValue="Meet Muyiwa"
                className="w-full bg-cream dark:bg-navy-dark border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Main Title (Supports HTML for breaks)</label>
              <input 
                type="text" 
                defaultValue="A Practical Voice<br />for Ward 22."
                className="w-full bg-cream dark:bg-navy-dark border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors font-mono text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Biography Paragraph 1</label>
              <textarea 
                rows={4}
                defaultValue="I was born and raised in Nigeria, where I developed a deep appreciation for community, hard work, and the belief that where you come from does not determine where you can go."
                className="w-full bg-cream dark:bg-navy-dark border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors resize-y"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Biography Paragraph 2</label>
              <textarea 
                rows={4}
                defaultValue="In 2019, my family and I moved to Canada, settling first in the Greater Toronto Area. Two years later, my wife was presented with a career opportunity in Ottawa. When we explored the city and asked where we wanted to raise our children and build our future, the answer was clear: Ward 22. We chose this community deliberately — not by default."
                className="w-full bg-cream dark:bg-navy-dark border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors resize-y"
              />
            </div>
          </div>
        )}

        {activeTab === 'hero' && (
          <div className="space-y-6">
            <h2 className="font-display font-bold text-xl text-navy dark:text-white border-b border-gray-100 dark:border-white/10 pb-4">
              Edit Hero Content
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Title Top (Solid)</label>
                <input 
                  type="text" 
                  defaultValue="Listen"
                  className="w-full bg-cream dark:bg-navy-dark border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Title Bottom (Outline)</label>
                <input 
                  type="text" 
                  defaultValue="First."
                  className="w-full bg-cream dark:bg-navy-dark border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Hero Subtitle</label>
              <textarea 
                rows={3}
                defaultValue="Your neighbour in Ward 22 — at your doors, on your streets, and listening first. Running for Ottawa City Council to make sure every resident is heard, every single day."
                className="w-full bg-cream dark:bg-navy-dark border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>
          </div>
        )}

        {activeTab === 'general' && (
          <div className="space-y-6">
            <h2 className="font-display font-bold text-xl text-navy dark:text-white border-b border-gray-100 dark:border-white/10 pb-4">
              General Settings
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Contact Phone</label>
                <input 
                  type="tel" 
                  defaultValue="343-576-0956"
                  className="w-full bg-cream dark:bg-navy-dark border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Contact Email</label>
                <input 
                  type="email" 
                  defaultValue="info@muyiwaojo.ca"
                  className="w-full bg-cream dark:bg-navy-dark border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Facebook URL</label>
              <input 
                type="url" 
                defaultValue="https://www.facebook.com/muyiwaojoward22"
                className="w-full bg-cream dark:bg-navy-dark border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Instagram URL</label>
              <input 
                type="url" 
                defaultValue="https://www.instagram.com/iam_ojo"
                className="w-full bg-cream dark:bg-navy-dark border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>
        )}

      </motion.div>

    </motion.div>
  )
}
