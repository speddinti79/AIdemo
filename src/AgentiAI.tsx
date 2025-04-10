import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar
} from "recharts";

const pnlData = [
  { date: "Apr 3", pnl: 120000 },
  { date: "Apr 4", pnl: 95000 },
  { date: "Apr 5", pnl: 130000 },
  { date: "Apr 6", pnl: 110000 },
  { date: "Apr 7", pnl: 140000 },
  { date: "Apr 8", pnl: 125000 },
  { date: "Apr 9", pnl: 160000 },
];

const exposureData = [
  { sector: "Tech", exposure: 35 },
  { sector: "Healthcare", exposure: 25 },
  { sector: "Energy", exposure: 20 },
  { sector: "Finance", exposure: 15 },
  { sector: "Other", exposure: 5 },
];

export default function AgentiAI() {
  const [askOpen, setAskOpen] = useState(false);

  return (
    <div className="bg-zinc-950 text-white min-h-screen p-6 space-y-6 font-sans">
      <h1 className="text-4xl font-extrabold tracking-tight">Agenti AI – 7 AM Risk Brief</h1>

      <div className="bg-zinc-900 border border-zinc-800 shadow-md p-4 space-y-2 rounded-xl">
        <div className="text-base text-zinc-400">Date: April 10, 2025</div>
        <div className="text-2xl font-bold text-lime-300">Daily PnL: $160,000</div>
        <div>Top Movers: <span className="text-emerald-300">$NVDA (+4.2%)</span>, <span className="text-rose-400">$TSLA (-3.1%)</span>, $AAPL (+1.8%)</div>
        <div className="text-yellow-300">Risk Flags: Tech exposure > 30%, VaR approaching alert threshold</div>
        <div className="italic text-zinc-400">✨ Insight: Options positions in Energy show unusual volume spikes.</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-900 border border-zinc-800 shadow-sm p-4 rounded-xl">
          <h2 className="text-lg font-semibold mb-2">📈 PnL Trend (Past 7 Days)</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={pnlData}>
              <XAxis dataKey="date" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Line type="monotone" dataKey="pnl" stroke="#4ade80" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 shadow-sm p-4 rounded-xl">
          <h2 className="text-lg font-semibold mb-2">📊 Sector Exposure</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={exposureData}>
              <XAxis dataKey="sector" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Bar dataKey="exposure" fill="#7dd3fc" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
