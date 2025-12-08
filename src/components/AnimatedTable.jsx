import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTable = () => {
    const data = [
        { id: 1, metric: 'Traffic', value: '45,231', trend: '+12%' },
        { id: 2, metric: 'Conv. Rate', value: '3.2%', trend: '+0.5%' },
        { id: 3, metric: 'Revenue', value: '$12,450', trend: '+8%' },
        { id: 4, metric: 'Churn', value: '1.8%', trend: '-0.2%' },
    ];

    return (
        <div className="w-64 bg-white/80 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-white/40 text-sm">
            <div className="bg-blue-600 p-3 text-white font-bold flex justify-between items-center">
                <span>KPI Dashboard</span>
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-white/50 rounded-full" />
                    <div className="w-2 h-2 bg-white/50 rounded-full" />
                </div>
            </div>
            <div className="p-2">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                            <th className="pb-2 pl-2">Metric</th>
                            <th className="pb-2">Value</th>
                            <th className="pb-2 pr-2 text-right">Trend</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => (
                            <motion.tr
                                key={row.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5 + i * 0.2, duration: 0.5 }}
                                className="border-b border-gray-50 last:border-0"
                            >
                                <td className="py-2 pl-2 font-medium text-slate-700">{row.metric}</td>
                                <td className="py-2 text-slate-600">{row.value}</td>
                                <td className={`py-2 pr-2 text-right font-bold ${row.trend.startsWith('+') ? 'text-green-500' : 'text-red-400'}`}>
                                    {row.trend}
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AnimatedTable;
