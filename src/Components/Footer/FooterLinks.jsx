const links = [
  {
    title: 'Service',
    links: [
      {
        name: 'Campaigns',
        url: '#',
      },
      {
        name: 'Customer Support',
        url: '#',
      },
      {
        name: 'Complaint Cell',
        url: '#',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        name: 'About Us',
        url: '#',
      },
      {
        name: 'Contact Us',
        url: '#',
      },
      {
        name: 'Careers',
        url: '#',
      },
    ],
  },
  {
    title: 'Business',
    links: [
      {
        name: 'Be a Sparrow Supplier',
        url: '#',
      },
      {
        name: 'Be a Sparrow Merchant',
        url: '#',
      },
      {
        name: 'Digital Payroll',
        url: '#',
      },
    ],
  },
  {
    title: 'Others',
    links: [
      {
        name: 'FAQs',
        url: '#',
      },
      {
        name: 'Privacy Policy',
        url: '#',
      },
      {
        name: 'Terms of Use',
        url: '#',
      },
    ],
  },
];

const FooterLinks = () => {
  return (
    <div className='grid w-full grid-cols-2 gap-5 text-white md:w-1/2 lg:w-2/3 lg:grid-cols-4'>
      {links.map((item, index) => (
        <div key={index}>
          <h2 className='mb-3 text-xl font-bold'>{item.title}</h2>
          <ul className='space-y-2'>
            {item.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
