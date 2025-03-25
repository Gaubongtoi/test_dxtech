function Section({ title, description, children }) {
    return (
        <section className="mb-12">
            {/* Header Section */}
            <div className="flex gap-10 mb-20">
                <div className="rounded-md bg-primary_green px-4 flex items-center">
                    <h2 className="text-4xl font-bold text-black inline-block ">{title}</h2>
                </div>
                <p className="text-lg">{description}</p>
            </div>
            {children}
        </section>
    );
}

export default Section;
