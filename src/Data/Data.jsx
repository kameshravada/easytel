import {
  IconBriefcaseFilled,
  IconCoin,
  IconHomeFilled,
  IconPhone,
  IconPhoneFilled,
} from "@tabler/icons-react";

const serviceCards = [
  {
    icon: <IconHomeFilled size={52} />,
    title: "Home Phone",
    description:
      "Enjoy crystal-clear calling with Easytel’s Home Phone service. Our dedicated in-house technicians ensure a seamless installation and provide reliable, round-the-clock support, giving you peace of mind from setup to ongoing assistance.",
  },
  {
    icon: <IconBriefcaseFilled size={52} />,
    title: "Business Solutions",
    description:
      "Simplify your operations by keeping everything under one roof. Easytel delivers tailored telecommunications and technology solutions with a single point of contact, empowering SMEs with reliable connectivity and expert support.",
  },
  {
    icon: <IconPhoneFilled size={52} />,
    title: "SIP Trunking",
    description:
      "Connect your IP-PBX directly to Easytel’s robust network and take advantage of industry-leading international rates, flat-rate domestic termination, and a vast origination footprint. Our SIP Trunking solution ensures scalability, reliability, and cost savings for businesses of all sizes.",
  },
];

const FAQData = [
  {
    id: 1,
    question: "What is VoIP?",
    answer:
      "VoIP (Voice over Internet Protocol) takes analog audio signals from your phone, converts them into digital data, and transfers them over the Internet. It works like a regular phone, but instead of traditional telephone wiring, it uses your high-speed internet connection—helping you avoid high telephone company charges.",
  },
  {
    id: 2,
    question: "Will I save money using VoIP phone service for my business?",
    answer:
      "Yes. VoIP services are generally more affordable than traditional phone lines because they eliminate long-distance charges and reduce infrastructure costs. Businesses often save up to 60% on their monthly communication expenses.",
  },
  {
    id: 3,
    question:
      "I’m looking for a VoIP phone service, why should I choose Easytelindia.com?",
    answer:
      "Easytelindia.com offers cost-effective VoIP solutions with features like unlimited calling, call forwarding, voicemail-to-email, and scalability. With reliable customer support and flexible plans, it’s a great fit for both small and large businesses.",
  },
  {
    id: 4,
    question: "Is VoIP a reliable option?",
    answer:
      "Yes, VoIP is highly reliable as long as you have a stable high-speed internet connection. Many businesses worldwide rely on VoIP for their day-to-day communication. Backup options and mobile app support make it even more dependable.",
  },
  {
    id: 5,
    question: "What features does VoIP offer that traditional phones don’t?",
    answer:
      "VoIP comes with advanced features such as video conferencing, call recording, auto-attendants, voicemail-to-email, virtual numbers, and seamless mobile integration—features that are either expensive or unavailable with traditional phones.",
  },
  {
    id: 6,
    question: "Do I need special equipment to use VoIP?",
    answer:
      "Not necessarily. You can use VoIP with a computer, smartphone, or existing desk phones using an adapter. Many businesses prefer dedicated VoIP phones, but they are optional.",
  },
  {
    id: 7,
    question: "Can I keep my existing phone number when switching to VoIP?",
    answer:
      "Yes, most VoIP providers support number portability, allowing you to keep your current business phone number when you switch to VoIP services.",
  },
  {
    id: 8,
    question: "Is VoIP secure?",
    answer:
      "VoIP can be very secure if implemented properly. Reputable providers use encryption and security protocols to protect your calls and data from unauthorized access.",
  },
];

export { serviceCards, FAQData };
