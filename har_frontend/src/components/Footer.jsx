import React from 'react'

const Footer = ({data}) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center bg-dark text-white mt-5">
            <div className="text-center p-3">
                Copyright &copy; {currentYear} | {data.title}
            </div>
        </footer>
    )
}

export default Footer
