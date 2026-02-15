function PolicySection({
    number,
    title,
    children,
}: {
    number: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="space-y-6 z-20">
            <div className="flex items-center gap-3">
                <span className="text-orange-500 text-2xl font-bold">
                    {number}.
                </span>
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>

            <div className="space-y-4 text-white leading-relaxed">
                {children}
            </div>
        </section>
    );
}

function HighlightedBox({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-orange-500/5 border-l-4 border-orange-500 p-5 rounded-xl space-y-4">
            <h3 className="font-semibold text-white">{title}</h3>
            {children}
        </div>
    );
}

function BackgroundBlobs() {
    return (
        <div className="absolute inset-0 -z-1">
            <div className="absolute w-150 h-150 bg-[radial-gradient(circle,rgba(255,0,0,0.08),transparent_80%)] blur-3xl -top-50 -right-50" />
            <div className="absolute w-150 h-150 bg-[radial-gradient(circle,rgba(0,174,239,0.1),transparent_80%)] blur-3xl top-[50%] -left-50" />
            <div className="absolute w-150 h-150 bg-[radial-gradient(circle,rgba(46,170,79,0.1),transparent_80%)] blur-3xl -bottom-50 -right-50" />

        </div>
    );
}
export { PolicySection, HighlightedBox, BackgroundBlobs };