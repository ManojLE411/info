import React, { useState } from 'react';
import { Clock, MapPin, Upload, ArrowLeft, ChevronRight, CheckCircle, Target, Award } from 'lucide-react';
import { mockInternships } from '@/data/mockData';
import type { InternshipTrack } from '@/types/internship.types';
import styles from './InternshipsPage.module.css';

const getTrackDetails = (track: InternshipTrack) => {
  if (track.overview || track.programFlow || track.whatYoullLearn) {
    return {
      overview: track.overview || track.description + ' This comprehensive program provides hands-on training and real-world experience.',
      programFlow: track.programFlow || ['Week 1-2: Foundation', 'Week 3-4: Intermediate', 'Week 5-6: Advanced', 'Week 7-8: Capstone'],
      whatYoullLearn: track.whatYoullLearn || track.skills.map(skill => `Master ${skill} and apply it in real-world projects`),
      programStructure: track.programStructure || ['Interactive live sessions', 'Hands-on projects', 'Mentorship', 'Portfolio building'],
      whoShouldApply: track.whoShouldApply || ['Students and recent graduates', 'Career switchers', 'Professionals seeking skill enhancement'],
      careerOutcomes: track.careerOutcomes || ['Industry-ready skills', 'Portfolio of projects', 'Career guidance', 'Job placement support']
    };
  }
  return {
    overview: track.description + ' This comprehensive program provides hands-on training and real-world experience.',
    programFlow: ['Week 1-2: Foundation', 'Week 3-4: Intermediate', 'Week 5-6: Advanced', 'Week 7-8: Capstone'],
    whatYoullLearn: track.skills.map(skill => `Master ${skill} and apply it in real-world projects`),
    programStructure: ['Interactive live sessions', 'Hands-on projects', 'Mentorship', 'Portfolio building'],
    whoShouldApply: ['Students and recent graduates', 'Career switchers', 'Professionals seeking skill enhancement'],
    careerOutcomes: ['Industry-ready skills', 'Portfolio of projects', 'Career guidance', 'Job placement support']
  };
};

export const InternshipsPage: React.FC = () => {
  const tracks = mockInternships;
  const [selectedTrackDetail, setSelectedTrackDetail] = useState<InternshipTrack | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'course') setSelectedTrack(value);
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !selectedTrack || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    if (!formData.resume) {
      alert('Please upload your resume.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', resume: null, message: '' });
      setSelectedTrack('');
    }, 5000);
  };

  const handleViewTrack = (track: InternshipTrack) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedTrackDetail(track);
  };

  const handleBackToList = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedTrackDetail(null);
  };

  if (selectedTrackDetail) {
    const trackDetails = getTrackDetails(selectedTrackDetail);
    return (
      <div className={styles.trackDetail}>
        <div className={styles.trackDetailContent}>
          <button onClick={handleBackToList} className={styles.backButton}>
            <ArrowLeft size={20} className={styles.backIcon} /> Back to Programs
          </button>
          <div className={styles.trackHeader}>
            <h1 className={styles.trackTitle}>{selectedTrackDetail.title}</h1>
            <div className={styles.trackMeta}>
              <span className={styles.trackMetaItem}><Clock size={16} /> {selectedTrackDetail.duration}</span>
              <span className={styles.trackMetaItem}><MapPin size={16} /> {selectedTrackDetail.mode}</span>
            </div>
          </div>
          <div className={styles.trackDetailImage}>
            <img src={selectedTrackDetail.image} alt={selectedTrackDetail.title} />
          </div>
          <div className={styles.trackContent}>
            <section className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>Program Overview</h2>
              <p className={styles.trackDescription}>{trackDetails.overview}</p>
            </section>
            <section className={styles.contentSection}>
              <h2 className={styles.sectionTitle}><Target size={20} className={styles.sectionIcon} /> Program Flow</h2>
              <div className={styles.flowList}>
                {trackDetails.programFlow.map((flow, index) => (
                  <div key={index} className={styles.flowItem}>
                    <div className={styles.flowNumber}>{index + 1}</div>
                    <div className={styles.flowContent}><p>{flow}</p></div>
                  </div>
                ))}
              </div>
            </section>
            <section className={styles.contentSection}>
              <h2 className={styles.sectionTitle}><Award size={20} className={styles.sectionIcon} /> What You'll Learn</h2>
              <div className={styles.learnList}>
                {trackDetails.whatYoullLearn.map((item, index) => (
                  <div key={index} className={styles.learnItem}>
                    <CheckCircle size={18} className={styles.checkIcon} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
            <section className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>Key Technologies</h2>
              <div className={styles.trackSkills}>
                {selectedTrackDetail.skills.map(skill => (
                  <span key={skill} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Industry-Ready Internships</h1>
          <p className={styles.subtitle}>Learn by doing. Join our rigorous training programs and work on live projects.</p>
        </div>

        <div className={styles.tracksGrid}>
          {tracks.map(track => (
            <div key={track.id} className={styles.trackCard} onClick={() => handleViewTrack(track)}>
              <div className={styles.trackImageContainer}>
                <img src={track.image || `https://picsum.photos/400/200?random=${track.id}`} alt={track.title} className={styles.trackImage} />
                <div className={styles.trackImageOverlay}></div>
              </div>
              <div className={styles.trackContent}>
                <div>
                  <div className={styles.trackHeader}>
                    <h3 className={styles.trackTitle}>{track.title}</h3>
                  </div>
                  <p className={styles.trackDescription}>{track.description}</p>
                  <div className={styles.trackSkills}>
                    {track.skills.map(skill => (
                      <span key={skill} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.trackMeta}>
                  <span className={styles.trackMetaItem}><Clock size={14} /> {track.duration}</span>
                  <span className={styles.trackMetaItem}><MapPin size={14} /> {track.mode}</span>
                </div>
                <div className={styles.trackCardFooter}>
                  View Details <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="apply" className={styles.applicationForm}>
          <h2 className={styles.formTitle}>Apply Now</h2>
          {submitted ? (
            <div className={styles.successMessage}>
              <h3>Application Received!</h3>
              <p>Our team will review your profile and get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name</label>
                  <input type="text" name="name" required className={styles.input} placeholder="John Doe" onChange={handleInputChange} value={formData.name} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input type="email" name="email" required className={styles.input} placeholder="john@example.com" onChange={handleInputChange} value={formData.email} />
                </div>
              </div>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input type="tel" name="phone" required className={styles.input} placeholder="+91 98765 43210" onChange={handleInputChange} value={formData.phone} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Interested Track</label>
                  <select name="course" value={selectedTrack} onChange={handleInputChange} className={styles.select} required>
                    <option value="">Select a Program</option>
                    {tracks.map(t => <option key={t.id} value={t.title}>{t.title}</option>)}
                  </select>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Upload Resume (PDF)</label>
                <div className={styles.fileUpload}>
                  <label htmlFor="file-upload" className={styles.fileUploadLabel}>
                    <div className={styles.fileUploadContent}>
                      <Upload className={styles.fileUploadIcon} />
                      <span className={styles.fileUploadText}>
                        {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                      </span>
                      <span className={styles.fileUploadHint}>PDF up to 5MB</span>
                    </div>
                    <input
                      type="file"
                      id="file-upload"
                      name="file-upload"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className={styles.fileInput}
                    />
                  </label>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Message / Queries</label>
                <textarea name="message" rows={3} className={styles.textarea} placeholder="Why do you want to join this program?" onChange={handleInputChange} value={formData.message}></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Submit Application</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

