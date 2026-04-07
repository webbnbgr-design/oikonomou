import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Scale, 
  Users, 
  Menu, 
  X,
  ChevronDown,
  Award,
  HeartHandshake,
  Gavel
} from 'lucide-react';

// --- Types ---
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FAQ {
  question: string;
  answer: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    title: "Συναινετικό Διαζύγιο",
    description: "Η ταχύτερη και πιο πολιτισμένη λύση για τη λήξη του γάμου, με πλήρη νομική κάλυψη και καθοδήγηση.",
    icon: <HeartHandshake className="w-8 h-8" />
  },
  {
    title: "Διαζύγιο κατ' Αντιδικία",
    description: "Δυναμική εκπροσώπηση σε περιπτώσεις διαφωνιών, προστατεύοντας τα συμφέροντά σας με 70 χρόνια εμπειρίας.",
    icon: <Gavel className="w-8 h-8" />
  },
  {
    title: "Επιμέλεια & Επικοινωνία",
    description: "Εξειδικευμένη προσέγγιση με επίκεντρο το παιδί, διασφαλίζοντας το βέλτιστο μέλλον για την οικογένεια.",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Διατροφή & Περιουσιακά",
    description: "Δίκαιος διακανονισμός των οικονομικών εκκρεμοτήτων και διεκδίκηση των νόμιμων δικαιωμάτων σας.",
    icon: <Scale className="w-8 h-8" />
  }
];

