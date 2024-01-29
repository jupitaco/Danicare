import blogImage from '@/public/blogImage.png';

export const contactForm = (val) => {
  return [
    {
      id: 'firstName',
      type: 'text',
      label: 'First Name',
      value: val?.firstName,
      placeholder: 'First Name',
      required: true,
    },
    {
      id: 'lastName',
      type: 'text',
      label: 'Last Name',
      value: val?.lastName,
      placeholder: 'Last Name',
      required: true,
    },

    {
      id: 'Email',
      type: 'email',
      label: 'Email',
      value: val?.email,
      placeholder: 'Email',
      required: true,
    },

    {
      id: 'company',
      label: 'company',
      type: 'text',
      value: val?.company,
      placeholder: 'Company',
      required: false,
    },
    {
      id: 'jobTitle',
      type: 'text',
      label: 'Job Title',
      value: val?.jobTitle,
      placeholder: 'Job Title',
      required: true,
    },
    {
      id: 'message',
      type: 'text',
      label: 'message',
      value: val?.message,
      placeholder: 'Message',
      textarea: true,
      required: true,
    },
  ];
};

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

export const treatmentFaqData = [
  // {
  //   id: 1,
  //   question: 'How do I know if DaniCare can help me?',
  //   desc: (
  //     <p>
  //       If you&apos;re uncertain about your diagnosis, it might be helpful to
  //       explore how our support at Danicare can align with your needs. Our
  //       specialized care is particularly effective for individuals facing mild
  //       to moderate mental health concerns that impact their day-to-day
  //       functioning. It&apos;s important to note that, for those with more
  //       severe symptoms requiring in-person supervision, we may not be the
  //       primary option. However, we prioritize personalized care and believe in
  //       working collaboratively with you to understand the best approach. We
  //       encourage you to connect with us to diagnose your situation.
  //     </p>
  //   ),
  // },
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
          Even if your insurer isn&apos;t on the list, we might still be able to
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

export const insuranceFaqData = [
  {
    id: 1,
    question:
      'What types of insurance does DaniCare accept for psychiatric services?',
    desc: (
      <p>
        At DaniCare, we understand the importance of accessible mental health
        care. We currently accept a variety of insurance plans to ensure our
        services are available to as many individuals as possible. Please
        contact{' '}
        <a href='mailto: hello@mydanicare.com'> hello@mydanicare.com </a> or
        check our website at <a href='www.mydanicare.com'>www.mydanicare.com</a>{' '}
        for the most up-to-date information on accepted insurance providers.
      </p>
    ),
  },
  {
    id: 2,
    question:
      'How does DaniCare handle confidentiality and privacy in psychiatric treatment, especially concerning insurance claims?',
    desc: (
      <p>
        At DaniCare, we prioritize the confidentiality and privacy of our
        patients. When processing insurance claims, we adhere to strict
        confidentiality standards to protect your sensitive information. Rest
        assured that your privacy is a top priority, and our staff is trained to
        handle all information with the utmost care and discretion. For any
        privacy concerns, you can contact our information center at{' '}
        <a href='mailto: hello@mydanicare.com'> hello@mydanicare.com </a>
      </p>
    ),
  },
  {
    id: 3,
    question: 'What psychiatric services are covered by insurance at DaniCare?',
    desc: (
      <p>
        Understanding what psychiatric services are covered by insurance is
        crucial for informed healthcare decisions. DaniCare accepts insurance
        coverage for a wide range of psychiatric services, including therapy
        sessions, medication management, and other specialized treatments. Feel
        free to contact our office or refer to your insurance plan documents for
        specific details on covered services.
      </p>
    ),
  },
  {
    id: 4,
    question:
      'How can I verify my insurance coverage for psychiatric care at DaniCare?',
    desc: (
      <p>
        To verify your insurance coverage for psychiatric care at DaniCare,
        please reach out to our billing department. They will assist you in
        understanding your insurance benefits, coverage limits, and any
        out-of-pocket expenses you may incur. It&apos;s essential to have this
        information upfront to make informed decisions about your mental health
        care. You can also visit our website at www.mydanicare.com for more
        information.
      </p>
    ),
  },

  {
    id: 6,
    question:
      'Can I use out-of-network insurance at DaniCare for psychiatric services?',
    desc: (
      <p>
        DaniCare recognizes the importance of flexibility in accessing mental
        health services. While we do accept many in-network insurance plans, we
        also accommodate out-of-network coverage. If you have out-of-network
        benefits, please contact our billing department to discuss the
        reimbursement process and any potential additional costs associated with
        using out-of-network insurance at DaniCare. For inquiries, you can email
        our information center at{' '}
        <a href='mailto: hello@mydanicare.com'> hello@mydanicare.com. </a>
      </p>
    ),
  },
];

export const blogData = [
  {
    id: 10,
    title: 'How To Avoid Black Tax As A Creative',
    imageUrl: blogImage,
    authorImageUlr: blogImage,
    authorName: 'Stella Marrie',
    date: 'November, 09, 2022',
    read: '3 min read',
    blogContent: (
      <p>
        Black Tax, a term prevalent in many African and diaspora communities,
        refers to the financial responsibilities that individuals often carry to
        support their families and communities. While it&apos;s an admirable
        cultural tradition, it can be challenging, especially for creative
        professionals trying to establish themselves in their careers. In this
        blog, we&apos;ll explore how you, as a creative, can navigate Black Tax
        and build a successful career without compromising your dreams.
        <br /> <br />
        <em>
          “In the world of creativity, where dreams and innovations thrive,
          Black Tax can sometimes feel like a heavy anchor. The pressure to
          support your family and community is real, but it shouldn&apos;t hold
          you back. We&apos;ll share tips on how to find balance, manage your
          finances, and pursue your artistic passions.”
        </em>
        <br /> <br />
        <strong>Understanding Black Tax</strong>
        <br /> <br />
        Black Tax is a beautiful cultural tradition rooted in community and
        family support. However, it often translates into financial
        responsibilities that can weigh down creative individuals, making it
        crucial to strike a balance between obligations and ambitions.
        <br /> <br />
        <strong>Set Clear Boundaries</strong>
        <br /> <br />
        One of the most effective ways to navigate Black Tax as a creative is by
        setting clear boundaries with family members. Open communication is
        essential. Let them know your career goals and financial limitations so
        they understand your perspective.
        <br /> <br />
        <strong>Financial Planning</strong>
        <br /> <br />
        Develop a solid financial plan. This includes budgeting, saving, and
        investing wisely. A well-thought-out plan can help you manage your
        financial responsibilities without compromising your dreams.
        <br /> <br />
        <strong>Invest in Your Craft</strong>
        <br /> <br />
        As a creative, investing in your skills and passion is crucial. The
        better you become at your craft, the more opportunities you&apos;ll have
        to earn and support your family and community.
        <br /> <br />
        <strong>Explore Passive Income</strong>
        <br /> <br />
        Consider creating additional streams of income that don&apos;t require
        your constant attention. This can help alleviate financial pressures
        while allowing you to focus on your creative pursuits.
        <br /> <br />
        <strong>Leverage Technology</strong>
        <br /> <br />
        Technology, such as the Spray App, can help you manage your finances,
        send money to loved ones, and contribute to your community in a
        convenient and efficient manner.
        <br /> <br />
        Balancing the demands of a creative career with Black Tax is indeed a
        challenge, but it&apos;s not insurmountable. By setting boundaries,
        planning your finances, investing in your craft, and leveraging the
        right tools, you can achieve success as a creative while fulfilling your
        cultural obligations. Embrace your artistic journey while honoring your
        traditions.
      </p>
    ),
  },

  {
    id: 1,
    title: 'How To Avoid Black Tax As A Creative',
    imageUrl: blogImage,
    authorImageUlr: blogImage,
    authorName: 'Stella Marrie',
    date: 'November, 09, 2022',
    read: '3 min read',
    blogContent: (
      <p>
        Black Tax, a term prevalent in many African and diaspora communities,
        refers to the financial responsibilities that individuals often carry to
        support their families and communities. While it&apos;s an admirable
        cultural tradition, it can be challenging, especially for creative
        professionals trying to establish themselves in their careers. In this
        blog, we&apos;ll explore how you, as a creative, can navigate Black Tax
        and build a successful career without compromising your dreams.
        <br /> <br />
        <em>
          “In the world of creativity, where dreams and innovations thrive,
          Black Tax can sometimes feel like a heavy anchor. The pressure to
          support your family and community is real, but it shouldn&apos;t hold
          you back. We&apos;ll share tips on how to find balance, manage your
          finances, and pursue your artistic passions.”
        </em>
        <br /> <br />
        <strong>Understanding Black Tax</strong>
        <br /> <br />
        Black Tax is a beautiful cultural tradition rooted in community and
        family support. However, it often translates into financial
        responsibilities that can weigh down creative individuals, making it
        crucial to strike a balance between obligations and ambitions.
        <br /> <br />
        <strong>Set Clear Boundaries</strong>
        <br /> <br />
        One of the most effective ways to navigate Black Tax as a creative is by
        setting clear boundaries with family members. Open communication is
        essential. Let them know your career goals and financial limitations so
        they understand your perspective.
        <br /> <br />
        <strong>Financial Planning</strong>
        <br /> <br />
        Develop a solid financial plan. This includes budgeting, saving, and
        investing wisely. A well-thought-out plan can help you manage your
        financial responsibilities without compromising your dreams.
        <br /> <br />
        <strong>Invest in Your Craft</strong>
        <br /> <br />
        As a creative, investing in your skills and passion is crucial. The
        better you become at your craft, the more opportunities you&apos;ll have
        to earn and support your family and community.
        <br /> <br />
        <strong>Explore Passive Income</strong>
        <br /> <br />
        Consider creating additional streams of income that don&apos;t require
        your constant attention. This can help alleviate financial pressures
        while allowing you to focus on your creative pursuits.
        <br /> <br />
        <strong>Leverage Technology</strong>
        <br /> <br />
        Technology, such as the Spray App, can help you manage your finances,
        send money to loved ones, and contribute to your community in a
        convenient and efficient manner.
        <br /> <br />
        Balancing the demands of a creative career with Black Tax is indeed a
        challenge, but it&apos;s not insurmountable. By setting boundaries,
        planning your finances, investing in your craft, and leveraging the
        right tools, you can achieve success as a creative while fulfilling your
        cultural obligations. Embrace your artistic journey while honoring your
        traditions.
      </p>
    ),
  },
  {
    id: 2,
    title: 'How To Avoid Black Tax As A Creative',
    imageUrl: blogImage,
    authorImageUlr: blogImage,
    authorName: 'Stella Marrie',
    date: 'November, 09, 2022',
    read: '3 min read',
    blogContent: (
      <p>
        Black Tax, a term prevalent in many African and diaspora communities,
        refers to the financial responsibilities that individuals often carry to
        support their families and communities. While it&apos;s an admirable
        cultural tradition, it can be challenging, especially for creative
        professionals trying to establish themselves in their careers. In this
        blog, we&apos;ll explore how you, as a creative, can navigate Black Tax
        and build a successful career without compromising your dreams.
        <br /> <br />
        <em>
          “In the world of creativity, where dreams and innovations thrive,
          Black Tax can sometimes feel like a heavy anchor. The pressure to
          support your family and community is real, but it shouldn&apos;t hold
          you back. We&apos;ll share tips on how to find balance, manage your
          finances, and pursue your artistic passions.”
        </em>
        <br /> <br />
        <strong>Understanding Black Tax</strong>
        <br /> <br />
        Black Tax is a beautiful cultural tradition rooted in community and
        family support. However, it often translates into financial
        responsibilities that can weigh down creative individuals, making it
        crucial to strike a balance between obligations and ambitions.
        <br /> <br />
        <strong>Set Clear Boundaries</strong>
        <br /> <br />
        One of the most effective ways to navigate Black Tax as a creative is by
        setting clear boundaries with family members. Open communication is
        essential. Let them know your career goals and financial limitations so
        they understand your perspective.
        <br /> <br />
        <strong>Financial Planning</strong>
        <br /> <br />
        Develop a solid financial plan. This includes budgeting, saving, and
        investing wisely. A well-thought-out plan can help you manage your
        financial responsibilities without compromising your dreams.
        <br /> <br />
        <strong>Invest in Your Craft</strong>
        <br /> <br />
        As a creative, investing in your skills and passion is crucial. The
        better you become at your craft, the more opportunities you&apos;ll have
        to earn and support your family and community.
        <br /> <br />
        <strong>Explore Passive Income</strong>
        <br /> <br />
        Consider creating additional streams of income that don&apos;t require
        your constant attention. This can help alleviate financial pressures
        while allowing you to focus on your creative pursuits.
        <br /> <br />
        <strong>Leverage Technology</strong>
        <br /> <br />
        Technology, such as the Spray App, can help you manage your finances,
        send money to loved ones, and contribute to your community in a
        convenient and efficient manner.
        <br /> <br />
        Balancing the demands of a creative career with Black Tax is indeed a
        challenge, but it&apos;s not insurmountable. By setting boundaries,
        planning your finances, investing in your craft, and leveraging the
        right tools, you can achieve success as a creative while fulfilling your
        cultural obligations. Embrace your artistic journey while honoring your
        traditions.
      </p>
    ),
  },
  {
    id: 3,
    title: 'How To Avoid Black Tax As A Creative',
    imageUrl: blogImage,
    authorImageUlr: blogImage,
    authorName: 'Stella Marrie',
    date: 'November, 09, 2022',
    read: '3 min read',
    blogContent: (
      <p>
        Black Tax, a term prevalent in many African and diaspora communities,
        refers to the financial responsibilities that individuals often carry to
        support their families and communities. While it&apos;s an admirable
        cultural tradition, it can be challenging, especially for creative
        professionals trying to establish themselves in their careers. In this
        blog, we&apos;ll explore how you, as a creative, can navigate Black Tax
        and build a successful career without compromising your dreams.
        <br /> <br />
        <em>
          “In the world of creativity, where dreams and innovations thrive,
          Black Tax can sometimes feel like a heavy anchor. The pressure to
          support your family and community is real, but it shouldn&apos;t hold
          you back. We&apos;ll share tips on how to find balance, manage your
          finances, and pursue your artistic passions.”
        </em>
        <br /> <br />
        <strong>Understanding Black Tax</strong>
        <br /> <br />
        Black Tax is a beautiful cultural tradition rooted in community and
        family support. However, it often translates into financial
        responsibilities that can weigh down creative individuals, making it
        crucial to strike a balance between obligations and ambitions.
        <br /> <br />
        <strong>Set Clear Boundaries</strong>
        <br /> <br />
        One of the most effective ways to navigate Black Tax as a creative is by
        setting clear boundaries with family members. Open communication is
        essential. Let them know your career goals and financial limitations so
        they understand your perspective.
        <br /> <br />
        <strong>Financial Planning</strong>
        <br /> <br />
        Develop a solid financial plan. This includes budgeting, saving, and
        investing wisely. A well-thought-out plan can help you manage your
        financial responsibilities without compromising your dreams.
        <br /> <br />
        <strong>Invest in Your Craft</strong>
        <br /> <br />
        As a creative, investing in your skills and passion is crucial. The
        better you become at your craft, the more opportunities you&apos;ll have
        to earn and support your family and community.
        <br /> <br />
        <strong>Explore Passive Income</strong>
        <br /> <br />
        Consider creating additional streams of income that don&apos;t require
        your constant attention. This can help alleviate financial pressures
        while allowing you to focus on your creative pursuits.
        <br /> <br />
        <strong>Leverage Technology</strong>
        <br /> <br />
        Technology, such as the Spray App, can help you manage your finances,
        send money to loved ones, and contribute to your community in a
        convenient and efficient manner.
        <br /> <br />
        Balancing the demands of a creative career with Black Tax is indeed a
        challenge, but it&apos;s not insurmountable. By setting boundaries,
        planning your finances, investing in your craft, and leveraging the
        right tools, you can achieve success as a creative while fulfilling your
        cultural obligations. Embrace your artistic journey while honoring your
        traditions.
      </p>
    ),
  },
  {
    id: 4,
    title: 'How To Avoid Black Tax As A Creative',
    imageUrl: blogImage,
    authorImageUlr: blogImage,
    authorName: 'Stella Marrie',
    date: 'November, 09, 2022',
    read: '3 min read',
    blogContent: (
      <p>
        Black Tax, a term prevalent in many African and diaspora communities,
        refers to the financial responsibilities that individuals often carry to
        support their families and communities. While it&apos;s an admirable
        cultural tradition, it can be challenging, especially for creative
        professionals trying to establish themselves in their careers. In this
        blog, we&apos;ll explore how you, as a creative, can navigate Black Tax
        and build a successful career without compromising your dreams.
        <br /> <br />
        <em>
          “In the world of creativity, where dreams and innovations thrive,
          Black Tax can sometimes feel like a heavy anchor. The pressure to
          support your family and community is real, but it shouldn&apos;t hold
          you back. We&apos;ll share tips on how to find balance, manage your
          finances, and pursue your artistic passions.”
        </em>
        <br /> <br />
        <strong>Understanding Black Tax</strong>
        <br /> <br />
        Black Tax is a beautiful cultural tradition rooted in community and
        family support. However, it often translates into financial
        responsibilities that can weigh down creative individuals, making it
        crucial to strike a balance between obligations and ambitions.
        <br /> <br />
        <strong>Set Clear Boundaries</strong>
        <br /> <br />
        One of the most effective ways to navigate Black Tax as a creative is by
        setting clear boundaries with family members. Open communication is
        essential. Let them know your career goals and financial limitations so
        they understand your perspective.
        <br /> <br />
        <strong>Financial Planning</strong>
        <br /> <br />
        Develop a solid financial plan. This includes budgeting, saving, and
        investing wisely. A well-thought-out plan can help you manage your
        financial responsibilities without compromising your dreams.
        <br /> <br />
        <strong>Invest in Your Craft</strong>
        <br /> <br />
        As a creative, investing in your skills and passion is crucial. The
        better you become at your craft, the more opportunities you&apos;ll have
        to earn and support your family and community.
        <br /> <br />
        <strong>Explore Passive Income</strong>
        <br /> <br />
        Consider creating additional streams of income that don&apos;t require
        your constant attention. This can help alleviate financial pressures
        while allowing you to focus on your creative pursuits.
        <br /> <br />
        <strong>Leverage Technology</strong>
        <br /> <br />
        Technology, such as the Spray App, can help you manage your finances,
        send money to loved ones, and contribute to your community in a
        convenient and efficient manner.
        <br /> <br />
        Balancing the demands of a creative career with Black Tax is indeed a
        challenge, but it&apos;s not insurmountable. By setting boundaries,
        planning your finances, investing in your craft, and leveraging the
        right tools, you can achieve success as a creative while fulfilling your
        cultural obligations. Embrace your artistic journey while honoring your
        traditions.
      </p>
    ),
  },
  {
    id: 5,
    title: 'How To Avoid Black Tax As A Creative',
    imageUrl: blogImage,
    authorImageUlr: blogImage,
    authorName: 'Stella Marrie',
    date: 'November, 09, 2022',
    read: '3 min read',
    blogContent: (
      <p>
        Black Tax, a term prevalent in many African and diaspora communities,
        refers to the financial responsibilities that individuals often carry to
        support their families and communities. While it&apos;s an admirable
        cultural tradition, it can be challenging, especially for creative
        professionals trying to establish themselves in their careers. In this
        blog, we&apos;ll explore how you, as a creative, can navigate Black Tax
        and build a successful career without compromising your dreams.
        <br /> <br />
        <em>
          “In the world of creativity, where dreams and innovations thrive,
          Black Tax can sometimes feel like a heavy anchor. The pressure to
          support your family and community is real, but it shouldn&apos;t hold
          you back. We&apos;ll share tips on how to find balance, manage your
          finances, and pursue your artistic passions.”
        </em>
        <br /> <br />
        <strong>Understanding Black Tax</strong>
        <br /> <br />
        Black Tax is a beautiful cultural tradition rooted in community and
        family support. However, it often translates into financial
        responsibilities that can weigh down creative individuals, making it
        crucial to strike a balance between obligations and ambitions.
        <br /> <br />
        <strong>Set Clear Boundaries</strong>
        <br /> <br />
        One of the most effective ways to navigate Black Tax as a creative is by
        setting clear boundaries with family members. Open communication is
        essential. Let them know your career goals and financial limitations so
        they understand your perspective.
        <br /> <br />
        <strong>Financial Planning</strong>
        <br /> <br />
        Develop a solid financial plan. This includes budgeting, saving, and
        investing wisely. A well-thought-out plan can help you manage your
        financial responsibilities without compromising your dreams.
        <br /> <br />
        <strong>Invest in Your Craft</strong>
        <br /> <br />
        As a creative, investing in your skills and passion is crucial. The
        better you become at your craft, the more opportunities you&apos;ll have
        to earn and support your family and community.
        <br /> <br />
        <strong>Explore Passive Income</strong>
        <br /> <br />
        Consider creating additional streams of income that don&apos;t require
        your constant attention. This can help alleviate financial pressures
        while allowing you to focus on your creative pursuits.
        <br /> <br />
        <strong>Leverage Technology</strong>
        <br /> <br />
        Technology, such as the Spray App, can help you manage your finances,
        send money to loved ones, and contribute to your community in a
        convenient and efficient manner.
        <br /> <br />
        Balancing the demands of a creative career with Black Tax is indeed a
        challenge, but it&apos;s not insurmountable. By setting boundaries,
        planning your finances, investing in your craft, and leveraging the
        right tools, you can achieve success as a creative while fulfilling your
        cultural obligations. Embrace your artistic journey while honoring your
        traditions.
      </p>
    ),
  },
  {
    id: 6,
    title: 'How To Avoid Black Tax As A Creative',
    imageUrl: blogImage,
    authorImageUlr: blogImage,
    authorName: 'Stella Marrie',
    date: 'November, 09, 2022',
    read: '3 min read',
    blogContent: (
      <p>
        Black Tax, a term prevalent in many African and diaspora communities,
        refers to the financial responsibilities that individuals often carry to
        support their families and communities. While it&apos;s an admirable
        cultural tradition, it can be challenging, especially for creative
        professionals trying to establish themselves in their careers. In this
        blog, we&apos;ll explore how you, as a creative, can navigate Black Tax
        and build a successful career without compromising your dreams.
        <br /> <br />
        <em>
          “In the world of creativity, where dreams and innovations thrive,
          Black Tax can sometimes feel like a heavy anchor. The pressure to
          support your family and community is real, but it shouldn&apos;t hold
          you back. We&apos;ll share tips on how to find balance, manage your
          finances, and pursue your artistic passions.”
        </em>
        <br /> <br />
        <strong>Understanding Black Tax</strong>
        <br /> <br />
        Black Tax is a beautiful cultural tradition rooted in community and
        family support. However, it often translates into financial
        responsibilities that can weigh down creative individuals, making it
        crucial to strike a balance between obligations and ambitions.
        <br /> <br />
        <strong>Set Clear Boundaries</strong>
        <br /> <br />
        One of the most effective ways to navigate Black Tax as a creative is by
        setting clear boundaries with family members. Open communication is
        essential. Let them know your career goals and financial limitations so
        they understand your perspective.
        <br /> <br />
        <strong>Financial Planning</strong>
        <br /> <br />
        Develop a solid financial plan. This includes budgeting, saving, and
        investing wisely. A well-thought-out plan can help you manage your
        financial responsibilities without compromising your dreams.
        <br /> <br />
        <strong>Invest in Your Craft</strong>
        <br /> <br />
        As a creative, investing in your skills and passion is crucial. The
        better you become at your craft, the more opportunities you&apos;ll have
        to earn and support your family and community.
        <br /> <br />
        <strong>Explore Passive Income</strong>
        <br /> <br />
        Consider creating additional streams of income that don&apos;t require
        your constant attention. This can help alleviate financial pressures
        while allowing you to focus on your creative pursuits.
        <br /> <br />
        <strong>Leverage Technology</strong>
        <br /> <br />
        Technology, such as the Spray App, can help you manage your finances,
        send money to loved ones, and contribute to your community in a
        convenient and efficient manner.
        <br /> <br />
        Balancing the demands of a creative career with Black Tax is indeed a
        challenge, but it&apos;s not insurmountable. By setting boundaries,
        planning your finances, investing in your craft, and leveraging the
        right tools, you can achieve success as a creative while fulfilling your
        cultural obligations. Embrace your artistic journey while honoring your
        traditions.
      </p>
    ),
  },
  {
    id: 7,
    title: 'How To Avoid Black Tax As A Creative',
    imageUrl: blogImage,
    authorImageUlr: blogImage,
    authorName: 'Stella Marrie',
    date: 'November, 09, 2022',
    read: '3 min read',
    blogContent: (
      <p>
        Black Tax, a term prevalent in many African and diaspora communities,
        refers to the financial responsibilities that individuals often carry to
        support their families and communities. While it&apos;s an admirable
        cultural tradition, it can be challenging, especially for creative
        professionals trying to establish themselves in their careers. In this
        blog, we&apos;ll explore how you, as a creative, can navigate Black Tax
        and build a successful career without compromising your dreams.
        <br /> <br />
        <em>
          “In the world of creativity, where dreams and innovations thrive,
          Black Tax can sometimes feel like a heavy anchor. The pressure to
          support your family and community is real, but it shouldn&apos;t hold
          you back. We&apos;ll share tips on how to find balance, manage your
          finances, and pursue your artistic passions.”
        </em>
        <br /> <br />
        <strong>Understanding Black Tax</strong>
        <br /> <br />
        Black Tax is a beautiful cultural tradition rooted in community and
        family support. However, it often translates into financial
        responsibilities that can weigh down creative individuals, making it
        crucial to strike a balance between obligations and ambitions.
        <br /> <br />
        <strong>Set Clear Boundaries</strong>
        <br /> <br />
        One of the most effective ways to navigate Black Tax as a creative is by
        setting clear boundaries with family members. Open communication is
        essential. Let them know your career goals and financial limitations so
        they understand your perspective.
        <br /> <br />
        <strong>Financial Planning</strong>
        <br /> <br />
        Develop a solid financial plan. This includes budgeting, saving, and
        investing wisely. A well-thought-out plan can help you manage your
        financial responsibilities without compromising your dreams.
        <br /> <br />
        <strong>Invest in Your Craft</strong>
        <br /> <br />
        As a creative, investing in your skills and passion is crucial. The
        better you become at your craft, the more opportunities you&apos;ll have
        to earn and support your family and community.
        <br /> <br />
        <strong>Explore Passive Income</strong>
        <br /> <br />
        Consider creating additional streams of income that don&apos;t require
        your constant attention. This can help alleviate financial pressures
        while allowing you to focus on your creative pursuits.
        <br /> <br />
        <strong>Leverage Technology</strong>
        <br /> <br />
        Technology, such as the Spray App, can help you manage your finances,
        send money to loved ones, and contribute to your community in a
        convenient and efficient manner.
        <br /> <br />
        Balancing the demands of a creative career with Black Tax is indeed a
        challenge, but it&apos;s not insurmountable. By setting boundaries,
        planning your finances, investing in your craft, and leveraging the
        right tools, you can achieve success as a creative while fulfilling your
        cultural obligations. Embrace your artistic journey while honoring your
        traditions.
      </p>
    ),
  },
  {
    id: 8,
    title: 'How To Avoid Black Tax As A Creative',
    imageUrl: blogImage,
    authorImageUlr: blogImage,
    authorName: 'Stella Marrie',
    date: 'November, 09, 2022',
    read: '3 min read',
    blogContent: (
      <p>
        Black Tax, a term prevalent in many African and diaspora communities,
        refers to the financial responsibilities that individuals often carry to
        support their families and communities. While it&apos;s an admirable
        cultural tradition, it can be challenging, especially for creative
        professionals trying to establish themselves in their careers. In this
        blog, we&apos;ll explore how you, as a creative, can navigate Black Tax
        and build a successful career without compromising your dreams.
        <br /> <br />
        <em>
          “In the world of creativity, where dreams and innovations thrive,
          Black Tax can sometimes feel like a heavy anchor. The pressure to
          support your family and community is real, but it shouldn&apos;t hold
          you back. We&apos;ll share tips on how to find balance, manage your
          finances, and pursue your artistic passions.”
        </em>
        <br /> <br />
        <strong>Understanding Black Tax</strong>
        <br /> <br />
        Black Tax is a beautiful cultural tradition rooted in community and
        family support. However, it often translates into financial
        responsibilities that can weigh down creative individuals, making it
        crucial to strike a balance between obligations and ambitions.
        <br /> <br />
        <strong>Set Clear Boundaries</strong>
        <br /> <br />
        One of the most effective ways to navigate Black Tax as a creative is by
        setting clear boundaries with family members. Open communication is
        essential. Let them know your career goals and financial limitations so
        they understand your perspective.
        <br /> <br />
        <strong>Financial Planning</strong>
        <br /> <br />
        Develop a solid financial plan. This includes budgeting, saving, and
        investing wisely. A well-thought-out plan can help you manage your
        financial responsibilities without compromising your dreams.
        <br /> <br />
        <strong>Invest in Your Craft</strong>
        <br /> <br />
        As a creative, investing in your skills and passion is crucial. The
        better you become at your craft, the more opportunities you&apos;ll have
        to earn and support your family and community.
        <br /> <br />
        <strong>Explore Passive Income</strong>
        <br /> <br />
        Consider creating additional streams of income that don&apos;t require
        your constant attention. This can help alleviate financial pressures
        while allowing you to focus on your creative pursuits.
        <br /> <br />
        <strong>Leverage Technology</strong>
        <br /> <br />
        Technology, such as the Spray App, can help you manage your finances,
        send money to loved ones, and contribute to your community in a
        convenient and efficient manner.
        <br /> <br />
        Balancing the demands of a creative career with Black Tax is indeed a
        challenge, but it&apos;s not insurmountable. By setting boundaries,
        planning your finances, investing in your craft, and leveraging the
        right tools, you can achieve success as a creative while fulfilling your
        cultural obligations. Embrace your artistic journey while honoring your
        traditions.
      </p>
    ),
  },
  {
    id: 9,
    title: 'How To Avoid Black Tax As A Creative',
    imageUrl: blogImage,
    authorImageUlr: blogImage,
    authorName: 'Stella Marrie',
    date: 'November, 09, 2022',
    read: '3 min read',
    blogContent: (
      <p>
        Black Tax, a term prevalent in many African and diaspora communities,
        refers to the financial responsibilities that individuals often carry to
        support their families and communities. While it&apos;s an admirable
        cultural tradition, it can be challenging, especially for creative
        professionals trying to establish themselves in their careers. In this
        blog, we&apos;ll explore how you, as a creative, can navigate Black Tax
        and build a successful career without compromising your dreams.
        <br /> <br />
        <em>
          “In the world of creativity, where dreams and innovations thrive,
          Black Tax can sometimes feel like a heavy anchor. The pressure to
          support your family and community is real, but it shouldn&apos;t hold
          you back. We&apos;ll share tips on how to find balance, manage your
          finances, and pursue your artistic passions.”
        </em>
        <br /> <br />
        <strong>Understanding Black Tax</strong>
        <br /> <br />
        Black Tax is a beautiful cultural tradition rooted in community and
        family support. However, it often translates into financial
        responsibilities that can weigh down creative individuals, making it
        crucial to strike a balance between obligations and ambitions.
        <br /> <br />
        <strong>Set Clear Boundaries</strong>
        <br /> <br />
        One of the most effective ways to navigate Black Tax as a creative is by
        setting clear boundaries with family members. Open communication is
        essential. Let them know your career goals and financial limitations so
        they understand your perspective.
        <br /> <br />
        <strong>Financial Planning</strong>
        <br /> <br />
        Develop a solid financial plan. This includes budgeting, saving, and
        investing wisely. A well-thought-out plan can help you manage your
        financial responsibilities without compromising your dreams.
        <br /> <br />
        <strong>Invest in Your Craft</strong>
        <br /> <br />
        As a creative, investing in your skills and passion is crucial. The
        better you become at your craft, the more opportunities you&apos;ll have
        to earn and support your family and community.
        <br /> <br />
        <strong>Explore Passive Income</strong>
        <br /> <br />
        Consider creating additional streams of income that don&apos;t require
        your constant attention. This can help alleviate financial pressures
        while allowing you to focus on your creative pursuits.
        <br /> <br />
        <strong>Leverage Technology</strong>
        <br /> <br />
        Technology, such as the Spray App, can help you manage your finances,
        send money to loved ones, and contribute to your community in a
        convenient and efficient manner.
        <br /> <br />
        Balancing the demands of a creative career with Black Tax is indeed a
        challenge, but it&apos;s not insurmountable. By setting boundaries,
        planning your finances, investing in your craft, and leveraging the
        right tools, you can achieve success as a creative while fulfilling your
        cultural obligations. Embrace your artistic journey while honoring your
        traditions.
      </p>
    ),
  },
];
