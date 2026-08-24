'use client'

import { motion } from 'framer-motion'
import { Globe, MapPin, Monitor, Download, Filter } from 'lucide-react'

export default function LogsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }

  // Generate some mock logs
  const generateLogs = () => {
    const locations = ['Ottawa, ON', 'Toronto, ON', 'Montreal, QC', 'Vancouver, BC', 'Gatineau, QC']
    const devices = ['Desktop', 'Mobile', 'Tablet']
    const ips = ['192.168.1.42', '174.114.2.88', '99.231.55.12', '142.122.9.11', '67.224.90.33']
    const pages = ['/', '/about', '/donate', '/privacy']
    
    return Array.from({ length: 20 }).map((_, i) => ({
      id: 1000 - i,
      ip: ips[Math.floor(Math.random() * ips.length)],
      location: locations[Math.floor(Math.random() * locations.length)],
      device: devices[Math.floor(Math.random() * devices.length)],
      page: pages[Math.floor(Math.random() * pages.length)],
      time: i === 0 ? 'Just now' : `${i * 2 + Math.floor(Math.random() * 5)} mins ago`
    }))
  }

  const logs = generateLogs()

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-6xl"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="font-display font-bold text-2xl text-navy dark:text-white">Activity Logs</h2>
          <p className="text-sm text-navy/60 dark:text-white/60 mt-1">Showing the latest 20 visitor logs.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex justify-center items-center gap-2 bg-white dark:bg-navy border border-gray-200 dark:border-white/10 text-navy dark:text-white px-4 py-2.5 text-xs font-bold tracking-widest uppercase hover:border-gold transition-colors shrink-0">
            <Filter size={14} /> Filter
          </button>
          <button className="flex justify-center items-center gap-2 bg-navy dark:bg-white text-white dark:text-navy px-4 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-gold dark:hover:bg-gold dark:hover:text-navy transition-colors shrink-0">
            <Download size={14} /> Export CSV
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-navy border border-gray-100 dark:border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-cream dark:bg-navy-dark border-b border-gray-100 dark:border-white/5">
                <th className="px-6 py-4 text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Time</th>
                <th className="px-6 py-4 text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">IP Address</th>
                <th className="px-6 py-4 text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Location</th>
                <th className="px-6 py-4 text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Device</th>
                <th className="px-6 py-4 text-xs font-bold text-navy/60 dark:text-white/60 uppercase tracking-widest">Page Viewed</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <motion.tr 
                  key={log.id}
                  variants={item}
                  className="border-b border-gray-50 dark:border-white/5 hover:bg-cream dark:hover:bg-navy-dark transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy/80 dark:text-white/80">
                    {log.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-navy dark:text-white">
                    <div className="flex items-center gap-2">
                      <Globe size={14} className="text-gold" />
                      {log.ip}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-navy/80 dark:text-white/80">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-navy/40 dark:text-white/40" />
                      {log.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-navy/80 dark:text-white/80">
                    <div className="flex items-center gap-2">
                      <Monitor size={14} className="text-navy/40 dark:text-white/40" />
                      {log.device}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-navy/80 dark:text-white/80 font-mono bg-cream/50 dark:bg-navy-dark/50">
                    {log.page}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
          <p className="text-xs text-navy/50 dark:text-white/50 font-bold uppercase tracking-wider">
            Showing 1 to 20 of 18,201 logs
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-gray-200 dark:border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-gold hover:border-gold hover:text-navy transition-colors opacity-50 cursor-not-allowed">
              Prev
            </button>
            <button className="px-3 py-1.5 border border-gray-200 dark:border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-gold hover:border-gold hover:text-navy transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>

    </motion.div>
  )
}
