import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Briefcase, Award, GraduationCap, ArrowRight } from 'lucide-react';
import { mockTrainingPrograms } from '@/data/mockData';
import styles from './TrainingPage.module.css';

export const TrainingPage: React.FC = () => {
  const navigate = useNavigate();
  const programs = mockTrainingPrograms;

  const handleInquire = (programTitle: string, isInstitutional: boolean) => {
    const subject = isInstitutional ? 'Institutional Training Inquiry' : 'Corporate Training Partnership';
    const message = isInstitutional
      ? `I am interested in learning more about the "${programTitle}" program for my institution. Please provide more details about the curriculum, duration, and partnership opportunities.`
      : `I am interested in partnering with IMTDA Infotech for the "${programTitle}" training program for my organization. Please provide more information about corporate training solutions and partnership options.`;

    navigate('/contact', {
      state: { subject, programTitle, inquiryType: isInstitutional ? 'institutional' : 'corporate', message }
    });
  };

  const handleGeneralTrainingInquiry = () => {
    navigate('/contact', {
      state: {
        subject: 'Training Program Inquiry',
        inquiryType: 'general',
        message: 'I would like to learn more about your professional training programs. Please provide information about available programs, schedules, and enrollment options.'
      }
    });
  };

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <GraduationCap size={16} />
            <span>Professional Development</span>
          </div>
          <h1 className={styles.heroTitle}>Upskilling Programs & Training</h1>
          <p className={styles.heroDescription}>
            Build expertise in cutting-edge technologies with our comprehensive training programs. 
            Designed for institutions and corporations to transform your workforce.
          </p>
        </div>
        <div className={styles.heroScrollIndicator}>
          <div className={styles.scrollDot}></div>
        </div>
      </section>

      <div className={styles.mainContent}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Our Programs</span>
          <h2 className={styles.sectionTitle}>Training Solutions</h2>
          <p className={styles.sectionDescription}>
            Choose from our institutional or corporate training programs tailored to your needs.
          </p>
        </div>

        <div className={styles.programsGrid}>
          {programs.map(program => {
            const isInstitutional = program.category === 'Institutional';
            return (
              <article key={program.id} className={`${styles.programCard} ${isInstitutional ? styles.programCardInstitutional : styles.programCardCorporate}`}>
                <div className={`${styles.programIcon} ${isInstitutional ? styles.programIconInstitutional : styles.programIconCorporate}`}>
                  {isInstitutional ? <BookOpen size={28} /> : <Briefcase size={28} />}
                </div>
                <h2 className={styles.programTitle}>{program.title}</h2>
                <p className={styles.programDescription}>{program.description}</p>
                <ul className={styles.programFeatures}>
                  {program.features.map((feature, idx) => (
                    <li key={idx} className={styles.programFeature}>
                      <div className={`${styles.programFeatureDot} ${isInstitutional ? styles.programFeatureDotInstitutional : styles.programFeatureDotCorporate}`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleInquire(program.title, isInstitutional)}
                  className={`${styles.programButton} ${isInstitutional ? styles.programButtonInstitutional : styles.programButtonCorporate}`}
                >
                  {isInstitutional ? 'Inquire for College' : 'Partner With Us'}
                  <ArrowRight size={16} />
                </button>
              </article>
            );
          })}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaPattern}></div>
          <div className={styles.ctaContent}>
            <div className={styles.ctaIconWrapper}>
              <Award className={styles.ctaIcon} size={48} />
            </div>
            <h2 className={styles.ctaTitle}>Ready to Upskill Your Team?</h2>
            <p className={styles.ctaDescription}>
              Enhance your team's capabilities with our professional training programs in AI, software development, 
              cloud technologies, and more. Get in touch to discuss your training needs.
            </p>
            <button onClick={handleGeneralTrainingInquiry} className={styles.ctaButton}>
              Enquire About Training
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
