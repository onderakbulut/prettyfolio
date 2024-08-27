'use client';
import { HiOutlineBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Header() {
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    
    useEffect(() => {
        const handleShow = () => setIsActive(true);
        const handleHide = () => setIsActive(false);

        const offcanvasElement = document.getElementById('sidebarMenu');
        offcanvasElement.addEventListener('show.bs.offcanvas', handleShow);
        offcanvasElement.addEventListener('hide.bs.offcanvas', handleHide);


        return () => {
            offcanvasElement.removeEventListener('show.bs.offcanvas', handleShow);
            offcanvasElement.removeEventListener('hide.bs.offcanvas', handleHide);
        };
    }, []);

    useEffect(() => {
        const { Offcanvas } = require("bootstrap");
        const offcanvasElement = document.getElementById('sidebarMenu');
        if (offcanvasElement) {
            const offcanvasInstance = Offcanvas.getInstance(offcanvasElement);
            

            if (offcanvasInstance?._isShown) {
                offcanvasInstance.hide();
            }
        }

    }, [pathname]);
    
    return ( 
    <header className="container">
        <div className="d-flex align-items-center justify-content-between py-30">
            <Link href="/" className="text-black-100 fs-24 fw-bold ls-4.8">PRETTYFOLIO</Link>

            <a className="fs-32 text-black-100 lh-0" data-bs-toggle="offcanvas" href="#sidebarMenu" role="button">
                {isActive ? <LiaTimesSolid /> : <HiOutlineBars3  />}
            </a>
        </div>

        <div className="offcanvas offcanvas-start" tabIndex={-1} id="sidebarMenu">
            <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
                <ul className="list-unstyled mt-20 d-flex flex-column row-gap-10 text-black-100">
                    <li><Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link></li>
                    <li><Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link></li>
                    <li><Link className={`link ${pathname === '/blog' ? 'active' : ''}`} href="/blog">Blog</Link></li>
                    <li><Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>

    </header> );
}

export default Header;