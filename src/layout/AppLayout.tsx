import { ReactNode } from "react";

// import Navbar Header
import Header from '@/components/Header';

// import Footer
import Footer from '@/components/Footer';

interface AppLayoutProps {
    children: ReactNode;
}

// define wrap App Layout
export const AppLayout = ({ children }: AppLayoutProps) => {
    return <>
        <Header />
        {children}
        <Footer />
    </>
}