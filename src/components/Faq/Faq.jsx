/* eslint-disable react/no-unescaped-entities */


import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';






const Faq = () => {
    const { isDarkMode } = useContext(AuthContext);

    useEffect(() => {

        AOS.init();

    }, [])


    return (

        <div className="my-[50px] pb-[50px] px-[10px] bg-[#99DBF5]"  data-aos = "fade-up" style={{ background: isDarkMode ? "#282A3A" : "#99DBF5" , color: isDarkMode ? "white" : "black" }}>

            <h1 className="text-5xl font-bold text-center pt-[20px]">Frequently Asked Questions </h1>

            <div className="space-y-3 mt-[40px]" >

                


                <div className="collapse collapse-arrow bg-base-200" style={{ background: isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black" }}>
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    How do I register for a library account using this system?
                    </div>
                    <div className="collapse-content">
                        <p>To register for a library account, visit the library's website and follow the registration link. You will need to provide your personal information, such as your name, contact details, and, in some cases, proof of identity. Once registered, you will receive login credentials to access your library account.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200" style={{ background: isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black" }}>
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                    How can I search for a specific book in the library's collection?
                    </div>
                    <div className="collapse-content">
                        <p> You can search for books using our system's search functionality. Enter keywords like the book title, author's name, or ISBN in the search bar, and the system will display a list of matching results. You can then filter the results to find the book you're looking for quickly.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200" style={{ background: isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black" }}>
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                    Can I renew a borrowed book online?
                    </div>
                    <div className="collapse-content">
                        <p> Yes, you can renew a borrowed book online if it is eligible for renewal. Log in to your library account, go to your borrowed items, and select the book you wish to renew. The system will guide you through the renewal process. Keep in mind that there may be a limit on the number of renewals allowed.</p>
                    </div>
                </div>


                <div className="collapse collapse-arrow bg-base-200" style={{ background: isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black" }}>
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                    How can I receive notifications about my due dates and available holds?
                    </div>
                    <div className="collapse-content">
                        <p>The system sends automated notifications to the email address associated with your library account. You'll receive reminders about due dates and notifications when your requested holds become available for pickup. Ensure your contact information is up-to-date to receive these notifications. </p>
                    </div>
                </div>


                <div className="collapse collapse-arrow bg-base-200" style={{ background: isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black" }}>
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                    Can I access the library's services on my mobile device?
                    </div>
                    <div className="collapse-content">
                        <p>  our Library Management System is mobile-responsive, which means you can access library services on your smartphone or tablet. Simply open your web browser and navigate to the library's website, and you'll have a user-friendly mobile experience.</p>
                    </div>
                </div>


               




            </div>

        </div>

    );
};

export default Faq;