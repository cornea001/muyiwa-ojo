'use client'

import { motion } from 'framer-motion'
import { Eye, Users, Globe, Activity, ArrowUpRight, Monitor, MapPin } from 'lucide-react'

export default function AdminDashboard() {
  
  const stats = [
    {
      title: 'Total Views',
      value: '24,592',
      trend: '+12.5%',
      icon: Eye,
      trendUp: true
    },
    {
      title: 'Unique Visitors',
      value: '18,201',
      trend: '+8.2%',
      icon: Users,
      trendUp: true
    },
    {
      title: 'Avg. Session',
      value: '2m 14s',
      trend: '-1.5%',
      icon: Activity,
      trendUp: false
    }
  ]

  const recentVisitors = [
    { ip: '192.168.1.42', location: 'Ottawa, ON', device: 'Mobile', time: '2 mins ago' },
    { ip: '174.114.2.88', location: 'Ottawa, ON', device: 'Desktop', time: '5 mins ago' },
    { ip: '99.231.55.12', location: 'Toronto, ON', device: 'Desktop', time: '12 mins ago' },
    { ip: '142.122.9.11', location: 'Montreal, QC', device: 'Mobile', time: '18 mins ago' },
    { ip: '67.224.90.33', location: 'Ottawa, ON', device: 'Tablet', time: '24 mins ago' },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            variants={item}
            className="bg-white dark:bg-navy p-6 border border-gray-100 dark:border-white/5 relative overflow-hidden group hover:border-gold/30 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-navy/50 dark:text-white/50 text-sm font-bold uppercase tracking-wider mb-1">
                  {stat.title}
                </p>
                <h3 className="text-3xl font-display font-bold text-navy dark:text-white">
                  {stat.value}
                </h3>
              </div>
              <div className="w-10 h-10 bg-gold/10 text-gold flex items-center justify-center">
                <stat.icon size={20} />
              </div>
            </div>
            <div className={`flex items-center gap-1 text-sm font-medium ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
              {stat.trendUp ? <ArrowUpRight size={16} /> : <ArrowUpRight size={16} className="rotate-90" />}
              <span>{stat.trend}</span>
              <span className="text-navy/40 dark:text-white/40 ml-1 font-normal">vs last month</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Visitors Chart Placeholder */}
        <motion.div variants={item} className="xl:col-span-2 bg-white dark:bg-navy p-6 border border-gray-100 dark:border-white/5">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display font-bold text-lg text-navy dark:text-white">Traffic Overview</h3>
            <select className="bg-cream dark:bg-navy-dark border border-gray-200 dark:border-white/10 text-navy dark:text-white text-sm px-3 py-1.5 focus:outline-none focus:border-gold">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Year</option>
            </select>
          </div>
          
          <div className="h-64 w-full flex items-end gap-2 px-2 pb-2 border-b border-l border-gray-100 dark:border-white/10 relative">
            {/* Mock bars */}
            {[40, 60, 45, 80, 55, 90, 75].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end group">
                <div 
                  className="w-full bg-gold/50 group-hover:bg-gold transition-colors relative" 
                  style={{ height: `${height}%` }}
                >
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-navy dark:bg-white text-white dark:text-navy text-xs font-bold px-2 py-1 pointer-events-none transition-opacity">
                    {height * 12}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3 text-xs text-navy/40 dark:text-white/40 font-bold uppercase tracking-wider">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </motion.div>

        {/* Live Traffic */}
        <motion.div variants={item} className="bg-white dark:bg-navy p-6 border border-gray-100 dark:border-white/5 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display font-bold text-lg text-navy dark:text-white">Live Visitors</h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-bold text-green-500">24 Active</span>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col gap-4">
            {recentVisitors.map((v, i) => (
              <div key={i} className="flex items-start justify-between p-3 bg-cream dark:bg-navy-dark border border-gray-100 dark:border-white/5 hover:border-gold/30 transition-colors">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-navy dark:text-white flex items-center gap-2">
                    <Globe size={14} className="text-gold" />
                    {v.ip}
                  </p>
                  <p className="text-xs text-navy/60 dark:text-white/60 flex items-center gap-1">
                    <MapPin size={12} /> {v.location}
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-xs font-bold text-navy/50 dark:text-white/50">{v.time}</p>
                  <p className="text-xs text-navy/40 dark:text-white/40 flex items-center justify-end gap-1">
                    <Monitor size={12} /> {v.device}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-3 border border-gray-200 dark:border-white/10 text-navy dark:text-white text-sm font-bold tracking-widest uppercase hover:bg-gold hover:text-navy hover:border-gold transition-colors">
            View All Logs
          </button>
        </motion.div>
        
      </div>

    </motion.div>
  )
}
