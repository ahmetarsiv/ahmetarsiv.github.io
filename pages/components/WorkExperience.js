export default function WorkExperience({ name, description }) {
    return (
        <>
            <div className="text-slate-400 sm:text-lg lg:text-xl leading-relaxed max-w-prose">
                <h2 className="text-slate-200 font-medium pb-1 lg:pb-1.5">{name}:</h2>
                <p>
                    {description}
                </p>
            </div>
        </>
    );
}
