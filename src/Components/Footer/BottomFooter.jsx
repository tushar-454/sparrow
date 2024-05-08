import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
const BottomFooter = () => {
  return (
    <div className='flex flex-col items-center justify-between gap-5 border-t py-8 sm:flex-row'>
      <p>© 2024 Sparrow, All Rights Reserved </p>
      <div className='flex items-center justify-center gap-4'>
        <a href='#'>
          <FaFacebook className='mx-2 rounded-full bg-white p-1 text-4xl text-[#1E1E1E]' />
        </a>
        <a href='#'>
          <FaTwitter className='mx-2 rounded-full bg-white p-1 text-4xl text-[#1E1E1E]' />
        </a>
        <a href='#'>
          <FaYoutube className='mx-2 rounded-full bg-white p-1 text-4xl text-[#1E1E1E]' />
        </a>
        <a href='#'>
          <FaInstagram className='mx-2 rounded-full bg-white p-1 text-4xl text-[#1E1E1E]' />
        </a>
        <a href='#'>
          <FaLinkedin className='mx-2 rounded-full bg-white p-1 text-4xl text-[#1E1E1E]' />
        </a>
      </div>
    </div>
  );
};

export default BottomFooter;
