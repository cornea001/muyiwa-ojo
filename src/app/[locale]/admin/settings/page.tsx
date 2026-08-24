'use client'

import { motion } from 'framer-motion'
import { Save, Shield, Key, Bell, CreditCard } from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'security' | 'notifications'>('security')
  
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2 className="font-display font-bold text-2xl text-navy dark:text-white">Admin Settings</h2>
        
        <button className="flex justify-center items-center gap-2 bg-navy dark:bg-white text-white dark:text-navy px-6 py-3 text-sm font-bold tracking-widest uppercase hover:bg-gold dark:hover:bg-gold dark:hover:text-navy transition-colors shrink-0">
          <Save size={16} />
          Save Settings
        </button>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        
        <motion.div variants={item} className="md:col-span-4 space-y-2">
          <button 
            onClick={() => setActiveTab('security')}
            className={`w-full flex items-center gap-3 px-4 py-3 font-bold text-sm transition-colors text-left ${
              activeTab === 'security' 
                ? 'bg-gold/10 text-gold border-r-2 border-gold' 
                : 'text-navy/60 dark:text-white/60 hover:bg-white dark:hover:bg-navy hover:text-navy dark:hover:text-white'
            }`}
          >
            <Shield size={18} /> Account & Security
          </button>
          <button 
            onClick={() => setActiveTab('notifications')}
            className={`w-full flex items-center gap-3 px-4 py-3 font-bold text-sm transition-colors text-left ${
              activeTab === 'notifications' 
                ? 'bg-gold/10 text-gold border-r-2 border-gold' 
                : 'text-navy/60 dark:text-white/60 hover:bg-white dark:hover:bg-navy hover:text-navy dark:hover:text-white'
            }`}
          >
            <Bell size={18} /> Notifications
          </button>
        </motion.div>

        <motion.div variants={item} className="md:col-span-8 bg-white dark:bg-navy border border-gray-100 dark:border-white/5 p-6 lg:p-8 space-y-8">
          
          {activeTab === 'security' && (
            <>
              <div className="space-y-6">
                <h3 className="font-display font-bold text-lg text-navy dark:text-white border-b border-gray-100 dark:border-white/10 pb-4">
                  Security Preferences
                </h3>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Admin Email</label>
                  <input 
                    type="email" 
                    defaultValue="admin@muyiwaojo.ca"
                    className="w-full bg-cream dark:bg-navy-dark border border-gray-200 dark:border-white/10 px-4 py-3 text-navy dark:text-white focus:outline-none focus:border-gold transition-colors"
                    disabled
                  />
                  <p className="text-xs text-navy/40 dark:text-white/40 pt-1">Contact support to change your primary admin email.</p>
                </div>

                <div className="space-y-2 pt-4">
                  <label className="text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Two-Factor Authentication</label>
                  <div className="flex items-center gap-4 mt-2">
                    <button className="bg-navy dark:bg-white text-white dark:text-navy px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-gold dark:hover:bg-gold transition-colors">
                      Enable 2FA
                    </button>
                    <span className="text-sm font-medium text-red-500">Currently Disabled</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-4 border-t border-gray-100 dark:border-white/10">
                <h3 className="font-display font-bold text-lg text-red-500 pb-2">
                  Danger Zone
                </h3>
                <p className="text-sm text-navy/70 dark:text-white/70">
                  Permanently delete all analytics data and visitor logs. This action cannot be undone.
                </p>
                <button className="border border-red-500 text-red-500 px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-red-500 hover:text-white transition-colors">
                  Clear All Data
                </button>
              </div>
            </>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h3 className="font-display font-bold text-lg text-navy dark:text-white border-b border-gray-100 dark:border-white/10 pb-4">
                Notification Preferences
              </h3>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm text-navy dark:text-white">Daily Summary</p>
                  <p className="text-xs text-navy/60 dark:text-white/60">Receive a daily email with traffic metrics</p>
                </div>
                <div className="w-10 h-6 bg-gold rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm text-navy dark:text-white">New Volunteer Alerts</p>
                  <p className="text-xs text-navy/60 dark:text-white/60">Get notified when someone signs up to volunteer</p>
                </div>
                <div className="w-10 h-6 bg-gold rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                </div>
              </div>
            </div>
          )}
          
        </motion.div>

      </div>
    </motion.div>
  )
}
