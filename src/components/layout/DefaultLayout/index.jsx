import Header from '../components/Header';
import Footer from '../components/Footer';

function DefaultLayout({ children }) {
    return (
        <>
            <div className="relative w-full sm:max-w-[1240px] mx-auto h-screen">
                <Header />
                {children}
                <Footer />
            </div>
        </>
    );
}

export default DefaultLayout;
