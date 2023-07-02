import Link from "next/link";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  const totalPageCount = Math.ceil(totalPosts / postsPerPage);
  const indexOfLastNumber = Math.min((currentPage < 5) ? 5 : currentPage + 2, totalPageCount);
  const indexOfFirstNumber = Math.min((currentPage < 5) ? 0 : currentPage - 3, totalPageCount - 5);
  
  console.log(indexOfFirstNumber, indexOfLastNumber);


  const currentNumbers = pageNumbers.slice(indexOfFirstNumber, indexOfLastNumber);

  console.log(currentNumbers);


  return (
    <div className='page-nav-wrap wow fadeInUp mt-80 text-center' data-wow-delay='.3s'>
      <ul>
        <li>
          <Link href="#">
            <a onClick={() => paginate(currentPage - 1)}>
              <HiArrowLeft />
            </a>
          </Link>
        </li>
        {currentNumbers.map(number => (
          <li key={number} className={number === currentPage ? 'current-page' : ''}>
            <Link href="#">
              <a onClick={() => paginate(number)}>
                {number}
              </a>
            </Link>
          </li>
        ))}
        <li>
          <Link href="#">
            <a onClick={() => paginate(currentPage + 1)}>
            <HiArrowRight />
          </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
