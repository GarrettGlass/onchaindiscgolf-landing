import { Github, Twitter, Instagram, HelpCircle } from 'lucide-react';

export default function Footer() {
    const socialLinks = {
        github: 'https://github.com/OnChainDiscGolf',
        twitter: 'https://x.com/OnChainDiscGolf',
        instagram: 'https://www.instagram.com/onchaindiscgolf/',
    };

    return (
        <footer className="py-12 border-t border-white/10 bg-black/20">
            <div className="container mx-auto px-4">
                {/* Beta Notice */}
                <div className="text-center mb-8 pb-6 border-b border-white/5">
                    <p className="text-xs text-gray-500">
                        ⚠️ This app is experimental. Don&apos;t store more sats than you&apos;re willing to lose.{' '}
                        <a href="https://help.onchaindiscgolf.com" className="text-brand-primary hover:underline">Learn more</a>
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-heading font-bold text-white mb-1">On-Chain Disc Golf</h4>
                        <p className="text-gray-500 text-sm">© 2025 All rights reserved.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="flex items-center gap-4">
                            <a
                                href="https://app.onchaindiscgolf.com"
                                className="text-brand-primary hover:text-emerald-400 transition-colors font-medium"
                            >
                                Launch App →
                            </a>
                            <a
                                href="https://help.onchaindiscgolf.com"
                                className="text-gray-400 hover:text-white transition-colors font-medium"
                            >
                                Help
                            </a>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                                aria-label="GitHub repository"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href={socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                                aria-label="Twitter/X profile"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href={socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                                aria-label="Instagram profile"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
