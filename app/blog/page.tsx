import React from 'react';

const ProjectCaseStudy = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* Navigation - Minimal */}
      <nav className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
        <a href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">← Back to Portfolio</a>
        <div className="text-sm text-slate-400">Published Jan 2026</div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <p className="text-blue-600 font-semibold tracking-wide uppercase text-xs mb-3">Case Study</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Designing a Seamless Fintech Experience for Gen-Z.
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
          An end-to-end deep dive into how we restructured mobile banking for a new generation of investors.
        </p>
      </header>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
          <img 
            src="/api/placeholder/1200/675" 
            alt="Project Preview" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Project Meta Info */}
      <section className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 py-8 border-y border-slate-100">
        <div>
          <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Role</h4>
          <p className="text-sm">Product Designer</p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Timeline</h4>
          <p className="text-sm">12 Weeks</p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Tools</h4>
          <p className="text-sm">Figma, React</p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Deliverable</h4>
          <p className="text-sm">Mobile App</p>
        </div>
      </section>

      {/* Content Section */}
      <article className="max-w-5xl mx-auto px-6 prose prose-slate prose-lg lg:prose-xl pb-24">
        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
        <p className="text-slate-600 mb-8">
          Most banking apps feel like digital spreadsheets. Our goal was to create an interface that felt 
          intuitive, less intimidating, and focused on long-term financial health rather than just transaction history.
        </p>

        <h2 className="text-2xl font-bold mb-4">Solution & Impact</h2>
        <p className="text-slate-600 mb-6">
          We implemented a modular dashboard that prioritizes "Goals" over "Balances." This shift in 
          information architecture led to a 40% increase in user engagement within the first month.
        </p>

        {/* Example of a sub-image or diagram placement */}
        <div className="my-12 p-8 bg-slate-50 rounded-xl border border-slate-100">
           <p className="italic text-center text-slate-500 text-sm">"Insert a diagram of the user flow here to visualize the transition between screens."</p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
        <ul className="list-disc pl-5 text-slate-600 space-y-3">
          <li>Consistency is more important than novelty in financial UI.</li>
          <li>Micro-interactions significantly improve the perception of speed.</li>
          <li>User testing revealed that terminology was the biggest barrier to entry.</li>
        </ul>
      </article>

      {/* Footer / Call to Action */}
      <footer className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Want to work together?</h3>
          <p className="text-slate-600 mb-8">I'm currently looking for new opportunities in Product Design.</p>
          <a href="mailto:hello@example.com" className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-all">
            Get in touch
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ProjectCaseStudy;