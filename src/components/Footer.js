import React from 'react';

const quotes = [
  'A rock flung is promised to the ground.',
  'I will bless you with this knowledge; I will curse you with the truth.',
  'You are not the one walking the path, you are the path. The one walking it is time.',
  'There is beauty in truth.',
  'People should be allowed to be.',
  'Is your every solution to a problem longing for the last one?',
  'Unwise to say, she realizes, but her reason is lagging far behind her mouth. - Nuawa, Winterglass, Benjanun Sriduangkaew',
  'Since the causes are obvious, the results are well-known. - Zami, Audre Lorde',
];

export default function Footer() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className='bg-gray-500 text-white flex items-center py-2 justify-center text-center'>
      <span className='max-width-80ch mx-6 '>{quote}</span>
    </div>
  );
}
