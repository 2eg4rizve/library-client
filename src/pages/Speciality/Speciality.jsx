/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { ScrollRestoration } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Speciality = () => {

    const { isDarkMode } = useContext(AuthContext);

    useEffect(() => {

        AOS.init();

    }, [])

    return (
        <div style={{ background: isDarkMode ? "black" : "#99DBF5" , color: isDarkMode ? "white" : "black" } } className="pb-[10px]" data-aos="fade-up" >
        <ScrollRestoration />
       

        <p className="text-5xl font-bold text-center my-[60px] pt-[40px]">Speciality</p>

        <div className="space-y-5 font-semibold  ps-[15px] mb-[150px]">
            <li>User-Centric Design: Our Library Management System is designed with a user-centric approach, ensuring that patrons find it easy to navigate, search for books, and manage their library accounts. The intuitive interface provides a seamless user experience, fostering higher user engagement.</li>
            <li>Automated Notifications: Patrons and librarians receive automated notifications, including due date reminders, available book alerts, and important updates. This feature helps users stay on top of their library activities and reduces the risk of overdue fines.</li>
            <li>Advanced Search and Filtering: The system offers powerful search and filtering options, allowing users to quickly locate the resources they need. Whether searching by title, author, genre, or publication date, users can easily find the information they're looking for.</li>
            <li>Customization: Libraries can tailor the system to their specific needs. Customize the interface, fields, and reports to match the library's branding and operational requirements. This flexibility ensures that the system can adapt to different library settings.</li>
            <li>Comprehensive Reporting and Analytics: The built-in reporting and analytics tools provide libraries with valuable insights into circulation patterns, user behavior, and collection usage. This data-driven approach helps libraries make informed decisions for resource allocation and collection development.</li>
            <li>User Registration and Authentication: The system offers secure user registration and authentication features, ensuring that only authorized patrons can access their library accounts. This security feature protects user privacy and library data.</li>
            <li>Mobile Accessibility: Our Library Management System is mobile-responsive, enabling users to access the library's services on various devices, including smartphones and tablets. This accessibility enhances the convenience and availability of library resources.</li>
            <li>Resource Availability Tracking: Librarians can easily track the availability of library resources, reducing the risk of overbooking and ensuring that patrons can access the materials they need when they need them.</li>
            <li>Simplified Cataloging: The system simplifies the process of cataloging and managing library resources. Librarians can efficiently add new books, update information, and organize the library's collection with ease.</li>
            <li>Multi-Branch Support: For libraries with multiple branches, the system can be configured to manage resources across different locations. This feature facilitates efficient inter-branch resource sharing and management.</li>
            

          
        </div>
    </div>
    );
};

export default Speciality;