import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-bold text-xl mb-4">COPEN 14</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              International Conference on Precision, Meso, Micro and Nano Engineering
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="text-white/80 hover:text-white transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-white/80 hover:text-white transition-colors">
                  Program
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/registration" className="text-white/80 hover:text-white transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/workshops/pre" className="text-white/80 hover:text-white transition-colors">
                  Pre-Conf Workshops
                </Link>
              </li>
              <li>
                <Link href="/workshops/post" className="text-white/80 hover:text-white transition-colors">
                  Post-Conf Workshops
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Designed and Developed by</h4>
            <p className="text-sm text-white/80 leading-relaxed mb-2">
             Scasys Technologies Pvt. Ltd.
            </p>
            <p className="text-sm text-white/80">Rajasthan, India</p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
          <p>© {currentYear} COPEN 14. All rights reserved. | Hosted by MNIT Jaipur</p>
        </div>
      </div>
    </footer>
  )
}
