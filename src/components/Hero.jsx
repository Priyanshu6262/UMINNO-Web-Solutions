import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Globe, Rocket, Gem, Briefcase, Smile, Users, ShieldCheck, ShoppingCart, Search, User } from 'lucide-react';
import { staggerContainer, staggerItem } from '../animations/variants';
import { stats } from '../data/siteData';
import { useCounter } from '../hooks/useCounter';

const statIcons = [Briefcase, Smile, Users, ShieldCheck];

function StatItem({ stat, icon: Icon }) {
  const { count, ref } = useCounter(stat.value, 2000);
  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-1"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
        <Icon className="w-5 h-5 text-violet-400" />
      </div>
      <div className="text-xl md:text-2xl font-black text-white font-display leading-none">
        {count}{stat.suffix}
      </div>
      <div className="text-xs text-slate-400 text-center leading-tight">{stat.label}</div>
    </div>
  );
}

function WebsitePreview() {
  return (
    <div className="w-full h-full bg-white overflow-hidden" style={{ fontSize: '10px' }}>
      <div className="bg-violet-600 text-white text-center py-0.5 px-2" style={{ fontSize: '7px' }}>
        🎉 Welcome to our store! Free shipping on orders over ₹999 🛒
      </div>
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-100">
        <span className="font-bold text-violet-600" style={{ fontSize: '9px' }}>Your Website</span>
        <div className="flex gap-2 text-gray-500" style={{ fontSize: '6.5px' }}>
          {['Home','Shop','Categories','Offers','About Us','Contact'].map(l => (
            <span key={l} className={l==='Home' ? 'text-violet-600 border-b border-violet-600' : ''}>{l}</span>
          ))}
        </div>
        <div className="flex gap-1.5 text-gray-400">
          <Search className="w-2.5 h-2.5" /><User className="w-2.5 h-2.5" /><ShoppingCart className="w-2.5 h-2.5" />
        </div>
      </div>
      <div className="flex items-stretch px-3 py-2" style={{ background: 'linear-gradient(135deg,#faf5ff,#ede9fe)', minHeight: '130px' }}>
        <div className="flex-1 pr-2 flex flex-col justify-center">
          <div className="inline-flex items-center bg-violet-100 text-violet-700 rounded px-1 py-0.5 mb-1 w-fit" style={{ fontSize: '6px' }}>⭐ Big Sale</div>
          <div className="font-black text-gray-900 mb-1" style={{ fontSize: '12px', lineHeight: 1.2 }}>
            Best Quality<br /><span className="text-violet-600">Products</span>
          </div>
          <div className="text-gray-500 mb-2" style={{ fontSize: '6.5px', lineHeight: 1.4 }}>
            Discover amazing products at<br />the best prices. Limited time offers!
          </div>
          <div className="flex items-center gap-1.5">
            <button className="bg-violet-600 text-white rounded px-2 py-0.5" style={{ fontSize: '6.5px' }}>Shop Now</button>
            <span className="text-amber-500" style={{ fontSize: '6.5px' }}>★ 4.8/5</span>
            <span className="text-gray-400" style={{ fontSize: '5.5px' }}>from 1200+ customers</span>
          </div>
        </div>
        <div className="relative flex-shrink-0 flex items-center" style={{ width: '130px' }}>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full opacity-40"
            style={{ background: 'radial-gradient(circle,#7c3aed,#4f46e5)' }} />
          <div className="absolute top-0 right-0 w-9 h-9 rounded-full bg-violet-700 flex items-center justify-center text-white text-center leading-tight" style={{ fontSize: '5.5px' }}>
            Up to<br /><strong style={{ fontSize: '8px' }}>50%</strong><br />Off
          </div>
          <div className="absolute" style={{ top: '8px', right: '28px', fontSize: '24px' }}>👜</div>
          <div className="absolute" style={{ bottom: '4px', right: '46px', fontSize: '16px' }}>👟</div>
          <div className="absolute" style={{ bottom: '14px', right: '18px', fontSize: '14px' }}>⌚</div>
          <div className="absolute" style={{ bottom: '4px', right: '8px', fontSize: '12px' }}>🕶️</div>
        </div>
      </div>
      <div className="px-3 py-2">
        <div className="flex items-center justify-between mb-1">
          <span className="font-bold text-gray-800" style={{ fontSize: '8px' }}>Shop by Category</span>
          <span className="text-violet-600" style={{ fontSize: '6.5px' }}>View All</span>
        </div>
        <div className="flex gap-1.5">
          {[['👔',"Men's",'120'],['👗',"Women's",'150'],['🎧','Electronics','200'],['🪑','Home','180'],['💄','Beauty','90']].map(([e,n,c]) => (
            <div key={n} className="flex flex-col items-center gap-0.5 flex-1">
              <div className="w-7 h-7 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center" style={{ fontSize: '13px' }}>{e}</div>
              <span className="text-gray-700 text-center leading-tight" style={{ fontSize: '5.5px' }}>{n}</span>
              <span className="text-gray-400" style={{ fontSize: '5px' }}>{c} Items</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LaptopMockup() {
  return (
    <div className="relative w-full flex justify-center">
      {/* Glow */}
      <div className="absolute inset-0 blur-3xl opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 60% 50%,#7c3aed,#4f46e5,transparent 70%)' }} />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22,1,0.36,1] }}
        className="relative w-full"
        style={{ maxWidth: '580px', transform: 'perspective(1200px) rotateY(-8deg) rotateX(3deg)', transformStyle: 'preserve-3d' }}
      >
        {/* Screen */}
        <div className="relative rounded-t-2xl overflow-hidden"
          style={{ background: 'linear-gradient(145deg,#1c1c3a,#12122a)', padding: '8px 8px 0',
            boxShadow: '0 0 60px rgba(124,58,237,0.35), inset 0 1px 0 rgba(255,255,255,0.05)' }}>
          <div className="flex justify-center mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
          </div>
          <div className="rounded-sm overflow-hidden" style={{ height: '260px' }}>
            <WebsitePreview />
          </div>
        </div>
        {/* Hinge */}
        <div style={{ background: 'linear-gradient(to right,#0e0e20,#1e1e38,#0e0e20)', height: '5px' }} />
        {/* Base */}
        <div className="flex items-center justify-center" style={{
          background: 'linear-gradient(to bottom,#1a1a32,#0e0e1e)', height: '26px',
          borderRadius: '0 0 10px 10px', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }}>
          <div className="w-14 h-2.5 rounded-sm" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }} />
        </div>
        <div style={{ height: '3px', background: 'linear-gradient(to right,#08081a,#14142a,#08081a)', borderRadius: '0 0 4px 4px' }} />
        {/* Ground glow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 blur-xl opacity-50 pointer-events-none"
          style={{ width: '75%', height: '16px', background: 'radial-gradient(ellipse,#7c3aed,transparent)' }} />
      </motion.div>

      {/* Floating badge – Website Live (top center) */}
      <motion.div initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.8, duration:0.5 }}
        className="absolute flex items-center gap-2 rounded-2xl px-3 py-2"
        style={{ top:'0', left:'38%', background:'rgba(10,10,25,0.85)', border:'1px solid rgba(255,255,255,0.08)', backdropFilter:'blur(16px)' }}>
        <div className="w-8 h-8 rounded-xl bg-violet-600 flex items-center justify-center flex-shrink-0">
          <Globe className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-white text-xs font-semibold flex items-center gap-1">
            Website Live <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
          </div>
          <div className="text-slate-400 text-xs">Your store is online</div>
        </div>
      </motion.div>

      {/* Floating badge – Fast Delivery (top right) */}
      <motion.div initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ delay:1, duration:0.5 }}
        className="absolute flex items-center gap-2 rounded-2xl px-3 py-2"
        style={{ top:'0', right:'-2%', background:'rgba(10,10,25,0.85)', border:'1px solid rgba(255,255,255,0.08)', backdropFilter:'blur(16px)' }}>
        <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
          <Rocket className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-white text-xs font-semibold">Fast Delivery</div>
          <div className="text-slate-400 text-xs">On time, every time</div>
        </div>
      </motion.div>

      {/* Floating badge – Premium UI (right middle) */}
      <motion.div initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ delay:1.2, duration:0.5 }}
        className="absolute flex items-center gap-2 rounded-2xl px-3 py-2"
        style={{ top:'45%', right:'-4%', background:'rgba(10,10,25,0.85)', border:'1px solid rgba(255,255,255,0.08)', backdropFilter:'blur(16px)' }}>
        <div className="w-8 h-8 rounded-xl bg-fuchsia-600 flex items-center justify-center flex-shrink-0">
          <Gem className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-white text-xs font-semibold">Premium UI</div>
          <div className="text-slate-400 text-xs">Modern &amp; Clean</div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: 'linear-gradient(135deg,#060612 0%,#0d0820 50%,#07060f 100%)' }}>

      {/* Background glows */}
      <div className="absolute pointer-events-none" style={{ top:'5%', right:'15%', width:'500px', height:'500px',
        background:'radial-gradient(circle,rgba(124,58,237,0.22),transparent 70%)', filter:'blur(60px)' }} />
      <div className="absolute pointer-events-none" style={{ bottom:'10%', left:'0%', width:'350px', height:'350px',
        background:'radial-gradient(circle,rgba(79,70,229,0.18),transparent 70%)', filter:'blur(60px)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage:'radial-gradient(circle,#a78bfa 1px,transparent 1px)', backgroundSize:'30px 30px' }} />

      {/* Sparkles */}
      {[[12,22],[88,32],[8,68],[78,72],[52,12],[35,85]].map(([x,y],i) => (
        <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-violet-400 pointer-events-none"
          style={{ left:`${x}%`, top:`${y}%` }}
          animate={{ opacity:[0.1,0.8,0.1], scale:[1,1.8,1] }}
          transition={{ duration:2+i*0.6, repeat:Infinity, delay:i*0.3 }} />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* ── Left ── */}
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="z-10">

            {/* Badge */}
            <motion.div variants={staggerItem} className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)' }}>
                <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="text-white text-sm font-medium">Premium Digital Solutions</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_,i) => <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
                </div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div variants={staggerItem} className="mb-5">
              <h1 className="font-display font-extrabold leading-tight" style={{ fontSize:'clamp(2.6rem,5vw,3.8rem)' }}>
                <span className="text-white">We Build </span>
                <span style={{ background:'linear-gradient(135deg,#c4b5fd,#a78bfa,#7c3aed)',
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                  Modern
                </span>
                <br />
                <span className="text-white">Web &amp; Android</span>
                <br />
                <span style={{ background:'linear-gradient(135deg,#c4b5fd,#7c3aed)',
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                  Apps
                </span>
              </h1>
              <div className="mt-2 h-[3px] w-28 rounded-full"
                style={{ background:'linear-gradient(90deg,#7c3aed,#a78bfa)' }} />
            </motion.div>

            {/* Description */}
            <motion.p variants={staggerItem} className="text-slate-400 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
              Professional websites and apps for shops, e-commerce, startups, and small businesses.
              Turning your vision into stunning digital reality.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mb-10">
              <motion.button whileHover={{ scale:1.05 }} whileTap={{ scale:0.97 }}
                onClick={() => scrollTo('plans')}
                className="flex items-center gap-2 font-semibold text-white px-7 py-3.5 rounded-xl"
                style={{ background:'linear-gradient(135deg,#7c3aed,#6d28d9)', boxShadow:'0 4px 20px rgba(124,58,237,0.5)' }}>
                View Plans <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button whileHover={{ scale:1.05 }} whileTap={{ scale:0.97 }}
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 font-semibold text-white px-7 py-3.5 rounded-xl transition-all"
                style={{ border:'1px solid rgba(255,255,255,0.15)' }}>
                Contact Us
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={staggerItem} className="grid grid-cols-4 gap-3 sm:gap-5">
              {stats.map((stat, i) => {
                const Icon = statIcons[i];
                return <StatItem key={stat.id} stat={stat} icon={Icon} />;
              })}
            </motion.div>
          </motion.div>

          {/* ── Right – Laptop ── */}
          <div className="relative hidden lg:flex items-center justify-center pt-8">
            <LaptopMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
