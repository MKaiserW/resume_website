import './Footer.css'

export default function Footer() {

    // const { handleDownload } = useDownloadCV();
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <section className='footer-main'>
            <div className="footer-bottom">
                <div className="footer-bottom-name">
                    <h2>Maximilian<br />Wilhelm</h2>
                </div>
                <p>© {getCurrentYear()} Wilhelm. All rights reserved</p>
                <p>Made with ❤️ Love</p>
            </div>
        </section>
    )
}
