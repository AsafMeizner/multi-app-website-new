'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import Galgol from '../components/galgol';
import { useState } from "react";

enum Page {
    Home = '/',
    UrlShortener = '/urlShortner',
    RandomNumber = '/randomNumber',
    YoutubeDownloader = '/YoutubeDownloader',
    SortingAlgorithms = '/sortingAlgorithms',
    QRcode = '/QRcode',
    OldQR = '/oldQR',
    Scouting = '/scouting'
}

type Props = {}

export const Navbar = (props: Props) => {
    const currentPage = usePathname() as Page

    const [isGalGolOpen, setIsGalGolOpen] = useState(false);

    function closePopup() {
        setIsGalGolOpen(false);
    }

    const getButtonClassName = (page: Page) => {
        return currentPage === page ? 'disabledPurpleButton' : 'purpleButton';
    };

    return (
        <nav className="buttonContainer" style={{display: "flex", backgroundColor: "rgb(30, 31, 34)", padding: '10px', width: '100%', position: 'fixed', top: '0', left: '0'}}>
            <Link className={getButtonClassName(Page.Home)} 
                href={'/'} style={{ marginRight: '10px' }}>Home Page
            </Link>
            <Link className={getButtonClassName(Page.UrlShortener)} 
                href={'/urlShortner'} style={{ marginRight: '10px' }}>URL Shortener
            </Link>
            <Link className={getButtonClassName(Page.RandomNumber)} 
                href={'/randomNumber'} style={{ marginRight: '10px' }}>Random Number Generator
            </Link>
            <Link className={getButtonClassName(Page.YoutubeDownloader)}
                href={'/YoutubeDownloader'} style={{ marginRight: '10px' }}>Youtube Downloader
            </Link>
            <Link className={getButtonClassName(Page.QRcode)}
                href={'/QRcode'} style={{ marginRight: '10px' }}>QR Code Generator
            </Link>
            <Link className={getButtonClassName(Page.OldQR)}
                href={'/oldQR'} style={{ marginRight: '10px' }}>Old QR Code Generator
            </Link>
            <Link className={getButtonClassName(Page.SortingAlgorithms)}
                href={'/sortingAlgorithms'} style={{ marginRight: '10px' }}>Sorting Algorithms
            </Link>
            <Link className={getButtonClassName(Page.Scouting)}
                href={'/scouting'} style={{ marginRight: '10px' }}>Scouting
            </Link>
            <button className='purpleButton' onClick={() => setIsGalGolOpen(true)} style={{zIndex: "999999"}}>
                Open Popup
            </button>
            <Galgol stateToSet={isGalGolOpen} handleClose={closePopup}/>
        </nav>
    )
}
