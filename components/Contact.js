const Contact = () => {
    return(
    <div className="min-h-screen flex justify-center py-12 bg-brand-dark">
        <div className="max-w-3xl w-full px-6 animate-slideUp">
        <h1 className="text-4xl font-bold text-brand-text mb-6" style={{fontFamily:"'Playfair Display',serif"}}>Contact Us</h1>
        <div className="bg-brand-card border-2 border-brand-border rounded-xl p-6 shadow-card hover:shadow-elevated hover:border-brand-accent transition-all duration-200">
        <h2 className="text-lg font-semibold text-brand-text mb-3">Get in Touch</h2>
        <p className="text-brand-text-secondary">This is my email.id</p>
        <button className="mt-6 bg-brand-accent text-brand-dark px-6 py-2 rounded-lg font-semibold hover:bg-brand-accent-light shadow-card hover:shadow-elevated transition-all duration-200">
          Send Message
        </button>
        </div>
        </div>
    </div>
    );
};

export default Contact;