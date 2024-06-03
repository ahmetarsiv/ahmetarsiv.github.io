export default function CardGrid({ name, description, skill, ...props }) {
    return (
        <>
            <a className="shadow-md rounded-xl flex flex-col" {...props}>
                <div className="group relative flex flex-col p-4 sm:p-6 bg-slate-900 flex-1 rounded-xl border border-white/10">
                    <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"/>
                    <h2 className="text-slate-300 font-mono font-bold text-lg sm:text-xl mb-2 sm:mb-4 group-hover:text-cyan-400 transition duration-300">{name}</h2>
                    <p className="text-slate-400 text-sm sm:text-base group-hover:text-slate-200 flex-1 transition duration-300">
                        {description}
                    </p>
                    <div className="mt-3 sm:mt-6 text-sm text-slate-500 group-hover:text-slate-400 font-mono transition duration-300">
                        {skill}
                    </div>
                </div>
            </a>
        </>
    );
}
