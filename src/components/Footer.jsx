import {
  Heart,
  HelpCircle,
  MessageCircle,
  FileText,
  Mail,
  Phone,
  Shield,
  ExternalLink,
} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-wide">🖤 Black Vendors</h3>
            <p className="text-gray-400 text-sm mb-4">
              Building bold experiences for bold people. Est. 2024.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-red-500" />
              Crafted with passion in Nairobi
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">💬 Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#help" className="hover:text-teal-400 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Help Center
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Chat with Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-400 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  FAQs
                </a>
              </li>
              <li>
                <a href="mailto:jacobsihul911@gmail.com" className="hover:text-teal-400 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email: jacobsihul911@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+254794787682" className="hover:text-teal-400 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call: +254 794 787 682
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold mb-4">🚀 Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-teal-400">About Us</a></li>
              <li><a href="#features" className="hover:text-teal-400">Features</a></li>
              <li><a href="#pricing" className="hover:text-teal-400">Pricing</a></li>
              <li><a href="#blog" className="hover:text-teal-400">Blog</a></li>
              <li><a href="#careers" className="hover:text-teal-400">Join the Team</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">📜 Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#privacy" className="hover:text-teal-400 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Privacy Policy
                </a>
              </li>
              <li><a href="#terms" className="hover:text-teal-400">Terms of Service</a></li>
              <li><a href="#cookies" className="hover:text-teal-400">Cookie Policy</a></li>
              <li><a href="#gdpr" className="hover:text-teal-400">GDPR</a></li>
              <li>
                <a href="#licenses" className="hover:text-teal-400 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Open Source
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Black Vendors Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#twitter" className="hover:text-teal-400">🐦 Twitter</a>
            <a href="#facebook" className="hover:text-teal-400">📘 Facebook</a>
            <a href="#linkedin" className="hover:text-teal-400">💼 LinkedIn</a>
            <a href="#github" className="hover:text-teal-400">👨‍💻 GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

