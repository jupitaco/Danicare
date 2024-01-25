export const Inputs = (val) => {
  return [
    {
      id: 'firstName',
      type: 'text',
      label: 'First Name',
      value: val?.firstName,
      placeholder: 'Enter first name',
      required: true,
    },
    {
      id: 'lastName',
      type: 'text',
      label: 'Last Name',
      value: val?.lastName,
      placeholder: 'Enter last name',
      required: true,
    },
    {
      id: 'age',
      type: 'number',
      label: 'Age',
      value: val?.age,
      placeholder: 'Enter age',
      required: true,
    },
    {
      id: 'Email',
      type: 'email',
      label: 'Email',
      value: val?.email,
      placeholder: 'Enter Email',
      required: true,
    },

    {
      id: 'phoneNumber',
      label: 'Phone Number',
      type: 'number',
      value: val?.phoneNumber,
      placeholder: 'Enter phone number',
      required: false,
    },
    {
      id: 'insuranceProvider',
      type: 'text',
      label: 'Insurance Provider',
      value: val?.insuranceProvider,
      placeholder: 'Enter Insurance Provider',
      required: true,
    },
  ];
};

export const faqData = [
  {
    id: 1,
    question: 'How do I know if DaniCare can help me?',
    desc: (
      <p>
        If you're uncertain about your diagnosis, it might be helpful to explore
        how our support at Danicare can align with your needs. Our specialized
        care is particularly effective for individuals facing mild to moderate
        mental health concerns that impact their day-to-day functioning. It's
        important to note that, for those with more severe symptoms requiring
        in-person supervision, we may not be the primary option. However, we
        prioritize personalized care and believe in working collaboratively with
        you to understand the best approach. We encourage you to connect with us
        to diagnose your situation.
      </p>
    ),
  },
  {
    id: 2,
    question: 'How do I know if Danicare can help me?',
    desc: (
      <p>
        Any prior tech experience is super useful; however, it is not required
        for enrollment into our academy as Jupita Academy programs are
        beginner-friendly. On the other hand, solid social skills are a must, as
        any great tech enthusiast listens closely, empathizes and communicates
        clearly.
      </p>
    ),
  },
  {
    id: 3,
    question: 'Does DaniCare take my insurance?',
    desc: (
      <>
        <p>
          We have established connections with leading insurance providers,
          encompassing:
        </p>
        <ul className='my-3'>
          <li>Oscar Health</li>
          <li>United Healthcare</li>
          <li>Oxford</li>
          <li>Aetna</li>
          <li>Medicare</li>
          <li>Optum</li>
        </ul>
        <p>
          Even if your insurer isn't on the list, we might still be able to
          provide our the needed. Contact our support for details.
        </p>
      </>
    ),
  },
  {
    id: 4,
    question: 'Does DaniCare provide Therapy?',
    desc: (
      <p>
        Brief psychotherapy is a part of every appointment here at DaniCare.
        However, we do not currently offer traditional psychotherapy services.
        However, Referrals to traditional psychotherapy services can be
        provided. Connect with our support for informnation
      </p>
    ),
  },

  {
    id: 6,
    question: 'What conditions does DaniCare treat?',
    desc: (
      <>
        <p>We specialize in:</p>
        <ul className='my-3'>
          <li>Anxiety</li>
          <li>ADHD</li>
          <li>Insomnia</li>
          <li>OCD</li>
          <li>Depression</li>
          <li>PTSD</li>
          <li>Bipolar Disorder</li>
          <li>Child & Adolescence</li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    question: 'Can I get an estimate of my visit cost?',
    desc: (
      <p>
        The best way to get a detailed estimate of your cost is to contact your
        insurance company directly, since your cost will depend on the details
        of your coverage. For some, it&apos;s just a copay. If you have an unmet
        deductible, it could be more. Call the number on your insurance card and
        ask about your plan&apos;s coverage for outpatient psychiatric services.
      </p>
    ),
  },
];
