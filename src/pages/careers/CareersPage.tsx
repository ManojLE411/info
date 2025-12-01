import React, { useState } from 'react';
import { MapPin, Briefcase, Clock, X, Upload, CheckCircle, Rocket, GraduationCap, Heart, Sparkles, ArrowRight, Users } from 'lucide-react';
import { mockJobs } from '@/data/mockData';
import type { Job } from '@/types/job.types';
import styles from './CareersPage.module.css';

const BENEFITS = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We encourage out-of-the-box thinking and rapid prototyping. Work on cutting-edge projects that shape the future.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'Access to premium courses, conferences, and mentorship programs. We invest in your professional growth.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible working hours, hybrid work models, and generous time off. Your well-being matters to us.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Sparkles,
    title: 'Growth Opportunities',
    description: 'Clear career paths, internal promotions, and the chance to work on diverse projects across industries.',
    gradient: 'from-orange-500 to-red-500'
  }
];

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const displayJobs = mockJobs || [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setSubmitted(false);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;
    
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }
    
    if (!formData.resume) {
      alert('Please upload your resume.');
      return;
    }
    
    setSubmitted(true);
    
    setTimeout(() => {
      handleCloseModal();
    }, 3000);
  };

  const getJobTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return styles.badgeFullTime;
      case 'Part-time':
        return styles.badgePartTime;
      case 'Contract':
        return styles.badgeContract;
      default:
        return styles.badgeDefault;
    }
  };

  const getLocationColor = (location: string) => {
    switch (location) {
      case 'Remote':
        return styles.badgeRemote;
      case 'Hybrid':
        return styles.badgeHybrid;
      case 'On-site':
        return styles.badgeOnSite;
      default:
        return styles.badgeDefault;
    }
  };

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Users size={16} />
            <span>Join Our Team</span>
          </div>
          <h1 className={styles.heroTitle}>
            Build Your Career with Us
          </h1>
          <p className={styles.heroDescription}>
            Join a dynamic team of innovators shaping the future of EdTech and AI. 
            Work on meaningful projects, grow your skills, and make an impact.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>25+</span>
              <span className={styles.statLabel}>Team Members</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>50+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>5+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
          </div>
        </div>
        <div className={styles.heroScrollIndicator}>
          <div className={styles.scrollDot}></div>
        </div>
      </section>

      <div className={styles.mainContent}>
        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Why Work With Us</span>
            <h2 className={styles.sectionTitle}>Perks & Benefits</h2>
            <p className={styles.sectionDescription}>
              We believe in creating an environment where you can thrive both professionally and personally.
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            {BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className={styles.benefitCard}>
                  <div className={`${styles.benefitIcon} ${styles[benefit.gradient.replace(/\s/g, '')]}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Jobs Section */}
        <section className={styles.jobsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Open Positions</span>
            <h2 className={styles.sectionTitle}>Find Your Next Role</h2>
            <p className={styles.sectionDescription}>
              Explore opportunities across engineering, design, research, and more.
            </p>
          </div>

          {displayJobs.length === 0 ? (
            <div className={styles.emptyState}>
              <Briefcase size={48} className={styles.emptyIcon} />
              <h3 className={styles.emptyTitle}>No Open Positions</h3>
              <p className={styles.emptyText}>
                We don't have any open positions at the moment, but we're always looking for talented individuals.
              </p>
              <a href="mailto:careers@imtdainfotech.com" className={styles.emptyLink}>
                Send us your resume <ArrowRight size={16} />
              </a>
            </div>
          ) : (
            <>
              <div className={styles.jobsGrid}>
                {displayJobs.map((job) => (
                  <article key={job.id} className={styles.jobCard}>
                    <div className={styles.jobHeader}>
                      <div className={styles.jobTitleSection}>
                        <h3 className={styles.jobTitle}>{job.title}</h3>
                        <p className={styles.jobDepartment}>{job.department}</p>
                      </div>
                      <button 
                        className={styles.applyButton}
                        onClick={() => handleApplyClick(job)}
                      >
                        Apply Now
                        <ArrowRight size={16} />
                      </button>
                    </div>
                    
                    {job.description && (
                      <p className={styles.jobDescription}>{job.description}</p>
                    )}
                    
                    <div className={styles.jobMeta}>
                      <div className={styles.jobMetaGroup}>
                        <span className={styles.jobMetaIcon}>
                          <Briefcase size={14} />
                        </span>
                        <span className={styles.jobMetaText}>{job.department}</span>
                      </div>
                      <div className={styles.jobMetaGroup}>
                        <span className={styles.jobMetaIcon}>
                          <Clock size={14} />
                        </span>
                        <span className={`${styles.jobBadge} ${getJobTypeColor(job.type)}`}>
                          {job.type}
                        </span>
                      </div>
                      <div className={styles.jobMetaGroup}>
                        <span className={styles.jobMetaIcon}>
                          <MapPin size={14} />
                        </span>
                        <span className={`${styles.jobBadge} ${getLocationColor(job.location)}`}>
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className={styles.footerCta}>
                <div className={styles.footerCtaContent}>
                  <h3 className={styles.footerCtaTitle}>Don't see a matching role?</h3>
                  <p className={styles.footerCtaText}>
                    We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                  </p>
                  <a href="mailto:careers@imtdainfotech.com" className={styles.footerCtaLink}>
                    careers@imtdainfotech.com
                  </a>
                </div>
              </div>
            </>
          )}
        </section>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <h2 className={styles.modalTitle}>Apply for Position</h2>
                <p className={styles.modalSubtitle}>{selectedJob.title}</p>
              </div>
              <button className={styles.modalCloseButton} onClick={handleCloseModal}>
                <X size={20} />
              </button>
            </div>

            {submitted ? (
              <div className={styles.successMessage}>
                <div className={styles.successIconWrapper}>
                  <CheckCircle className={styles.successIcon} size={64} />
                </div>
                <h3 className={styles.successTitle}>Application Received!</h3>
                <p className={styles.successText}>
                  Thank you for your interest. Our team will review your profile and get back to you within 3-5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.applicationForm}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      Full Name <span className={styles.required}>*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required 
                      className={styles.input}
                      placeholder="John Doe"
                      onChange={handleInputChange}
                      value={formData.name}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      Email Address <span className={styles.required}>*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      className={styles.input}
                      placeholder="john@example.com"
                      onChange={handleInputChange}
                      value={formData.email}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Phone Number <span className={styles.required}>*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    required 
                    className={styles.input}
                    placeholder="+1 (555) 123-4567"
                    onChange={handleInputChange}
                    value={formData.phone}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Resume/CV <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.fileUpload}>
                    <label htmlFor="resume-upload" className={styles.fileUploadLabel}>
                      <div className={styles.fileUploadContent}>
                        <Upload className={styles.fileUploadIcon} size={24} />
                        <div className={styles.fileUploadText}>
                          {formData.resume ? (
                            <>
                              <span className={styles.fileName}>{formData.resume.name}</span>
                              <span className={styles.fileSize}>
                                {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                              </span>
                            </>
                          ) : (
                            <>
                              <span className={styles.fileUploadMainText}>Click to upload or drag and drop</span>
                              <span className={styles.fileUploadHint}>PDF, DOC, DOCX (Max 5MB)</span>
                            </>
                          )}
                        </div>
                      </div>
                      <input
                        type="file"
                        id="resume-upload"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className={styles.fileInput}
                      />
                    </label>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Cover Letter <span className={styles.optional}>(Optional)</span>
                  </label>
                  <textarea 
                    name="coverLetter"
                    rows={5}
                    className={styles.textarea}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    onChange={handleInputChange}
                    value={formData.coverLetter}
                  />
                </div>

                <div className={styles.formActions}>
                  <button type="button" onClick={handleCloseModal} className={styles.cancelButton}>
                    Cancel
                  </button>
                  <button type="submit" className={styles.submitButton}>
                    Submit Application
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
