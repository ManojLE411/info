// Static mock data for the website
import type { Service } from '@/types/service.types';
import type { Testimonial } from '@/types/testimonial.types';
import type { Employee } from '@/types/employee.types';
import type { Project } from '@/types/common.types';
import type { Job } from '@/types/job.types';
import type { InternshipTrack } from '@/types/internship.types';
import type { TrainingProgram } from '@/types/training.types';
import type { BlogPost } from '@/types/blog.types';

export const mockServices: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React, Next.js, and Vue.js. We create responsive, scalable, and high-performance web solutions.',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'CMS Integration',
      'API Development',
      'Performance Optimization'
    ],
    icon: 'Code',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  {
    id: '2',
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by AI and ML. From predictive analytics to natural language processing, we help businesses leverage artificial intelligence.',
    features: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Recommendation Systems',
      'Chatbots & Virtual Assistants',
      'Model Training & Deployment'
    ],
    icon: 'Brain',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
  },
  {
    id: '3',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services. We help businesses move to the cloud and optimize their cloud operations.',
    features: [
      'Cloud Migration',
      'AWS/Azure/GCP Setup',
      'DevOps & CI/CD',
      'Container Orchestration',
      'Serverless Architecture',
      'Cloud Security'
    ],
    icon: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
  },
  {
    id: '4',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. We build apps that deliver exceptional user experiences.',
    features: [
      'iOS & Android Apps',
      'React Native Development',
      'Flutter Applications',
      'App Store Optimization',
      'Push Notifications',
      'Mobile Analytics'
    ],
    icon: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80'
  },
  {
    id: '5',
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights. We provide data analytics, visualization, and business intelligence solutions.',
    features: [
      'Data Visualization',
      'Business Intelligence',
      'Data Warehousing',
      'ETL Pipelines',
      'Real-time Analytics',
      'Custom Dashboards'
    ],
    icon: 'BarChart3',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  },
  {
    id: '6',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets. We provide security audits, penetration testing, and compliance services.',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Vulnerability Assessment',
      'Compliance (GDPR, HIPAA)',
      'Security Training',
      'Incident Response'
    ],
    icon: 'Shield',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80'
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Sarita Sharma',
    title: 'CEO, TechVani Solutions',
    quote: 'IMTDA transformed our digital infrastructure. Their team delivered a scalable cloud solution that reduced our operational costs by 40%. Exceptional service and expertise.',
    avatar: 'https://i.pravatar.cc/150?img=47'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    title: 'CTO, ShikshaTech India',
    quote: 'Working with IMTDA was a game-changer. They built our learning management system with cutting-edge AI features. The platform has improved student engagement significantly.',
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: '3',
    name: 'Arpita Das',
    title: 'Product Manager, PayBharat',
    quote: 'IMTDA\'s expertise in fintech solutions is outstanding. They delivered a secure, compliant payment platform ahead of schedule. Highly recommended for enterprise projects.',
    avatar: 'https://i.pravatar.cc/150?img=45'
  },
  {
    id: '4',
    name: 'Aditya Verma',
    title: 'Director, BharatLogistics',
    quote: 'The AI-powered logistics system IMTDA developed has revolutionized our operations. Real-time tracking and predictive analytics have improved our efficiency dramatically.',
    avatar: 'https://i.pravatar.cc/150?img=33'
  },
  {
    id: '5',
    name: 'Priya Sharma',
    title: 'Founder, ArogyaConnect',
    quote: 'IMTDA built our telemedicine platform with exceptional attention to security and user experience. The system handles thousands of consultations daily without issues.',
    avatar: 'https://i.pravatar.cc/150?img=52'
  }
];

