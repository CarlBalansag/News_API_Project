import '../index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Card(props) {

return (


    <div className="
    mx-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
            <img className="rounded-t-lg w-2" src='{props.image}' alt="" />
        <div className="p-5">
                <h5 className="mb-2 text-base	 font-bold tracking-tight text-gray-900 dark:text-black">{props.title}</h5>

            <p className="mb-3 text-xs text-zinc-950">{props.description}</p>
            
            <a href='{props.link}' target="_blank" className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>





        </div>
    </div>


);
}

export default Card;


//props.img
//props.title
//props.description
//props.link