const FAQS: FAQ[] = [
  {
    question: "Πόσο χρόνο διαρκεί ένα συναινετικό διαζύγιο;",
    answer: "Με τις νέες ψηφιακές διαδικασίες, ένα συναινετικό διαζύγιο μπορεί να ολοκληρωθεί σε πολύ σύντομο χρονικό διάστημα, συχνά εντός λίγων εβδομάδων από την υπογραφή των συμφωνητικών."
  },
  {
    question: "Πώς καθορίζεται το ύψος της διατροφής;",
    answer: "Το ύψος της διατροφής καθορίζεται με βάση τις ανάγκες του δικαιούχου και τις οικονομικές δυνατότητες του υπόχρεου, λαμβάνοντας υπόψη τις συνθήκες ζωής τους πριν το διαζύγιο."
  },
  {
    question: "Τι συμβαίνει με την επιμέλεια των παιδιών;",
    answer: "Πλέον η συνεπιμέλεια αποτελεί τον κανόνα, εκτός αν συντρέχουν σοβαροί λόγοι που επιβάλλουν διαφορετική ρύθμιση προς το συμφέρον του παιδιού."
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#' },
    { name: 'Υπηρεσίες', href: '#services' },
    { name: 'Η Εταιρεία', href: '#about' },
    { name: 'Συχνές Ερωτήσεις', href: '#faq' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-royal-blue">
            ΟΙΚΟΝΟΜΟΥ <span className="text-gold">&</span> ΣΥΝΕΡΓΑΤΕΣ
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-70">
            Δικηγορική Εταιρεία Διαζυγίων
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+302103600000" className="btn-primary text-sm py-2">
            ΚΛΗΣΗ ΤΩΡΑ
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-royal-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-royal-blue/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="tel:+302103600000" className="btn-primary text-center">
                ΚΛΗΣΗ ΤΩΡΑ
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop" 
          alt="Law Office Architecture" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory to-ivory"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left grid lg:grid-cols-5 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3"
        >
          <div className="inline-flex items-center space-x-2 bg-royal-blue/5 text-royal-blue px-4 py-1 rounded-full text-xs font-bold mb-8 border border-royal-blue/10">
            <Award size={14} className="text-gold" />
            <span>ΚΥΡΟΣ & ΠΑΡΑΔΟΣΗ ΑΠΟ ΤΟ 1950</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold leading-tight mb-8 tracking-tight text-royal-blue">
            Η εμπειρία τριών γενεών στην υπηρεσία της <span className="italic">οικογένειας</span>.
          </h1>
          <p className="text-xl md:text-2xl opacity-80 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            Εξειδικευμένη νομική υποστήριξη σε υποθέσεις οικογενειακού δικαίου. Προσεγγίζουμε κάθε υπόθεση με το κύρος της ιστορίας μας και την ανθρώπινη ευαισθησία που απαιτείται.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <a href="#services" className="btn-primary flex items-center justify-center text-lg py-4">
              ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ <ChevronRight size={20} className="ml-2" />
            </a>
            <a href="#contact" className="btn-outline flex items-center justify-center text-lg py-4">
              ΕΠΙΚΟΙΝΩΝΙΑ
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block lg:col-span-2 relative"
        >
          <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl border-[12px] border-white relative">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
              alt="Legal Scales" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-royal-blue/10"></div>
          </div>
          <div className="absolute -bottom-8 -left-8 bg-royal-blue text-white p-10 shadow-2xl max-w-xs border-l-4 border-gold">
            <p className="text-lg italic font-serif leading-relaxed">
              "Επαγγελματισμός με ανθρώπινο πρόσωπο, ακόμα και στις πιο δύσκολες υποθέσεις."
            </p>
            <div className="mt-6 h-px bg-gold/50 w-16"></div>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">ΕΜΠΙΣΤΟΣΥΝΗ</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Τομείς Εξειδίκευσης</h2>
          <div className="h-1.5 w-24 bg-gold mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg opacity-70 leading-relaxed">
            Παρέχουμε ολοκληρωμένες νομικές υπηρεσίες που καλύπτουν όλο το φάσμα του Οικογενειακού Δικαίου, με έμφαση στη διαμεσολάβηση και την αποτελεσματική επίλυση.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.title}
              whileHover={{ y: -12 }}
              className="p-10 border border-royal-blue/5 bg-ivory/20 hover:bg-white hover:shadow-2xl transition-all duration-500 group rounded-sm"
            >
              <div className="text-gold mb-8 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-5 leading-tight">{service.title}</h3>
              <p className="text-base leading-relaxed opacity-70 mb-8">
                {service.description}
              </p>
              <a href="#contact" className="text-xs font-bold tracking-widest text-royal-blue flex items-center hover:text-gold transition-colors group-hover:translate-x-2 duration-300">
                ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ <ChevronRight size={14} className="ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-ivory overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-sm shadow-2xl overflow-hidden border-8 border-white aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
                alt="Legal Documents" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-sm shadow-xl overflow-hidden border-4 border-white aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop" 
                  alt="Handshake Agreement" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-sm shadow-xl overflow-hidden border-4 border-white aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?q=80&w=1932&auto=format&fit=crop" 
                  alt="Law Books" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-royal-blue text-white w-40 h-40 rounded-full flex flex-col items-center justify-center shadow-2xl border-8 border-ivory z-20">
            <span className="text-4xl font-bold text-gold">70</span>
            <span className="text-[12px] font-bold uppercase tracking-[0.2em]">Χρόνια</span>
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">Μια Ιστορία Εμπιστοσύνης 3 Γενεών</h2>
          <div className="space-y-8 text-xl leading-relaxed opacity-80 font-light">
            <p>
              Η εταιρεία <strong>ΟΙΚΟΝΟΜΟΥ & ΣΥΝΕΡΓΑΤΕΣ</strong> ιδρύθηκε με όραμα την παροχή υψηλού επιπέδου νομικών υπηρεσιών. Σήμερα, διανύοντας την τρίτη γενιά δικηγόρων, συνεχίζουμε την παράδοση της οικογένειας Οικονόμου με αμείωτο πάθος και αφοσίωση.
            </p>
            <p>
              Συνδυάζουμε τη βαθιά γνώση της νομικής επιστήμης που αποκτήθηκε μέσα σε επτά δεκαετίες με τις πλέον σύγχρονες μεθόδους ψηφιακής διαχείρισης και επικοινωνίας, προσφέροντας λύσεις που ανταποκρίνονται στις ανάγκες της σύγχρονης εποχής.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-10 border-t border-royal-blue/10">
              <div>
                <h4 className="font-serif font-bold text-3xl text-gold mb-3">1950</h4>
                <p className="text-sm uppercase tracking-widest font-bold opacity-60">ΙΔΡΥΣΗ</p>
                <p className="text-sm mt-2">Απαρχή της νομικής μας παράδοσης στην Αθήνα.</p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-3xl text-gold mb-3">2024</h4>
                <p className="text-sm uppercase tracking-widest font-bold opacity-60">ΣΗΜΕΡΑ</p>
                <p className="text-sm mt-2">Σύγχρονη προσέγγιση στο Οικογενειακό Δίκαιο.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Συχνές Ερωτήσεις</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-lg opacity-70">Απαντάμε στις πιο συνηθισμένες απορίες σας για το Οικογενειακό Δίκαιο.</p>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-royal-blue/10 rounded-sm overflow-hidden transition-all duration-300 hover:border-gold/30">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-8 text-left hover:bg-ivory/30 transition-colors"
              >
                <span className="font-serif font-bold text-xl pr-8">{faq.question}</span>
                <ChevronDown className={`transition-transform duration-500 text-gold ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 opacity-70 text-lg leading-relaxed border-t border-royal-blue/5 bg-ivory/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-royal-blue text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 relative z-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10">Επικοινωνήστε μαζί μας</h2>
          <p className="text-xl opacity-80 mb-16 leading-relaxed font-light">
            Είμαστε εδώ για να σας ακούσουμε και να βρούμε μαζί την καλύτερη λύση για την υπόθεσή σας. Η πρώτη επικοινωνία είναι το πρώτο βήμα για την ανακούφισή σας.
          </p>

          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="bg-gold/20 p-4 rounded-sm text-gold border border-gold/20">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Διευθύνσεις</h4>
                <p className="opacity-70 text-lg">Ομήρου 21, Αθήνα (Κολωνάκι)</p>
                <p className="opacity-70 text-lg">Γλυφάδα, Αττική</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-gold/20 p-4 rounded-sm text-gold border border-gold/20">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Τηλέφωνο</h4>
                <a href="tel:+302103600000" className="text-2xl opacity-90 hover:text-gold transition-colors font-serif">210 3600000</a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-gold/20 p-4 rounded-sm text-gold border border-gold/20">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Email</h4>
                <a href="mailto:info@economou-law.gr" className="text-xl opacity-90 hover:text-gold transition-colors">info@economou-law.gr</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white text-royal-blue p-12 rounded-sm shadow-2xl border-t-8 border-gold">
          <h3 className="text-3xl font-serif font-bold mb-8">Προγραμματίστε ένα Ραντεβού</h3>
          <div className="space-y-8">
            <p className="text-lg opacity-70 leading-relaxed">
              Για την άμεση εξυπηρέτησή σας, παρακαλούμε καλέστε στη γραμματεία μας για να ορίσουμε μια συνάντηση στα γραφεία μας στην Αθήνα ή τη Γλυφάδα.
            </p>
            <div className="grid gap-6">
              <a 
                href="tel:+302103600000" 
                className="flex items-center justify-center space-x-4 bg-royal-blue text-white py-5 rounded-sm font-bold text-xl hover:bg-deep-blue transition-all shadow-lg"
              >
                <Phone size={28} />
                <span>ΚΑΛΕΣΤΕ ΜΑΣ ΤΩΡΑ</span>
              </a>
              <div className="text-center py-4">
                <p className="text-sm font-bold uppercase tracking-[0.3em] opacity-40">
                  ΔΕΥΤΕΡΑ - ΠΑΡΑΣΚΕΥΗ 09:00 - 20:00
                </p>
              </div>
            </div>
            <div className="pt-8 border-t border-royal-blue/10 flex items-center justify-center space-x-4 opacity-60">
              <Award size={20} className="text-gold" />
              <span className="text-xs font-bold uppercase tracking-widest">ΠΙΣΤΟΠΟΙΗΜΕΝΕΣ ΝΟΜΙΚΕΣ ΥΠΗΡΕΣΙΕΣ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-deep-blue text-white/60 py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-serif font-bold text-white mb-2">
              ΟΙΚΟΝΟΜΟΥ <span className="text-gold">&</span> ΣΥΝΕΡΓΑΤΕΣ
            </span>
            <span className="text-xs uppercase tracking-[0.4em] font-medium opacity-50">
              ΔΙΚΗΓΟΡΙΚΗ ΕΤΑΙΡΕΙΑ ΔΙΑΖΥΓΙΩΝ
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-xs font-bold tracking-[0.2em]">
            <a href="#" className="hover:text-gold transition-colors">ΑΡΧΙΚΗ</a>
            <a href="#services" className="hover:text-gold transition-colors">ΥΠΗΡΕΣΙΕΣ</a>
            <a href="#about" className="hover:text-gold transition-colors">Η ΕΤΑΙΡΕΙΑ</a>
            <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-gold transition-colors">ΕΠΙΚΟΙΝΩΝΙΑ</a>
          </div>
        </div>

        <div className="h-px bg-white/10 w-full mb-12"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} ΟΙΚΟΝΟΜΟΥ & ΣΥΝΕΡΓΑΤΕΣ - ALL RIGHTS RESERVED</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">ΟΡΟΙ ΧΡΗΣΗΣ</a>
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