export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'Dr. Anil Kumar',
    role: 'Chief Technology Officer',
    summary: '20+ years of experience in software architecture and AI systems. Led multiple enterprise digital transformation projects.',
    skills: ['AI/ML', 'Cloud Architecture', 'System Design', 'Leadership'],
    image: 'https://i.pravatar.cc/400?img=68'
  },
  {
    id: '2',
    name: 'Sneha Patel',
    role: 'Head of Engineering',
    summary: 'Full-stack developer and tech lead with expertise in modern web technologies. Passionate about building scalable applications.',
    skills: ['React', 'Node.js', 'AWS', 'DevOps'],
    image: 'https://i.pravatar.cc/400?img=47'
  },
  {
    id: '3',
    name: 'Rahul Mehta',
    role: 'AI/ML Lead',
    summary: 'Machine learning engineer specializing in deep learning and NLP. Published researcher with multiple patents in AI.',
    skills: ['Python', 'TensorFlow', 'NLP', 'Computer Vision'],
    image: 'https://i.pravatar.cc/400?img=12'
  },
  {
    id: '4',
    name: 'Kavita Singh',
    role: 'Product Manager',
    summary: 'Strategic product leader with a track record of launching successful digital products. Expert in agile methodologies.',
    skills: ['Product Strategy', 'Agile', 'UX Design', 'Analytics'],
    image: 'https://i.pravatar.cc/400?img=45'
  },
  {
    id: '5',
    name: 'Vikram Reddy',
    role: 'Senior DevOps Engineer',
    summary: 'Infrastructure and automation specialist. Expert in cloud platforms, containerization, and CI/CD pipelines.',
    skills: ['Kubernetes', 'Docker', 'AWS', 'Terraform'],
    image: 'https://i.pravatar.cc/400?img=33'
  },
  {
    id: '6',
    name: 'Anjali Desai',
    role: 'UI/UX Designer',
    summary: 'Creative designer focused on user-centered design. Creates intuitive interfaces that enhance user experience.',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    image: 'https://i.pravatar.cc/400?img=52'
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Learning Platform',
    category: 'AI/ML',
    description: 'An intelligent learning management system that uses machine learning to personalize education content and track student progress.',
    techStack: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB', 'AWS'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80'
  },
  {
    id: '2',
    title: 'E-Commerce Marketplace',
    category: 'Web',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment integration (UPI, Razorpay), and advanced search capabilities for Indian marketplaces.',
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Razorpay', 'Redis'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80'
  },
  {
    id: '3',
    title: 'IoT Smart Home System',
    category: 'IoT',
    description: 'Comprehensive IoT solution for smart home automation with mobile app control, voice integration (Hindi/English), and energy monitoring for Indian households.',
    techStack: ['React Native', 'MQTT', 'Node.js', 'MongoDB', 'AWS IoT', 'Raspberry Pi'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
  },
  {
    id: '4',
    title: 'VLSI Chip Design Suite',
    category: 'VLSI',
    description: 'Advanced VLSI design tools for chip verification and simulation. Includes UVM testbenches and RTL design capabilities.',
    techStack: ['Verilog', 'SystemVerilog', 'UVM', 'Python', 'Cadence', 'Synopsys'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
  },
  {
    id: '5',
    title: 'Predictive Analytics Dashboard',
    category: 'Data Science',
    description: 'Business intelligence platform with predictive analytics, real-time dashboards, and automated reporting for data-driven decisions. Built for Indian enterprises and startups.',
    techStack: ['Python', 'Pandas', 'React', 'D3.js', 'PostgreSQL', 'Apache Spark'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  },
  {
    id: '6',
    title: 'Cloud Migration Platform',
    category: 'Web',
    description: 'Enterprise cloud migration tool that automates the process of moving applications and data to AWS with minimal downtime. Designed for Indian businesses transitioning to cloud infrastructure.',
    techStack: ['React', 'Python', 'AWS', 'Docker', 'Kubernetes', 'Terraform'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
  }
];

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Hybrid',
    description: 'We are looking for an experienced full-stack developer to join our engineering team in Bangalore. Work with cutting-edge technologies and help build scalable web applications for Indian and global markets.'
  },
  {
    id: '2',
    title: 'AI/ML Engineer',
    department: 'AI Research',
    type: 'Full-time',
    location: 'Remote',
    description: 'Join our AI team to build cutting-edge machine learning solutions. Work from anywhere in India and contribute to innovative AI projects serving Indian businesses and beyond.'
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    type: 'Full-time',
    location: 'On-site',
    description: 'Help us scale our infrastructure and improve our deployment processes at our Mumbai office. Work with cloud technologies and modern DevOps practices in a fast-paced environment.'
  },
  {
    id: '4',
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Part-time',
    location: 'Remote',
    description: 'Create beautiful and intuitive user interfaces for our products. Flexible remote work from anywhere in India. Design experiences that resonate with Indian users and global audiences.'
  }
];

export const mockInternships: InternshipTrack[] = [
  {
    id: '1',
    title: 'Full Stack Web Development',
    duration: '8 Weeks',
    mode: 'Online',
    skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML/CSS'],
    description: 'Comprehensive program covering frontend and backend development with modern web technologies.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    overview: 'This comprehensive internship program is designed to transform you into a full-stack web developer capable of building modern, scalable applications. You\'ll work with cutting-edge technologies including React for frontend development, Node.js for backend services, MongoDB for database management, and Tailwind CSS for responsive design.',
    programFlow: [
      'Week 1-2: Foundation & Setup - Introduction to web development fundamentals, setting up development environment, Git version control, and HTML/CSS basics.',
      'Week 3-4: Frontend Development - Deep dive into React, component architecture, state management, hooks, and modern JavaScript (ES6+).',
      'Week 5-6: Backend Development - Building RESTful APIs with Node.js and Express, database design with MongoDB, authentication, and security best practices.',
      'Week 7-8: Full Stack Integration - Connecting frontend and backend, deployment strategies, testing, and building a complete capstone project.'
    ],
    whatYoullLearn: [
      'Build responsive and interactive user interfaces with React',
      'Create RESTful APIs and server-side applications with Node.js',
      'Design and implement database schemas with MongoDB',
      'Implement authentication and authorization systems',
      'Deploy applications to cloud platforms',
      'Write clean, maintainable, and scalable code'
    ],
    programStructure: [
      'Live coding sessions with industry experts',
      'Hands-on projects and assignments',
      'Code reviews and mentorship',
      'Weekly assessments and progress tracking',
      'Capstone project development',
      'Portfolio building and presentation'
    ],
    whoShouldApply: [
      'Computer Science students or graduates from Indian universities',
      'Career switchers looking to enter tech industry in India',
      'Self-taught developers seeking structured learning',
      'Anyone passionate about web development in the Indian market'
    ],
    careerOutcomes: [
      'Full Stack Developer positions',
      'Frontend Developer roles',
      'Backend Developer opportunities',
      'Software Engineer positions'
    ]
  },
  {
    id: '2',
    title: 'AI & Machine Learning',
    duration: '8 Weeks',
    mode: 'Hybrid',
    skills: ['Python', 'TensorFlow', 'Pandas', 'Scikit-Learn', 'Neural Networks', 'Deep Learning'],
    description: 'Dive deep into artificial intelligence and machine learning with hands-on projects and real-world applications.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    overview: 'Dive deep into the world of artificial intelligence and machine learning with this intensive program. You\'ll explore neural networks, predictive modeling, and data analysis using industry-standard tools like Python, TensorFlow, Pandas, and Scikit-Learn.',
    programFlow: [
      'Week 1-2: Python Fundamentals & Data Science - Python programming, NumPy, Pandas, data manipulation, and visualization techniques.',
      'Week 3-4: Machine Learning Basics - Supervised and unsupervised learning, regression, classification, clustering algorithms, and model evaluation.',
      'Week 5-6: Deep Learning - Neural networks, TensorFlow/Keras, CNNs, RNNs, and transfer learning.',
      'Week 7-8: Advanced Topics & Projects - Natural Language Processing, computer vision, model deployment, and building end-to-end ML projects.'
    ],
    whatYoullLearn: [
      'Implement machine learning algorithms from scratch',
      'Build and train neural networks using TensorFlow',
      'Perform data analysis and visualization with Pandas',
      'Create predictive models for real-world problems',
      'Apply deep learning techniques to various domains',
      'Deploy ML models to production environments'
    ],
    programStructure: [
      'Theoretical lectures on ML concepts',
      'Hands-on coding labs and exercises',
      'Real-world dataset projects',
      'Model building and optimization workshops',
      'Industry case study analysis',
      'Final ML project presentation'
    ],
    whoShouldApply: [
      'Students with strong mathematics background from Indian institutions',
      'Software developers interested in AI/ML working in India',
      'Data analysts looking to advance their skills in the Indian market',
      'Researchers exploring AI applications in Indian context'
    ],
    careerOutcomes: [
      'Machine Learning Engineer roles',
      'Data Scientist positions',
      'AI Research positions',
      'ML Consultant opportunities'
    ]
  },
  {
    id: '3',
    title: 'VLSI Design & Verification',
    duration: '12 Weeks',
    mode: 'Offline',
    skills: ['Verilog', 'SystemVerilog', 'UVM', 'RTL Design', 'EDA Tools', 'Digital Design'],
    description: 'Master chip design and verification methodologies with hands-on experience in VLSI design tools.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    overview: 'Master the art of chip design and verification methodologies in this comprehensive VLSI program. You\'ll learn to design digital circuits using Verilog and SystemVerilog, implement verification strategies with UVM.',
    programFlow: [
      'Month 1: Digital Design Fundamentals - Boolean algebra, combinational and sequential logic, Verilog HDL basics, and RTL coding practices.',
      'Month 2: Advanced RTL Design - Complex digital systems, state machines, memory interfaces, and design optimization techniques.',
      'Month 3: Verification & SystemVerilog - SystemVerilog language, UVM framework, testbench development, coverage analysis, and debugging methodologies.'
    ],
    whatYoullLearn: [
      'Design digital circuits using Verilog and SystemVerilog',
      'Implement RTL designs for ASICs and FPGAs',
      'Create comprehensive verification testbenches using UVM',
      'Apply verification methodologies and best practices',
      'Use industry-standard EDA tools',
      'Understand timing analysis and synthesis'
    ],
    programStructure: [
      'Theory sessions on VLSI concepts',
      'Hands-on lab exercises with EDA tools',
      'Design projects at increasing complexity',
      'Verification challenges and assignments',
      'Code reviews and design discussions',
      'Final project: Complete chip design and verification'
    ],
    whoShouldApply: [
      'Electronics/ECE engineering students from Indian colleges',
      'Graduates interested in semiconductor industry in India',
      'Hardware engineers looking to specialize in VLSI design',
      'Anyone interested in chip design and verification in Indian context'
    ],
    careerOutcomes: [
      'VLSI Design Engineer positions',
      'Verification Engineer roles',
      'ASIC Design Engineer opportunities',
      'FPGA Engineer positions'
    ]
  },
  {
    id: '4',
    title: 'AutoCAD & Mechanical Design',
    duration: '4 Weeks',
    mode: 'Offline',
    skills: ['AutoCAD', 'CATIA', 'ANSYS', '3D Modeling', 'FEA', 'Technical Drawing'],
    description: 'Industrial-standard training in mechanical design, CAD modeling, and finite element analysis.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    overview: 'Gain industrial-standard training in mechanical design and simulations with this intensive program. You\'ll master AutoCAD for 2D drafting, CATIA for 3D modeling, ANSYS for finite element analysis.',
    programFlow: [
      'Week 1: AutoCAD Fundamentals - 2D drafting, dimensioning, layers, blocks, and technical drawing standards.',
      'Week 2: 3D Modeling with CATIA - Part design, assembly modeling, surface design, and engineering drawings.',
      'Week 3: Advanced CAD Techniques - Parametric modeling, design automation, sheet metal design, and rendering.',
      'Week 4: Simulation & Analysis - Finite Element Analysis with ANSYS, stress analysis, thermal analysis, and optimization.'
    ],
    whatYoullLearn: [
      'Create professional 2D technical drawings with AutoCAD',
      'Design complex 3D models using CATIA',
      'Perform structural and thermal analysis with ANSYS',
      'Apply engineering design principles and standards',
      'Create assembly models and engineering drawings',
      'Optimize designs for manufacturing'
    ],
    programStructure: [
      'Hands-on CAD software training',
      'Design projects and assignments',
      'Simulation workshops and labs',
      'Industry case studies',
      'Portfolio development',
      'Final design project presentation'
    ],
    whoShouldApply: [
      'Mechanical engineering students from Indian institutions',
      'Design engineers seeking skill enhancement in Indian industries',
      'Drafters looking to upgrade to 3D modeling',
      'Manufacturing professionals working in Indian companies'
    ],
    careerOutcomes: [
      'Mechanical Design Engineer roles',
      'CAD Designer positions',
      'Product Design Engineer opportunities',
      'Simulation Engineer positions'
    ]
  }
];

export const mockTrainingPrograms: TrainingProgram[] = [
  {
    id: '1',
    title: 'Institutional Training Programs',
    category: 'Institutional',
    description: 'Comprehensive training programs designed for Indian educational institutions to upskill students in cutting-edge technologies.',
    features: [
      'Customized curriculum for colleges',
      'Industry-aligned course content',
      'Hands-on project-based learning',
      'Certification upon completion',
      'Placement assistance',
      'Expert faculty and mentorship'
    ]
  },
  {
    id: '2',
    title: 'Corporate Training Solutions',
    category: 'Corporate',
    description: 'Professional development programs for Indian organizations to enhance their team\'s technical capabilities and stay competitive in the market.',
    features: [
      'Tailored training for your team',
      'Flexible scheduling options',
      'On-site or online delivery',
      'Real-world case studies',
      'Post-training support',
      'ROI-focused learning outcomes'
    ]
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Education',
    excerpt: 'Exploring how artificial intelligence is transforming the education sector and creating personalized learning experiences.',
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is revolutionizing education by providing personalized learning experiences, automating administrative tasks, and enabling data-driven insights into student performance.</p>
      
      <h2>Personalized Learning</h2>
      <p>AI-powered platforms can adapt to individual learning styles, pace, and preferences, creating customized educational paths for each student.</p>
      
      <h2>Automated Assessment</h2>
      <p>Machine learning algorithms can grade assignments, provide instant feedback, and identify areas where students need additional support.</p>
      
      <h2>Conclusion</h2>
      <p>The integration of AI in education promises to make learning more accessible, efficient, and effective for students across India and beyond.</p>
    `,
    author: 'Dr. Anil Kumar',
    date: 'March 15, 2024',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80'
  },
  {
    id: '2',
    title: 'Building Scalable Web Applications',
    excerpt: 'Best practices for developing web applications that can handle millions of users and scale seamlessly.',
    content: `
      <h2>Introduction</h2>
      <p>Scalability is crucial for modern web applications. This article explores key strategies and technologies for building applications that grow with your business.</p>
      
      <h2>Architecture Patterns</h2>
      <p>Microservices, serverless architecture, and containerization are essential patterns for building scalable systems.</p>
      
      <h2>Database Optimization</h2>
      <p>Choosing the right database, implementing caching strategies, and optimizing queries are critical for performance.</p>
      
      <h2>Conclusion</h2>
      <p>Building scalable applications requires careful planning, the right technology choices, and continuous optimization. This is especially crucial for Indian startups and enterprises serving millions of users.</p>
    `,
    author: 'Sneha Patel',
    date: 'March 10, 2024',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  {
    id: '3',
    title: 'Cloud Migration Strategies',
    excerpt: 'A comprehensive guide to migrating your infrastructure to the cloud with minimal disruption and maximum benefits.',
    content: `
      <h2>Introduction</h2>
      <p>Cloud migration is a complex process that requires careful planning and execution. This guide covers essential strategies for a successful migration.</p>
      
      <h2>Assessment Phase</h2>
      <p>Before migrating, assess your current infrastructure, identify dependencies, and determine which applications are cloud-ready.</p>
      
      <h2>Migration Approaches</h2>
      <p>Lift-and-shift, re-platforming, and refactoring are common approaches, each with its own benefits and trade-offs.</p>
      
      <h2>Conclusion</h2>
      <p>A well-planned cloud migration can reduce costs, improve scalability, and enhance security for Indian organizations looking to modernize their infrastructure.</p>
    `,
    author: 'Vikram Reddy',
    date: 'March 5, 2024',
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
  },
  {
    id: '4',
    title: 'Introduction to Machine Learning',
    excerpt: 'A beginner-friendly guide to understanding machine learning concepts and getting started with your first ML project.',
    content: `
      <h2>Introduction</h2>
      <p>Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience without explicit programming.</p>
      
      <h2>Types of Learning</h2>
      <p>Supervised learning, unsupervised learning, and reinforcement learning are the three main types of machine learning approaches.</p>
      
      <h2>Getting Started</h2>
      <p>Start with Python, learn the basics of data manipulation, and work on simple projects to build your ML skills. Many Indian universities and online platforms offer excellent ML courses.</p>
      
      <h2>Conclusion</h2>
      <p>Machine learning offers exciting opportunities for solving complex problems and creating intelligent applications.</p>
    `,
    author: 'Rahul Mehta',
    date: 'February 28, 2024',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
  },
  {
    id: '5',
    title: 'Modern UI/UX Design Principles',
    excerpt: 'Key principles and trends in user interface and experience design for creating engaging digital products.',
    content: `
      <h2>Introduction</h2>
      <p>Good design is invisible - users notice it when it's missing. This article explores modern UI/UX principles that create exceptional user experiences.</p>
      
      <h2>User-Centered Design</h2>
      <p>Putting users at the center of the design process ensures products are intuitive, accessible, and enjoyable to use.</p>
      
      <h2>Design Trends</h2>
      <p>Minimalism, dark mode, micro-interactions, and accessibility are shaping modern design trends.</p>
      
      <h2>Conclusion</h2>
      <p>Great design balances aesthetics with functionality, creating products that users love to interact with. This is particularly important in the Indian market where diverse user needs and preferences must be considered.</p>
    `,
    author: 'Anjali Desai',
    date: 'February 20, 2024',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'
  },
  {
    id: '6',
    title: 'DevOps Best Practices',
    excerpt: 'Essential DevOps practices for improving software delivery speed, reliability, and collaboration between teams.',
    content: `
      <h2>Introduction</h2>
      <p>DevOps bridges the gap between development and operations, enabling faster, more reliable software delivery.</p>
      
      <h2>CI/CD Pipelines</h2>
      <p>Continuous Integration and Continuous Deployment automate testing and deployment, reducing errors and speeding up releases.</p>
      
      <h2>Infrastructure as Code</h2>
      <p>Managing infrastructure through code enables version control, reproducibility, and easier scaling.</p>
      
      <h2>Conclusion</h2>
      <p>Adopting DevOps practices transforms how teams build, deploy, and maintain software systems. Indian IT companies are increasingly adopting these practices to improve their delivery speed and quality.</p>
    `,
    author: 'Vikram Reddy',
    date: 'February 15, 2024',
    category: 'DevOps',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
  }
];

