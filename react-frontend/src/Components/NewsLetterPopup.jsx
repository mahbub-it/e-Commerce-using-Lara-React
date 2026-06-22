import React, { useEffect } from 'react'

const NewsLetterPopup = ({ onClose }) => {
    useEffect(() => {
        // Cleanup function for when the component unmounts
        return () => {
            // Remove the body class that prevents scrolling
            document.body.classList.remove('modal-open');
            // Remove the backdrop overlay
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
            // Reset any inline styles added by Bootstrap (like padding-right for scrollbar compensation)
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, []);

    return (
        <>
        <div className="modal fade" id="newsletterPopup" tabIndex="-1">
            <div className="modal-dialog newsletter-popup modal-dialog-centered">
                <div className="modal-content">
                    <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                    <div className="row p-0 m-0">
                        <div className="col-md-6 p-0 d-none d-md-block">
                            <div className="newsletter-popup__bg h-100 w-100">
                                <img loading="lazy" src="/images/newsletter-popup.jpg"
                                    className="h-100 w-100 object-fit-cover d-block" alt="Newsletter" />
                            </div>
                        </div>
                        <div className="col-md-6 p-0 d-flex align-items-center">
                            <div className="block-newsletter w-100">
                                <h3 className="block__title">Sign Up to Our Newsletter</h3>
                                <p>
                                    Be the first to get the latest news about trends, promotions,
                                    and much more!
                                </p>
                                <form action="https://uomo-html.flexkitux.com/Demo9/index.html"
                                    className="footer-newsletter__form position-relative bg-body">
                                    <input className="form-control border-2" type="email" name="email" placeholder="Your email address" />
                                    <input className="btn-link fw-medium bg-transparent position-absolute top-0 end-0 h-100" type="submit"
                                        value="JOIN" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NewsLetterPopup