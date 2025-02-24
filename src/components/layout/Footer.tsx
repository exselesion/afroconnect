
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">Russian-African Chamber of Commerce</p>
              <p className="mb-2">123 Business Street</p>
              <p className="mb-2">Moscow, Russia</p>
              <p>Email: info@ccafru.ru</p>
            </address>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="hover:underline">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="/user-agreement" className="hover:underline">User Agreement</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} CCAFRU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
