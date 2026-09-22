import MobileMenu from "./component/Navigation/MobileMenu";
import Logo from "./component/Logo";
import Destop from "./component/Navigation/DesktopMenu";
export default function Header() {
    return (
        <>
            <div className="flex items-center justify-between h-16 border-b border-slate-200 bg-white px-4 lg:px-8 shadow-sm">

                <MobileMenu />

                <Destop></Destop>

                <Logo />

            </div>
        </>
    );
}