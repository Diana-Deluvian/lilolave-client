import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const paragraphClasses = 'mt-4 mx-4';

  return (
    <div className='flex flex-col grow max-width-80ch'>
      <h1 className='text-3xl mt-8 text-center '>
        A little bit on the name Lilolave:
      </h1>
      <p className={paragraphClasses}>
        It is a contraction of a rather popular, cheesy line - "Live, love,
        laugh", and something I saw mocked so relentlessly online, that it has
        left a permanent flavour of distaste in my mouth any time I see a
        critique not founded in genuineness, but ironic-detachment or
        straight-up misogyny, at practically anything, no matter how small,
        simple, personal, or irrelevant to me. Still, I do like the phrase. It
        is very simple, eloquent, and still manages to describe something that
        is etched at the heart of every single person's very soul - the desire
        to be free, to love and be loved, to smile joyously and to truly live
        life. Every single inspiration, every one of our desire, small or big,
        quirky, profound, simple, genuine, whimsical or on a whim, all of them,
        no matter the type, shape, form; they all can trace their very origin to
        this simple triplet of words, all spoken so melodically and softly that
        they can be confused for the gentle stir of the wind. Live. Love. Laugh.
        Lilolave.{' '}
      </p>
      <p className={paragraphClasses}>
        That is not to say that there isn't good critique to be had of the
        phrase, it's application, history, use, and potential for
        misapplication. At worst it's a vague, empty phrase, thrown away as an
        impotent protest at the injustice of the world - the worst form of toxic
        positivism, otherwise known as denial. Then again, there is indeed a
        darker shade lurking within - the form of happiness achieved through the
        suffering of others. The author of this page is well aware and opposed
        to any forms of supremacy, be they white, capitalist, cis, western,
        male, adult, or any other amalgamation of force of oppression, no matter
        how local or global.
      </p>
      <p className={`${paragraphClasses}`}>
        Finally, this tiny soliloquy, it's playfulness and cheer makes me happy.
        It symbolises the sort of freedom and genuine joy that tends to be found
        only in small hours of a lifetime, on infrequent occasion, when the
        setting of the world is just right for just that one moment.
      </p>

      <p className={`${paragraphClasses} mb-8`}>
        Note: if you're confused about the dates, they relate to my own personal
        calendar. If you'd like to learn more, please refer to{' '}
        <Link
          className='bg-black text-white px-2 rounded'
          to='https://github.com/Diana-Deluvian/personal-international-fixed-calendar-api'
        >
          this git repository.
        </Link>
      </p>
    </div>
  );
}
