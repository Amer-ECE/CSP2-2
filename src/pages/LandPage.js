import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const path = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const LandPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="left-col text-white text-center d-flex justify-content-center align-items-center flex-column">
        <h1>Own the time</h1>
        <p>With Giorgio Armani</p>
        <Link className="btn common-btn land-btn login-btn" to="/login">
          Login
        </Link>
        <Link className="btn common-btn land-btn register-btn" to="/register">
          Register
        </Link>
        <Link
          className="btn common-btn land-btn show-products-btn"
          to="/products"
        >
          Show Products
        </Link>
      </div>

      <div className="right-col d-none d-lg-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="700"
          viewBox="0 0 248 248"
        >
          <motion.path
            variants={path}
            initial="hidden"
            animate="visible"
            fill="#fff"
            d="M0 0h248v248H0z"
          />
          <motion.path
            variants={path}
            initial="hidden"
            animate="visible"
            d="M65.092 69.78H10.467c-1.756 9.428 7.394 13.125 7.394 13.125h58.323L65.092 69.78zM81.024 88.778H26.398c-1.756 9.428 7.394 13.125 7.394 13.125h58.323L81.024 88.778zM237.531 69.78h-54.625l-11.092 13.125h58.322c.003 0 9.152-3.697 7.395-13.125zM166.975 88.778l-11.092 13.125h58.322s9.15-3.697 7.395-13.125h-54.625zM151.042 107.777l-4.89 5.786c-1.293-1.264-3.614-3.643-5.063-5.786h-37.356c-.245 2.467-.575 4.794-1.004 6.831l-5.772-6.831H42.33c-1.756 9.427 7.395 13.125 7.395 13.125h148.548s9.15-3.697 7.395-13.125h-54.626zM138.656 101.903l-4.424-13.125h-30.078c.069 2.056.173 4.024.173 5.869 0 2.355-.054 4.816-.171 7.256h34.5zM150.383 79.892s-1.41-8.021-10.609-11.028h-31.485c-3.111 5.069-3.994 10.169-4.158 14.958h32.827c.422-3.2.882-3.93 13.425-3.93zM133.203 140.848h3.215l-1.607-4.005zM104.478 131.857c-4.468 0-8.332 3.095-10.174 8.99h18.815c-.538-5.756-2.372-8.99-8.641-8.99z"
          />
          <motion.path
            variants={path}
            initial="hidden"
            animate="visible"
            d="M58.822 126.257v4.692c0 5.467 4.432 9.898 9.898 9.898h20.144c2.656-7.672 9.02-10.481 14.777-10.481 1.289 0 2.462.19 3.528.541 7.059 1.387 7.431-.403 7.444-.699v-.041s.002.017 0 .041v3.188l.001 7.451h16.58l5.018-12.498 5.016 12.498h38.053c5.468 0 9.898-4.432 9.898-9.897v-4.692l-130.357-.001zM93.152 149.244c0 4.689.603 8.214 1.647 10.814h16.436v-6.345h-2.832v-1.271h10.979v1.271h-3.08v6.345h7.184l5.854-14.591H93.359a33.418 33.418 0 0 0-.207 3.777zM127.555 154.928h14.511l-3.795-9.46h-6.921zM125.495 160.059h18.631l-1.549-3.859h-15.533zM166.1 145.468H143.08l5.854 14.591h17.148c4.148-1.933 7.025-6.136 7.025-11.014v-3.577H166.1zM87.812 145.468H74.89v3.577c0 4.878 2.876 9.081 7.025 11.014h8.291c-1.603-2.824-2.619-6.406-2.619-10.814.001-1.343.079-2.6.225-3.777zM109.292 164.545H97.933c1.848 1.508 4.106 2.086 6.545 2.086 1.948 0 3.542-.756 4.814-2.086z"
          />
          <motion.path
            variants={path}
            initial="hidden"
            animate="visible"
            d="M150.734 164.545l.707 1.766h3.556v1.27h-13.083v-1.27h4.721l-.707-1.766H123.694l-.707 1.766h3.154v1.27h-8.298v-1.27h3.135l.707-1.766h-5.382v3.577s-1.491-4.074-6.969-1.455a.017.017 0 0 0 .002-.005c-1.629 1.1-3.531 1.715-5.695 1.715-3.122 0-6.752-1.229-9.771-3.832h-3.317c-.048.489-.073.988-.073 1.489 0 5.702 3.17 10.646 7.807 13.102h51.424c4.638-2.456 7.808-7.399 7.808-13.102 0-.501-.023-1-.072-1.489h-6.713z"
          />
        </svg>
      </div>
    </div>
  );
};

export default LandPage;
