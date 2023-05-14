import React from 'react'

const Footer = ({ data }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center bg-dark text-white mt-5">
            <div className="text-center p-3">
                Copyright &copy; {currentYear} | <a href="https://github.com/jacktherock/ActivityFlow" className='text-decoration-none text-white'> <u>{data.title}</u> <i className='bi bi-github'></i></a>
            </div>
        </footer>
    )
}

export default Footer
